"use client";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Container, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";
import Select from "react-select";
import IntlTelInput from "react-intl-tel-input";
import { getInTouch } from "@/app/helper/api";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
  countryDropdownConfig,
  emailRegex,
  socialLinks,
  tokenRefreshTime,
} from "@/config";
import { useToken } from "@/app/context/tokenContext";
import { Animations, Images } from "@/assets/assets";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "react-toastify/dist/ReactToastify.css";
import "react-intl-tel-input/dist/main.css";
import "@/styles/HdrBanner.css";

const { wa } = socialLinks;
const { defaultCountry, preferredCountries, separateDialCode } =
  countryDropdownConfig;

export default function PageBanner(props) {
  const pathname = usePathname();
  const [selectedOption, setSelectedOption] = useState([]);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [dialCode, setDialCode] = useState("");
  const [toggleForm, setToggleForm] = useState(false);
  const { token, setToken, setIsTokenValid, setVerifyReCaptcha, isTokenValid } =
    useToken();
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [inputKey, setInputKey] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    expertCount: "",
    message: "",
  });
  const certificationLogos = [
    { image: Images.logoHDRBanner01 },
    { image: Images.logoHDRBanner02 },
  ];
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);
  const newErrors = {};

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

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return;
    setRecaptchaLoading(true);

    const recaptchaToken = await executeRecaptcha(
      "hireDedicated_form_submitted"
    );
    setIsTokenValid(false);
    setToken(recaptchaToken);
    setRecaptchaLoading(false);
  }, [executeRecaptcha, isTokenValid]);

  useEffect(() => {
    setVerifyReCaptcha(() => handleReCaptchaVerify);
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
  }, [handleReCaptchaVerify, setVerifyReCaptcha]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let sanitizedValue = value;

    if (name === "name") {
      sanitizedValue = value.replace(/[^a-zA-Z0-9\s]/g, "");
      sanitizedValue = sanitizedValue.trimStart();
    } else if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      sanitizedValue = value.replace(/\D/g, "");
    } else if (name === "expertCount") {
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
    } else {
      sanitizedValue = value.trimStart().replace(/^\s+$/, "");
    }

    setFormData((prevData) => ({ ...prevData, [name]: sanitizedValue }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSelectChange = (options) => {
    setSelectedOption(options || []);
    setErrors((prevErrors) => ({ ...prevErrors, technology: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name) {
      newErrors.name = "Name and surname are required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone || !isPhoneValid) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.expertCount)
      newErrors.expertCount = "Enter number of experts required";
    if (!selectedOption.length) newErrors.technology = "Team is required";
    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    handleReCaptchaVerify();

    if (Object.keys(newErrors).length === 0) {
      if (!navigator.onLine && Object.keys(newErrors).length === 0) {
        toast.error(
          "Form submission failed due to a lack of internet connectivity"
        );
        return;
      }
      const combinedFormData = {
        ...formData,
        phone: "+" + dialCode + " " + formData.phone,
        technology: selectedOption.map((option) => option.label),
        requestFrom: window.location.href,
        reCaptcha: token,
      };

      setLoading(true);

      try {
        const response = await getInTouch(combinedFormData);
        if (response?.success) {
          setSelectedOption([]);
          setFormData({
            name: "",
            email: "",
            phone: "",
            expertCount: "",
            message: "",
          });
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
        } else {
          toast.error("An error occurred. Please try again", {
            pauseOnFocusLoss: false,
            closeOnClick: true,
          });
        }
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const highlightForm = () => {
    setToggleForm(true);
    setTimeout(() => {
      setToggleForm(false);
    }, 200);
  };
  return (
    <>
      <section
        className={`page-banner-hdr position-relative ${pathname === "/hire-dedicated-resource" ? "" : "sub-pages"
          }`}
      >
        {props.lottieBgAnnimation && (
          <div className="lottie-holder">
            <LottieAnimation animationData={Animations.bgBannerAnimation} />
          </div>
        )}
        <Container className="position-relative h-100 text-white">
          <Row className="align-items-center h-100">
            <Col xl={7}>
              {pathname === "/hire-dedicated-resource" ? (
                <div className="hdr-head text-xl-start text-center mb-xl-0 mb-4">
                  <h1>
                    IT Outsourcing Services
                    <span className="d-block text-uppercase text-theme">
                      {" "}
                      at Reasonable Rates
                    </span>
                  </h1>
                  <p>
                    Strategize your business growth while we manage IT
                    operations through effective IT outsourcing.
                  </p>
                  <ul className="logos-holder">
                    {certificationLogos.map((certificationLogo, index) => {
                      return (
                        <li key={index}>
                          <Image
                            src={certificationLogo.image}
                            width="124"
                            height="84"
                            alt="Logo"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <div className="banner-content">
                  {props.subHeading && (
                    <strong className="d-block">{props.subHeading}</strong>
                  )}
                  {props.heading && props.heading}
                  {props.text && props.text}
                  {props.buttonText && props.buttonLink && (
                    <div className="btn-holder pt-3 d-flex align-items-center">
                      <Link
                        href="#contact-us"
                        className="btn btn-solid-blue"
                        onClick={highlightForm}
                      >
                        {props.buttonText}
                      </Link>
                      <Link
                        href="/contact-us"
                        className="btn btn-solid-blue ms-2"
                      >
                        {props.buttonTextTwo}
                      </Link>
                    </div>
                  )}
                  {props.isoImages && (
                    <ul className="iso-images">
                      {props.isoImages.map((images, index) => {
                        return (
                          <li key={index}>
                            <Image
                              src={images.image}
                              width="95"
                              height="95"
                              alt="Logo"
                            />
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              )}
            </Col>
            <Col xl={5}>
              <div
                className={`reponse-form-block position-relative ${toggleForm ? "active" : ""
                  }`}
              >
                <div className="mb-sm-0 mb-5">
                  <h3>Get In Touch</h3>
                  <p clas>
                    Please don't hesitate to send your queries. We'll get in
                    touch soon. Thanks for your patience.
                  </p>
                </div>
                <form className="responsive-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col className="inputs-container d-flex">
                      <div className="two-inputs">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control mb-0"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={formData.name ? "" : "Name *"}
                            onFocus={(e) => (e.target.placeholder = "")}
                            onBlur={(e) =>
                            (e.target.placeholder = formData.name
                              ? ""
                              : "Name *")
                            }
                          />
                          {errors.name && (
                            <small className="text-danger">{errors.name}</small>
                          )}
                        </div>
                      </div>
                      <div className="two-inputs">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control mb-0"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={formData.email ? "" : "Email *"}
                            onFocus={(e) => (e.target.placeholder = "")}
                            onBlur={(e) =>
                            (e.target.placeholder = formData.email
                              ? ""
                              : "Email *")
                            }
                          />
                          {errors.email && (
                            <small className="text-danger">
                              {errors.email}
                            </small>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="inputs-container d-flex">
                      <div className="two-inputs form-group">
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
                            <small className="text-danger">
                              {errors.phone}
                            </small>
                          )}
                        </Form.Group>
                      </div>
                      <div className="two-inputs">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control mb-0"
                            name="expertCount"
                            value={formData.expertCount}
                            onChange={handleInputChange}
                            placeholder={
                              formData.expertCount ? "" : "Required Experts"
                            }
                            onFocus={(e) => (e.target.placeholder = "")}
                            onBlur={(e) =>
                            (e.target.placeholder = formData.expertCount
                              ? ""
                              : "Required Experts")
                            }
                          />
                          {errors.expertCount && (
                            <small className="text-danger">
                              {errors.expertCount}
                            </small>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-group">
                        <Select
                          value={selectedOption}
                          onChange={handleSelectChange}
                          options={props?.technologyOptions}
                          className="react-select fix-color"
                          classNamePrefix="react-select"
                          isMulti
                          placeholder="Select Team *"
                        />
                        {errors.technology && (
                          <small className="text-danger">
                            {errors.technology}
                          </small>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="form-group textarea-form-group">
                        <textarea
                          className="form-control"
                          rows="5"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={formData.message ? "" : "Your Message *"}
                          onFocus={(e) => (e.target.placeholder = "")}
                          onBlur={(e) =>
                          (e.target.placeholder = formData.message
                            ? ""
                            : "Your Message *")
                          }
                        ></textarea>
                        {errors.message && (
                          <small className="text-danger">
                            {errors.message}
                          </small>
                        )}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="inputs-container d-flex">
                      <div className="two-inputs w-100">
                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn orange-outline form-disabled-btn"
                            disabled={recaptchaLoading || loading}
                          >
                            {loading ? "Submitting..." : "Submit"}
                          </button>
                          <span>OR</span>
                          <a
                            href={wa}
                            target="_blank"
                            type="button"
                            className="btn simple-outline"
                          >
                            <Image
                              width="28"
                              height="29"
                              className="img-fluid"
                              alt="WhatsApp Icon"
                              src={Images.WhatsappIcon}
                            />
                          </a>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
