import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../images/about.png';

const AboutUs = () => {
    return (
        <div>
            <Container>
              <Row>
                  <Col md={6}>
                      <h2>Why Tripmate</h2>
                      <p>Energistically communicate e-business collaboration and idea-sharing rather than team building process improvements. Collaboratively incentivize maintainable technologies through highly efficient web services. Appropriately actualize inexpensive outsourcing and clicks-and-mortar catalysts for change.

                      </p>
                  </Col>
                  <Col md={6}>
                     <img src={about} alt="" style={{width: '100%', height: '100%'}}/>
                  </Col>
                  </Row>
            </Container>
        </div>
    );
};

export default AboutUs;