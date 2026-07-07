"use client";
import { useState } from "react";
import Image from "next/image";
import { Images } from "@/assets/assets";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { emailRegex } from "@/config";
import { Subscribe } from "@/app/helper/api";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required.")
    .matches(emailRegex, "Invalid email")
});

export default function SubscribeCol() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setError("Invalid email");
      return;
    }

    if (!navigator.onLine) {
      toast.error(
        "Form submission failed due to a lack of internet connectivity"
      );
      return;
    }
    setIsLoading(true);

    try {
      await validationSchema.validate({ email }, { abortEarly: false });

      const response = await Subscribe(JSON.stringify({ email }));
      toast.success(response.message || "Thank you for subscribing!", {
        pauseOnFocusLoss: false,
        closeOnClick: true,
      });
      setEmail("");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setError(err.errors[0]);
      } else {
        toast.error(err.message || "Something went wrong. Please try again.", {
          pauseOnFocusLoss: false,
          closeOnClick: true,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="subscribe-col">
      <h3 className="text-uppercase text-white">
        STAY INFORMED: <span className="text-theme">SUBSCRIBE NOW</span>
      </h3>
      <form
        onSubmit={handleSubmit}
        className="subscribe-form d-flex align-items-center position-relative"
      >
        <div className="d-flex align-items-center flex-fill email-envelope-address">
          <span className="icon-holder">
            <Image width="24" height="30" className="img-fluid" src={Images.iconEnvelope} alt="icon" />
          </span>
          <div className="input-holder flex-fill">
            <input
              type="email"
              placeholder="Your email address.."
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn-submit btn btn-solid-white d-flex align-items-center justify-content-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Submit</span>
              <FontAwesomeIcon className="ms-2" icon={faArrowRight} />
            </>
          )}
        </button>
      </form>

      {error && <div className="error-message text-danger">{error}</div>}
    </div>
  );
}
