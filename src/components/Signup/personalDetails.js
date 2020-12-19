import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import classes from "./signup.module.css";
import {
  allowOnlyNumber,
  countryList,
  customStyles,
} from "../../shared/utility";
import Select, { components } from "react-select";

const PersonalDetails = (props) => {
  const [stateList, setStateList] = useState([]);
  const { Option } = components;
  const formik = useFormik({
    initialValues: {
      ...props.initialValue,
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Please enter your name"),
      gender: Yup.string().required("Please choose a gender."),
      countryId: Yup.number().required("Please select a country."),
      state: Yup.string().required("Please select a  state"),
      phone: Yup.string()
        .required("Please enter your phone number")
        .min(7, "Enter valid mobile number"),
    }),

    onSubmit: (value) => {
      props.formSubmitHandler("personalDetails", value);
    },
  });

  const genderHandler = (e) => {
    formik.setFieldValue("gender", e.target.value);
  };

  const countryHandler = (data) => {
    setStateList(data.state);
    formik.setFieldValue("countryData", data);
    formik.setFieldValue("countryId", data.id);
    formik.setFieldValue("countryCode", data.code);
    formik.setFieldValue("countryName", data.name);
    formik.setFieldValue("countryFlag", data.flag);
    return;
  };

  const CustomSelectOption = (props) => (
    <Option {...props} key={props.data.id}>
      <div className={classes.countryOpt}>
        <img src={props.data.flag} alt="flag"></img>
        <p> {props.data.name}</p>
      </div>
    </Option>
  );

  return (
    <div>
      <div className={classes.formHeading}>
        <h2> Add your personal details </h2>
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry.
        </p>
      </div>

      <div className={classes.formSection}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            {...formik.getFieldProps("fullName")}
          />

          <div className={classes.errorMessage}>
            {formik.touched.fullName && formik.errors.fullName ? (
              formik.errors.fullName
            ) : (
              <span>&emsp;</span>
            )}
          </div>

          <label htmlFor="lname">Gender</label>
          <div className={classes.gender}>
            <button
              className={`${
                formik.values.gender === "male" ? classes.genderselected : ""
              }`}
              type="button"
              value="male"
              onClick={genderHandler}
            >
              Male
            </button>
            <button
              className={`${
                formik.values.gender === "female" ? classes.genderselected : ""
              }`}
              type="button"
              value="female"
              onClick={genderHandler}
            >
              Female
            </button>
            <button
              className={`${
                formik.values.gender === "other" ? classes.genderselected : ""
              }`}
              type="button"
              value="other"
              onClick={genderHandler}
            >
              other
            </button>
          </div>
          <div className={classes.errorMessage}>
            {formik.touched.gender && formik.errors.gender ? (
              formik.errors.gender
            ) : (
              <span>&emsp;</span>
            )}
          </div>
          <label htmlFor="countryId">Country</label>

          <Select
            id="countryId"
            name="countryId"
            DropdownIndicator
            className={classes.countrySelect}
            value={formik.values.countryData}
            options={countryList}
            onChange={countryHandler}
            styles={customStyles}
            isMulti={false}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            components={{
              Option: CustomSelectOption,
            }}
            placeholder="Select country..."
            hideSelectedOptions={false}
          ></Select>
          <div className={classes.errorMessage}>
            {formik.touched.countryId && formik.errors.countryId ? (
              formik.errors.countryId
            ) : (
              <span>&emsp;</span>
            )}
          </div>
          <label htmlFor="state">State</label>
          <Select
            name="state"
            className={classes.stateSelect}
            value={formik.values.stateData}
            id="state"
            onChange={(val) => {
              formik.setFieldValue("state", val.name);
              formik.setFieldValue("stateData", val);
            }}
            options={stateList}
            getOptionLabel={(option) => `${option.name}`}
            getOptionValue={(option) => option.name}
            placeholder="Select state..."
          />

          <div className={classes.errorMessage}>
            {formik.touched.state && formik.errors.state ? (
              formik.errors.state
            ) : (
              <span>&emsp;</span>
            )}
          </div>

          <label>Phone</label>
          <div className={classes.phonefield}>
            <div>
              {formik.values.countryFlag !== "" ? (
                <img src={formik.values.countryFlag} alt=""></img>
              ) : null}
              {formik.values.countryCode !== "" ? (
                <p>+{formik.values.countryCode}</p>
              ) : null}
            </div>
            <input
              type="text"
              className={classes.textInput}
              name="phone"
              {...formik.getFieldProps("phone")}
              onKeyPress={(e) => allowOnlyNumber(e, 15)}
            />
          </div>
          <div className={classes.errorMessage}>
            {formik.touched.phone && formik.errors.phone ? (
              formik.errors.phone
            ) : (
              <span>&emsp;</span>
            )}
          </div>

          <input type="submit" value="Next" />
        </form>
      </div>

      <div className={classes.login}>
        <p>
          Already have an account?{" "}
          <span className={classes.clickLogin}>Log in </span>.
        </p>
      </div>
    </div>
  );
};

export default PersonalDetails;
