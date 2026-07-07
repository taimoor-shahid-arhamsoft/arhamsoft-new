"use client";
import { useCallback, useEffect, useState } from "react";
import { Col, Form, Row, Image, Button } from "react-bootstrap";
import IntlTelInput from "react-intl-tel-input";
import { Images } from "@/assets/assets";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  allowedJobApplicationFileTypes,
  allowedResumeTypes,
  countryDropdownConfig,
  emailRegex,
  fileSizeLimit,
  tokenRefreshTime,
} from "@/config";
import { toast } from "react-toastify";
import { careers } from "@/app/helper/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "react-intl-tel-input/dist/main.css";

const { defaultCountry, preferredCountries, separateDialCode } =
  countryDropdownConfig;

export default function JobListingModal({ setActiveModalId }) {
  const [dialCode, setDialCode] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [inputKey, setInputKey] = useState(0);
  const [resumeFileName, setResumeFileName] = useState("Upload Resume");
  const [coverLetterFileName, setCoverLetterFileName] =
    useState("Add Cover Letter");
  const [token, setToken] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    coverLetter: null,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const isValid = /^[0-9]*\.?[0-9]*$/.test(value);

    if (name === "experience" && !isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        experience: "Only numbers are allowed",
      }));
    } else {
      const sanitizedValue = value.trimStart();
      setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  const handlePhoneChange = (isValid, value, countryData) => {
    setFormData((prevData) => ({ ...prevData, phone: value }));
    setDialCode(countryData.dialCode);
    setIsPhoneValid(isValid);
    setErrors((prevErrors) => ({ ...prevErrors, phone: null }));
  };

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return;
    setRecaptchaLoading(true);

    const token = await executeRecaptcha("carrers_form_submitted");
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

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    const isValidType = file && allowedResumeTypes.includes(file.type);
    const isSizeValid = file && file.size <= fileSizeLimit;
    if (isValidType && isSizeValid) {
      setFormData((prevData) => ({ ...prevData, [field]: file }));
      if (field === "resume") {
        setResumeFileName(file.name);
        setErrors((prevErrors) => ({
          ...prevErrors,
          resume: null,
        }));
      }
      if (field === "coverLetter") {
        setCoverLetterFileName(file.name);
        setErrors((prevErrors) => ({
          ...prevErrors,
          coverLetter: null,
        }));
      }

      setErrors((prevErrors) => ({ ...prevErrors, fileUpload: null }));
    } else {
      if (field === "resume") setResumeFileName("Upload Resume");
      if (field === "coverLetter") setCoverLetterFileName("Add Cover Letter");
      setFormData((prevData) => ({ ...prevData, [field]: null }));
      const errorMessage = !isValidType
        ? `Only ${allowedJobApplicationFileTypes} files are supported.`
        : `File size exceeds the limit of ${fileSizeLimit / (1024 * 1024)} MB.`;
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: errorMessage,
      }));
    }
    e.target.value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.phone || !isPhoneValid)
      newErrors.phone = "Valid phone number is required";
    if (!formData.coverLetter && !formData.resume)
      newErrors.fileUpload =
        "Please upload at least one document—either your resume or cover letter is required for submission.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    if (!navigator.onLine) {
      toast.error(
        "Form submission failed due to a lack of internet connectivity"
      );
      return;
    }

    const fd = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        if (key === "phone") {
          value = `+${dialCode} ${value}`;
        }
        fd.append(key, value);
      }
    });
    fd.append("reCaptcha", token);
    fd.append("requestFrom", window.location.href);

    setIsLoading(true);
    try {
      await careers(fd);
      toast.success("Application submitted successfully!", {
        autoClose: 15000,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "",
        resume: null,
        coverLetter: null,
      });
      setResumeFileName("Upload Resume");
      setCoverLetterFileName("Add Cover Letter");
      setActiveModalId(null);
      setInputKey((prevKey) => prevKey + 1);
      setErrors({});
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
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setActiveModalId(null);
  };

  return (
    <div className="job-listing-modal-wrapper contact-us">
      <div className="job-listing-modal">
        <Button className="close-button" onClick={handleCloseModal}>
          <FontAwesomeIcon icon={faXmark} />
        </Button>
        <div className="job-listing-heading-area text-center">
          <span>Submit</span>
          <h2>Your Application</h2>
        </div>
        <Form
          onSubmit={handleSubmit}
          className="job-listing-modal-form contact-form"
        >
          <Row>
            <Col sm="6" lg="6" className="mb-4">
              <Form.Control
                type="text"
                placeholder="First Name *"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Col>
            <Col sm="6" lg="6" className="mb-4">
              <Form.Control
                type="text"
                placeholder="Last Name *"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Col>
            <Col sm="6" lg="4" className="mb-4">
              <Form.Control
                type="email"
                placeholder="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Col>
            <Col sm="6" lg="4" className="mb-4">
              <IntlTelInput
                key={inputKey}
                containerClassName="intl-tel-input"
                inputClassName={`form-control ${errors.phone ? "is-invalid" : ""}`}
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
              {errors && <div className="text-danger">{errors.phone}</div>}
            </Col>
            <Col lg="4" className="mb-4">
              <Form.Control
                type="text"
                placeholder="Experience (in years) *"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
              {errors && <div className="text-danger">{errors.experience}</div>}
            </Col>
          </Row>
          <div className="listing-uploaded-area">
            <h4>Supporting Documents and URLs *</h4>
            <Row>
              <Col sm="6" className="mb-sm-0 mb-4">
                <div className="uploaded-files-box d-flex align-items-center justify-content-center position-relative">
                  <div className="uploaded-icon">
                    <Image
                      src={Images.JobsListingResumeIcon}
                      className="img-fluid"
                      width="auto"
                      height="auto"
                    />
                  </div>
                  <input
                    type="file"
                    className="file-input"
                    onChange={(e) => handleFileChange(e, "resume")}
                  />
                  <p className="mb-0">{resumeFileName}</p>
                </div>
                {errors.resume && (
                  <div className="text-danger">{errors.resume}</div>
                )}
              </Col>
              <Col sm="6">
                <div className="uploaded-files-box d-flex align-items-center justify-content-center position-relative">
                  <div className="uploaded-icon">
                    <Image
                      src={Images.JobsListingCoverLetterIcon}
                      className="img-fluid"
                    />
                  </div>
                  <input
                    type="file"
                    className="file-input"
                    onChange={(e) => handleFileChange(e, "coverLetter")}
                  />
                  <p className="mb-0">{coverLetterFileName}</p>
                </div>
                {errors.coverLetter && (
                  <div className="text-danger">{errors.coverLetter}</div>
                )}
              </Col>
              <p className="note-alert mt-3 mb-0 w-100">
                <span className="fw-bold">Note:</span>{" "}
                <small>Only {allowedJobApplicationFileTypes}</small> files are
                supported.
              </p>
              {errors.fileUpload && (
                <Col lg={12}>
                  <div className="text-danger">{errors.fileUpload}</div>
                </Col>
              )}
            </Row>
          </div>
          <div className="text-end">
            <Button
              className="btn-submit form-disabled-btn"
              type="submit"
              disabled={recaptchaLoading || isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}