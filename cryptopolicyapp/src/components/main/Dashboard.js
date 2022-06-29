import React from "react";

import TotalPolicies from '../../assets/images/TotalPolicy.svg';

import TotalClaims from '../../assets/images/TotalClaim.svg';

import PaymentMade from "../../assets/images/PaymentMade.svg";

import RejectedClaim from "../../assets/images/RejectedClaim.svg";

import Chart from "../../assets/images/policies.png";

import { history } from "../../helpers/history";

const Dashboard = () => {

    const gotoClaim = () => {
        history.push("/document-claim");
    }

    const gotoPolicy = () => {
        history.push("/policy");
    }

    return (
        <>
            <section className="main-content">
                <div className="row">

                    <div className="col-sm-6 col-md-3 col-lg-6 col-xl-3 mb-16">
                        <div className="card mt-16 bg-tangaroa card-dashboard-dark h-90">
                            <div className="d-flex align-items-center h-100">
                                <img src={TotalPolicies} alt="" />
                                <div className="ms-5">
                                    <h5>Total Policies</h5>
                                    <h2>12</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-6 col-xl-3 mb-16">
                        <div className="card mt-16 h-90">
                            <div className="d-flex align-items-center card-dashboard-light h-100">
                                <img src={TotalClaims} alt="" />
                                <div className="ms-5">
                                    <h5>Total Claims</h5>
                                    <h2>10</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-6 col-xl-3 mb-16">
                        <div className="card mt-16 bg-tangaroa card-dashboard-dark h-90">
                            <div className="d-flex align-items-center h-100">
                                <img src={PaymentMade} alt="" />
                                <div className="ms-5">
                                    <h5>Payments Made</h5>
                                    <h2>00</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-6 col-xl-3 mb-16 h-90">
                        <div className="card mt-16 h-90">
                            <div className="d-flex align-items-center card-dashboard-light h-100">
                                <img src={RejectedClaim} alt="" />
                                <div className="ms-5">
                                    <h5>Rejected Claims</h5>
                                    <h2>03</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row row-dashboard">

                    <div className="col-md-6 col-xl-6 col-lg-12 mb-16 d-flex flex-column">

                        <div className="card mt-16 flex-grow-1">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <h3>Buying Pattern</h3>
                                </div>
                                <div className="col-md-6 toRight">
                                    <button className="btn btn-primary btn-sm" onClick={gotoClaim}><span>+</span>&nbsp;New Claim</button>
                                </div>
                            </div>
                            <div className="mt-40">
                                <img className="img-fluid" src={Chart} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-6 mb-16 d-flex flex-column">
                        <div className="card mt-16 flex-grow-1">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h3>Owned Policies</h3>
                                </div>
                                <div className="col-md-4 toRight">
                                    <button className="btn btn-primary btn-sm" onClick={gotoPolicy}>View All<span
                                        className="icon-RightArrow"></span></button>
                                </div>
                            </div>
                            {/* <div className="black-eclipse"></div>  */}
                            <div className="table-wrap mt-32">
                                <table className="table in-table table-cp">

                                    <thead className="table-light">
                                        <tr>
                                            <th className="th-30">
                                                <div className="d-flex align-items-center">
                                                    Policy Name <span className="icon-chevronleft"></span>
                                                </div>
                                            </th>
                                            <th className="th-25">
                                                <div className="d-flex align-items-center">
                                                    Issuance Date <span className="icon-chevronleft"></span>
                                                </div>
                                            </th>
                                            <th className="th-20">
                                                <div className="d-flex align-items-center">
                                                    Due Date <span className="icon-chevronleft"></span>
                                                </div>
                                            </th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="td-150">Family Health Plus</td>
                                            <td>17/06/22</td>
                                            <td>20/07/22</td>
                                            <td>
                                                <div className="dropdown drop-general">
                                                    <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                        aria-expanded="false">
                                                        <span className="icon-MoreVertical"></span>
                                                    </a>
                                                    <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                        aria-labelledby="dropMore">
                                                        <li>
                                                            <a href="">View</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Remove</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className="td-150">Family Health Plus</td>
                                            <td>17/06/22</td>
                                            <td>20/07/22</td>
                                            <td>
                                                <div className="dropdown drop-general">
                                                    <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                        aria-expanded="false">
                                                        <span className="icon-MoreVertical"></span>
                                                    </a>
                                                    <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                        aria-labelledby="dropMore">
                                                        <li>
                                                            <a href="">View</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Remove</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="td-150">Family Health Plus</td>
                                            <td>17/06/22</td>
                                            <td>20/07/22</td>
                                            <td>
                                                <div className="dropdown drop-general">
                                                    <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                        aria-expanded="false">
                                                        <span className="icon-MoreVertical"></span>
                                                    </a>
                                                    <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                        aria-labelledby="dropMore">
                                                        <li>
                                                            <a href="">View</a>
                                                        </li>
                                                        <li>
                                                            <a href="">Remove</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Dashboard;