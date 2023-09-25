import NavBar from "../../components/navBar/NavBar";
import styles from "./Frame.module.css";
import { motion, useAnimation } from "framer-motion/dist/framer-motion";

import React, { useEffect } from "react";

//asset
import chungOne from "../../assets/img/home/1chung.png";
import chungTwo from "../../assets/img/home/2chung.png";
import hisPeople from "../../assets/img/home/hispeople.png";
import gideon from "../../assets/img/home/gideon.png";
import media from "../../assets/img/home/media_team.png";
import mediaPlatform from "../../assets/img/home/media_platform_team.png";
import newFamily from "../../assets/img/home/new_family_team.png";
import social from "../../assets/img/home/social_team.png";

import welcome from "../../assets/img/home/welcome.png";
import highFiveSticker from "../../assets/img/home/highfive_sticker.png";
import rightArrow from "../../assets/img/home/right_arrow.png";

import mediaOne from "../../assets/img/home/media1.png";
import mediaTwo from "../../assets/img/home/media2.png";
import mediaThree from "../../assets/img/home/media3.png";

import Carousel from "./component/Carousel";
import { useScrollPosition } from "../../utils/motion/UseScrollPosition";

const Home = () => {
  const scrollPosition = useScrollPosition();

  const opacityFirst = scrollPosition > 300 ? 1 : 0;
  const opacitySecond = scrollPosition > 900 ? 1 : 0;
  const opacityThird = scrollPosition > 2000 ? 1 : 0;

  return (
    <>
      <div className={styles.div}>
        <div className={styles.div}>
          <div className={styles.footer}>
            <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
            <div className={styles.frameParent}>
              <div className={styles.parent}>
                <div className={styles.div1}>대한예수교 장로회 과천교회</div>
                <div className={styles.div2}>
                  <p className={styles.p}>경기 과천시 관악산길 103</p>
                  <p className={styles.p}>(02) 502 2357</p>
                </div>
              </div>
              <div className={styles.copyright2023AllRightsReseWrapper}>
                <div className={styles.copyright2023AllContainer}>
                  <p
                    className={styles.p}
                  >{` © Copyright 2023 All Rights Reserved by `}</p>
                  <p className={styles.p}>Presbyterian Gwacheon Church</p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: opacityThird }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className={styles.sns}>
              <div className={styles.btn}>
                <div className={styles.div1}>과천교회 청년부 인스타그램</div>
                <img className={styles.btnChild} alt="" src="/vector-1.svg" />
              </div>
              <div className={styles.btn1}>
                <div className={styles.div1}>과천교회 청년부 유튜브</div>
                <img className={styles.btnChild} alt="" src="/vector-11.svg" />
              </div>
              <div className={styles.div5}>
                <p className={styles.p2}>과천교회 청년부 소셜미디어에서</p>
                <p className={styles.p3}>더 많은 모습을 확인해보세요!</p>
              </div>
              <img className={styles.img3Icon} alt="" src={mediaThree} />
              <img className={styles.img2Icon} alt="" src={mediaTwo} />
              <img className={styles.img1Icon} alt="" src={mediaOne} />
            </div>
            <div className={styles.div6}>
              <img className={styles.image5Icon} alt="" src={welcome} />
              <b className={styles.b}>청년교구 새가족 온라인 등록</b>
              <div className={styles.btn2}>
                <div className={styles.div1}>새가족 등록 페이지 이동</div>
                <img className={styles.btnChild} alt="" src={rightArrow} />
              </div>
              <div className={styles.helloSticker}>
                <div className={styles.helloStickerChild} />
                <b className={styles.hello}>Hello</b>
              </div>
              <img
                className={styles.highfiveStickerIcon}
                alt=""
                src={highFiveSticker}
              />
              <div className={styles.welcomeSticker}>
                <div className={styles.welcome}>Welcome</div>
                <img className={styles.icon} alt="" src="/.svg" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: opacitySecond }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className={styles.div8}>
              <div className={styles.div9}>
                <div className={styles.div10}>
                  <div className={styles.group}>
                    <b className={styles.b1}>히스피플 찬양팀</b>
                    <div className={styles.div11}>{`주일 예배 찬양 섬김 `}</div>
                  </div>
                  <img
                    className={styles.maskGroupIcon}
                    alt=""
                    src={hisPeople}
                  />
                </div>
                <div className={styles.div12}>
                  <div className={styles.group}>
                    <b className={styles.b1}>기드온 찬양대</b>
                    <div className={styles.div11}>주일 예배 성가대</div>
                  </div>
                  <img className={styles.maskGroupIcon} alt="" src={gideon} />
                </div>
                <div className={styles.div14}>
                  <div className={styles.group}>
                    <b className={styles.b1}>사회봉사부</b>
                    <div className={styles.div15}>
                      지역사회를 넘어 다양한 세대 섬김
                    </div>
                  </div>
                  <img className={styles.maskGroupIcon} alt="" src={social} />
                </div>
                <div className={styles.div16}>
                  <div className={styles.group}>
                    <b className={styles.b1}>예배사역부(방송/안내)</b>
                    <div className={styles.div17}>
                      <p className={styles.p}>주일 예배 방송 송출/</p>
                      <p className={styles.p}>주일 예배 안내</p>
                    </div>
                  </div>
                  <img className={styles.maskGroupIcon} alt="" src={media} />
                </div>
                <div className={styles.div18}>
                  <div className={styles.group}>
                    <b className={styles.b1}>새가족부</b>
                    <div className={styles.div17}>
                      <p className={styles.p}>청년교구 가족이 되어가는</p>
                      <p className={styles.p}>과정 안내</p>
                    </div>
                  </div>
                  <img className={styles.icon2} alt="" src={newFamily} />
                </div>
                <div className={styles.div20}>
                  <div className={styles.group}>
                    <b className={styles.b1}>미디어사역부</b>
                    <div className={styles.div17}>
                      <p className={styles.p}>주일 주보 제작 및</p>
                      <p className={styles.p}>청년교구 SNS 사역</p>
                    </div>
                  </div>
                  <img className={styles.icon3} alt="" src={mediaPlatform} />
                </div>
              </div>
              <div className={styles.div21}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <div className={styles.div22}>청년 사역팀</div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/vector-3.svg"
                  />
                </div>
                <div
                  className={styles.div23}
                >{`과천교회 청년교구 사역팀 `}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: opacityFirst }}
            transition={{ duration: 1 }}
          >
            <div className={styles.div24}>
              <div className={styles.parent4}>
                <img className={styles.icon4} alt="" src={chungTwo} />
                <div className={styles.div25}>
                  <div className={styles.wrapper}>
                    <b className={styles.b1}>2청년부</b>
                  </div>
                  <div className={styles.div26}>
                    <p className={styles.p}>20-25세</p>
                    <p className={styles.p}>대학부 청년</p>
                  </div>
                </div>
              </div>
              <div className={styles.parent5}>
                <img className={styles.icon4} alt="" src={chungOne} />
                <div className={styles.div25}>
                  <div className={styles.wrapper}>
                    <b className={styles.b1}>1청년부</b>
                  </div>
                  <div className={styles.div26}>
                    <p className={styles.p}>26-33세</p>
                    <p className={styles.p}>직장인 청년</p>
                  </div>
                </div>
              </div>
              <div className={styles.sectionTitle}>
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/vector-21.svg"
                  />
                  <div className={styles.div22}>더불어 숲 과천교회</div>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/vector-31.svg"
                  />
                </div>
                <div className={styles.div30}>청년교구 공동체 구성</div>
              </div>
            </div>
          </motion.div>
          <div className={styles.inner}>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
