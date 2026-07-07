import Image from "next/image";
import { Images } from "@/assets/assets";
import Link from "next/link";

export default function FooterAbout() {
	return (
		<strong className="fooger-logo d-inline-block align-top">
			<Link href="/" className="d-inline-block align-top">
				<Image className="w-100" width="220" height="61" src={Images.siteLogo} alt="Site Logo" />
			</Link>
		</strong>
	);
}