export const sendContactForm = async (data) => {
  const response = await fetch("/api/contact-us", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok) {
    const error = new Error(result.message || "Failed to send message");
    if (result.recaptchaInvalid) {
      error.recaptchaError =
        "Your reCAPTCHA session has expired. Click the submit button again to continue";
    }
    throw error;
  }

  return result;
};

export const getInTouch = async (data) => {
  const response = await fetch("/api/getin-touch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  if (!response.ok) {
    const error = new Error(result.message || "Failed to send message");
    if (result.recaptchaInvalid) {
      error.recaptchaError =
        "Your reCAPTCHA session has expired. Click the submit button again to continue";
    }
    throw error;
  }

  return result;
};

export const hireDedicatedForm = async (data) => {
  const response = await fetch("/api/hire-dedicated", {
    method: "POST",
    body: data,
  });

  const result = await response.json();
  if (!response.ok) {
    const error = new Error(result.message || "Failed to send message");
    if (result.recaptchaInvalid) {
      error.recaptchaError =
        "Your reCAPTCHA session has expired. Click the submit button again to continue";
    }
    throw error;
  }

  return result;
};

export const getInTouchContactUsForm = async (data) => {
  const response = await fetch("/api/getIn-touch-contactus", {
    method: "POST",
    body: data,
  });

  const result = await response.json();
  if (!response.ok) {
    const error = new Error(result.message || "Failed to send message");
    if (result.recaptchaInvalid) {
      error.recaptchaError =
        "Your reCAPTCHA session has expired. Click the submit button again to continue";
    }
    throw error;
  }

  return result;
};

export const Subscribe = async (data) => {
  const response = await fetch("/api/subscribe", {
    method: "POST",
    body: data,
  });

  const result = await response.json();
  if (!response.ok) {
    const error = new Error(result.message || "Failed to send message");
    if (result.recaptchaInvalid) {
      error.recaptchaError =
        "Your reCAPTCHA session has expired. Click the submit button again to continue";
    }
    throw error;
  }

  return result;
};

export const requestDemo = async (data) => {
  try {
    const response = await fetch("/api/request-demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok) {
      const error = new Error(result.message || "Failed to send message");
      if (result.recaptchaInvalid) {
        error.recaptchaError =
          "Your reCAPTCHA session has expired. Click the submit button again to continue";
      }
      throw error;
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const careers = async (data) => {
  try {
    const response = await fetch("/api/careers", {
      method: "POST",
      body: data,
    });

    const result = await response.json();
    if (!response.ok) {
      const error = new Error(result.message || "Failed to send message");
      if (result.recaptchaInvalid) {
        error.recaptchaError =
          "Your reCAPTCHA session has expired. Click the submit button again to continue";
      }
      throw error;
    }

    return result;
  } catch (error) {
    throw error;
  }
};
