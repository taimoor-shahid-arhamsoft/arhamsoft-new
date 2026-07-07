import Image from "next/image";
import { Images } from "@/assets/assets";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { companyContactNumberOne, companyUsEmail, companyUAENumberOne, companyUAEEmail, companyUsAddress, companyUAEAddress } from "@/config";

export default function FooterMiddle() {
	const offices = [
		{ location: "USA", email: companyUsEmail, tel: companyContactNumberOne, address: companyUsAddress, icon: Images.iconOfficeUSA },
		{ location: "UAE", email: companyUAEEmail, tel: companyUAENumberOne, address: companyUAEAddress, icon: Images.iconOfficePak1 },
	];
	return (
		<div className="footer-middle">
			<Container>
				<Row>
					{offices.map((office, index) =>
					(
						<Col sm={6} key={index} className='mb-4 mb-xl-0'>
							<div className="office-holder d-flex justify-content-between h-100 gap-lg-2 gap-4 align-items-start mb-4 mb-lg-0">
								<div className="d-flex flex-column flex-grow-1">
									<strong className="location-name">{office.location}</strong>
									<ul className="office-contact-details list-unstyled mb-0 pe-2">
										<li><a href={`mailto:${office.email}`}>{office.email}</a></li>
										{office.tel && <li><a href={`tel:${office.tel.replaceAll(" ", "").replaceAll("-", "").replaceAll("(", "").replaceAll(")", "").replaceAll(".", "")}`}>{office.tel}</a></li>}
										<li>{office.address}</li>
									</ul>
								</div>
								<div className="icon-holder flex-shrink-0 mt-auto">
									<Image width="90" height="106" className="img-fluid" src={office.icon} alt='icon' />
								</div>
							</div>
						</Col>
					)
					)}
				</Row>
			</Container>
		</div>
	);
}