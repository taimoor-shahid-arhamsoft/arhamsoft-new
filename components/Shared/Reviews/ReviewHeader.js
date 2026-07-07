import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReviewHeader({ title }) {
	return (
		<div className="d-flex align-items-center flex-wrap justify-content-center justify-content-md-start mb-2 mb-lg-0">
			{title}
			<div className="d-flex align-items-center flex-wrap mb-2 mb-sm-0 ms-2">
				<span className="rating-value">5.0</span>
				<ul className="list-unstyled rating-stars ms-2 mb-0 d-flex align-items-center">
					<li><FontAwesomeIcon icon={faStar} /></li>
					<li><FontAwesomeIcon icon={faStar} /></li>
					<li><FontAwesomeIcon icon={faStar} /></li>
					<li><FontAwesomeIcon icon={faStar} /></li>
					<li><FontAwesomeIcon icon={faStar} /></li>
				</ul>
			</div>
		</div>
	);
}