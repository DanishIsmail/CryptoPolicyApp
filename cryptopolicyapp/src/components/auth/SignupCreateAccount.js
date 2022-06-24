import React from "react";

const signupCreateAccount = () => {

    return (
        <>
            <h1>Create Account</h1>
            <p className="clr-greychateau">Orci ultricies netus mattis consectetur mi mauris cursus.</p>
            <div className="mt-40">
                <div className="mt-40">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>First Name*</label>
                                <div className="form-controls">
                                    <input placeholder="Enter First Name" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Last Name*</label>
                                <div className="form-controls">
                                    <input placeholder="Enter Last Name" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Date of Birth*</label>
                                <div className="form-controls">
                                    <input placeholder="dd/MM/yyyy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>CNIC Number*</label>
                                <div className="form-controls">
                                    <input placeholder="Enter Number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Policy Owner Email Address*</label>
                                <div className="form-controls">
                                    <input placeholder="Enter Email" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nationality*</label>
                                <div className="form-controls">
                                    <input placeholder="dd/MM/yyyy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Mobile Number*</label>
                                <div className="form-controls">
                                    <input placeholder="Enter Number" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Passowrd*</label>
                                <div className="form-controls">
                                    <input placeholder="dd/MM/yyyy" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Confirm Password*</label>
                                <div className="form-controls">
                                    <input placeholder="Enter Number" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-40">
                            <button className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default signupCreateAccount;