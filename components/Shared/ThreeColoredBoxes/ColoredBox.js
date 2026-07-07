import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function ColoredBox(props) {
	return (
		<div className={`colored-box position-relative text-white bg-${props.boxColor}`}>
			<span className="counter">{props.counter}</span>
			<div className="icon-holder">
				<Image width="89" height="90" className="img-fluid" src={props.icon} alt="Color Box Icon" />
			</div>
			<h3>{props.title}</h3>
			<p dangerouslySetInnerHTML={{ __html: props.description }} className="mb-0"></p>
			{
				props.link &&
				<Link href={props.linkTo} className="colored-box-link">
					<span>{props.linkText}</span>
					<span className="arrow"><FontAwesomeIcon icon={faArrowRight} /></span>
				</Link>
			}
		</div>
	);
}