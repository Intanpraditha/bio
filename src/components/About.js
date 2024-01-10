import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const About = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="about">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>About Me</h2><br /><br />
                            <p>I am a web designer and illustrator passionate about merging creativity with technology. Throughout my educational journey, I have explored the beauty of web design and artistic expression through illustration. The blend of handcraft and code inspires me to continuously learn and grow. I am committed to creating impactful and empowering work for society.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}