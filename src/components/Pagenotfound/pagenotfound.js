import React from "react";
import classes from "./pagenotfound.module.css";
import sadImg from "../../asserts/icons/sad.png";
import { Link } from "react-router-dom";
const Pagenotfound = () => {
  document.title = "404";
  return (
    <div className={classes.container}>
      <div>
        <img src={sadImg} alt="404" />
        <div className={classes.fournotfour}>404</div>
        <div className={classes.fournotfour}>Page not found</div>
        <p>
          The page you are looking for doesn't exist or an other error occured.
          <Link to="/"> Go back</Link>
        </p>
      </div>
    </div>
  );
};

export default Pagenotfound;
