"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Animations, Images } from "@/assets/assets";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import { companyEmailId, companySkypeId, companyWhatsApp } from "@/config";
import "@/styles/PageBanner.css";

export default function PageBanner({
  bannerClass,
  subHeading,
  heading,
  text,
  buttonText,
  socialIcons,
  lottieBannerOne,
  lottieBannerTwo,
  bannerLottie,
  bgBannerBeforeAfter,
  bannerImage,
  banneVideo,
  bannerImgAlt,
}) {
  const pathname = usePathname();

  const getButtonLink = () => {
    const contactPaths = [
      "/data-science",
      "/cyber-security",
      "/ar-vr-and-metaverse",
      "/ai-poc-mvp",
    ];

    if (pathname === "/careers") return "#job-listing";
    return contactPaths.includes(pathname) ? "/contact-us" : "#contact-us";
  };

  return (
    <div className={`page-banner position-relative ${bannerClass}`}>
      <div className="lottie-holder">
        <LottieAnimation animationData={Animations.bgBannerAnimation} />
      </div>
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="d-lg-flex align-items-center justify-content-between">
              <div className="banner-content">
                {subHeading && <strong className="d-block">{subHeading}</strong>}
                {heading && heading}
                {text && text}
                {buttonText && (
                  <div className="btn-holder pt-3">
                    <Link href={getButtonLink()} className="btn btn-solid-blue">
                      {buttonText}
                    </Link>
                  </div>
                )}
                {socialIcons && (
                  <ul className="banner-social-icons d-flex align-items-center ps-0">
                    <li>
                      <a href="#contact-form" className="social-icons dark-green d-flex justify-content-center align-items-center">
                        <div className="defluit-img">
                          <Image width="28" height="34" src={Images.contact01} alt="Contact Icon" className="img-fluid" />
                        </div>
                        <div className="hover-img">
                          <Image width="28" height="34" src={Images.contact01Hover} alt="Contact Icon Hover" className="img-fluid" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${companyEmailId}`} className="social-icons blue d-flex justify-content-center align-items-center">
                        <div className="defluit-img">
                          <Image width="35" height="24" src={Images.contact02} alt="Email Icon" className="img-fluid" />
                        </div>
                        <div className="hover-img">
                          <Image width="35" height="24" src={Images.contact02Hover} alt="Email Icon Hover" className="img-fluid" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href={`https://wa.me/${companyWhatsApp}`} target="_blank" className="social-icons green d-flex justify-content-center align-items-center" rel="noopener noreferrer" >
                        <div className="defluit-img">
                          <Image width="31" height="31" src={Images.contact04} alt="WhatsApp Icon" className="img-fluid" />
                        </div>
                        <div className="hover-img">
                          <Image width="31" height="31" src={Images.contact04Hover} alt="WhatsApp Icon Hover" className="img-fluid" />
                        </div>
                      </a>
                    </li>
                  </ul>
                )}
              </div>
              <div className="banner-image">
                {lottieBannerOne && (
                  <div className="lottie-holder-banner one">
                    <LottieAnimation animationData={bgBannerBeforeAfter} />
                  </div>
                )}
                {bannerImage && (
                  <div className="image-holder">
                    <Image
                      src={bannerImage}
                      width="850"
                      height="749"
                      alt={bannerImgAlt || "Banner Image"}
                    />
                  </div>
                )}
                {banneVideo && (
                  <div className="image-holder">
                    <video autoPlay muted loop className="img-fluid">
                      <source src={banneVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                {lottieBannerTwo && (
                  <div className="lottie-holder-banner two">
                    <LottieAnimation animationData={bgBannerBeforeAfter} />
                  </div>
                )}
                {bannerLottie && (
                  <div className="lottie-holder-banner">
                    <LottieAnimation animationData={bannerLottie} />
                  </div>
                )}
              </div>
              <div className="media-lottie">
                <LottieAnimation animationData={Animations.bgMobileBanner} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}