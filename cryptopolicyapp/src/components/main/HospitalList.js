import React, { useState } from "react";

import { Link } from "react-router-dom";

import { history } from "../../helpers/history";

import ModelPopup from "../../helpers/ModelPopup";

const HospitalList = () => {

    const [showDelete, setShowDelete] = useState(false);

    const [showEdit, setShowEdit] = useState(false);


    const gotoAddHospital = () => {
        history.push("/add-hospital");
    }

    return (
        <>
            <section className="main-content">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Search Hospital</label>
                            <div className="form-controls">
                                <img src="../../../assets/images/search.svg" className="ico" alt="" />
                                <input type="text" placeholder="Search" className="form-control left-icon" />
                            </div>
                        </div>
                    </div>
                    {/* <!-- show in admins case  */}
                    <div className="col-md-6 toRight">
                        <button className="btn btn-primary" onClick={gotoAddHospital}>Add Hospital</button>
                    </div>
                    <div className="col-12">
                        {/* <!-- first screen  */}
                        <div className="card p-0">
                            <table className="table in-table table-hos">
                                <thead>
                                    <tr>
                                        <th>Sr.No.</th>
                                        <th>Hospital Name</th>
                                        <th>City</th>
                                        <th>Discount%</th>
                                        <th>Phone No.</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Chughtais Lahore Lab</td>
                                        <td>Arif Wala</td>
                                        <td>15%</td>
                                        <td>
                                            Nil
                                        </td>
                                        <td>
                                            {/* in case of user */}
                                            <Link className="anchor a-line" to={"/hospital-details"}>View Details</Link>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Excel Labs, F-10</td>
                                        <td>Islamabad</td>
                                        <td>20%</td>
                                        <td>
                                            051- 229 2228
                                        </td>
                                        <td>
                                           
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
                                        <td>3</td>
                                        <td>Chughtais Lahore Lab</td>
                                        <td>Arif Wala</td>
                                        <td>15%</td>
                                        <td>
                                            Nil
                                        </td>
                                        <td>
                                            {/* in case of user */}
                                            <Link className="anchor a-line" to={"/hospital-details"}>View Details</Link>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Excel Labs, F-10</td>
                                        <td>Islamabad</td>
                                        <td>20%</td>
                                        <td>
                                            051- 229 2228
                                        </td>
                                        <td>
                                            {/* in case of user */}
                                            <Link className="anchor a-line" to={"/hospital-details"}>View Details</Link>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Chughtais Lahore Lab</td>
                                        <td>Arif Wala</td>
                                        <td>15%</td>
                                        <td>
                                            Nil
                                        </td>
                                        <td>
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
                                        <td>6</td>
                                        <td>Excel Labs, F-10</td>
                                        <td>Islamabad</td>
                                        <td>20%</td>
                                        <td>
                                            051- 229 2228
                                        </td>
                                        <td>
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
                                        <td>7</td>
                                        <td>Chughtais Lahore Lab</td>
                                        <td>Arif Wala</td>
                                        <td>15%</td>
                                        <td>
                                            Nil
                                        </td>
                                        <td>
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
                                        <td>8</td>
                                        <td>Excel Labs, F-10</td>
                                        <td>Islamabad</td>
                                        <td>20%</td>
                                        <td>
                                            051- 229 2228
                                        </td>
                                        <td>
                                            {/* in case of user */}
                                            <Link className="anchor a-line">View Details</Link>
                                            
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
                            <h1>Delete Hospital!</h1>

                            <div className="mt-8">
                                <p className="clr-greychateau">
                                    Are you sure you want to permanently delete this hospital?
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
                            <h1>Edit Hospital</h1>
                            <div className="form-group mt-24">
                                <label>Hospital Name*</label>
                                <div className="form-controls">
                                    <input type="text" className="form-control"
                                        placeholder="" value="Chugtais Lahore Lab" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>City*</label>
                                <div className="form-controls">
                                    <input type="text" className="form-control"
                                        placeholder="" value="Arif Wala" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Discount%*</label>
                                <div className="form-controls">
                                    <input type="text" className="form-control"
                                        placeholder="" value="15%" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Phone No*</label>
                                <div className="form-controls">
                                    <input type="text" className="form-control"
                                        placeholder="" value="030000000000" />
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

export default HospitalList;