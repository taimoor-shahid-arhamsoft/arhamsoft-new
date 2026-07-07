"use client";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import Link from "next/link";

export default function MultiColorGridClient({ gridsContent = [] }) {
    const pathname = usePathname();

    return (
        <>
            {gridsContent.map((gridContent, index) => (
                <Col
                    lg={6}
                    className="column-bottom-margin"
                    xl={pathname === "/enterprise-solutions" || pathname === "/ml-ops" ? 4 : undefined}
                    key={index}
                >
                    <div
                        className={`feature-block d-flex align-items-center justify-content-between position-relative flex-wrap bg-${gridContent.boxColor}`}
                    >
                        <div className="text-holder order-1 order-sm-0">
                            <h3>{gridContent.title}<span className="d-block">{gridContent.subTitle}</span></h3>
                            {gridContent.description && <p className="mb-0">{gridContent.description}</p>}
                            {gridContent.bullets && (
                                <ul className="feature-buttlets">
                                    {gridContent.bullets.map((text, idx) => (
                                        <li key={idx}>{text.text}</li>
                                    ))}
                                </ul>
                            )}
                            {gridContent.buttonLink && (
                                <Link href={gridContent.buttonLink} className="btn btn-solid-blue">
                                    {gridContent.buttonText}
                                </Link>
                            )}
                        </div>
                        {gridContent.icon && (
                            <div className="icon-holder order-0 order-sm-1">
                                <Image width="271" height="271" className="img-fluid" src={gridContent.icon} alt="icon" />
                            </div>
                        )}
                        {gridContent.lottie && (
                            <div className="lottie-holder">
                                <LottieAnimation animationData={gridContent.lottie} />
                            </div>
                        )}
                    </div>
                </Col>
            ))}
        </>
    );
}