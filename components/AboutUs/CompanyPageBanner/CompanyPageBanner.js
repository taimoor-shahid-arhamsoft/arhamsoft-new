import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import "@/styles/CompanyPageBanner.css";

export default function CompanyPageBanner() {
    const awards = [
        {
            title: "Clutch Champion Award",
            year: "2023",
            image: Images.ImgAward03
        },
        {
            title: "Best Software House Award",
            year: "2022",
            image: Images.ImgAward01
        },
        {
            title: "Top B2B Company Award",
            year: "2021",
            image: Images.ImgAward02
        },
    ];
    return (
        <section id="company-banner" className="page-banner d-flex align-items-center position-relative">
            <div className="bg-banner-img">
                <Image className="img-fluid" width="1230" height="985" src={Images.bgBannerCompany} alt="Company-Banner-Image" />
            </div>
            <Container className="position-relative">
                <div className="banner-content">
                    <div className="heading-box">
                        <h1>Committed To Creating <br />Outstanding Experiences</h1>
                    </div>
                    <div className="text-block">
                        <p>Data on Matrix is a technology firm, helping multi-sectoral businesses build and refine software solutions for over a decade, with people-based services & market-leading technologies. Operating across two countries, our 250+ experts have accomplished 500+ projects, maintaining a 98% CSAT.</p>
                        <p>We started DataOnMatrix because we kept watching the same thing happen. The AI demo impressed everyone, the budget got signed, and six months later the tool sat unused while the work got done the same slow way. The model is the easy part. The hard part is making it fit a business that already exists and earning the team&apos;s trust. Nobody puts that on a slide. That&apos;s the part we do.</p>
                        <p className="signature">— Adil Irfan, Founder & CEO</p>
                    </div>
                    <Link href="#contact-us" className="btn btn-solid">Team Up</Link>
                </div>
                <div className="awards-list">
                    <Row>
                        {awards.map((award, index) => {
                            return (
                                <Col lg={4} key={index}>
                                    <div className="award-block d-flex align-items-center mb-5">
                                        <div className="image-holder d-flex justify-content-center align-items-center">
                                            <Image src={award.image} width="117" height="151" alt="Award-Image" />
                                        </div>
                                        <div className="detail-block d-flex flex-column">
                                            <strong className="year">{award.year}</strong>
                                            <p>{award.title}</p>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </Container>
        </section>
    );
}