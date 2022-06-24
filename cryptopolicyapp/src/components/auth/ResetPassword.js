import React from "react";

const ResetPassword = () => {
    return (
        <>
            <div className="authcontent-inner">
                <h1 className="mt-8">Recover Password</h1>

                {/* normal screen  */}
                <div className="">
                    <p className="clr-greychateau">Enter you email to help us find you. We’ll send you a link to recover your account. </p>
                    <div className="mt-40">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Email*</label>
                                    <div className="form-controls">
                                        <input placeholder="Enter Email" />
                                        <p className="error">*Please enter correct email</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-16">
                                <button className="btn btn-primary ">Send Email</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* resend screen */}
                <div className="d-none">
                    <p className="clr-greychateau">An email has been sent, please click the link in the email to recover your password.    </p>
                    <div className="mt-40">
                        <div className="row">
                            <div className="col-12 mt-16">
                                <button className="btn btn-primary ">Re-Send Email</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ResetPassword;