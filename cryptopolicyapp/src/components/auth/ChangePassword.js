import React from "react";

const ChangePassword = () => {
    return (
        <>
            <div className="authcontent-inner">
                <h1>Change Password</h1>
                <p className="clr-greychateau">Never share your password with anyone.</p>
                <div className="mt-40">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label>New Password*</label>
                                <div className="form-controls">
                                    <input type="password" placeholder="10 or more characters" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <label>Confirm Password*</label>
                                <div className="form-controls">
                                    <input type="password" placeholder="10 or more characters" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="block-ul">
                        <li className="p4 d-flex align-items-center">
                            <span className="icon-Password"></span>
                            <span>At least 10 characters in length</span>
                        </li>
                        <li className="p4 d-flex align-items-center">
                            <span className="icon-Alphabets"></span>
                            <span>At least one uppercase and lowercase letter</span>
                        </li>
                        <li className="p4 d-flex align-items-center">
                            <span className="icon-Numeric"></span>
                            <span>At least one number</span>
                        </li>
                        <li className="p4 d-flex align-items-center">
                            <span className="icon-SpecialCharacters"></span>
                            <span>At least one special character</span>
                        </li>
                    </ul>
                    <div className="mt-50">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword;