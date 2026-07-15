import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResultSlider from "./ResultSlider";

export default function ResultsBlock(props) {
	return (
		<section className="results-block content-section">
			<Container>
				<Row>
					<Col>
						<div className="section-heading text-center">
							{props.title && <h2>{props?.subTitle}<span className="d-block">{props.title}</span></h2>}
							{props.description && <p>{props.description}</p>}
						</div>
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col lg={8}>
						<div className="content-holder">
							<h2>{props.firstSection?.heading}</h2>
							{props.firstSection?.contentTexts.map((contentText, index) => {
								return (
									<div key={index} dangerouslySetInnerHTML={{ __html: contentText.text }}></div>
								);
							})}
						</div>
						<div className="content-holder">
							<h2>{props.secondSection?.heading}</h2>
							{props.secondSection?.paraBulletsContent ?
								<>
									{props.secondSection?.paraBulletsContent.map((paraBullet, index) => {
										return (
											<div className="content-block" key={index}>
												<p key={index} dangerouslySetInnerHTML={{ __html: paraBullet.paragraph }}></p>
												<ul className="list-unstyled mb-0 bullet-points">
													{paraBullet.bullets?.map((bullet, index) => {
														return (
															<li key={index}>
																<div key={index} dangerouslySetInnerHTML={{ __html: bullet.text }}></div>
															</li>
														);
													})}
												</ul>
											</div>
										);
									})}
								</>
								:
								""
							}
							{props.secondSection?.contentTexts?.map((contentText, index) => {
								return (
									<div key={index} dangerouslySetInnerHTML={{ __html: contentText.text }}></div>
								);
							})}
						</div>
					</Col>
					<Col lg={4}>
						<ResultSlider resultSliderImages={props.resultSliderImages} />
					</Col>
				</Row>
			</Container>
		</section>
	);
}