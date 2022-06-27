import React from "react";

import { history } from "../../helpers/history";

const PolicyDetails = () => {

    const gotoBuyPolicy = () => {
        history.push("/buy-policy");
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
                                    <h4>Policy Name</h4>
                                    <div className="mt-8">
                                        <p>Accidental Death &amp; Permanent Disability</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-md-9 col-xl-6">
                                    <h4>Plan A</h4>
                                    <div className="mt-8">
                                        <p>Lorem ipsum dolor set amet </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-md-9 col-xl-6">
                                    <h4>Plan B</h4>
                                    <div className="mt-8">
                                        <p>Lorem ipsum dolor set amet </p>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-40">
                                    <button className="btn btn-text mr-24" onClick={() => history.push("/policy")}>Back</button>
                                    <button className="btn btn-primary" onClick={gotoBuyPolicy}>Buy Policy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PolicyDetails;