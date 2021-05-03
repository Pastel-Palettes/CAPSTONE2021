import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">   
                
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                      <h3 className="text-black font-weight-bold mb-0 mr-2">
                        CUBE LAB SERVICE 테스트
                      </h3>
                    <p className="lead text-black">
                      Rapid 3D Innovative Fixturing Leader<br></br>
                      Creative value
                    </p>
                    
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
              
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
