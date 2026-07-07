"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { Images } from "@/assets/assets";
import "@/styles/HireDedicatedResource/ExpertQuoteBlock.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hireDedicatedForm } from "@/app/helper/api";
import { allowedTypes } from "@/app/utils/file-types";
import {
  allowedFileTypes,
  emailRegex,
  fileSizeLimit,
  countryDropdownConfig,
  tokenRefreshTime,
} from "@/config";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const { defaultCountry, preferredCountries, separateDialCode } =
  countryDropdownConfig;

export default function ExpertQuoteBlock(props) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [inputKey, setInputKey] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requiredExperts: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [dialCode, setDialCode] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);
  const [token, setToken] = useState(null);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return;
    setRecaptchaLoading(true);

    const token = await executeRecaptcha("expert_form_submitted");
    setToken(token);
    setRecaptchaLoading(false);
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();

    const interval = setInterval(() => {
      handleReCaptchaVerify();
    }, tokenRefreshTime);

    const handleNetworkChange = () => {
      if (navigator.onLine) {
        setRecaptchaLoading(true);
        handleReCaptchaVerify().finally(() => setRecaptchaLoading(false));
      }
    };

    window.addEventListener("online", handleNetworkChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener("online", handleNetworkChange);
    };
  }, [handleReCaptchaVerify]);

  const handlePhoneChange = (isValid, value, countryData) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));

    setDialCode(countryData.dialCode);
    setIsPhoneValid(isValid);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === "phone") {
      sanitizedValue = value.replace(/\D/g, "");
    } else if (name === "requiredExperts") {
      if (/[^0-9]/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Only numbers are allowed",
        }));
        return;
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      }
      sanitizedValue = value.replace(/[^0-9]/g, "");
    } else if (name === "name") {
      sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, "");
      sanitizedValue = sanitizedValue.trimStart();
    } else {
      sanitizedValue = value.replace(/^\s+$/, "").trimStart();
    }

    setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const isValidType =
        allowedTypes.includes(selectedFile.type) ||
        selectedFile.name.toLowerCase().endsWith(".zip");

      if (isValidType && selectedFile.size <= fileSizeLimit) {
        setErrors((prevErrors) => ({ ...prevErrors, file: null }));
        setFile(selectedFile);
      } else if (selectedFile.size > fileSizeLimit) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: "File size exceeds. Please upload a smaller file",
        }));
        setFile(null);
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: `Invalid file type. Please upload a ${allowedFileTypes} file`,
        }));
        setFile(null);
      }
    } else {
      setFile(null);
    }

    e.target.value = null;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone || !isPhoneValid) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.requiredExperts)
      newErrors.requiredExperts = "Required experts are required";
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formDataToSubmit = new FormData();

      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("phone", "+" + dialCode + " " + formData.phone);
      formDataToSubmit.append("requiredExperts", formData.requiredExperts);
      formDataToSubmit.append("message", formData.message);
      formDataToSubmit.append("requestFrom", window.location.href);
      formDataToSubmit.append("reCaptcha", token);

      if (file) {
        formDataToSubmit.append("file", file);
      }

      handleReCaptchaVerify();
      if (!navigator.onLine) {
        toast.error(
          "Form submission failed due to a lack of internet connectivity"
        );
        return;
      }

      try {
        setLoading(true);
        const response = await hireDedicatedForm(formDataToSubmit);
        if (response?.success) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            requiredExperts: "",
            message: "",
          });
          setFile(null);
          toast.success(
            "Thank you for reaching out to us. We have received your email, and one of our representatives will respond to you at the earliest opportunity.",
            {
              autoClose: 15000,
              pauseOnFocusLoss: false,
              closeOnClick: true,
            }
          );
          setInputKey((prevKey) => prevKey + 1);
        }
      } catch (error) {
        if (error.recaptchaError) {
          toast.error(error.recaptchaError);
        }
        else {
          toast.error("An error occurred. Please try again", {
            pauseOnFocusLoss: false,
            closeOnClick: true,
          });
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="expert-quote-block text-white">
        <Container fluid>
          <Row>
            <Col
              lg={6}
              className="px-0 d-flex justify-content-center justify-content-lg-end position-relative"
            >
              <div className="bg-image">
                <Image
                  width="1070"
                  height="490"
                  className="img-fluid"
                  src={Images.bgConnected}
                  priority={false}
                  alt="footer-curve"
                />
              </div>
              <div className="expert-block position-relative">
                {props.title}
                <ul className="expertise-points list-unstyled">
                  {props?.expertise.map((expertise, index) => (
                    <li key={index} className="position-relative">
                      <span
                        dangerouslySetInnerHTML={{ __html: expertise.text }}
                      ></span>
                    </li>
                  ))}
                </ul>
                {props.secondTitle}
                <ul className="hiring-steps list-unstyled mb-0 d-flex flex-wrap justify-content-center position-relative">
                  {props.steps.map((step, index) => (
                    <li key={index} className={step.colorClass}>
                      <div className="step-content d-flex flex-column align-items-center text-center position-relative">
                        <span className="counter">{step.number}</span>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col
              lg={6}
              className="px-0 d-flex justify-content-center justify-content-lg-start"
              id="contact-us"
            >
              <div className="quote-block position-relative">
                <strong className="sub-heading">{props.subHeading}</strong>
                <h2>
                  Hire Dedicated <span>{props.hireHeading}</span>
                </h2>
                <Form className="contact-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <div className="form-space question-holder position-relative z-3">
                        <Form.Control
                          type="text"
                          placeholder={formData.name ? "" : "Name *"}
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) =>
                          (e.target.placeholder = formData.name
                            ? ""
                            : "Name *")
                          }
                        />
                        {errors.name && (
                          <div className="position-absolute error-position">
                            <div className="text-danger">{errors.name}</div>
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-space question-holder position-relative z-3">
                        <Form.Control
                          type="email"
                          placeholder={formData.email ? "" : "Email *"}
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) =>
                          (e.target.placeholder = formData.email
                            ? ""
                            : "Email *")
                          }
                        />
                        {errors.email && (
                          <div className="position-absolute error-position">
                            <div className="text-danger">{errors.email}</div>
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <div className="form-space question-holder position-relative">
                        <div className="phone-holder d-flex align-items-center">
                          <IntlTelInput
                            key={inputKey}
                            containerClassName="intl-tel-input"
                            inputClassName={`form-control ${errors.phone ? "is-invalid" : ""
                              }`}
                            preferredCountries={preferredCountries}
                            onPhoneNumberChange={handlePhoneChange}
                            onSelectFlag={(currentNumber, selectedCountryData, fullNumber, isValid) => {
                              setIsPhoneValid(isValid);
                              setDialCode(selectedCountryData.dialCode);
                            }}
                            defaultCountry={defaultCountry}
                            separateDialCode={separateDialCode}
                            fieldId="phone-input"
                            fieldName="phone"
                            value={formData.phone}
                          />
                        </div>
                        {errors.phone && (
                          <div className="position-absolute error-position">
                            <small className="text-danger">
                              {errors.phone}
                            </small>
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="form-space question-holder position-relative z-3">
                        <Form.Control
                          type="text"
                          placeholder={
                            formData.requiredExperts
                              ? ""
                              : "No. of experts required *"
                          }
                          name="requiredExperts"
                          value={formData.requiredExperts}
                          onChange={handleInputChange}
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) =>
                          (e.target.placeholder = formData.requiredExperts
                            ? ""
                            : "Required experts *")
                          }
                        />
                        {errors.requiredExperts && (
                          <div className="position-absolute error-position">
                            <div className="text-danger">
                              {errors.requiredExperts}
                            </div>
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="form-space question-holder position-relative z-3">
                        <div className="input-file-holder position-relative d-flex align-items-center">
                          <span className="file-name">
                            {file ? file.name : "No file chosen"}
                          </span>
                          <Form.Control
                            type="file"
                            className="d-none"
                            id="file-upload"
                            onChange={handleFileChange}
                          />
                          <label
                            htmlFor="file-upload"
                            className="input-file-btn d-flex justify-content-center align-items-center"
                          >
                            Choose File
                          </label>
                        </div>
                        {errors.file && (
                          <div className="position-absolute error-position">
                            <div className="text-danger">{errors.file}</div>
                          </div>
                        )}
                        <p
                          className={`note-alert mt-4 mb-0 ${errors.file ? "upper-space" : ""}`}
                        >
                          <span className="fw-bold">Note:</span>{" "}
                          <small>Only {allowedFileTypes}</small> files are
                          supported.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="form-space question-holder position-relative z-3">
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder={formData.message ? "" : "Message *"}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) =>
                          (e.target.placeholder = formData.message
                            ? ""
                            : "Message *")
                          }
                        />
                        {errors.message && (
                          <div className="position-absolute error-position">
                            <div className="text-danger">{errors.message}</div>
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col sm={12}>
                      <div className="d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn btn-solid-white form-disabled-btn"
                          disabled={recaptchaLoading || loading}
                        >
                          {loading ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
