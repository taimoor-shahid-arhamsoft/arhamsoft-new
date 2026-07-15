import Head from "next/head";
import Script from "next/script";
import { Fonts } from "@/assets/assets";
import { ToastContainer } from "react-toastify";
import { googleSiteVerificationKey, googleTagId, reCaptchaSiteKey } from "@/config";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/Custom.css";
import { TokenProvider } from "./context/tokenContext";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export const metadata = {
  title: "Trusted Support and Maintenance Solutions - DataonMatrix",
  description: "Ensure system uptime and performance with expert support and maintenance services—prevent downtime and protect your investment.",
  keywords: ["Support and Maintenance Services"],
  alternates: {
    canonical: "https://www.dataonmatrix.com/",
  },
  other: {
    "google-site-verification": googleSiteVerificationKey,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <TokenProvider>
          <ScrollToTop />
          <Head>
            <link
              rel="preload"
              href={Fonts.outfitRegularWoff2}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href={Fonts.outfitBoldWoff2}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href={Fonts.outfitLightWoff2}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href={Fonts.outfitMediumWoff2}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href={Fonts.outfitSemiBoldWoff2}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href={Fonts.outfitBlackWoff2}
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
          </Head>

          <div className="wrapper">{children}</div>

          <ToastContainer />
        </TokenProvider>

        {/* Google Analytics Tag */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
          `}
        </Script>

        {/* Google reCAPTCHA */}
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${reCaptchaSiteKey}`}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
