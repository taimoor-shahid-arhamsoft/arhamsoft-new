"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Select from "react-select";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { toast } from "react-toastify";
import { Animations, Images } from "@/assets/assets";
import Image from "next/image";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import IntlTelInput from "react-intl-tel-input";
import { getInTouchContactUsForm } from "@/app/helper/api";
import { allowedTypes } from "@/app/utils/file-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  allowedFileTypes,
  countryDropdownConfig,
  emailRegex,
  fileSizeLimit,
  companyEmailId,
  companySalesEmailId,
  copmanySupportEmailId,
  companyHrEmailId,
  companySkypeId,
  companySalesNumber,
  companyContactNumberOne,
  companyContactNumberTwo,
  tokenRefreshTime,
  socialLinks,
} from "@/config";
import { useParams } from "next/navigation";
import "react-intl-tel-input/dist/main.css";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/PrivacyPolicy.css";
import "@/styles/ContactUs.css";
import FullpageLoader from "@/components/Shared/FullPageLoader/FullPageLoader";

const { wa } = socialLinks;
const { defaultCountry, preferredCountries, separateDialCode } =
  countryDropdownConfig;

export default function Page() {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const inquiryRef = useRef();
  const locationRef = useRef();
  const messageRef = useRef();
  const commentsRef = useRef();
  const [dialCode, setDialCode] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = useState(null);
  const [inputKey, setInputKey] = useState(0);
  const params = useParams();
  const bannerHeading = (
    <h1>
      Instant Assistance,<span className="d-block">Always At Your Service</span>
    </h1>
  );
  const bannerText = <p>We&apos;re just a tap away.</p>;
  const newErrors = {};
  const options = [
    { value: "0", label: "General Inquiry" },
    { value: "1", label: "Staff Augmentation" },
    { value: "2", label: "Dedicated Teams" },
    { value: "3", label: "Fixed Project" },
    { value: "4", label: "Career Opportunity" },
  ];

  const interests = [
    {
      label: "Web Development",
      animationData: Animations.interested01,
      className: "multy",
    },
    {
      label: "Mobile Development",
      animationData: Animations.interested02,
      className: "dark-blue",
    },
    {
      label: "Custom Solution",
      animationData: Animations.interested03,
      className: "dark-green",
    },
    {
      label: "Other",
      animationData: Animations.interested04,
      className: "sky-blue",
    },
  ];

  const optionsheading = [
    "Immediately",
    "This Month",
    "Near Future",
    "Not Sure",
  ];
  const [fileName, setFileName] = useState("No File Chosen");
  const [loading, setLoading] = useState(false);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return;
    setLoading(true);

    const token = await executeRecaptcha("form_submitted");
    setToken(token);
    setLoading(false);
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();

    const interval = setInterval(() => {
      handleReCaptchaVerify();
    }, tokenRefreshTime);

    const handleNetworkChange = () => {
      if (navigator.onLine) {
        setLoading(true);
        handleReCaptchaVerify().finally(() => setLoading(false));
      }
    };

    window.addEventListener("online", handleNetworkChange);

    return () => {
      clearInterval(interval);
      window.removeEventListener("online", handleNetworkChange);
    };
  }, [handleReCaptchaVerify]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const isValidType =
        allowedTypes.includes(file.type) ||
        file.name.toLowerCase().endsWith(".zip");

      if (isValidType && file.size <= fileSizeLimit) {
        setErrors((prevErrors) => ({ ...prevErrors, file: null }));
        setFileName(file.name);
        setFormData({
          ...formData,
          file: file,
        });
      } else if (file.size > fileSizeLimit) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: "File size exceeds. Please upload a smaller file",
        }));
        setFileName("No File Chosen");
        setFormData({
          ...formData,
          file: null,
        });
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          file: `Invalid file type. Please upload a ${allowedFileTypes} file`,
        }));
        setFileName("No File Chosen");
        setFormData({
          ...formData,
          file: null,
        });
      }
    } else {
      setFileName("No File Chosen");
      setFormData({
        ...formData,
        file: null,
      });
    }
    event.target.value = null;
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
    interests: [],
    idealStartDate: "",
    comments: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === "name") {
      sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, "");
      sanitizedValue = sanitizedValue.trimStart();
    } else if (name === "requiredExperts") {
      sanitizedValue = value.replace(/[^0-9]/g, "");
    } else if (name === "phone") {
      sanitizedValue = value.replace(/\D/g, "");
    } else {
      sanitizedValue = value.replace(/^\s+$/, "").trimStart();
    }
    setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (newErrors[name]) {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  const toggleCollapse = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    if (name === "notARobot") {
      setFormData({ ...formData, [name]: checked });

      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        if (newErrors[name]) {
          delete newErrors[name];
        }
        return newErrors;
      });
    } else if (name === "interest") {
      const updatedInterests = checked
        ? [...formData.interests, e.target.value]
        : formData.interests.filter((interest) => interest !== e.target.value);

      setFormData({ ...formData, interests: updatedInterests });

      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        if (updatedInterests.length > 0) {
          delete newErrors.interests;
        }
        return newErrors;
      });
    }
  };

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

  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "How can we help? *",
  });

  const handleOptionchange = (selected) => {
    setSelectedOption(selected);
    setFormData({
      ...formData,
      inquiryType: selected ? selected.label : "",
    });

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (newErrors.inquiryType) {
        delete newErrors.inquiryType;
      }
      return newErrors;
    });
  };

  const scrollToErrorField = () => {
    if (errors.name) {
      nameRef.current.scrollIntoView({ behavior: "smooth" });
      nameRef.current.focus();
    } else if (errors.phone) {
      phoneRef.current.scrollIntoView({ behavior: "smooth" });
      phoneRef.current.focus();
    } else if (errors.email) {
      emailRef.current.scrollIntoView({ behavior: "smooth" });
      emailRef.current.focus();
    } else if (errors.inquiryType) {
      inquiryRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (errors.location) {
      locationRef.current.scrollIntoView({ behavior: "smooth" });
      locationRef.current.focus();
    } else if (errors.message) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
      messageRef.current.focus();
    } else if (errors.comments) {
      commentsRef.current.scrollIntoView({ behavior: "smooth" });
      commentsRef.current.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone || !isPhoneValid) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.inquiryType)
      newErrors.inquiryType = "Please select an option";
    if (isOpen) {
      if (!formData.comments) newErrors.comments = "Comment is required";
      if (!formData.interests.length)
        newErrors.interests = "Please select at least one interest";
      if (!formData.idealStartDate)
        newErrors.idealStartDate = "Please select your ideal start date";
    }

    handleReCaptchaVerify();
    if (Object.keys(newErrors).length > 0) {
      scrollToErrorField();
      setErrors(newErrors);
    } else {
      if (!navigator.onLine) {
        toast.error(
          "Form submission failed due to a lack of internet connectivity"
        );
        return;
      }

      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("phone", "+" + dialCode + " " + formData.phone);
      fd.append("email", formData.email);
      fd.append("inquiryType", formData.inquiryType);
      fd.append("location", formData.location);
      fd.append("comments", formData.comments);
      fd.append("message", formData.message);
      fd.append("interests", JSON.stringify(formData.interests));
      fd.append("idealStartDate", formData.idealStartDate);
      fd.append("requestFrom", window.location.href);
      if (formData.file) {
        fd.append("file", formData.file);
      }
      fd.append("reCaptcha", token);

      setIsLoading(true);
      try {
        await getInTouchContactUsForm(fd);
        toast.success(
          "Thank you for reaching out to us. We have received your email, and one of our representatives will respond to you at the earliest opportunity.",
          {
            autoClose: 15000,
            pauseOnFocusLoss: false,
            closeOnClick: true,
          }
        );
        setFormData({
          name: "",
          phone: "",
          email: "",
          location: "",
          message: "",
          comments: "",
          interests: [],
          idealStartDate: "",
          file: null,
          notARobot: false,
        });
        setSelectedOption({ value: "", label: "How can we help? *" });
        setFileName("No File Chosen");
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
    }
  };

  return (
    <>
      <div className="hdr privacy-policy contact-us">
        <PageBanner
          subHeading="Let's Connect"
          heading={bannerHeading}
          text={bannerText}
          bannerLottie={Animations.contactUsBanner}
          socialIcons={true}
        />
        <div className="quick-response" id="contact-form">
          <Container>
            <Row>
              <Col>
                <div className="section-heading d-flex justify-content-center text-center">
                  <h2>
                    Need Us?
                    <span className="d-block">Connect With Our Experts</span>
                  </h2>
                </div>
              </Col>
            </Row>
            <Form className="contact-form">
              <Row>
                <Col sm={12}>
                  <div
                    className="quick-response-input position-relative z-2"
                    ref={inquiryRef}
                  >
                    <Select
                      value={selectedOption}
                      onChange={handleOptionchange}
                      options={options}
                      instanceId="select-inquiry-type"
                      className="react-select help"
                      classNamePrefix="react-select"
                    />
                    {errors.inquiryType && (
                      <div className="text-danger">{errors.inquiryType}</div>
                    )}
                  </div>
                </Col>
                <Col lg="4">
                  <div className="quick-response-input" ref={nameRef}>
                    <InputGroup>
                      <Form.Control
                        name="name"
                        placeholder={formData.name ? "" : "Name *"}
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                          (e.target.placeholder = formData.name ? "" : "Name *")
                        }
                      />
                    </InputGroup>
                    {errors.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                  </div>
                </Col>
                <Col lg="4">
                  <div className="quick-response-input" ref={phoneRef}>
                    <Form.Group className="phone-holder position-relative">
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

                      {errors.phone && (
                        <small className="text-danger">{errors.phone}</small>
                      )}
                    </Form.Group>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="quick-response-input" ref={emailRef}>
                    <InputGroup>
                      <Form.Control
                        name="email"
                        placeholder={formData.email ? "" : "Email *"}
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                        (e.target.placeholder = formData.email
                          ? ""
                          : "Email *")
                        }
                      />
                    </InputGroup>
                    {errors.email && (
                      <div className="text-danger">{errors.email}</div>
                    )}
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="quick-response-input" ref={locationRef}>
                    <InputGroup>
                      <Form.Control
                        name="location"
                        placeholder={formData.location ? "" : "Location *"}
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        onFocus={(e) => (e.target.placeholder = "")}
                        onBlur={(e) =>
                        (e.target.placeholder = formData.location
                          ? ""
                          : "Location *")
                        }
                      />
                    </InputGroup>
                    {errors.location && (
                      <div className="text-danger">{errors.location}</div>
                    )}
                  </div>
                </Col>
                <Col sm={12}>
                  <div className="quick-response-input" ref={messageRef}>
                    <Form.Control
                      name="message"
                      as="textarea"
                      placeholder={formData.message ? "" : "Message *"}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) =>
                      (e.target.placeholder = formData.message
                        ? ""
                        : "Message *")
                      }
                    />
                    {errors.message && (
                      <div className="text-danger">{errors.message}</div>
                    )}
                  </div>
                </Col>
              </Row>
            </Form>
          </Container>
          <Container>
            <div className="add-hide-btn-holder d-flex py-3">
              <strong
                className="text-theme cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCollapse();
                }}
              >
                {isOpen ? (
                  <FontAwesomeIcon icon={faMinus} className="me-2" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                )}

                {isOpen ? "Hide project details" : "Add project details"}
              </strong>
            </div>
          </Container>
          {isOpen ? (
            <>
              <div className="interested-in">
                <Container>
                  <Row>
                    <Col>
                      <div className="section-heading d-flex justify-content-center text-center">
                        <h2>
                          <span className="d-block">
                            I&apos;M INTERESTED IN
                          </span>
                        </h2>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {interests.map((interest, index) => (
                      <Col lg="3" sm="6" key={index}>
                        <div className="interested-box">
                          <label className="label-container">
                            <input
                              className={interest.className}
                              type="checkbox"
                              name="interest"
                              value={interest.label}
                              checked={formData.interests.includes(
                                interest.label
                              )}
                              onChange={handleCheckboxChange}
                            />
                            <span className="checkmark">
                              <div className="interested-lottie">
                                <LottieAnimation
                                  animationData={interest.animationData}
                                />
                              </div>
                              <strong className="d-flex justify-content-center text-center">
                                {interest.label}
                              </strong>
                            </span>
                            <span className="white-circle"></span>
                          </label>
                        </div>
                      </Col>
                    ))}
                    {errors.interests && (
                      <div className="text-danger text-center">
                        {errors.interests}
                      </div>
                    )}
                  </Row>
                </Container>
              </div>
              <div className="ideal-data">
                <Container>
                  <Row>
                    <Col>
                      <div className="section-heading d-flex justify-content-center text-center">
                        <h2>
                          <span className="d-block">Ideal Start</span>
                        </h2>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <div className="checkbox-main">
                        <ul className="ps-0 d-flex justify-content-md-center align-items-center flex-wrap mb-0">
                          {optionsheading.map((option, index) => (
                            <li className="list-checkbox" key={index}>
                              <div className="ideal-data-checkbox">
                                <label className="container-ideal">
                                  {option}
                                  <input
                                    type="radio"
                                    name="idealStartDate"
                                    value={option}
                                    checked={formData.idealStartDate === option}
                                    onChange={handleChange}
                                  />
                                  <span className="checkmark"></span>
                                </label>
                              </div>
                            </li>
                          ))}
                        </ul>
                        {errors.idealStartDate && (
                          <div className="text-danger text-center">
                            {errors.idealStartDate}
                          </div>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      {isOpen ? (
                        <>
                          <div className="quick-response-input">
                            <Form.Control
                              name="comments"
                              as="textarea"
                              value={formData.comments}
                              onChange={handleChange}
                              placeholder="Anything else you'd like to share"
                            />
                            {errors.comments && (
                              <div className="text-danger">
                                {errors.comments}
                              </div>
                            )}
                          </div>
                          <div className="quick-response-input">
                            <div className="custom-file-upload">
                              <span className="file-name">{fileName}</span>
                              <input
                                type="file"
                                id="fileInput"
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                              />
                              <label
                                htmlFor="fileInput"
                                className="custom-file-label"
                              >
                                Choose File
                              </label>
                            </div>
                            <p className="note-alert mt-3 mb-0">
                              <span className="fw-bold">Note:</span>{" "}
                              <small>Only {allowedFileTypes}</small> files are
                              supported.
                            </p>
                            {errors.file && (
                              <div className="text-danger">{errors.file}</div>
                            )}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="btn-holder">
            <div className="ideal-data">
              <Container>
                <div className="d-flex justify-content-center justify-content-sm-between align-items-center flex-column flex-sm-row">
                  <div className="d-flex justify-content-end">
                    <input
                      className="btn btn-solid-blue form-disabled-btn"
                      type="submit"
                      value={isLoading ? "Submitting..." : "Submit"}
                      disabled={loading || isLoading}
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>

        <div className="general-inquiry">
          <Container>
            <Row>
              <Col lg={4} md={6}>
                <div className="main-general-inquiry">
                  <div className="general-inquiry-img">
                    <Image
                      width="100"
                      height="100"
                      className="img-fluid"
                      src={Images.generalInquiry01}
                      alt="Image"
                    />
                  </div>
                  <div className="general-inquiry-heading">
                    <h3 className="text-white">Quick Contact</h3>
                  </div>
                  <ul className="ps-0">
                    <li className="d-flex align-items-center">
                      <div className="me-2">
                        <Image
                          width="27"
                          height="29"
                          className="img-fluid"
                          src={Images.generalIcon01}
                          alt="Image"
                        />
                      </div>
                      <a
                        href={`tel:${companyContactNumberOne.replace(/\./g, "")}`}
                      >
                        {companyContactNumberOne}
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="me-2">
                        <Image
                          width="27"
                          height="29"
                          className="img-fluid"
                          src={Images.generalIcon01}
                          alt="Image"
                        />
                      </div>
                      <a
                        href={`tel:${companyContactNumberTwo.replace(/\./g, "")}`}
                      >
                        {companyContactNumberTwo}
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="me-2">
                        <Image
                          width="31"
                          height="30"
                          className="img-fluid"
                          src={Images.whatsappIcon01}
                          alt="Image"
                        />
                      </div>
                      <a href={wa}>
                        {companySalesNumber} (For Sales)
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="main-general-inquiry">
                  <div className="general-inquiry-img">
                    <Image
                      width="100"
                      height="100"
                      className="img-fluid"
                      src={Images.generalInquiry02}
                      alt="Image"
                    />
                  </div>
                  <div className="general-inquiry-heading">
                    <h3 className="text-white">General Inquiry</h3>
                  </div>
                  <ul className="ps-0">
                    <li className="d-flex align-items-center">
                      <a href={`mailto:${companyEmailId}`}>{companyEmailId}</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <a href={`mailto:${copmanySupportEmailId}`}>
                        {copmanySupportEmailId}
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <a href={`mailto:${companySalesEmailId}`}>
                        {companySalesEmailId}
                      </a>
                    </li>
                    <li className="d-flex align-items-center">
                      <a href={`mailto:${companyHrEmailId}`}>
                        {companyHrEmailId}
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className="main-general-inquiry">
                  <div className="general-inquiry-img">
                    <Image
                      width="100"
                      height="100"
                      className="img-fluid"
                      src={Images.generalInquiry03}
                      alt="Image"
                    />
                  </div>
                  <div className="general-inquiry-heading">
                    <h3 className="text-white">Our Location</h3>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1802853658583!2d-74.01334618465154!3d40.70545584300348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a16f9db9ad7%3A0x6547e8b3f90c74b3!2s80%20Broad%20St%2C%20New%20York%2C%20NY%2010004%2C%20USA!5e0!3m2!1sen!2s!4v1642923612347!5m2!1sen!2s"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
