import React from "react";

const DigitalWalletSummary = () => {
    return (
        <>
            <div className="card mt-16 height-content d-none">
                <h3>Wallet Summary</h3>
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
                                    <label>Deposit Amount:</label>
                                    <div className="form-controls">
                                        <input type="text" className="form-control"
                                            value="5000" placeholder="1xxx" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Withdrawal Amount:</label>
                                    <div className="form-controls">
                                        <input type="text" className="form-control"
                                            value="3000" placeholder="1xxx" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Claimed Amount:</label>
                                    <div className="form-controls">
                                        <input type="text" className="form-control"
                                            value="9000" placeholder="1xxx" />
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

export default DigitalWalletSummary;