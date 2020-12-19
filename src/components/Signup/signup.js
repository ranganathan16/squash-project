import React, { useState } from "react";

import classes from "./signup.module.css";
import CompanyDetails from "./companyDetails";
import PersonalDetails from "./personalDetails";
import EmailVerification from "./emailVerification";
import tick from "../../asserts/icons/tick.png";
import { useHistory } from "react-router-dom";

const Signup = () => {
  document.title = "Registration";
  const [activeForm, setActiveForm] = useState(0);

  const [personalDetailsData, setPersonalDetailsData] = useState({
    fullName: "",
    gender: "",
    state: "",
    phone: "",
    countryCode: "",
    countryName: "",
    countryFlag: "",
    stateData: "",
    countryData: "",
  });

  const [companyDetailsData, setCompanyDetailsData] = useState({
    companyName: "",
    emailId: "",
    jobTitle: "",
    yearOfExp: "",
    termsAndCond: false,
    companylogo: "",
  });
  const history = useHistory();

  const formBackHandler = (val) => {
    setActiveForm(val);
  };

  const formSubmitHandler = (formType, data) => {
    switch (formType) {
      case "personalDetails":
        setPersonalDetailsData(data);
        setActiveForm(1);
        break;
      case "companyDetails":
        setCompanyDetailsData(data);
        setActiveForm(2);
        break;
      case "emailVerification":
        let personalData = {
          fullName: personalDetailsData.fullName,
          gender: personalDetailsData.gender,
          countryName: personalDetailsData.countryData.name,
          state: personalDetailsData.stateData.name,
          countryCode: personalDetailsData.countryCode,
          phone: personalDetailsData.phone,
        };

        localStorage.setItem(
          "userdetails",
          JSON.stringify({
            ...personalData,
            ...companyDetailsData,
          })
        );
        history.push({ pathname: "/success", state: { success: true } });
        break;

      default:
        break;
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <ul className={classes.formList}>
          <li className={activeForm === 0 ? classes.activeItem : ""}>
            {" "}
            <span className={classes.itemIcon}>
              {0 < activeForm ? <img src={tick} alt=""></img> : 1}
            </span>{" "}
            <span className={classes.itemName}>Personal Details</span>
          </li>
          <li className={activeForm === 1 ? classes.activeItem : ""}>
            {" "}
            <span className={classes.itemIcon}>
              {1 < activeForm ? <img src={tick} alt=""></img> : 2}{" "}
            </span>{" "}
            <span className={classes.itemName}> Company Details</span>
          </li>
          <li className={activeForm === 2 ? classes.activeItem : ""}>
            {" "}
            <span className={classes.itemIcon}>
              {2 < activeForm ? <img src={tick} alt=""></img> : 3}{" "}
            </span>{" "}
            <span className={classes.itemName}>Email Verification</span>
          </li>
        </ul>
      </div>

      <div style={{ display: activeForm === 0 ? "block" : "none" }}>
        <PersonalDetails
          initialValue={personalDetailsData}
          formSubmitHandler={formSubmitHandler}
          formBackHandler={formBackHandler}
        />
      </div>
      <div style={{ display: activeForm === 1 ? "block" : "none" }}>
        <CompanyDetails
          initialValue={companyDetailsData}
          formSubmitHandler={formSubmitHandler}
          formBackHandler={formBackHandler}
        />
      </div>
      <div style={{ display: activeForm === 2 ? "block" : "none" }}>
        <EmailVerification
          formSubmitHandler={formSubmitHandler}
          formBackHandler={formBackHandler}
          emailId={companyDetailsData.emailId}
        />
      </div>
    </div>
  );
};

export default Signup;
