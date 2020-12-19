import React from "react";
import classes from "./success.module.css";
import checkicon from "../../asserts/icons/checkicon.jpg";
import { Redirect, useHistory, useLocation } from "react-router-dom";
const Success = () => {
  document.title = "Success";
  let redirect = true;
  const location = useLocation();
  const history = useHistory();
  if (
    typeof location.state !== "undefined" &&
    typeof location.state.success !== "undefined" &&
    history.action === "PUSH"
  ) {
    redirect = false;
  }

  return (
    <div className={classes.container}>
      {redirect ? <Redirect to="/" /> : null}
      <img src={checkicon} alt="thank" />
      <p>Registration completed successfully</p>
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Ok
      </button>
    </div>
  );
};

export default Success;
