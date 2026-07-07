import Image from "next/image";
import "@/styles/WhatWeDoBlock.css";

export default function WhatWeDoBlock({ iconDefault, iconHover, title, description, list = [] }) {
	return (
		<div className="what-we-block text-center">
			<div className="d-flex justify-content-center">
				<div className="icon-holder">
					<Image className="default-icon img-fluid" src={iconDefault} width="99" height="99" alt="icon" />
					<Image className="hover-icon img-fluid" src={iconHover} width="99" height="99" alt="icon" />
				</div>
			</div>
			<h3>{title}</h3>
			{description && <p className="mb-0" dangerouslySetInnerHTML={{ __html: description }} />}
			{list &&
				<ul className="list-unstyled">
					{
						list.map((list, index) => {
							return (
								<li className="position-relative" key={index}>{list.text}</li>
							);
						})
					}

				</ul>
			}
		</div>
	);
}