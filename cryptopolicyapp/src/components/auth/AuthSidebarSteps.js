import React from "react";

const AuthSidebarSteps = () => {
    return (
        <>
            <div className="logo">
                <h2>LOGO</h2>
                {/* <img src="../../../assets/images/logo-dummy.png" /> */}
            </div>
            <ul className="nav nav-tabs mt-60" id="vertical-tabs" role="tablist">
                {/* completed  */}
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="signup-tab" data-bs-toggle="tab"
                        data-bs-target="#signup" type="button" role="tab" aria-controls="signup"
                        aria-selected="true">
                        <span className="d-flex align-items-center">
                            <span className="icon-box">
                                <span className="icon-AccountType"></span>
                                {/* <span className="icon-tickmark"></span> */}
                            </span>
                            Sign Up
                        </span>
                        <div className="line"></div>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="emailverify-tab" data-bs-toggle="tab"
                        data-bs-target="#emailverify" type="button" role="tab" aria-controls="emailverify"
                        aria-selected="false">
                        <span className="d-flex align-items-center">
                            <span className="icon-box">
                                <span className="icon-EmailVerification">
                                </span>
                                {/* <span className="icon-tickmark"></span> */}
                            </span>
                            Email Validation
                        </span>
                        <div className="line"></div>
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="idVerify-tab" data-bs-toggle="tab"
                        data-bs-target="#idVerify" type="button" role="tab" aria-controls="idVerify"
                        aria-selected="false">
                        <span className="d-flex align-items-center">
                            <span className="icon-box">
                                <span className="icon-BasicInfo">
                                </span>
                                {/* <span className="icon-tickmark"></span> */}
                            </span>
                            ID Verification
                        </span>
                        {/* <div className="line"></div>  */}
                    </button>
                </li>
            </ul>
        </>
    )
}

export default AuthSidebarSteps;