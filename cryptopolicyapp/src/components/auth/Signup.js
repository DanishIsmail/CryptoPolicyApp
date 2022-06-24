import React from "react";

import SignupCreateAccount from "./SignupCreateAccount";
import SingupEmailVerification from "./SignupEmailVerification";
import SignupIdVerification from "./SignupIdVerification";

const Signup = () => {


    return (

        <div className="authcontent-inner">
            <div className="tab-content" id="auth-tabContent">

                <div className="tab-pane fade show active" id="signup" role="tabpanel"
                    aria-labelledby="signup-tab">
                    <SignupCreateAccount />
                </div>

                <div className="tab-pane fade" id="emailverify" role="tabpanel"
                    aria-labelledby="emailverify-tab">
                    <SingupEmailVerification />
                </div>

                <div className="tab-pane fade" id="idVerify" role="tabpanel" aria-labelledby="idVerify-tab">
                    <SignupIdVerification />
                </div>

            </div>
        </div>
    )
}

export default Signup;