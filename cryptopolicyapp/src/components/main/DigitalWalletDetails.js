import React from "react";

const DigitalWalletDetails = () => {
    return (
        <>
            {/* detail admin */}
            <div className="card mt-16 height-content d-none">
                <h3>Wallet Details</h3>
                <div className="mt-8">
                    <p className="clr-greychateau">
                        Enter Details below.
                    </p>
                </div>
                <div className="row mt-32">
                    <div className="col-md-8 col-xl-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Lorem Ipsum*</label>
                                    <div className="form-controls">
                                        <input type="text" className="form-control"
                                            placeholder="Lorem Ipsum" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Lorem Ipsum*</label>
                                    <div className="form-controls">
                                        <input type="text" className="form-control"
                                            placeholder="Lorem Ipsum" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Lorem Ipsum*</label>
                                    <div className="form-controls">
                                        <input type="text" className="form-control"
                                            placeholder="Lorem Ipsum" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Lorem Ipsum*</label>
                                    <div className="form-controls">
                                        <input type="text" className="form-control"
                                            placeholder="Lorem Ipsum" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mt--1">
                                    <div className="form-checkbox">
                                        <input type="checkbox" id="agree" />
                                        <label htmlFor="agree">
                                            Save my payment details for future purchases
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-40">
                    <button className="btn btn-text mr-24">Back</button>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>

            {/* detail user */}
            <div className="card mt-16 height-content d-none">
                <h3>Wallet Details</h3>
                <div className="row mt-16">
                    <div className="col-md-8 col-xl-5">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="form-group">
                                    <div className="form-controls">
                                        <input type="text" className="form-control address" readOnly={true}
                                            placeholder="Address: 0xa473a5eddc3440db"
                                            value="Address: 0xa473a5eddc3440db" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-20">
                                <div className="form-group">
                                    <label>Available Balance:</label>
                                    <div className="form-controls">
                                        <input type="text" className="form-control"
                                            value="1000" placeholder="1xxx" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Transaction History:</label>
                                    <div className="transaction-history-box">
                                        <div className="d-flex align-items-center mb-3">
                                            <p>Transaction 1</p>
                                            <div className="ms-auto">
                                                <h4>$ 10.00</h4>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p>Transaction 2</p>
                                            <div className="ms-auto">
                                                <h4>$ 50.00</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DigitalWalletDetails;