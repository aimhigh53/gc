import React from "react";
import { FaYoutube, FaEnvelope, FaInstagram } from "react-icons/fa";
import styles from "../../views/Main/Frame.module.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
