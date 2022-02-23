import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Components/Footer/Footer";
import TheNavigantionBar from "../Components/Navbar/TheNavigantionBar";

import "./Call.css";
function Call() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Container fluid className="px-0" style={{ overflowX: "hidden" }}>
      <TheNavigantionBar></TheNavigantionBar>
      <Row>
        <Col className="px-0">
          <div className="call_background_img">
            <div className="call_coming_soon">
              <h3>COMING SOON</h3>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Call;
