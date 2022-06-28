import React, { useState } from "react";

import { history } from "../../helpers/history";

import ModelPopup from "../../helpers/ModelPopup";

import Success from "../../assets/images/Checked.png";

const AddHospital = () => {

    const [showAddSuccess, setShowAddSuccess] = useState(false);

    return(
        <>
        <section className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-16 height-content">
                            <h3>Enter Details to Add New Hospital</h3>
                            <div className="row mt-16">
                                <div className="col-md-9 col-xl-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Hospital Name*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control" placeholder="Enter Name" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>City*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control" placeholder="Enter City" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Discount%*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control" placeholder="Enter Discount" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group">
                                                <label>Phone No*</label>
                                                <div className="form-controls">
                                                    <input type="text" className="form-control" placeholder="Enter Phone No" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>


                                <div className="col-md-12 mt-40">
                                    <button className="btn btn-text mr-24" onClick={() => history.push("/hospitals")}>Back</button>
                                    <button className="btn btn-primary" onClick={() => setShowAddSuccess(true)}>Add Hospital</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* buy policy success */}
            <ModelPopup
                key={1}
                show={showAddSuccess}
                onHide={() => setShowAddSuccess(false)}
                modelheading={""}
                showheader={"false"}
                className="modal fade"
                dialogClassName="modal-dialog modal-dialog-centered mw-450"
                backdrop="static"
                keyboard={false}
                modelbody={[
                    <>
                        <div className="text-center">
                            <h1>Add Hospital!</h1>
                            <img className="pending-img mt-32 mb-24" src={Success} alt="" />

                            <h2 className="clr-orangepeel">Successful</h2>

                            <div className="mt-8">
                                <p className="clr-greychateau">
                                    New hospital has been added successfully.
                                </p>
                            </div>
                        </div>
                    </>,
                ]}
            />
        </>
    )
}

export default AddHospital;