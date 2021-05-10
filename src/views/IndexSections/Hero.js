import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">   
                
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="10">

                      <h1 className = "font-italic text-white text-underline"> 
                        Rental Manual & Simulation
                        </h1>
                      <h1 className="text-white"> <strong class ="em">
                        provide
                        </strong></h1>
                  </Col>
                  </Row>
                  </div>
            </Container>
         
           
          </section>
        </div>
      
    );
  }
}

export default Hero;