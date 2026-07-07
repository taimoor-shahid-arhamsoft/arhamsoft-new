import Image from "next/image";
import { Images } from "@/assets/assets";
import Link from "next/link";

export default function HeaderLogo() {
	return (
		<strong className="logo d-inline-block align-top">
			<Link href="/" className="d-inline-block align-top">
				<Image width="220" height="61" className="img-fluid" src={Images.siteLogo} alt="Site Logo" />
			</Link>
		</strong>
	);
}