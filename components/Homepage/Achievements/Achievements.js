import { Container } from "react-bootstrap";
import { Images } from "@/assets/assets";
import Image from "next/image";
import "./Achievements.css";

const achieveMap = [
    { id: 1, image: Images.isoOne, caption: "ISMS 27001 Certified" },
    { id: 2, image: Images.isoTwo, caption: "ISMS 9001 Certified" },
    { id: 6, image: Images.growing, caption: "America’s Fastest Growing Company" },
    { id: 7, image: Images.clutch, caption: "Clutch Champion 2023" },
    { id: 8, image: Images.best, caption: "Best Software House 2022" },
    { id: 10, image: Images.payoneer, caption: "Best Tech Development Agency 2023" },
];

export default function Achievemnets() {

    return (
        <section className="achievemnets">
            <Container>
                <div>
                    <div className="heading-block text-center position-relative pt-0">
                        <div className="bg-logo-holder">
                            <Image className="img-fluid" width="280" height="373" src={Images.bgCompanyLogo} alt="Logo" />
                        </div>
                        <h3><span className="d-block">Our Achievements</span>Recognition & Certifications</h3>
                        <p>Since the proof is in the pudding, our certifications speak for our service quality.</p>
                    </div>
                    <div className="achieve-content">
                        {
                            achieveMap.map((achieve, index) => {
                                return (
                                    <div className="achieve-child" key={index}>
                                        <div className="achieve-img">
                                            <Image src={achieve.image} width={100} height={100} alt={achieve.caption} className='img-fluid' />
                                        </div>
                                        <span className="d-block text-center caption">{achieve.caption}</span>
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