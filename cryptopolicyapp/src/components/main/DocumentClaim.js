import React, { useState } from "react";

import Uplaod from "../../assets/images/FileUpload.png";

import ModelPopup from "../../helpers/ModelPopup";

import Success from "../../assets/images/Checked.png";

const DocumentClaim = () => {

    const [showClaimSuccess, setShowClaimSuccess] = useState(false);

    return (
        <>
            <section className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-16 height-content">
                            <h3>Details</h3>
                            <div className="row mt-16">
                                <div className="col-md-9 col-xl-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>First Name*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter First Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Last Name*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control" placeholder="Enter Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Policy Name*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control"
                                                         placeholder="Enter Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Mobile Number*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control"
                                                       placeholder="Enter Mobile No" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control"
                                                        placeholder="Enter Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Select Amount*</label>
                                                <div className="form-controls">
                                                    <select>
                                                        <option>Select</option>
                                                        <option>1000</option>
                                                        <option>2000</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Description*</label>
                                                <div className="form-controls">
                                                    <textarea rows="5" placeholder="Type here"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div
                                                className="drag-or-browse bordered-div mt-16 file-hidden-upload"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <img src={Uplaod} />
                                                    </div>
                                                    <div>
                                                        <div className="p3">
                                                            <p className="clr-orangepeel">Drag or Browse File</p>
                                                        </div>
                                                        <div className="p4 mt--p5">
                                                            <p>Supported file types: JPG, PNG, PDF</p>
                                                        </div>
                                                        <div className="p4">
                                                            <span className="clr-greychateau">Max file size: 5 MB</span>
                                                        </div>
                                                    </div>
                                                    <div className="p5 ml-auto">
                                                        <span>OR</span>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <button className="btn btn-tertiary">
                                                            Browse
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* file upload progress and done */}
                                            <div className="mt-16 file-upload">
                                                <div className="d-flex align-items-center">
                                                    <img src="../../../assets/images/Image.svg" alt="" />

                                                    <div className="p5">
                                                        <span>Test</span>
                                                        <span>.jpg</span>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <div className="p4 d-none">
                                                            <span>5 MB</span>
                                                        </div>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"
                                                                aria-valuenow="45"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                                style={{width: '45%'}}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <span
                                                        type="span"
                                                        className="ml-auto icon-Cancel"
                                                    ></span>
                                                </div>
                                            </div>

                                            <div>
                                                <button className="btn btn-tertiary btn-simple text-left"><span>+</span>&nbsp;Add More</button>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-40">
                                            <button className="btn btn-text mr-24">Cancel</button>
                                            <button className="btn btn-primary" onClick={() => setShowClaimSuccess(true)}>Claim</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* claim success */}
            <ModelPopup
                key={2}
                show={showClaimSuccess}
                onHide={() => setShowClaimSuccess(false)}
                modelheading={""}
                showheader={"false"}
                className="modal fade"
                dialogClassName="modal-dialog modal-dialog-centered mw-450"
                backdrop="static"
                keyboard={false}
                modelbody={[
                    <>
                        <div className="text-center">
                            <h1>Congratulations!</h1>
                            <img className="pending-img mt-32 mb-24" src={Success} alt="" />

                            <h2 className="clr-orangepeel">Successful</h2>

                            <div className="mt-8">
                                <p className="clr-greychateau">
                                    You request for document claim is accepted.
                                </p>
                            </div>
                        </div>
                    </>,
                ]}
            />

        </>
    )
}

export default DocumentClaim;