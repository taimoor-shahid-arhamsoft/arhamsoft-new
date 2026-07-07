import Image from "next/image";
import "@/styles/HowWeDoBlock.css";

export default function HowWeDoBlock({ icon, iconHover, title, keyPoints = [], description }) {
	return (
		<div className="how-we-do-block">
			{icon && <div className="icon-holder">
				<Image className="img-fluid icon" src={icon} width="89" height="90" alt="Icon" />
				{iconHover && <Image className="img-fluid icon-hover" src={iconHover} width="89" height="90" alt="Icon" />}
			</div>
			}
			<h3>{title}</h3>
			{keyPoints ?
				<ul className="key-points list-unstyled mb-0">
					{keyPoints?.map((keypoint, index) => {
						return (
							<li key={index} className="position-relative">{keypoint.title}</li>
						);
					})}
				</ul>
				:
				""
			}
			{description &&
				<p className="mb-0">{description}</p>
			}
		</div>
	);
}