import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import classes from "./signup.module.css";
import { allowOnlyNumber } from "../../shared/utility";
import Logo from "../../asserts/icons/emptyLogo.png";

const CompanyDetails = (props) => {
  const formik = useFormik({
    initialValues: {
      ...props.initialValue,
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Please enter your company name"),
      emailId: Yup.string().required("Please enter your email-id").email(),
      jobTitle: Yup.string().required("Please enter job title"),
      yearOfExp: Yup.number().max(60, "Enter valid Experience"),
      termsAndCond: Yup.boolean().oneOf(
        [true],
        "Please accept term and condition for signup"
      ),
      companylogo: Yup.string().required("Please upload your company logo"),
    }),

    onSubmit: (value) => {
      props.formSubmitHandler("companyDetails", value);
    },
  });

  const onChangeImage = (event) => {
    formik.setFieldError("companylogo", "");
    var file = event.target.files[0];
    let imageType = ["image/png", "image/jpeg"];
    if (imageType.includes(file.type)) {
      formik.setFieldValue("companylogo", file);
    } else {
      formik.setFieldError("companylogo", "Please upload .png,.jpeg logo");
    }
  };

  return (
    <div>
      <div className={classes.formHeading}>
        <h2> Add your company details </h2>
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry.
        </p>
      </div>

      <div className={classes.formSection}>
        <form onSubmit={formik.handleSubmit}>
          <div className={classes.companyLogo}>
            <div
              className={classes.logoInput}
              onClick={() => document.getElementById("imageUpload").click()}
            >
              <img
                className={
                  formik.values.companylogo === ""
                    ? classes.cmpUploadImg
                    : classes.cmpSelectedImg
                }
                src={
                  formik.values.companylogo !== ""
                    ? URL.createObjectURL(formik.values.companylogo)
                    : Logo
                }
                alt="logo"
              />
            </div>
            <div className={classes.comlogoText}>Upload your company logo</div>
          </div>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            style={{ display: "none" }}
            onChange={(event) => onChangeImage(event)}
            accept=".png,.jpg,.jpeg"
          />
          <div className={classes.errorMessage}>
            {formik.errors.companylogo !== "" ? (
              formik.errors.companylogo
            ) : (
              <span>&emsp;</span>
            )}
          </div>

          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            {...formik.getFieldProps("companyName")}
          />
          <div className={classes.errorMessage}>
            {formik.touched.companyName && formik.errors.companyName ? (
              formik.errors.companyName
            ) : (
              <span>&emsp;</span>
            )}
          </div>

          <label htmlFor="emailId">Email Id </label>
          <input
            type="text"
            id="emailId"
            name="emailId"
            {...formik.getFieldProps("emailId")}
          />
          <div className={classes.errorMessage}>
            {formik.touched.emailId && formik.errors.emailId ? (
              formik.errors.emailId
            ) : (
              <span>&emsp;</span>
            )}
          </div>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            {...formik.getFieldProps("jobTitle")}
          />
          <div className={classes.errorMessage}>
            {formik.touched.jobTitle && formik.errors.jobTitle ? (
              formik.errors.jobTitle
            ) : (
              <span>&emsp;</span>
            )}
          </div>

          <label htmlFor="yearOfExp">Years of Eperience</label>
          <input
            type="text"
            id="yearOfExp"
            name="yearOfExp"
            {...formik.getFieldProps("yearOfExp")}
            onKeyPress={(e) => allowOnlyNumber(e, 3)}
          />
          <div className={classes.errorMessage}>
            {formik.touched.yearOfExp && formik.errors.yearOfExp ? (
              formik.errors.yearOfExp
            ) : (
              <span>&emsp;</span>
            )}
          </div>
          <div className={classes.termsAndCond}>
            <label>
              <input
                type="checkbox"
                id="termsAndCond"
                name="termsAndCond"
                {...formik.getFieldProps("termsAndCond")}
              />{" "}
              I accept the{" "}
              <span className={classes.terms}> Terms and Conditions </span>
            </label>
          </div>
          <div className={classes.errorMessage}>
            {formik.touched.termsAndCond && formik.errors.termsAndCond ? (
              formik.errors.termsAndCond
            ) : (
              <span>&emsp;</span>
            )}
          </div>

          <span>
            <button
              type="button"
              className={classes.backBtn}
              onClick={() => props.formBackHandler(0)}
            >
              Back
            </button>
            <button type="submit" className={classes.btnOTP}>
              Send OTP
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default CompanyDetails;
