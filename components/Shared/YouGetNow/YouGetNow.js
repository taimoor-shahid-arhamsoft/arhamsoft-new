import { Container } from "react-bootstrap";
import "./YouGetNow.css";

export default function YouGetNow() {

    const YouGetNow = [
        { id: 1, title: "Reduced Risk", desc: "Level up your DevOps by mitigating risks before they become significant." },
        { id: 2, title: "Swift Adaptability", desc: "Scale to success with easy customization, outright performance and longevity." },
        { id: 3, title: "Accelerate Processes", desc: "Streamlined workflows for increased productivity through process automation solutions." },
        { id: 4, title: "Enhanced Security", desc: "Enhanced resilience with automated compliance checks, disaster recovery and more." },
    ];

    return (
        <section className="you-get-now">
            <Container>
                <div className="you-get-content d-flex align-items-center justify-content-between">
                    <div className="heading-block position-relative pt-0">
                        <h3>Tangible <span className="d-inline-block">DevOps Gains</span></h3>
                        <p>We align Devs with Ops to help businesses transform their people, processes and tools into a competitive edge.</p>
                    </div>
                    <div className="rest-area">
                        {
                            YouGetNow.map((get, index) => {
                                return (
                                    <div key={index} className='rest-area-content'>
                                        <h4>{get.title}</h4>
                                        <p>{get.desc}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
}