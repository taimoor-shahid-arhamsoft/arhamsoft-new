import Image from "next/image";
import { Images } from "@/assets/assets";
import { companyEmailId, companyContactNumberOne } from "@/config";
import Link from "next/link";
export default function ContactCol() {

	return (
		<div className="contact-col">
			<h3 className="text-uppercase text-white">Contact Us</h3>
			<ul className="list-unstyled contact-links text-white">
				<li className="d-felx align-items-center">
					<span className="icon-holder d-inline-block align-top">
						<Image width="18" height="15" className="img-fluid" src={Images.iconEnvellope2} alt="icon" />
					</span>
					<Link href={`mailto:${companyEmailId}`}>{companyEmailId}</Link>
				</li>
				<li className="d-felx align-items-center">
					<span className="icon-holder d-inline-block align-top">
						<Image width="18" height="18" className="img-fluid" src={Images.iconPhone} alt="icon" />
					</span>
					<Link href={`tel:${companyContactNumberOne.replace(/\./g, "")}`}>{companyContactNumberOne}</Link>
				</li>
			</ul>
		</div>
	);
}