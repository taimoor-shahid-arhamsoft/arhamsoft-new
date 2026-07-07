import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import { Animations, Images } from "@/assets/assets";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "@/styles/GameBanner.css";

export default function GameBanner() {
	return (
		<section className="page-banner game-banner text-white">
			<Container className="h-100">
				<div className="d-lg-flex align-items-center h-100">
					<div className="banner-content">
						<strong className="d-block">Game Development</strong>
						<h1>Embrace Our Game Expertise</h1>
						<p>Data on Matrix, your tech partner for exciting games, specializes in creating top-tier PC and mobile games. From fresh concepts to game overhauls, we bring your video game vision to life.</p>
						<div className="btn-holder pt-3">
							<Link href="/contact-us" className="btn btn-solid">Let’s Create Your Game</Link>
						</div>
					</div>
					<div className="img-baner-lottie position-relative d-lg-flex justify-content-center align-items-center">
						<div className="image-holder banner-image d-flex justify-content-center align-items-center">
							<Image className="img-fluid" src={Images.bgBannerGameDevelopment} width="766" height="570" alt='Game Development Services' />
						</div>
						<div className="lottie-holder">
							<LottieAnimation animationData={Animations.bannerGD} />
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}