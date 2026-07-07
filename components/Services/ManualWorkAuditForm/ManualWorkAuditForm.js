"use client";
import { useCallback, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emailRegex, tokenRefreshTime } from "@/config";
import { useToken } from "@/app/context/tokenContext";

export default function ManualWorkAuditForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { token, setToken, isTokenValid, setIsTokenValid, verifyReCaptcha } =
    useToken();

  const [formData, setFormData] = useState({ task: "", name: "", email: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) return;
    setRecaptchaLoading(true);

    if (isTokenValid) {
      const recaptchaToken = await executeRecaptcha("manual_work_audit_submit");
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
    setFormData((prev) => ({ ...prev, [name]: value.trimStart() }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      validationErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.trim().length > 50) {
      validationErrors.name = "Name must be under 50 characters";
    }

    if (!formData.email) {
      validationErrors.email = "Work email is required";
    } else if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    } else if (formData.email.length > 100) {
      validationErrors.email = "Email must be under 100 characters";
    }

    if (!formData.task || formData.task.trim().length < 10) {
      validationErrors.task =
        "Please share a bit more detail (at least 10 characters)";
    } else if (formData.task.trim().length > 1000) {
      validationErrors.task = "Please keep this under 1000 characters";
    }

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
    } else if (verifyReCaptcha) {
      await verifyReCaptcha();
    }

    try {
      setLoading(true);
      const response = await fetch("/api/manual-work-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          task: formData.task,
          requestFrom: window.location.href,
          reCaptcha: token,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.recaptchaInvalid) {
          toast.error(
            "Your reCAPTCHA session has expired. Click the submit button again to continue"
          );
          return;
        }
        throw new Error(result.message || "Failed to send message");
      }

      toast.success(
        "Thank you for reaching out to us. We have received your submission, and one of our representatives will respond to you at the earliest opportunity.",
        { pauseOnFocusLoss: false, closeOnClick: true }
      );
      setFormData({ task: "", name: "", email: "" });
    } catch (error) {
      toast.error("An error occurred. Please try again", {
        pauseOnFocusLoss: false,
        closeOnClick: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="share-section contact-section">
      <div className="heading-block position-relative pt-0 text-white">
        <h3>
          Start With <span className="d-block">The One Thing</span>
        </h3>
      </div>
      <Form onSubmit={handleSubmit} className="contact-form position-relative">
        <Row>
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
                placeholder={formData.email ? "" : "Work Email *"}
                value={formData.email}
                onChange={handleChange}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) =>
                (e.target.placeholder = formData.email
                  ? ""
                  : "Work Email *")
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
          <Col md={12}>
            <Form.Group
              className={`form-space position-relative ${errors.task ? "margin-bottom" : ""}`}
            >
              <Form.Control
                as="textarea"
                name="task"
                placeholder={
                  formData.task
                    ? ""
                    : "What's the one task your team does every week that everyone quietly hates? *"
                }
                value={formData.task}
                onChange={handleChange}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) =>
                (e.target.placeholder = formData.task
                  ? ""
                  : "What's the one task your team does every week that everyone quietly hates? *")
                }
                isInvalid={!!errors.task}
              />
              <Form.Control.Feedback
                type="invalid"
                className="position-absolute error-position"
              >
                {errors.task}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={12}>
            <div className="form-footer form-footer-mobile d-flex justify-content-end align-items-center">
              <Button
                className="btn-get-touch form-disabled-btn"
                type="submit"
                disabled={recaptchaLoading || loading}
              >
                {loading ? "Submitting..." : "Send It Over"}
              </Button>
            </div>
            <div className="form-footer form-footer-mobile d-flex justify-content-center align-items-center">
              <p className="mb-0 py-5 py-md-4 text-white">
                No NDA needed to start. No sales call unless you ask for one.
              </p>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
