import React from "react";

import { history } from "../../helpers/history";

const BuyPolicy = () => {

    const gotoReview = () => {
        history.push("/buy-policy-review");
    }


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
                                                <label>CNIC Number*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control" placeholder="Enter Identity Number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Mobile Number*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control" placeholder="Enter Number" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Wallet Address*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control" placeholder="0x23kzxxxxxxxxx" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Policy Name*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control" placeholder="abc@abc.com" />
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
                                        <div className="col-12 mt-40">
                                            <button className="btn btn-text mr-24" onClick={() => history.push("/policy-details")}>Back</button>
                                            <button className="btn btn-primary" onClick={gotoReview}>Review</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default BuyPolicy;