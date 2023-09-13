import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -250px;
  text-align: center;
  strong {
    font-size: 1.5em;
  }
  div {
    //color: ${(props) => props.theme.titleColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    .main {
      font-size: 30px;
      font-family: 'Happiness-Sans-Title', sans-serif
    }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          과천교회 청년교구
          <br />
          <span>
            <strong>깊어지는 믿음</strong>
          </span>
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;
