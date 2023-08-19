import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./sns.css";
import Profile from "../../assets/img/profile/profile.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import sns from "../../assets/img/about/3.webp";

const Sns = () => {
  return (
    <div id="sns">
      <div className="sns">
        <h1 className="pt-3 text-center font-details pb-2">청년교구 SNS</h1>
        <Container>
          <Row className=" pb-5 align-items-center">
            <Col xs={12} md={6}>
              <img
                  className="d-block w-200 custom-img "
                  src={sns}
                  alt="sns"
              />
            </Col>
            <Col xs={12} md={6}>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Sns;
