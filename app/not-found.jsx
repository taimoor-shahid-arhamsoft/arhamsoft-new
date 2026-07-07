import Link from "next/link";
import Image from "next/image";
import { Animations, Images } from "@/assets/assets";
import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";

export async function generateMetadata() {
	return {
		title: "Page Not Found — DataOnMatrix",
	};
}

export default function NotFound() {
	return (
		<div className="not-found vh-100 position-relative">
			<div className="logo-holder">
				<Image
					className="img-fluid"
					width="755"
					height="741"
					src={Images.bgCompanyLogo}
					alt="Company Logo"
				/>
			</div>
			<div className="nf-content-block w-100 h-100 d-flex justify-content-center align-items-center position-relative">
				<div className="nf-content d-flex flex-column align-items-center text-white">
					<p>Oops, something went wrong</p>
					<div className="lottie-holder">
						<LottieAnimation animationData={Animations.notFound404} />
					</div>
					<Link href="/" className="btn btn-solid-white">
						Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
