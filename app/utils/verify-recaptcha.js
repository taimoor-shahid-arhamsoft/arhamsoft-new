import { reCaptchaSecretKey, reCaptchaVerifyUrl } from "../../config";

export const verifyReCaptcha = async (token) => {
  try {
    const url = `${reCaptchaVerifyUrl}?secret=${reCaptchaSecretKey}&response=${token}`;
    const response = await fetch(url, {
      method: "POST",
    });
    
    if (!response.ok) {
      throw new Error("Failed to verify reCaptcha");
    }

    const data = await response.json();
    
    return data.success;
  } catch (error) {
    if (error)
      return false;
  }
};