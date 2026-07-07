import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterAbout from "./FooterAbout";
import SubscribeCol from "./SubscribeCol";
import ContactCol from "./ContactCol";
import FollowUs from "./FollowUs";
import FooterNav from "./FooterNav";
import Link from "next/link";

export default function FooterBottom() {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<div className="footer-bottom">
			<div className="upper-block">
				<Container>
					<Row>
						<Col className="position-relative" xxl={2} xl={4} lg={4}>
							<div className="footer-bottom-col no-border ps-0">
								<FooterAbout />
							</div>
						</Col>
						<Col className="position-relative" xxl={4} xl={8} lg={8}>
							<div className="footer-bottom-col">
								<SubscribeCol />
							</div>
						</Col>
						<Col className="position-relative" xxl={3} xl={4} lg={4} md={6}>
							<div className="footer-bottom-col">
								<ContactCol />
							</div>
						</Col>
						<Col className="position-relative" xxl={3} md={6}>
							<div className="footer-bottom-col">
								<FollowUs />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="lower-block">
				<Container>
					<Row>
						<Col xl={4}>
							<div className="copyright-text">
								<p>Copyright &copy; {year} <Link href="/">Data on Matrix</Link> | All Rights Reserved</p>
							</div>
						</Col>
						<Col xl={8} className='d-flex justify-content-end'>
							<FooterNav />
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}