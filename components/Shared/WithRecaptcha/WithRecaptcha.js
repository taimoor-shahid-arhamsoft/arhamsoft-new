"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { reCaptchaSiteKey } from "@/config";
import { usePathname } from "next/navigation";

const WithRecaptcha = (Component) => {
    return function RecaptchaWrapper(props) {
        const pathname = usePathname();
        return (
            <GoogleReCaptchaProvider
                reCaptchaKey={reCaptchaSiteKey}
                key={pathname}
                scriptProps={{
                    async: true,
                    defer: true,
                    appendTo: "head",
                }}>
                <Component {...props} />
            </GoogleReCaptchaProvider>
        );
    };
};

export default WithRecaptcha;