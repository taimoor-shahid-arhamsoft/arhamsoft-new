"use client";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Image from "next/image";

const phaseNumber = {
  "phase1": "I",
  "phase2": "II",
  "phase3": "III",
  "phase4": "IV",
};

export default function OurTabs(props) {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={`tab-${phaseNumber["phase1"]}`}>
      <Nav
        variant="pills"
        className="d-flex justify-content-center position-relative"
      >
        {props.solutionTabContent.map((tabContent, index) => {
          const paddedIndex = phaseNumber[`phase${index + 1}`];
          return (
            <Nav.Item key={`nav-${paddedIndex}`}>
              <Nav.Link
                eventKey={`tab-${paddedIndex}`}
                className="transition position-relative"
              >
                <span>
                  {props.stagePhaseText} {paddedIndex}
                </span>
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
      <Tab.Content className="solution-tabs-content">
        {props.solutionTabContent.map((tabContent, index) => {
          const paddedIndex = phaseNumber[`phase${index + 1}`];
          return (
            <Tab.Pane
              eventKey={`tab-${paddedIndex}`}
              key={`tabpane-${paddedIndex}`}
            >
              <div className="d-flex justify-content-between flex-column flex-md-row">
                <div className="image-holder">
                  <Image
                    src={tabContent.tabImage}
                    width="527"
                    height="480"
                    alt={`Solution ${props.stagePhaseText} ${paddedIndex}`}
                  />
                </div>
                <div className="content-holder">
                  <h3>{tabContent.heading}</h3>
                  {tabContent.contentTexts?.map((contentText, contentIndex) => (
                    <div key={`content-${paddedIndex}-${contentIndex}`}>
                      <div
                        dangerouslySetInnerHTML={{ __html: contentText.text }}
                      ></div>
                      {contentText.keyPoints && (
                        <ul className="list-unstyled key-points">
                          {contentText.keyPoints.map((keyPoint, keyIndex) => (
                            <li
                              key={`keypoint-${paddedIndex}-${contentIndex}-${keyIndex}`}
                              className="position-relative"
                              dangerouslySetInnerHTML={{
                                __html: keyPoint.text,
                              }}
                            ></li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  {tabContent.keyPoints && (
                    <ul className="list-unstyled key-points mb-0">
                      {tabContent.keyPoints.map((keyPoint, keyIndex) => (
                        <li
                          key={`keypoint-${paddedIndex}-${keyIndex}`}
                          className="position-relative"
                          dangerouslySetInnerHTML={{ __html: keyPoint.text }}
                        ></li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Tab.Pane>
          );
        })}
      </Tab.Content>
    </Tab.Container>
  );
}
