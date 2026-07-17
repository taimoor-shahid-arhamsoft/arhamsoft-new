"use client";
import { useParams, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Images } from "@/assets/assets";
import Image from "next/image";
import Select from "react-select";
import * as Yup from "yup";
import { validationSchema } from "@/app/utils/contact-us-validation";
import { sendContactForm } from "@/app/helper/api";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import { countryDropdownConfig, emailRegex, tokenRefreshTime } from "@/config";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useToken } from "@/app/context/tokenContext";
import { PopupButton } from "react-calendly";
const { defaultCountry, preferredCountries, separateDialCode } =
  countryDropdownConfig;

const shareMap = [
  {
    id: 1,
    image: Images.shareOne,
    caption: "An expert reads your message and reaches out.",
    class: "green",
  },
  {
    id: 2,
    image: Images.shareTwo,
    caption: "Ask for an NDA and we'll sign one first.",
    class: "blue",
  },
  {
    id: 3,
    image: Images.shareThree,
    caption: "Receive a clear proposal with timelines and estimates.",
    class: "orange",
  },
];

const options = [
  { value: "1", label: "General Inquiry" },
  { value: "2", label: "AI Product Readiness Review" },
  { value: "3", label: "AI Beyond The Demo" },
  { value: "4", label: "Manual Work Audit" },
  { value: "5", label: "Staff Augmentation" },
  { value: "6", label: "Dedicated Teams" },
  { value: "7", label: "Fixed Project" },
  { value: "8", label: "Career Opportunity" },
];

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [inputKey, setInputKey] = useState(0);
  const { token, setToken, isTokenValid, setIsTokenValid, verifyReCaptcha } =
    useToken();
  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "How can we help? *",
  });
  const params = useParams();
  const pathname = usePathname();

  const [toggleForm, setToggleForm] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [dialCode, setDialCode] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsTokenValid(true)
  }, [pathname]);

  useEffect(() => {
    setErrors({});
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    setSelectedOption({ value: "", label: "How can we help? *" });
    setIsChecked(false);
  }, [params]);

  const highlightForm = () => {
    setToggleForm(true);
    setTimeout(() => {
      setToggleForm(false);
    }, 200);
  };

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return;
    setRecaptchaLoading(true);

    if (isTokenValid) {
      const recaptchaToken = await executeRecaptcha("submit_form");
      setToken(recaptchaToken);
      setIsTokenValid(true);
      setRecaptchaLoading(false);
    }
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    let sanitizedValue = value;

    if (name === "phone") {
      sanitizedValue = value.replace(/\D/g, "");
    } else if (name === "requiredExperts") {
      sanitizedValue = value.replace(/[^0-9]/g, "");
    } else if (name === "name") {
      sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, "");
      sanitizedValue = sanitizedValue.trimStart();
    } else {
      sanitizedValue = value.trimStart().replace(/^\s+$/, "");
    }

    setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handlePhoneChange = (isValid, value, countryData) => {
    setIsPhoneValid(isValid);
    setDialCode(countryData.dialCode);
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const validationErrors = {};

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone || !isPhoneValid) {
      validationErrors.phone = "Please enter a valid phone number";
    }

    try {
      await validationSchema.validate(
        {
          ...formData,
          selectedOption: selectedOption,
        },
        { abortEarly: false }
      );

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      if (!navigator.onLine) {
        toast.error(
          "Form submission failed due to a lack of internet connectivity"
        );
        return;
      }

      if (isTokenValid) {
        handleReCaptchaVerify();
      } else {
        if (verifyReCaptcha) {
          await verifyReCaptcha();
        }
      }

      const data = {
        subject: selectedOption.label,
        name: formData.name,
        email: formData.email,
        phone: "+" + dialCode + " " + formData.phone,
        company: formData.company,
        message: formData.message,
        ndaSigned: isChecked,
        requestFrom: window.location.href,
        reCaptcha: token,
      };

      setLoading(true);
      await sendContactForm(data);

      toast.success(
        "Thank you for reaching out to us. We have received your email, and one of our representatives will respond to you at the earliest opportunity.",
        { pauseOnFocusLoss: false, closeOnClick: true }
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setSelectedOption({ value: "", label: "How can we help? *" });
      setIsChecked(false);
      setInputKey((prevKey) => prevKey + 1);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else {
        if (error.recaptchaError) {
          toast.error(error.recaptchaError);
        }
        else {
          toast.error("An error occurred. Please try again", {
            pauseOnFocusLoss: false,
            closeOnClick: true,
          });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-area">
      <div className="bg-image">
        <Image
          width="1073"
          height="490"
          className="img-fluid"
          priority={false}
          src={Images.bgConnected}
          alt="footer-curve"
        />
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="share-section">
              <div className="heading-block position-relative pt-0 text-white">
                <h3>
                  Share <span className="d-block">About Your Project</span>
                </h3>
              </div>
              <ul>
                {shareMap.map((share, index) => {
                  return (
                    <li key={index}>
                      <div className="share-img">
                        <Image
                          src={share.image}
                          width={100}
                          height={100}
                          alt="Share List"
                          className="img-fluid"
                        />
                      </div>
                      <div className={`share-caption ${share.class}`}>
                        <p>{share.caption}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="text-lg-start text-center">
                <a
                  href="#contact-us"
                  className="btn btn-get-touch"
                  onClick={highlightForm}
                >
                  Let’s Work Together
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} id="contact-us">
            <PopupButton
              url="https://calendly.com/sajal-dataonmatrix/30min"
              rootElement={typeof document !== "undefined" ? document.body : undefined}
              prefill={{
                name: formData.name || undefined,
                email: formData.email || undefined,
              }}
              utm={{
                utmSource: "dataonmatrix-website",
                utmMedium: "contact-section",
                utmCampaign: "book-consultation",
              }}
              text=""
              className="calendly-btn"
              aria-label="Schedule a meeting on Calendly"
            />
            <div className="share-section contact-section">
              <div className="heading-block position-relative pt-0 text-white">
                <h3>
                  Discuss <span className="d-block">with Team DoM</span>
                </h3>
              </div>
              <Form
                onSubmit={handleSubmit}
                className={`contact-form position-relative ${toggleForm ? "active" : ""}`}
              >
                <Row>
                  <Col md={12}>
                    <div className="form-space question-holder position-relative z-3">
                      <Select
                        value={selectedOption}
                        onChange={(selected) => {
                          setSelectedOption(selected);
                          setErrors((prevErrors) => ({
                            ...prevErrors,
                            "selectedOption.value": "",
                            "selectedOption.label": "",
                          }));
                        }}
                        options={options}
                        className="react-select m-0"
                        classNamePrefix="react-select"
                        isInvalid={
                          !!errors["selectedOption.value"] ||
                          !!errors["selectedOption.label"]
                        }
                        instanceId="select-query-type"
                      />
                      {errors["selectedOption.value"] && (
                        <div className="position-absolute error-position">
                          <span className="text-danger">
                            {errors["selectedOption.value"]}
                          </span>
                        </div>
                      )}
                    </div>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="form-space position-relative">
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder={formData.name ? "" : "Name *"}
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          (e.target.placeholder = formData.name ? "" : "Name *")
                        }
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="position-absolute error-position"
                      >
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="form-space position-relative">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder={formData.email ? "" : "Email *"}
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                        (e.target.placeholder = formData.email
                          ? ""
                          : "Email *")
                        }
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="position-absolute error-position"
                      >
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="form-space phone-holder position-relative">
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
                      {errors && (
                        <div className="position-absolute error-position">
                          <div className="text-danger">{errors.phone}</div>
                        </div>
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="form-space position-relative ">
                      <Form.Control
                        type="text"
                        name="company"
                        placeholder={formData.company ? "" : "Company *"}
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                        (e.target.placeholder = formData.company
                          ? ""
                          : "Company *")
                        }
                        isInvalid={!!errors.company}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="position-absolute error-position"
                      >
                        {errors.company}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group
                      className={`form-space position-relative ${errors.message ? "margin-bottom" : ""}`}
                    >
                      <Form.Control
                        as="textarea"
                        name="message"
                        placeholder={formData.message ? "" : "Message *"}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                        (e.target.placeholder = formData.message
                          ? ""
                          : "Message *")
                        }
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="position-absolute error-position"
                      >
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <div className="form-footer form-footer-mobile d-flex justify-content-between">
                      <Form.Group
                        className="mb-0 py-5 py-md-4"
                        controlId="formBasicCheckbox"
                      >
                        <label className="right-label-checkbox">
                          Sign an NDA to protect data
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={(e) => {
                              setIsChecked(e.target.checked);
                            }}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </Form.Group>
                      <Button
                        className="btn-get-touch form-disabled-btn"
                        type="submit"
                        disabled={recaptchaLoading || loading}
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
