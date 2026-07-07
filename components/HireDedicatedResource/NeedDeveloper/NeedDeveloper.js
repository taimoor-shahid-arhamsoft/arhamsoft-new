import Link from "next/link";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import "@/styles/NeedDeveloper.css";

export default function NeedDeveloper({ className, title, description, buttonLink = "/", buttonText, image }) {
    return (
        <section className={`need-developer ${className ? className : ""}`}>
            <Container>
                <div className="need-developer-outer">
                    <div className="need-developer-inner align-items-center justify-content-between flex-column flex-lg-row">
                        <div className="text-block text-white">
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <Link href={buttonLink} className="btn btn-solid-blue">{buttonText}</Link>
                        </div>
                        <div className="need-developer-image">
                            <Image src={image} alt="Need Developer" className="img-fluid" width={385} height={300} />
                        </div>
                    </div>
                </div>
            </Container>
        </section >
    );
}