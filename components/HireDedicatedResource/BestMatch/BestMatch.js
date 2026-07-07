import { Container } from "react-bootstrap";
import Image from "next/image";
import { Animations } from "@/assets/assets";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./BestMatch.css";

export default function BestMatch({ heading, text, bestMap = [] }) {
    return (
        <section className="best-match">
            <div className="lottie-holder">
                <LottieAnimation animationData={Animations.bgBannerAnimation} />
            </div>
            <Container>
                <div>
                    <div className="heading-block text-center position-relative pt-0">
                        {heading}
                        <p>{text}</p>
                    </div>
                    <div className="best-content">
                        {
                            bestMap.map((best, index) => {
                                return (
                                    <div className="best-child" key={index}>
                                        <div className='best-child-in'>
                                            <div className="best-img">
                                                <Image src={best.image} width="100" height="100" alt={best.title} className='img-fluid' />
                                            </div>
                                            <div className='best-data'>
                                                <h2>{best.title}</h2>
                                                <p>{best.description}</p>
                                                <div className='best-links d-flex align-items-center'>
                                                    <Link href={best.buttonLink} className="link d-flex align-items-center">Explore more <FontAwesomeIcon className="ms-2" icon={faArrowRight} /></Link>
                                                    <Link href="/contact-us" className="link d-flex align-items-center ms-3">Get in touch <FontAwesomeIcon className="ms-2" icon={faArrowRight} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
}