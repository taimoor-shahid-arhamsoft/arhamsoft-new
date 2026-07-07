"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import { Images } from "@/assets/assets";
import "@/styles/TwoColumns.css";
import { usePathname } from "next/navigation";

export default function TwoColumns(props) {
	const pathname = usePathname();
	return (
		<section className="two-columns content-section">
			<Container>
				<Row>
					<Col xl={6}>
						<div className="expert-block">
							<div className="text-holder mb-5">
								{props.title && <h3>{props.title}</h3>}
								{props.description && <p>{props.description}</p>}
							</div>
							{(pathname === "/data-insights-actions") &&
								<div className="lottie-holder position-relative data-insight-lottie">
									<LottieAnimation animationData={props.animation} />
								</div>
							}
							{(pathname === "/iphoneipad-apps") &&
								<div className="lottie-holder position-relative">
									<LottieAnimation animationData={props.animation} />
									<div className="image-holder">
										<Image className="img-fluid" src={Images.imgMADExpertise} width="500" height="446" alt='MadExpertise Image' />
									</div>
								</div>
							}
							<Link href={props.buttonLink} className="btn btn-solid-blue">{props.buttonText}</Link>
						</div>
					</Col>
					<Col xl={6}>
						<ul className="expertise-list list-unstyled mb-0">
							{props.expertise.map((expert, index) => {
								return (
									<li className="d-flex flex-wrap flex-sm-nowrap" key={index}>
										<div className="icon-holder text-center">
											<Image width="89" height="90" className="d-inline-block align-top img-fluid" src={expert.icon} alt='icon' />
										</div>
										<div className="text-holder">
											<strong className="d-block">{expert.title}</strong>
											<p className="mb-0">{expert.description}</p>
										</div>
									</li>
								);
							})}
						</ul>
					</Col>
				</Row>
			</Container>
		</section>
	);
}