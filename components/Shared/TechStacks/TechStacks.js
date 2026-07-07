import Image from "next/image";
import { Animations } from "@/assets/assets";
import { Container } from "react-bootstrap";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "./TechStacks.css";

export default function TechStacks({ title, description, subTitle, techImages = [] }) {
    return (
        <section className="tech-stacks position-relative">
            <div className="lottie-holder">
                <LottieAnimation animationData={Animations.whatYouGetAnimation} />
            </div>
            <Container className="position-relative">
                <div>
                    <div className="heading-block text-center position-relative pt-0 text-white px-5 px-md-0">
                        <h3>{title} <span className="d-inline-block">{subTitle}</span></h3>
                        <p>{description}</p>
                    </div>
                    <div className="tech-stack-images">
                        {techImages.map((tech, index) => {
                            return (
                                <div key={index} className='stack-img'>
                                    <Image className="img-fluid" src={tech.image} width="130" height="50" alt="Technologies" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}