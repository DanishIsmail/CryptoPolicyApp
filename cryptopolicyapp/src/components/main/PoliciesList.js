import React, { useState } from "react";

import Search from "../../assets/images/search.svg";

import { Link } from "react-router-dom";

import { history } from "../../helpers/history";

import ModelPopup from "../../helpers/ModelPopup";

const PoliciesList = () => {

    const [showDelete, setShowDelete] = useState(false);

    const [showEdit, setShowEdit] = useState(false);


    const gotoAddPolicy = () => {
        history.push("/add-policy");
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

                    {/* show in admins case  */}
                    <div className="col-md-6 toRight">
                        <button className="btn btn-primary" onClick={gotoAddPolicy}>Add New Policy</button>
                    </div>
                    <div className="col-12">
                        {/* first screen  */}
                        <div className="card p-0">
                            <table className="table in-table">
                                <thead>
                                    <tr>
                                        <th>Sr.No.</th>
                                        <th>Policy Name</th>
                                        <th>Plan A</th>
                                        <th>Plan B</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Accidental Death &amp; Parmanent Disability</td>
                                        <td>300,000</td>
                                        <td>500,000</td>
                                        <td>

                                            {/* in case of user */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <Link to={"/bought-policies"}>View Bought Policies</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/policy-details"}>View Details</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/buy-policy"}>Buy Policy</Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* in case of admin */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="outside"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a onClick={() => setShowEdit(true)}>Edit</a>
                                                    </li>
                                                    <li>
                                                        <Link to={"/policy-details"}>View</Link>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => setShowDelete(true)}>Delete</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Medical expenses and Hospitalization</td>
                                        <td>300,000</td>
                                        <td>500,000</td>
                                        <td>

                                            {/* in case of user */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View Bought Policies</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Buy Policy</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* in case of admin */}
                                            <div className="dropdown drop-general d-none">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Transport or repartition in case of
                                            illness and injury</td>
                                        <td>300,000</td>
                                        <td>500,000</td>
                                        <td>

                                            {/* in case of user */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View Bought Policies</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Buy Policy</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* in case of admin */}
                                            <div className="dropdown drop-general d-none">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Emergency Dental Care</td>
                                        <td>300,000</td>
                                        <td>500,000</td>
                                        <td>

                                            {/* in case of user */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View Bought Policies</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Buy Policy</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* in case of admin */}
                                            <div className="dropdown drop-general d-none">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Repatriation of family member travelling
                                            with the insured</td>
                                        <td>300,000</td>
                                        <td>500,000</td>
                                        <td>

                                            {/* in case of user */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View Bought Policies</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Buy Policy</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* in case of admin */}
                                            <div className="dropdown drop-general d-none">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Return of Dependent Children</td>
                                        <td>300,000</td>
                                        <td>500,000</td>
                                        <td>

                                            {/* in case of user */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View Bought Policies</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Buy Policy</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* in case of admin */}
                                            <div className="dropdown drop-general d-none">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Return of Dependent Children</td>
                                        <td>300,000</td>
                                        <td>500,000</td>
                                        <td>

                                            {/* in case of user */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View Bought Policies</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Buy Policy</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* in case of admin */}
                                            <div className="dropdown drop-general d-none">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Return of Dependent Children</td>
                                        <td>300,000</td>
                                        <td>500,000</td>
                                        <td>

                                            {/* in case of user */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View Bought Policies</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Buy Policy</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* in case of admin */}
                                            <div className="dropdown drop-general d-none">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Return of Dependent Children</td>
                                        <td>300,000</td>
                                        <td>500,000</td>
                                        <td>

                                            {/* in case of user */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View Bought Policies</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Buy Policy</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* in case of admin */}
                                            <div className="dropdown drop-general d-none">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Return of Dependent Children</td>
                                        <td>300,000</td>
                                        <td>500,000</td>
                                        <td>

                                            {/* in case of user */}
                                            <div className="dropdown drop-general">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">View Bought Policies</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="">Buy Policy</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* in case of admin */}
                                            <div className="dropdown drop-general d-none">
                                                <a className="dropdown-toggle no-caret" type="button" id="dropMore"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="false"
                                                    aria-expanded="false">
                                                    <span className="icon-MoreVertical"></span>
                                                </a>
                                                <ul className="dropdown-menu drop-more dropdown-menu-lg-end"
                                                    aria-labelledby="dropMore">
                                                    <li>
                                                        <a href="">Edit</a>
                                                    </li>
                                                    <li>
                                                        <a href="">View</a>
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
                                {/* <h5>Load More</h5> */}
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



            {/* delete policy */}
            <ModelPopup
                key={1}
                show={showDelete}
                onHide={() => setShowDelete(false)}
                modelheading={""}
                showheader={"false"}
                className="modal fade"
                dialogClassName="modal-dialog modal-dialog-centered mw-450"
                backdrop="static"
                keyboard={false}
                modelbody={[
                    <>
                        <div className="">
                            <h1>Delete Policy!</h1>

                            <div className="mt-8">
                                <p className="clr-greychateau">
                                    Are you sure you want to permanently delete this policy?
                                </p>
                            </div>
                            <div className="mt-40">
                                <button className="btn btn-text mr-24">Cancel</button>
                                <button className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </>,
                ]}
            />

            {/* edit policy */}
            <ModelPopup
                key={2}
                show={showEdit}
                onHide={() => setShowEdit(false)}
                modelheading={""}
                showheader={"false"}
                className="modal fade"
                dialogClassName="modal-dialog modal-dialog-centered mw-450"
                backdrop="static"
                keyboard={false}
                modelbody={[
                    <>
                        <div className="">
                            <h1>Edit Policy</h1>
                            <div className="form-group mt-24">
                                <label>Policy Name*</label>
                                <div className="form-controls">
                                    <input type="text" className="form-control"
                                        placeholder="" value="Health Premium Plus" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Plan A*</label>
                                <div className="form-controls">
                                    <input type="text" className="form-control"
                                        placeholder="" value="3000" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Plan B*</label>
                                <div className="form-controls">
                                    <input type="text" className="form-control"
                                        placeholder="" value="4000" />
                                </div>
                            </div>
                            <div className="mt-40">
                                <button className="btn btn-text mr-24">Cancel</button>
                                <button className="btn btn-primary">Edit</button>
                            </div>
                        </div>
                    </>,
                ]}
            />

        </>
    )
}

export default PoliciesList;