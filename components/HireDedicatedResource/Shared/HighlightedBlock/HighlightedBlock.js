import Container from "react-bootstrap/Container";
import "@/styles/HireDedicatedResource/HighlightedBlock.css";

export default function HighlightedBlock(props) {
	return (
		<section className="highlighted-block text-center content-bottom-section">
			<Container>
				<div className="text-block">
					{props.content.map((text, index) => {
						return (
							<p key={index} dangerouslySetInnerHTML={{ __html: text.text }}></p>
						);
					})}
				</div>
			</Container>
		</section>
	);
}