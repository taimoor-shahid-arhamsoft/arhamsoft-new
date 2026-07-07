import Image from "next/image";
import Container from "react-bootstrap/Container";

export default function ClientFeedBack(props) {
	return (
		<section className="client-feedback content-section">
			<Container>
				<div className="feedback-outer">
					<div className="feedback-inner d-flex justify-content-between align-items-center flex-column flex-md-row">
						<div className="author-details d-flex flex-column align-items-center">
							<div className="author-image-outer">
								<div className="author-image-inner">
									<Image className="img-fluid" width="162" height="162" src={props.clientImage} alt="Client Image" />
								</div>
							</div>
							{props.clientName &&
								<span className="author-name d-block text-center">{props.clientName}</span>
							}
							{props.clientDesignation &&
								<span className="author-name d-block text-center">{props.clientDesignation}</span>
							}
							{props.companyName &&
								<span className="author-name d-block text-center">{props.companyName}</span>
							}
						</div>
						<div className="feedback-text">
							<blockquote className="position-relative">
								{props.feedbackText.map((text, index) => {
									return (
										<q key={index}>{text.text}</q>
									);
								})}
							</blockquote>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}