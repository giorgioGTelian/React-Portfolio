import React from "react";
// Styles
import "./Skills.css";
// Multi Carousel Component
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Skills meter Svg
import aOs from "../assets/image/aOs.png";
import w40k from "../assets/image/w40k.png";
import old_world from "../assets/image/old_world.png";
import GTR from "../assets/image/GTR.png";
// Background Image
import colorSharp from "../assets/image/color-sharp.png";

function Skills() {
  // Carousel Responsive Settings
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // Return JSX
  return (
    // React Fragment
    <>
      {/* Skils Section */}
      <section id="skills" className="skills">
        {/* Bootstrap Grid System */}
        {/* Container */}
        <Container>
          {/* Row */}
          <Row>
            {/* Col */}
            <Col>
              {/* Skills Box */}
              <div className="skills-box">
                {/* Skills Title */}
                <h2>Missione</h2>
                {/* Skills Description */}
                <p>
                  La nostra missione è diffondere il gioco nel mondo <br /> siamo sempre alla ricerca di nuovi giocatori
                </p>
                {/* Skills Carousel */}
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skills-slider"
                >
                  {/* Skills Slider Item */}
                  <div className="item">
                    <img src={aOs} alt="" />
                    <h5>AOS</h5>
                  </div>
                  {/* Skills Slider Item */}
                  <div className="item">
                    <img src={w40k} alt="" />
                    <h5>Warhammer40k</h5>
                  </div>
                  {/* Skills Slider Item */}
                  <div className="item">
                    <img src={old_world} alt="" />
                    <h5>Old World</h5>
                  </div>
                  {/* Skills Slider Item */}
                  <div className="item">
                    <img src={GTR} alt="" />
                    <h5>Giochi di ruolo</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Background Image */}
        <img src={colorSharp} className="background-image-left" />
      </section>
    </>
  );
}

export default Skills;
