import { Container, Tab, Col, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

export const Project = () => {

  const project = [
    {
      title: "LIKE mascitra",
      description: "Logo design",
      imgUrl: projImg1,
    },
    {
      title: "Evee",
      description: "web design",
      imgUrl: projImg2,
    },
    {
      title: "Praktek kesehatan",
      description: "Logo design",
      imgUrl: projImg3,
    },
    {
        title: "Praktek kesehatan",
        description: "Logo design",
        imgUrl: projImg3,
    },
    {
        title: "Ketanu",
        description: "Web design",
        imgUrl: projImg4,
    },
    {
        title: "LIKE mascitra",
        description: "Logo design",
        imgUrl: projImg1,
      }
  ];

  return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                {/* <Nav.Link eventKey="first">Logo</Nav.Link> */}
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        project.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp}></img>
        </section>
  )
}