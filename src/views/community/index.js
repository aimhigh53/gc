import React from "react";

import "./community.css";
import community2 from "../../assets/img/community/2.webp";
import community3 from "../../assets/img/community/3.webp";
import CustomCard from "../../components/card/CustomCard";
import { Grid } from "@mui/material";

const imageRendererOne = () => {
  return (
    <Grid container>
      <Grid>
        <img
          className="d-block custom-img-small"
          src={community2}
          alt="community"
        />
      </Grid>
    </Grid>
  );
};

const imageRendererTwo = () => {
  return (
    <Grid container>
      <Grid>
        <img
          className="d-block custom-img-small "
          src={community3}
          alt="community"
        />
      </Grid>
    </Grid>
  );
};

const Community = () => {
  return (
    <div id="community">
      <div className="community">
        <h5 className="pt-5 text-center gc">더불어숲 과천교회</h5>
        <h1 className="pt-3 text-center font-details">청년교구 공동체</h1>
        <div className="community body">
          <Grid container>
            <Grid item xs={6}>
              <CustomCard
                title={"2청년부"}
                description={"20-25세 대학부 청년"}
                contentRenderer={imageRendererTwo}
              />
            </Grid>
            <Grid item xs={6}>
              <CustomCard
                title={"1청년부"}
                description={"26-33세 직장인 청년"}
                contentRenderer={imageRendererOne}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Community;
