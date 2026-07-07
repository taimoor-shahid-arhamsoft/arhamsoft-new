import LottieAnimation from "@/components/LottieAnimation/LottieAnimation";
import "./CloudServicesBlock.css";

export default function CloudServiesBlock(props) {
	return (
		<div className={`cloud-services-block ${props.bgColor}`}>
			<div className="lottie-holder">
				<LottieAnimation animationData={props.animation} />
			</div>
			<h3>{props.title}</h3>
		</div>
	);
}