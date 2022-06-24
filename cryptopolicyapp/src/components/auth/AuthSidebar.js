import React from "react";
import AuthSidebarSimple from "./AuthSidebarSimple";
import AuthSidebarSteps from "./AuthSidebarSteps";

import { useLocation } from 'react-router-dom'

const AuthSidebar = () => {

    const location = useLocation();

    return (

        <div className="careauth-sidebar-outer">
            <div className="careauth-sidebar-inner">
                {location.pathname === '/signup' ? <AuthSidebarSteps /> : <AuthSidebarSimple />}
            </div>
        </div>
    )
}

export default AuthSidebar;