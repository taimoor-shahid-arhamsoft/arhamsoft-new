import Image from "next/image";

export const TabContent = ({ title, description, imageSrc }) => (
  <div className="tab-content">
    <div className="tab-image">
      <Image src={imageSrc} alt={title} className="img-fluid" width={527} height={341} />
    </div>
    <div className="tab-description">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);