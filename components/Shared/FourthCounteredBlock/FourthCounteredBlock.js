import Image from "next/image";
import "@/styles/WhatWeDoBlock.css";

export default function FourthCounteredBlock(props) {
	return (
		<div className="what-you-get-block">
			<span className="counter">{props.index}</span>
			<div className="icon-holder">
				<Image className="hover-icon img-fluid" src={props.iconDefault} width="66" height="66" alt="icon" />
			</div>
			<h3>{props.title}</h3>
			<p className="mb-0">{props.description}</p>
		</div>
	);
}