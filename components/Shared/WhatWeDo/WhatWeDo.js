import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WhatWeDoBlock from "../WhatWeDoBlock/WhatWeDoBlock";

export default function WhatWeDo({ title, description, whatWeDos = [] }) {
	return (
		<section className="what-we-do content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							{title && <h2><span className="d-block">{title}</span></h2>}
							{description && <p dangerouslySetInnerHTML={{ __html: description }} />}
						</div>
					</Col>
				</Row>
				<Row>
					{whatWeDos.map((whatwedo, index) => {
						return (
							<Col lg={4} md={6} key={index} className='section-bottom-margin'>
								<WhatWeDoBlock iconDefault={whatwedo.iconDefault} iconHover={whatwedo.iconHover} title={whatwedo.title} description={whatwedo.description} list={whatwedo.list} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}