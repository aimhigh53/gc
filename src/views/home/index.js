import NavBar from "../../components/navBar/NavBar";
import CustomCarousel from "../../components/carousel/Carousal";
import TitleMessage from "../../components/title-message/TitleMessage";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "./home.css";
import Projects from "../projects";
import Blog from "../blog-section";
import Contact from "../contact";
import Footer from "../../components/footer/Footer";
import React from "react";
import Sns from "../sns";
import Teams from "../teams";
import Community from "../community";

const Home = () => {
  return (
    <>
      <div className="App" style={{ position: "relative" }}>
        <NavBar />
        <CustomCarousel />
        <TitleMessage />
        <div className="custom-bg">
          <Parallax
            blur={{ min: -30, max: 30 }}
            bgImageAlt=""
            // strength={-200}
            style={{ height: "100%", width: "100%" }}
          >
            <div>
              <Container className="container-box rounded">
                <Fade left duration={3000}>
                  <Community />
                </Fade>
              </Container>
            </div>
          </Parallax>
          <div className="custom-bg">
            <Parallax
              blur={{ min: -30, max: 30 }}
              bgImageAlt=""
              strength={-200}
            >
              <div>
                <Container className="container-box rounded">
                  <Fade right duration={2000}>
                    <Teams />
                  </Fade>
                </Container>
              </div>
            </Parallax>
          </div>
          <div>
            {/*<div>*/}
            {/*  <Container className="container-box rounded">*/}
            {/*    <Slide bottom duration={1000}>*/}
            {/*      <hr />*/}
            {/*      <Projects />*/}
            {/*    </Slide>*/}
            {/*  </Container>*/}
            {/*</div>*/}
            <div>
              <Container className="container-box rounded">
                <Fade left duration={2000}>
                  <Sns />
                </Fade>
              </Container>
            </div>

            {/*<div>*/}
            {/*  <Container className="container-box rounded">*/}
            {/*    <Slide left duration={2000}>*/}
            {/*      <hr />*/}
            {/*      <Blog />*/}
            {/*    </Slide>*/}
            {/*  </Container>*/}
            {/*</div>*/}
          </div>
          <hr />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
