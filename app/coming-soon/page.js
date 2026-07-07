import Link from "next/link";
import Image from "next/image";
import { Images } from "@/assets/assets";

export default function ComingSoon() {
	return (
		<div className="not-found vh-100 position-relative">
			<div className="logo-holder">
				<Image className="img-fluid" width="755" height="742" src={Images.bgCompanyLogo} alt='Company Logo' />
			</div>
			<div className="nf-content-block w-100 h-100 d-flex justify-content-center align-items-center position-relative">
				<div className="nf-content d-flex flex-column align-items-center text-white">
					<h1>Coming Soon</h1>
					<p>The page is coming soon... stay tuned! </p>
					<Link href="/" className="btn btn-solid-white">Back to Home</Link>
				</div>
			</div>
		</div>
	);
}