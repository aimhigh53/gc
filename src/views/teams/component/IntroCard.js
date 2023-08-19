import Card from "react-bootstrap/Card";
import React from "react";

const IntroCard = ({ title, content }) => {
  return (
    <div>
      <Card className="focus mb-3">
        <Card.Body>
          <Card.Title className="text-center  card-title">{title}</Card.Title>
          <hr />
          <Card.Text className="card-text d-flex justify-content-start flex-column">
            {content}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default IntroCard;
