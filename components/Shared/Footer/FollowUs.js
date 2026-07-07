import Image from "next/image";
import { Images } from "@/assets/assets";
import { socialLinks } from "@/config";

const {
	fb, li, x
} = socialLinks;

export default function FollowUs() {
	return (
		<div className="contact-col">
			<h3 className="text-uppercase text-white">Follow Us</h3>
			<ul className="list-unstyled social-links d-flex">
				<li><a className="d-flex justify-content-center align-items-center w-100 h-100" href={fb} target="_blank"><Image className="img-fluid" src={Images.iconFacebook} width="12" height="26" alt="FB icon" /></a></li>
				<li><a className="d-flex justify-content-center align-items-center w-100 h-100" href={li} target="_blank"><Image className="img-fluid" src={Images.iconLinkedIn} width="23" height="23" alt="LI icon" /></a></li>
				<li><a className="d-flex justify-content-center align-items-center w-100 h-100" href={x} target="_blank"><Image className="img-fluid" src={Images.iconX} width="26" height="27" alt="X icon" /></a></li>
			</ul>
		</div>
	);
}