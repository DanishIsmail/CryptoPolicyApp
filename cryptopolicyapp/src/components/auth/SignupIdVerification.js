import React from "react";

import Success from "../../assets/images/icons/Checked.svg";

import Info from "../../assets/images/Info.svg";

import Pict from "../../assets/images/pic.svg";

import Scan from "../../assets/images/scan.svg";

const SignupIdVerification = () => {

    return (
        <>
            <h1>Verify Your Identity</h1>
            {/* normal screen text */}
            <div className="normal">
                <p className="clr-greychateau">This process is designed to verify your identity and protect you from identity
                    theft. Verify by clicking the start button.</p>

                <div className="mt-40 d-flex align-items-center">
                    <button className="btn btn-primary">Start</button>
                </div>
            </div>

            {/* step1 screen text */}
            <div className="normal d-none">
                <p className="clr-greychateau">This process is designed to verify your identity and protect you from identity
                    theft.</p>

                <div className="d-flex align-items-center mt-40">
                    <div
                        className="upload-boxes upload-box-selected d-flex align-items-center justify-content-center me-4"
                        data-bs-toggle="modal" data-bs-target="#scanPic">
                        <div className="text-center">
                            <span className="icon-Camera fs-48"></span>
                            {/* <img src={Camera} alt="" className="mb-24" /> */}
                            <h5 className="mt-20">Take Photo</h5>
                        </div>
                    </div>

                    <div
                        className="upload-boxes d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <span className="icon-UploadFile fs-48"></span>
                            {/* <img src="" alt="" className="mb-24" /> */}
                            <h5 className="mt-20">Upload File</h5>
                        </div>
                    </div>

                </div>

                <div className="mt-40 d-flex align-items-center">
                    <button className="btn btn-text mr-24">Back</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>

            {/* step2 screen text */}
            <div className="normal d-none">
                <p className="clr-greychateau">Your picture has been taken successfully.</p>

                <div className="mt-40">
                    <img src={Pict} alt="" />
                </div>

                <div className="mt-40 d-flex align-items-center">
                    <button className="btn btn-text mr-24">Back</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>

            {/* success msg */}
            <div className="msgs mt-40 d-none">
                <img src={Success} alt="" />
                <h2 className="mt-24 mb-1">
                    Successful!
                </h2>
                <p className="clr-greychateau">Your ID has been verified successfully!</p>
                <div className="mt-40">
                    <button className="btn btn-primary">Sign In</button>
                </div>
            </div>


            <div class="modal fade" id="scanPic" tabindex="-1" aria-labelledby="scanPicLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered mw-360">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="text-center">
                                <img src={Scan} alt="" />

                                    <div class="mt-60 d-flex align-items-center">
                                        <button class="btn btn-text mr-24">Cancel</button>
                                        <button class="btn btn-primary">Capture</button>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupIdVerification;