import React from "react";

import classes from "./glassContainer.module.css";

const glassContainer = (props) => {
  return (
    <div style={{ zIndex: "-1" }} className={classes.upperLayer}>
      "Well" in the app name implies a focus on well-being, which aligns with the goal of promoting mental health and well-being.
      "Mind" suggests a connection to mental health, indicating that the app addresses mental health challenges and concerns.
      "Pro" can be associated with professional support or guidance, indicating that the app may offer resources and tools created or endorsed by mental health professionals.
      
    </div>
  );
};

export default glassContainer;
