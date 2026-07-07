import Image from "next/image";

export default function ServiceCard({ image, title, description }) {
  return (
    <div className="service-card">
      <div className="image-wrapper">
        <Image src={image} alt={title} width="400" height="300" className="img-fluid" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}