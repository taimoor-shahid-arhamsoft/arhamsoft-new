import Image from "next/image";

export default function TopDynamicBlock(props) {
	return (
		<div className="dynamic-service-block">
			<div className="icon-holder">
				<Image width="60" height="66" className="img-fluid" src={props.icon} alt="icon" />
			</div>
			<h3>{props.title}</h3>
			<ul className="key-points list-unstyled mb-0">
				{props.keyPoints.map((keypoint,index)=>{
					return(
						<li className="position-relative" key={index}>{keypoint.text}</li>
					);
				})}
			</ul>
		</div>
	);
}