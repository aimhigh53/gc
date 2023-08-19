import React from "react";
import "./footer.css";
import { FaYoutube, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-style">
      <div className="footer-content">
        대한예수교 장로회 과천교회
        <br />
        경기 과천시 관악산길 103
        <br />
        +82 (02) 502 2357
      </div>
      <div className="footer-line"></div>
      <div className="footer-icons text-center">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
      <br />
      <br />
      <br />
      <div className="copyright text-center">
        © Copyright 2023 | All Rights Reserved by Presbyterian Gwacheon Church
        <br />
      </div>
    </div>
  );
};

export default Footer;
