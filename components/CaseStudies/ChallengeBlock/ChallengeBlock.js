import Container from "react-bootstrap/Container";
export default function ChallengeBlock(props) {
	return (
		<section className="challenge-block content-section">
			<Container>
				<div className="content-outer">
					<div className="content-inner">
						<h2>{props.title}</h2>
						<p>{props.description}</p>
						<ul className="list-unstyled">
							{props.keyPoints.map((keyPoint, index) => {
								return (
									<li className="position-relative" key={index}>
										{keyPoint.strongText ? (
											<>
												<strong>{keyPoint.strongText}</strong> {keyPoint.text}
											</>
										) : (
											keyPoint.text
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</Container>
		</section>
	);
}