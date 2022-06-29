import React, { useEffect, useState } from "react";

import Notif from "../../assets/images/notif.svg";

import Avatar from "../../assets/images/account_circle.svg";

import { useLocation } from "react-router-dom";

import { history } from "../../helpers/history";

import "./header.css";

const Header = () => {

    const location = useLocation();

    const [scroll, setScroll] = useState(false);

    const openLeftMenu = () => {
        document.getElementById("boMenu").classList.add("bo-menu-overlay");
        document.getElementById("leftNav").style.cssText =
            "position: fixed; height: 100%; top: 0; z-index: 7; top: 10rem; display: block";
        document.getElementById("body").style = "overflow: hidden";
    }

    useEffect(() => {

        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 40);
        });

    });

    const gotoSettings = () => {
        history.push("/settings");
    }

    return (
        <>
            <section className={`header-main ${scroll ? 'box-shadow-header' : ''}` }>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {(location.pathname === '/' || location.pathname === '/dashboard') && <h1>Dashboard</h1>}
                        {(location.pathname === '/digital-wallet' || location.pathname === '/digital-wallet-payment') && <h1>Digital Wallet</h1>}
                        {location.pathname === '/policy' && <h1>Policies List</h1>}
                        {location.pathname === '/bought-policies' && <h1>Bought Policies</h1>}
                        {location.pathname === '/buy-policy' && <h1>Buy Policy</h1>}
                        {location.pathname === '/add-policy' && <h1>Add Policy</h1>}
                        {location.pathname === '/buy-policy-review' && <h1>Buy Policy Review</h1>}
                        {location.pathname === '/policy-details' && <h1>Policy Details</h1>}
                        {location.pathname === '/document-claim' && <h1>Document Claim</h1>}
                        {location.pathname === '/hospitals' && <h1>Hospitals List</h1>}
                        {location.pathname === '/add-hospital' && <h1>Add Hospital</h1>}
                        {location.pathname === '/hospital-details' && <h1>Hospital Details</h1>}
                        {location.pathname === '/settings' && <h1>Account Settings</h1>}

                        <ul className="navbar-nav ms-auto align-items-center">
                            <li>
                                {/* <button className="btn btn-text mr-24 d-none d-sm-inline-block">Connect Wallet</button> */}
                                <button className="btn btn-text mr-24 d-none d-sm-inline-block">Connected: 0xa473a5eddc3440db</button>
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
                                                <button className="btn btn-primary" onClick={gotoSettings}>Edit Profile</button>
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