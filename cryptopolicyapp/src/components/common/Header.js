import React from "react";

import Notif from "../../assets/images/notif.svg";

import Avatar from "../../assets/images/account_circle.svg";

import "./header.css";

const Header = () => {

    const openLeftMenu = () => {
        document.getElementById("boMenu").classList.add("bo-menu-overlay");
        document.getElementById("leftNav").style.cssText =
            "position: fixed; height: 100%; top: 0; z-index: 7; top: 10rem; display: block";
        document.getElementById("body").style = "overflow: hidden";
    }

    return (
        <>
            <section className="header-main">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <h1>Dashboard</h1>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}


                        <ul className="navbar-nav ms-auto align-items-center">
                            <li>
                                <button className="btn btn-text mr-24">Connect Wallet</button>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="dropNotifButton dropdown-toggle no-caret" id="dropNotif"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Notif} alt="" />
                                        <span className="badge-notif"></span>
                                    </button>
                                    <ul className="dropdown-menu notif-dropmenu dropdown-menu-lg-end"
                                        aria-labelledby="dropNotif">
                                        <li className="position-relative">
                                            <div className="d-flex align-items-center">
                                                <h3>Notifications</h3>
                                                <span className="ms-auto icon-cross cursor-pointer"></span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="position-relative me-4">
                                                    {/* <span className="icon-bell"></span>  */}
                                                    <img src={Notif} alt="" />
                                                </div>
                                                <div className="ms-2">
                                                    <div className="p4">
                                                        <p>Tincidunt egestas aliquam vivamus at quis proin.</p>
                                                    </div>
                                                    <div className="p3 mt--3">
                                                        <p>Sed cursus ut erat mattis tellus arcu ligula nibh.
                                                        </p>
                                                    </div>
                                                    <div className="p3 time mt-3">
                                                        <p>33 Mins Ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="position-relative me-4">
                                                    <img src={Notif} alt="" />
                                                    <span className="new-notif"></span>
                                                </div>
                                                <div className="ms-2">
                                                    <div className="p4">
                                                        <p>Tincidunt egestas aliquam vivamus at quis proin.</p>
                                                    </div>
                                                    <div className="p3 mt--3">
                                                        <p>Sed cursus ut erat mattis tellus arcu ligula nibh.
                                                        </p>
                                                    </div>
                                                    <div className="p3 time mt-3">
                                                        <p>33 Mins Ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex">
                                                <div className="position-relative me-4">
                                                    <img src={Notif} alt="" />
                                                </div>
                                                <div className="ms-2">
                                                    <div className="p4">
                                                        <p>Tincidunt egestas aliquam vivamus at quis proin.</p>
                                                    </div>
                                                    <div className="p3 mt--3">
                                                        <p>Sed cursus ut erat mattis tellus arcu ligula nibh.
                                                        </p>
                                                    </div>
                                                    <div className="p3 time mt-3">
                                                        <p>33 Mins Ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="dropNotifButton dropdown-toggle no-caret" id="dropUser"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Avatar} alt="" />
                                    </button>
                                    <ul className="dropdown-menu user-dropmenu dropdown-menu-lg-end"
                                        aria-labelledby="dropUser">
                                        <li className="position-relative">
                                            <div className="d-flex align-items-center">
                                                <h3>John Wing</h3>
                                                <span className="ms-auto icon-cross cursor-pointer"></span>
                                            </div>
                                            <div className="p3 analyst mt--3">
                                                <p>User</p>
                                            </div>
                                            <div className="mt-16">
                                                <button className="btn btn-primary">Edit Profile</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="div-hamburger d-flex d-lg-none">
                                    <button className="hamburgers" type="button" onClick={openLeftMenu}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>

                </nav>
            </section>
        </>
    )
}

export default Header;