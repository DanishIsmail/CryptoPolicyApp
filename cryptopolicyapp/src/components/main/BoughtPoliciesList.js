import React from "react";

import Search from "../../assets/images/search.svg";

import { history } from "../../helpers/history";

const BoughtPoliciesList = () => {

    const gotoBuyPolicy = () => {
        history.push("/buy-policy");
    }

    return (
        <>
            <section className="main-content">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Search Policy</label>
                            <div className="form-controls">
                                <img src={Search} className="ico" alt="" />
                                <input type="text" placeholder="Search" className="form-control left-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 toRight">
                        <button className="btn btn-primary" onClick={gotoBuyPolicy}>Buy Policy</button>
                    </div>
                </div>

                <div className="row">

                    <div className="col-12">
                        {/* first screen */}
                        <div className="card p-0">
                            <table className="table in-table">
                                <thead>
                                    <tr>
                                        <th>Request No.</th>
                                        <th>Request Type</th>
                                        <th>Request Date</th>
                                        <th>Request Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12345</td>
                                        <td>Endorsement</td>
                                        <td>22/02/2022</td>
                                        <td>Completed</td>
                                        <td>
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Accept</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12345</td>
                                        <td>Address Change</td>
                                        <td>22/02/2022</td>
                                        <td>Completed</td>
                                        <td>
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                    aria-expanded="false" >
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Accept</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12345</td>
                                        <td>Partial Withdrawal</td>
                                        <td>22/02/2022</td>
                                        <td>Initiated</td>
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
                                                        <a href="">Accept</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12345</td>
                                        <td>Endorsement</td>
                                        <td>22/02/2022</td>
                                        <td>Completed</td>
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
                                                        <a href="">Accept</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12345</td>
                                        <td>Address Change</td>
                                        <td>22/02/2022</td>
                                        <td>Completed</td>
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
                                                        <a href="">Accept</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12345</td>
                                        <td>Partial Withdrawal</td>
                                        <td>22/02/2022</td>
                                        <td>Initiated</td>
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
                                                        <a href="">Accept</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
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

                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div className="form-group mt-24 d-none">
                            <div className="load-more load-more-text d-flex align-items-center justify-content-center">
                                <h5>Load More</h5>
                            </div>
                        </div>
                        <div className="form-group d-none">
                            <div className="load-more d-flex align-items-center justify-content-center">
                                <div className="loader">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 p4">
                        <p className="mb-0">Showing <b>1</b> to <b>10</b> of <b>57</b> entries</p>
                    </div>
                    <div className="col-md-6">
                        <div className="pagination-wrap mt-32">
                            <nav>
                                <ul className="pagination justify-content-end">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true" className="prev-icon icon-LeftArrow"></span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link dots-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">45</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true" className="next-icon icon-RightArrow"></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BoughtPoliciesList;