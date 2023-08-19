import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./teams.css";
import IntroCard from "./component/IntroCard";
import { Typography } from "@mui/material";

const Teams = () => {
  return (
    <div className="pt-4 pb-4" id="teams">
      <CardDeck>
        <h1 className="custom-card-font-title">{"청년 사역팀"}</h1>
      </CardDeck>
      <CardDeck>
        <IntroCard title={"히스피플찬양단"} content={"Team hispeople"} />
        <IntroCard title={"기드온찬양대"} content={"Team Gideon"} />
        <IntroCard title={"사회봉사부"} content={"Team Social Service"} />
      </CardDeck>
      <CardDeck>
        <IntroCard
          title={"예배사역부(방송/안내)"}
          content={"Team Worship Service/BroadCast Engineer"}
        />
        <IntroCard title={"새가족부"} content={"Team New Family"} />
        <IntroCard title={"미디어사역부"} content={"Team Social Media"} />
      </CardDeck>
    </div>
  );
};

export default Teams;
