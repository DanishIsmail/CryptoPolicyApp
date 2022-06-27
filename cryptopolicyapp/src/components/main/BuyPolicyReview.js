import React, { useState } from "react";

import Edit from "../../assets/images/Edit.svg";

import Pending from "../../assets/images/Pending.png";

import Success from "../../assets/images/Checked.png";

import { Link } from "react-router-dom";

import { history } from "../../helpers/history";

import ModelPopup from "../../helpers/ModelPopup";

const BuyPolicyReview = () => {

    const [showBuyPending, setShowBuyPending] = useState(false);

    const [showBuySuccess, setShowBuySuccess] = useState(false);

    return (
        <>
            <section className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-16 height-content review-policy">
                            <h3>Review your Policy</h3>
                            <div className="row mt-16 align-items-center">
                                <div className="col-6">
                                    <h4>Basic Info</h4>
                                </div>
                                <div className="col-6">
                                    <Link to={"/buy-policy"} className="anchor a-icon justify-content-end">
                                        <img src={Edit} />
                                        Edit
                                    </Link>
                                </div>
                                <div className="col-xl-5 col-md-9 col-12 mt-16">
                                    <div className="double-weight-text p4 mb-8">
                                        <span><b>First Name:&nbsp;</b></span>
                                        <span>John</span>
                                    </div>
                                    <div className="double-weight-text p4 mb-8">
                                        <span><b>Last Name:&nbsp;</b></span>
                                        <span>Doe</span>
                                    </div>
                                    <div className="double-weight-text p4 mb-8">
                                        <span><b>CNIC Number:&nbsp;</b></span>
                                        <span>000000000000</span>
                                    </div>
                                    <div className="double-weight-text p4 mb-8">
                                        <span><b>Mobile Number:&nbsp;</b></span>
                                        <span>00000000000</span>
                                    </div>
                                    <div className="double-weight-text p4">
                                        <span><b>Email:&nbsp;</b></span>
                                        <span>john@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row mt-16 align-items-center">
                                <div className="col-6">
                                    <h4>Wallet Details</h4>
                                </div>
                                <div className="col-6">
                                    <Link to={"/buy-policy"} className="anchor a-icon justify-content-end">
                                        <img src={Edit} />
                                        Edit
                                    </Link>
                                </div>
                                <div className="col-xl-5 col-md-9 col-12 mt-16">
                                    <div className="double-weight-text p4 mb-8">
                                        <span><b>Wallet Address:&nbsp;</b></span>
                                        <span>0x00000000000000</span>
                                    </div>
                                    <div className="double-weight-text p4 mb-8">
                                        <span><b>Policy Name:&nbsp;</b></span>
                                        <span>Lorem ipsum</span>
                                    </div>
                                    <div className="double-weight-text p4 mb-8">
                                        <span><b>Amount:&nbsp;</b></span>
                                        <span>000000000000</span>
                                    </div>
                                </div>

                                <div className="col-12 mt-40">
                                    <button className="btn btn-text mr-24" onClick={() => history.push("/buy-policy")}>Back</button>
                                    <button className="btn btn-primary" onClick={() => setShowBuyPending(true)}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* buy policy pending */}
            <ModelPopup
                key={1}
                show={showBuyPending}
                onHide={() => setShowBuyPending(false)}
                modelheading={""}
                showheader={"false"}
                className="modal fade"
                dialogClassName="modal-dialog modal-dialog-centered mw-450"
                backdrop="static"
                keyboard={false}
                modelbody={[
                    <>
                        <div className="text-center">
                            <h1>Buy Policy</h1>
                            <img className="pending-img mt-32 mb-24" src={Pending} alt="" />

                            <h2 className="clr-orangepeel">Pending!</h2>

                            <div className="mt-8">
                                <p className="clr-greychateau">
                                    Your request is on pending, stay tuned. It will be verified in 24 hours.
                                </p>
                            </div>
                        </div>
                    </>,
                ]}
            />

            {/* buy policy success */}
            <ModelPopup
                key={2}
                show={showBuySuccess}
                onHide={() => setShowBuySuccess(false)}
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
                                    You request for buy policy is accepted.
                                </p>
                            </div>
                        </div>
                    </>,
                ]}
            />

        </>
    )
}

export default BuyPolicyReview; 