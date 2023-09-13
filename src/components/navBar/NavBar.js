import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/img/header/logo.png";
import "./NavBar.css";
import "../../assets/font/HeaderFont.css";

const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
        fixed="top"
      >
        {/*청년교구 로고*/}
        <Navbar.Brand href="#home">
          <img className="logo" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-nwavbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#community">청년교구 공동체</Nav.Link>
            <Nav.Link href="#teams">청년 사역팀</Nav.Link>
            <Nav.Link href="#sns">청년교구 SNS</Nav.Link>
            <Nav.Link href="#gchome">과천교회 홈페이지</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
