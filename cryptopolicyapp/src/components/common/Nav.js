import React from "react";

import "./sidebar.css";

import { NavLink, useLocation } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

const Nav = () => {

    const location = useLocation();

    const closeLeftMenu = () => {
        if (document.getElementById("boMenu").classList.contains("bo-menu-overlay")) {
            document.getElementById("boMenu").classList.remove("bo-menu-overlay");
            document.getElementById("body").style = "overflow: visible";
            document.getElementById("leftNav").style.cssText =
                "position: unset; width: 0; height: 0; z-index: ; display : none";
        }
    }

    return (
        <>
            <div className="sidebar-main" id="leftNav">
                <div className="logo-brand d-flex align-items-center mb-20">
                    <img className="me-4" src={Logo} alt="" />
                        {/* <h2 className="text-uppercase">LOGO</h2> */}
                </div>
                <ul className="ul-sidebar">
                    <li>
                        <NavLink to={"/dashboard"} className={`d-flex ${location.pathname === '/' ? 'active' : ''}`} activeClassName='active' onClick={() => closeLeftMenu()}>
                            <span className="icon-Dashboard me-4"></span>
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/digital-wallet"} className="d-flex" activeClassName='active' onClick={() => closeLeftMenu()}>
                            <span className="icon-DigitalWallet me-4"></span>
                            <p>Digital Wallet </p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/policy"} className={`d-flex ${location.pathname === '/bought-policies' || 
                        location.pathname === '/policy-details' || 
                        location.pathname === '/buy-policy' || 
                        location.pathname === '/buy-policy-review' || location.pathname === '/add-policy' ? 'active' : ''}`} activeClassName='active' onClick={() => closeLeftMenu()}>
                            <span className="icon-Policy me-4"></span>
                            <p>Policy</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/document-claim"} className="d-flex" activeClassName='active' onClick={() => closeLeftMenu()}>
                            <span className="icon-DocumentClaim me-4"></span>
                            <p>Document Claim</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/hospitals"} className={`d-flex ${location.pathname === '/add-hospital' || location.pathname === '/hospital-details' ? 'active' : ''}`} activeClassName='active' onClick={() => closeLeftMenu()}>
                            <span className="icon-HospitalList me-4"></span>
                            <p>Hospitals List</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/settings"} className="d-flex" activeClassName='active' onClick={() => closeLeftMenu()}>
                            <span className="icon-AccountSettings me-4"></span>
                            <p>Account Settings</p>
                        </NavLink>
                    </li>
                    <hr className="sidebar-hr" />
                    <li>
                        <NavLink to={"/signin"} className="d-flex" activeClassName='active' onClick={() => closeLeftMenu()}>
                            <span className="icon-LogOut me-4"></span>
                            <p>Logout</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav;