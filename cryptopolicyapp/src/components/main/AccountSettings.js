import React from "react";

import Edit from "../../assets/images/Edit.png";

import Avatar from "../../assets/images/account_circle.png";

const AccountSettings = () => {
    return (
        <>
            <section class="main-content">
                <div class="row">
                    <div class="col-12">
                        <div class="card mt-16 height-content">
                            <h3>Details</h3>
                            <div class="row mt-20">
                                <div class="col-12 mb-24">
                                    <div class="img-account position-relative">
                                        <img class="edit" src={Edit} alt="" />
                                        <img src={Avatar} alt="" />
                                    </div>
                                </div>
                                <div class="col-md-9 col-xl-6">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>First Name*</label>
                                                <div class="form-controls">
                                                    <input type="text" class="form-control"
                                                        placeholder="Enter First Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Last Name*</label>
                                                <div class="form-controls">
                                                    <input type="text" class="form-control"
                                                        placeholder="Enter Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Email*</label>
                                                <div class="form-controls">
                                                    <input type="text" class="form-control" value="3000"
                                                        placeholder="Enter Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 mt-40">
                                            <button class="btn btn-text mr-24">Cancel</button>
                                            <button class="btn btn-primary">Save Changes</button>
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

export default AccountSettings;