import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ResultsBlockColored(props) {

	return (
		<section className="results-block-colored content-bottom-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							{props.title && <h2>{props?.subTitle}<span className="d-block">{props.title}</span></h2>}
							{props.description && <p>{props.description}</p>}
						</div>
					</Col>
				</Row>
				<Row>
					{props.results.map((result, index) => {
						return (
							<Col lg={6} className="result-col" key={index}>
								<div className="result-block d-flex justify-content-between align-items-center" style={{ background: result.boxColor }}>
									<div className="content-holder">
										<h2>
											{result.title}
											{result.subTitle && <span className="d-block">{result.subTitle}</span>}
										</h2>
										{result.resultlist && Array.isArray(result.resultlist) ? (
											<ul className="p-0 m-0">
												{result.resultlist.map((resultlist, index) => (
													<li key={index} className="position-relative">{resultlist}</li>
												))}
											</ul>
										) : (
											<p className="mb-0">{result.text}</p>
										)}
									</div>

									<div className="icon-holder">
										<Image src={result.icon} width="163" height="154" alt="result icon" />
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</Container>
		</section>
	);
}