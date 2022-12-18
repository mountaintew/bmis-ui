import {useScrollTrigger} from "@mui/material";
import React from "react";

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#512DA8" : "transparent",
      color: trigger ? "#FAFAFA" : "#512DA8",
      transition: "0.3s",
      boxShadow: "none",
      padding: "5px 0px",
    },
  });
};

const ScrollToNav = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollToNav;
