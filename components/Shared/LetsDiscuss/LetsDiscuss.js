import Link from "next/link";
import { Animations } from "@/assets/assets";
import Container from "react-bootstrap/Container";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "@/styles/LetsDiscuss.css";

export default function LetsDiscuss({ title, description, buttonText }) {
	return (
		<section className="lets-discuss">
			<Container>
				<div className="lets-discuss-outer">
					<div className="lets-discuss-inner d-flex align-items-center justify-content-between flex-column flex-lg-row">
						<div className="text-block text-white">
							<h2>{title}</h2>
							<p dangerouslySetInnerHTML={{ __html: description }}></p>
						</div>
						<div className="d-flex align-items-center justify-content-end flex-column flex-sm-row">
							<Link href="#contact-us" className="btn btn-solid-white">{buttonText}</Link>
							<div className="lottie-outer">
								<div className="lottie-inner w-100 h-100 d-flex justify-content-center align-items-center">
									<LottieAnimation animationData={Animations.commentBubble} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}