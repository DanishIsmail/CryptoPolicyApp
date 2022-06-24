import React from "react";

import Success from "../../assets/images/icons/Checked.svg";

import Info from "../../assets/images/Info.svg";

const SingupEmailVerification = () => {

    return (
        <>
            <h1>Validate Your Email Address</h1>
            {/* normal screen text */}
            <div className="normal">
                <p className="clr-greychateau">Your email validation is pending. A confirmation link has been sent to
                    abc@gmail.com to verify your email.</p>
                <div className="mt-40 d-flex align-items-center">
                    <button className="btn btn-primary mr-24">Resend Link</button>
                    <button className="btn btn-text">Change Email</button>
                </div>
                <div className="mt-24 p5">
                    <span className="d-flex align-items-center"><span className="icon-Info"></span>
                        <span className="clr-greychateau fs-12">This link will expire after <b>&nbsp;48 hours</b>.</span>
                        </span>
                </div>
            </div>
            {/* info msg  */}
            <div className="msgs mt-40 d-none">
                <img src={Info} alt="" />
                
                <p className="clr-greychateau mt-8">Your email validation is still pending! Resend link to cristofer@gmail.com to
                    verify your email?</p>
                <div className="mt-40 d-flex align-items-center">
                    <button className="btn btn-primary mr-24">Resend Link</button>
                    <button className="btn btn-text">Change Email</button>
                </div>
            </div>
            {/* success msg  */}
            <div className="msgs mt-40 d-none">
                <img src={Success} alt="" />
                <h2 className="mt-24 mb-1">
                    Successful!
                </h2>
                <p className="clr-greychateau">Your email has been verified successfully!</p>
                <div className="mt-40">
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
        </>
    )
}

export default SingupEmailVerification;