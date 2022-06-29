import React from "react";

import Logo from "../../assets/images/logo.png";

const AuthSidebarSimple = () => {
    return (
        <>
            <div className="logo">
                <img src={Logo} /> 
            </div>
            <div className="auth-welcome-text">
                <h2 className="pt-100">
                    Lorem ipsum dollar sit amet
                </h2>
            </div>
        </>
    )
}

export default AuthSidebarSimple;