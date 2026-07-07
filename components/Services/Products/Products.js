"use client";
import { useCallback, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import PageBanner from "@/components/Shared/PageBanner/PageBanner";
import ProductAMS from "@/app/(pages)/products/productams";
import ProductMathlete from "@/app/(pages)/products/productmathlete";
import BlockChainLinkPoint from "@/app/(pages)/products/blockchainlinkpoint";
import ProductsSwiftRyde from "@/app/(pages)/products/productsswiftryde";
import ProductsAlexaBoard from "@/app/(pages)/products/productsalexaboard";
import ProductsInCarto from "@/app/(pages)/products/productsincarto";
import LetsDiscuss from "@/components/Shared/LetsDiscuss/LetsDiscuss";
import WorkSlider from "@/components/Shared/WorkSlider/WorkSlider";
import TimezoneSelect from "react-timezone-select";
import DateTimePicker from "react-datetime-picker";
import { Images } from "@/assets/assets";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { requestDemoValidationSchema } from "@/validations/request-demo";
import { requestDemo } from "@/app/helper/api";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { countryDropdownConfig, tokenRefreshTime } from "@/config";
import "@/styles/Products.css";
import { useToken } from "@/app/context/tokenContext";
const moment = require("moment-timezone");

const { defaultCountry, preferredCountries, separateDialCode } =
  countryDropdownConfig;

export default function Products() {
  const [show, setShow] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [dialCode, setDialCode] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const { token, setToken, setIsTokenValid, isTokenValid, setVerifyReCaptcha } =
    useToken();
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);
  const [inputKey, setInputKey] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    selectedOption: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [timezone, setTimezone] = useState({
    value: "America/New_York",
    label: "New York (GMT-5)",
  });
  const defaultTimezone = {
    value: "America/New_York",
    label: "New York (GMT-5)",
  };
  const [dateTime, setDateTime] = useState(new Date());
  const currentDate = new Date();
  const [loading, setLoading] = useState(false);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return;
    setRecaptchaLoading(true);

    const recaptchaToken = await executeRecaptcha("product_form_submitted");
    setToken(recaptchaToken);
    setIsTokenValid(false);
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

  const handleClose = () => {
    setShow(false);
    setFormData({
      name: "",
      email: "",
      contactNo: "",
      selectedOption: "",
      message: "",
    });
    setErrors({});
    setTimezone(null);
    setDateTime(new Date());
  };

  const handlePhoneChange = (isValid, value, countryData) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      contactNo: "",
    }));

    setFormData((prevData) => ({
      ...prevData,
      contactNo: value,
    }));

    setDialCode(countryData.dialCode);
    setIsPhoneValid(isValid);
  };

  const handleShow = (value) => {
    setShow(true);
    setFormData((prev) => ({ ...prev, selectedOption: value }));
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;

    const trimmedValue = value.trimStart();

    setFormData((prev) => ({ ...prev, [name]: trimmedValue }));

    try {
      await requestDemoValidationSchema.validateAt(name, {
        ...formData,
        [name]: trimmedValue,
      });

      setErrors((prev) => ({ ...prev, [name]: null }));
    } catch (validationError) {
      setErrors((prev) => ({ ...prev, [name]: validationError.message }));
    }
  };

  const handleTimezoneChange = (selectedTimezone) => {
    setTimezone(selectedTimezone);
    setErrors((prevErrors) => ({
      ...prevErrors,
      timezone: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.contactNo || !isPhoneValid) {
      newErrors.contactNo = "Please enter a valid phone number";
    }

    try {
      await requestDemoValidationSchema.validate(
        { ...formData, dateTime, timezone },
        { abortEarly: false }
      );
    } catch (err) {
      err.inner.forEach((validationError) => {
        newErrors[validationError.path] = validationError.message;
      });
    }

    if (!timezone || !timezone.value) {
      newErrors.timezone = "Please select a timezone";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (!navigator.onLine && Object.keys(newErrors).length === 0) {
        toast.error(
          "Form submission failed due to a lack of internet connectivity"
        );
        return;
      }
      handleReCaptchaVerify();
      setLoading(true);
      try {
        // convert current date to user's local time zone using Moment Timezone
        const date = new Date(dateTime);
        const localDate = moment(date)
          .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
          .format();

        await requestDemo({
          ...formData,
          contactNo: "+" + dialCode + " " + formData.contactNo,
          timezone: timezone || defaultTimezone,
          dateTime: localDate,
          requestFrom: window.location.href,
          reCaptcha: token,
        });
        toast.success("Demo requested successfully", {
          pauseOnFocusLoss: false,
          closeOnClick: true,
        });
        setInputKey((prevKey) => prevKey + 1);
        handleClose();
      } catch (err) {
        if (err.recaptchaError) {
          toast.error(err.recaptchaError);
        } else {
          toast.error("Failed to submit the demo request. Please try again", {
            pauseOnFocusLoss: false,
            closeOnClick: true,
          });
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const bannerHeading = (
    <h1>
      A New Spin On
      <br /> Ideas
    </h1>
  );
  const bannerText = (
    <p>
      Our IT experts leverage the latest innovations to craft perfectly tailored
      solutions that bring your brand to life.
    </p>
  );
  const workSliderData = [
    {
      image: Images.OurWork01,
      platform: "Web",
      title: "Real Estate",
      description:
        "Ut consectetur, odio vitae condimentum venenatis, risus nunc efficitur justo,id viverra massa lectus vitae est. Ut condimentum ante eu mauris ultricies, quis finibus sem eleifend. Fusce sed erat lobortis, ultricies mi ut, imperdiet elit.",
      techStacks: [Images.iconTechStack01, Images.iconTechStack02],
    },
    {
      image: Images.OurWork02,
      platform: "Web",
      title: "Printing And Mail",
      description:
        " Nunc tempor, justo et rutrum rhoncus, lacus mauris vehicula arcu, malesuada aliquet felis metus id mauris. Quisque tincidunt, risus sed iaculis tempus, velit leo rutrum sapien, nec porta arcu elit sit amet enim.",
      techStacks: [Images.iconTechStack01, Images.iconTechStack02],
    },
    {
      image: Images.OurWork03,
      platform: "Web",
      title: "Fintech Financial Services",
      description:
        "Fusce eu ex eu ligula lacinia pharetra ut at eros. Sed vestibulum sem lacus, a euismod sapien volutpat vitae. Sed eget arcu vitae dolor scelerisque venenatis. Proin et nisi sed nunc commodo suscipit id nec elit. Nulla pharetra.",
      techStacks: [Images.iconTechStack01, Images.iconTechStack02],
    },
  ];
  return (
    <div className="products-page custom-banner">
      <PageBanner
        subHeading="Products"
        heading={bannerHeading}
        text={bannerText}
        buttonText="Build Your Product with Us"
        buttonLink="/contact-us"
        bannerImage={Images.bgBannerProducts}
        bannerImgAlt="Software Products"
      />
      <ProductAMS onRequestDemo={(value) => handleShow(value)} />
      <ProductMathlete onRequestDemo={handleShow} />
      <BlockChainLinkPoint onRequestDemo={handleShow} />
      <ProductsSwiftRyde onRequestDemo={handleShow} />
      <ProductsAlexaBoard onRequestDemo={handleShow} />
      <ProductsInCarto onRequestDemo={handleShow} />
      <LetsDiscuss
        title="Let’s Discuss Your Idea"
        description="Our expert team helps you develop, refine and implement effective product solutions."
        buttonText="Schedule Consultation"
        buttonLink="/contact-us"
      />
      <WorkSlider
        title="Case Studies"
        description="Read through the following case studies to see how we've successfully addressed diverse IT challenges and delivered impactful solutions."
        workSliderData={workSliderData}
      />
      <Modal
        show={show}
        onHide={handleClose}
        className="req-demo-modal"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Request A Demo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Website design, development and mobile application packages can be
            tailored to meet your specific requirements. Contact us for a
            personalized quote.
          </p>
          <form className="re-demo-form">
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name *"
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>
            <div className="form-group mb-3">
              <div className="d-block">
                <div className="country-code me-2">
                  <IntlTelInput
                    key={inputKey}
                    containerClassName="intl-tel-input"
                    inputClassName={`form-control ${errors.contactNo ? "is-invalid" : ""
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
                    value={formData.contactNo}
                  />
                  {errors && (
                    <div className="text-danger">{errors.contactNo}</div>
                  )}
                </div>
              </div>
            </div>

            <div className="form-group mb-3">
              <input
                className="form-control"
                type="text"
                name="selectedOption"
                value={formData.selectedOption}
                placeholder="Selected Option"
                readOnly
              />
            </div>
            <div className="form-group mb-3">
              <DateTimePicker
                onChange={setDateTime}
                value={dateTime}
                minDate={currentDate}
              />
              {errors.dateTime && (
                <small className="text-danger">{errors.dateTime}</small>
              )}
            </div>
            <div className="form-group mb-3">
              <TimezoneSelect
                value={timezone}
                onChange={handleTimezoneChange}
                placeholder="Select a timezone"
                className="react-select"
                classNamePrefix="react-select"
              />
              {errors.timezone && (
                <small className="text-danger">{errors.timezone}</small>
              )}
            </div>
            <div className="form-group mb-3">
              <textarea
                className="form-control"
                rows="5"
                cols="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
              />
              {errors.message && (
                <small className="text-danger">{errors.message}</small>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-solid form-disabled-btn"
            onClick={handleSubmit}
            disabled={recaptchaLoading || loading}
          >
            {loading ? "Submitting..." : "Schedule"}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}