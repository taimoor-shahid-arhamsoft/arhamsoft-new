import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ColoredBox from "./ColoredBox";
import Link from "next/link";

export default function ThreeColoredBoxes({ title, text, boxesContent = [], ButtonFoot, buttonLink = "/", buttonText }) {
	return (
		<section className="three-boxes content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							{title && <h2><span className="d-block">{title}</span></h2>}
							{text && <p>{text}</p>}
						</div>
					</Col>
				</Row>
				<Row>
					{boxesContent.map((boxContent, index) => {
						const arrayLength = boxesContent.length;
						if (index < 10) {
							index++;
							index = index.toString().padStart(2, 0);
						}
						return (
							<Col xxl={`${arrayLength == 4 ? "3" : "4"}`} xl={`${arrayLength == 4 ? "6" : "4"}`} lg={`${arrayLength == 4 ? "6" : "4"}`} key={index} className='column-bottom-margin'>
								<ColoredBox counter={index} icon={boxContent.icon} boxColor={boxContent.boxColor} title={boxContent.title} description={boxContent.description} link={boxContent.link} linkTo={boxContent.linkTo} linkText={boxContent.linkText} />
							</Col>
						);
					})}
				</Row>
				{ButtonFoot &&
					<Row>
						<Col>
							<div className="button-foot text-center">
								<Link href={buttonLink} className="btn btn-solid-blue">{buttonText}</Link>
							</div>
						</Col>
					</Row>
				}
			</Container>
		</section>
	);
}