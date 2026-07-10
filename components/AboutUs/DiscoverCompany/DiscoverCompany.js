import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { cloudinaryImages, Images } from "@/assets/assets";
import "@/styles/DiscoverCompany.css";

export default function DiscoverCompany() {
    const features = [
        {
            title: 'Get Top Talent',
            description: 'Polishing talent can be challenging, but with Team DoM by your side, projects are completed effortlessly. We always stay focused and never hesitate to share new and creative ideas.',
            icon: Images.iconDiscAs01,
            boxColor: "orange-box"
        },
        {
            title: "Align Time Zones",
            description: "No matter which time zone you live and work in, we work round the clock to deliver on our commitments. Morning, noon, or midnight - our service channels are always open.",
            icon: Images.iconDiscAs02,
            boxColor: "blue-box"
        },
        {
            title: 'Gain Competitive Edge',
            description: 'We demonstrate our extensive expertise through the successful execution of projects. We swiftly respond to challenges or opportunities, ensuring our client businesses lead the market.',
            icon: Images.iconDiscAs03,
            boxColor: "farozi-box"
        }
    ];
    const stats = [
        { count: "1.5+", text: "decades of growth" },
        { count: "2K+", text: "weekly hours saved" },
        { count: "500+", text: "projects delivered" },
        { count: "Up To 60 %", text: "savings on staffing" }
    ];
    return (
        <div className="discover-as content-section">
            <div className="discover-row">
                <Container>
                    <Row>
                        <Col>
                            <div className="section-heading d-flex justify-content-center text-center">
                                <h2>Unlock <span className="d-block">The DoM Edge</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {features.map((feature, index) => {
                            if (index < 10) {
                                index++;
                                index = index.toString().padStart(2, 0);
                            }
                            return (
                                <Col lg={4} key={index}>
                                    <div className={`feature-block position-relative text-white ${feature.boxColor ? feature.boxColor : ""}`}>
                                        <span className="feature-count">{index}</span>
                                        <div className="icon-holder d-flex justify-content-center align-items-center">
                                            <Image className="img-fluid" width="88" height="88" src={feature.icon} alt='icon' />
                                        </div>
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
            <div className="journey-row">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="journey-content">
                                <div className="section-heading">
                                    <h2>We are<span className="text-theme d-block">Data on Matrix</span></h2>
                                </div>
                                <strong className="emp-text d-block">A tech home to startups, SMEs, and blue-chip companies.</strong>
                                <p>Discontent with substandard practices, we are born out of a desire to provide top-notch services to the market. Since our humble beginning, we’ve been united by a single purpose: to develop and deliver technological solutions that empower. Our commitment to innovation through technology is what we strive for every day.</p>
                                <p>Each product we create and each service we provide is designed to help businesses thrive. Every project we put our hands on starts with efficiency, progresses with expertise, and ends with quality. So far, we have:</p>
                                <ul className="journey-stats list-unstyled mb-0 d-flex flex-wrap">
                                    {stats.map((stat, index) => {
                                        return (
                                            <li className="d-flex flex-column" key={index}>
                                                <span className="stat-count">{stat.count}</span>
                                                <span className="stat-text">{stat.text}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="image-holder">
                                <Image className="img-fluid" width="518" height="720" src={cloudinaryImages.companyDataonMAtrix} alt="Company Building" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}