import React from "react";

const Signin = () => {
    return (
        <div className="authcontent-inner">
            <h1>Sign In</h1>
            <p className="clr-greychateau">Enter your email and password below to sign in to your account.</p>
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
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Password*</label>
                            <div className="form-controls">
                                <input placeholder="Enter Password" />
                                <p className="error">*Your password is wrong. Please enter correct password</p>
                            </div>
                            <div className="d-flex justify-content-between mt-8">
                                <div className="form-group">
                                    <div className="form-checkbox">
                                        <input type="checkbox" id="agree" />
                                        <label htmlFor="agree">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <a href="#" className="anchor a-simple">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <button className="btn btn-primary ">Sign In</button>

                        <p className="fs-12 mt-24 clr-nero">Don’t have an account? <a href="#"
                            className="anchor a-line">Sign Up</a> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;