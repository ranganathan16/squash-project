import { React, useState } from "react";
import classes from './signup.module.css'
import OtpInput from "react-otp-input";


const EmailVerification=(props)=>{
    const [otpCode,setOtpCode] = useState('')
    
    const otpHandler = (e)=>{
        e.preventDefault()
        if(otpCode.length===5)
        {
            props.formSubmitHandler('emailVerification')
        }
    }
    return(
        <div >
           <div className={classes.formHeading}>
          <h2>Enter Your OTP</h2>  
        <p> For your security we need to verify your identity. We sent a 5-digit code to <span className="heading-bold"><b>{props.emailId}.</b> </span>Please enter it below.
</p>
</div>
<div className={classes.formSection}>
        <form  onSubmit={otpHandler}>
        <label>Enter your code</label>    
        <OtpInput
        containerStyle={classes.otpInputContainer}
        inputStyle={classes.otpInput}
        numInputs={5}
        separator={<span></span>}
        value={otpCode}
        onChange={(otp)=>setOtpCode(otp)}
        isInputNum
        />

<span>
  <button type="button" className={classes.backBtn} onClick={()=>props.formBackHandler(1)}>Back</button>
  <button type="submit" className={classes.btnOTP} disabled={(otpCode.length!==5)}>Verify</button>
</span>
        </form>
</div>
<div className={classes.emailNote}>
    <p>Didn't receive the email? Check your email span filter for an email 
        from <span className={classes.clickLogin}>squashtask.000webhostapp.com</span>
        </p>


</div>
    </div>
    )
}

export default EmailVerification;