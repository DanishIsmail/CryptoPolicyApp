import React from "react";

import { history } from "../../helpers/history";

const HospitalDetails = () => {

    return (
        <>
            <section className="main-content">
                <div className="row">
                    <div className="col-12">
                        <div className="card mt-16 height-content">
                            <h3>Details</h3>
                            <div className="row mt-16">
                                <div className="col-md-9 col-xl-6">
                                    <h4>Hospital Name</h4>
                                    <div className="mt-8">
                                        <p>Chugtais Lahore Lab</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-md-9 col-xl-6">
                                    <h4>City</h4>
                                    <div className="mt-8">
                                        <p>Arif Wala</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-md-9 col-xl-6">
                                    <h4>Discount%</h4>
                                    <div className="mt-8">
                                        <p>15%</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-md-9 col-xl-6">
                                    <h4>Phone No</h4>
                                    <div className="mt-8">
                                        <p>Nil</p>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-40">
                                    <button className="btn btn-text mr-24" onClick={() => history.push("/hospitals")}>Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HospitalDetails;