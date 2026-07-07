import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";
import "./Footer.css";

export default function Footer() {
	return (
		<footer id="footer">
			<FooterTop />
			<FooterMiddle />
			<FooterBottom />
		</footer>
	);
}