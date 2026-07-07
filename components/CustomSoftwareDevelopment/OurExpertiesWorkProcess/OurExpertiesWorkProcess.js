import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Images } from "@/assets/assets";
import "@/styles/OurExpertiesWorkProcess.css";

export default function OurExpertiesWorkProcess() {
	const experties = [
		{
			title: "APP",
			subTitle: "Development",
			text: "We build scalable mobile apps that drive digital transformation by engaging customers throughout their day.",
			image: Images.imgCSDMobile,
			btnText: "Explore More",
			btnLink: "/iphoneipad-apps"
		},
		{
			title: "WEB",
			subTitle: "Development",
			text: "We will either build your website from scratch or revamp it to ensure it captivates visitors and drives conversions.",
			image: Images.imgCSDScreen,
			btnText: "Explore More",
			btnLink: "/web-development"
		}
	];
	const workprocesses = [
		{
			icon: Images.csdWorkProcess01,
			title: "Detailed Discussion",
			description: "We thoroughly discuss the project to understand your requirements."
		},
		{
			icon: Images.csdWorkProcess02,
			title: "Risk Assessment",
			description: "We assess and anticipate key risks and present you the project plan."
		},
		{
			icon: Images.csdWorkProcess03,
			title: "Interactive Prototypes",
			description: "We present UI/UX mockups so you can visualize the outcomes."
		},
		{
			icon: Images.csdWorkProcess04,
			title: "Timeline Planning",
			description: "We plan out the development timeline and work hard to hit it."
		}
	];
	return (
		<section className="content-section">
			<div className="our-experties">
				<Container>
					<Row>
						<Col>
							<div className="section-heading text-center">
								<h2><span className="d-block">Areas of Expertise</span></h2>
								<p>Excellence isn’t just a skill; it’s the attitude we bring to every project we develop.</p>
							</div>
						</Col>
					</Row>
					<Row>
						{experties.map((expert, index) => {
							return (
								<Col lg={6} key={index}>
									<div className="develop-block d-flex align-items-center justify-content-between flex-column flex-sm-row">
										<div className="text-block order-1 order-sm-0">
											<h3>{expert.title}<span className="d-block">{expert.subTitle}</span></h3>
											<div className="text-holder">
												<p>{expert.text}</p>
											</div>
											<Link href={expert.btnLink} className="btn btn-solid-blue">{expert.btnText}</Link>
										</div>
										<div className="image-block order-0 order-sm-1">
											<Image width="327" height="417" className="img-fluid" src={expert.image} alt='image' />
										</div>
									</div>
								</Col>
							);
						})}
					</Row>
				</Container>
			</div>
			<div className="work-process">
				<Container>
					<Row>
						<>
							<div className='section-heading text-center'>
								<h2>
									<span className='d-block'>Work Process</span>
								</h2>
							</div>
							{workprocesses.map((process, index) => {
								if (index < 10) {
									index++;
									index = index.toString().padStart(2, 0);
								}
								return (
									<Col xl={3} md={6} key={index} className='column-bottom-margin'>
										<div className="process-block position-relative">
											<span className="process-count">{index}</span>
											<div className="icon-holder">
												<Image width="65" height="65" className='img-fluid' src={process.icon} alt="icon" />
											</div>
											<h3>{process.title}</h3>
											<p>{process.description}</p>
										</div>
									</Col>
								);
							})}
						</>
					</Row>
				</Container>
			</div>
		</section>
	);
}