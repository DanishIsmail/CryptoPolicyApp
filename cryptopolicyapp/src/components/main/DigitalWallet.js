import React from "react";
import DigitalWalletDetails from "./DigitalWalletDetails";
import DigitalWalletPaymentStep from "./DigitalWalletPaymentStep";
import DigitalWalletStep1 from "./DigitalWalletStep1";
import DigitalWalletSummary from "./DigitalWalletSummary";

const DigitalWallet = () => {
    return (
        <>
            <section className="main-content">
                <div className="row">
                    <div className="col-12">

                        {/* first screen */}
                        <DigitalWalletStep1 />

                        {/* second screen */}
                        <DigitalWalletPaymentStep />

                        {/* third screen */}
                        <DigitalWalletDetails />

                        {/* fourth screen */}
                        <DigitalWalletSummary />
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default DigitalWallet;