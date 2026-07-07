import { Images } from "@/assets/assets";
import Image from "next/image";
export default function OurExperties() {
	const experties = [
		{icon:Images.iconExperts, description:"250+ technical experts"},
		{icon:Images.iconSolutions, description:"Automation for everyday work"},
		{icon:Images.iconBespokeSkills, description:"Production-ready AI systems"},
		{icon:Images.iconOnDemand, description:"On-demand team anytime"},
		{icon:Images.iconReasonableValue, description:"Reasonable value-based models"},
		{icon:Images.iconReliable, description:"Reliable back-up resources"},
	];
	return (
		<ul className="list-unstyled our-skills-partner d-flex flex-wrap mb-0">
			{experties.map((expert,index)=>{
				return(
					<li key={index} className="d-flex">
						<div className="icon-holder">
							<Image className="img-fluid mx-auto" src={expert.icon} width="43" height="48" alt="icon" />
						</div>
						<div className="text-holder">
							<p>{expert.description}</p>
						</div>
					</li>
				);
			})}
		</ul>
	);
}