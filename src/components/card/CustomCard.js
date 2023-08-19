import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import "./styles.css";

const CustomCard = ({
  title,
  description,
  contentRenderer,
  onRefresh,
  cardHeight,
}) => {
  const [loading, setLoading] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      const isOverflowing =
        contentElement.scrollHeight > contentElement.clientHeight;
      if (isOverflowing) {
        contentElement.style.overflow = "auto";
      } else {
        contentElement.style.overflow = "visible";
      }
    }
  }, [loading]);

  return (
    <div variant="outlined" style={{ backgroundColor: "rgb(21,20,24)" }}>
      <CardContent>
        <div className={title} style={{ marginRight: "100px" }}>
          {contentRenderer()}
        </div>
        <h5 className="title custom-card-font-title">{title}</h5>
        <h6 className="description custom-card-font-desc">{description}</h6>
      </CardContent>
    </div>
  );
};

export default CustomCard;
