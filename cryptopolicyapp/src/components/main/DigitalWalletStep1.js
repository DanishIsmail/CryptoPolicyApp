import React from "react";

import { history } from "../../helpers/history";

const DigitalWalletStep1 = () => {

    const gotoPaymentStep = () => {
        history.push("/digital-wallet-payment");
    }

    return (
        <>
            <div className="card mt-16 height-content">
                <h3>Wallet Connect</h3>
                <div className="mt-8">
                    <p className="clr-greychateau">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="mt-40">
                    <button className="btn btn-primary" onClick={gotoPaymentStep}>Connect Wallet</button>
                </div>
            </div>
        </>
    )
}

export default DigitalWalletStep1;