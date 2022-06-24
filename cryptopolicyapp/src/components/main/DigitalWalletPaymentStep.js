import React from "react";

import CreditCard from "../../assets/images/Mastercard.svg";

import Ethereum from "../../assets/images/Ethereum.svg"

const DigitalWalletPaymentStep = () => {
    return (
        <>
            <div className="card mt-16 height-content d-none">
                <h3>Payment Method</h3>
                <div className="mt-8 mb-32">
                    <p className="clr-greychateau">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="card-type d-flex align-items-center mb-24 cursor-pointer">
                    <div>
                        <img src={CreditCard} alt="" />
                    </div>
                    <div className="ml-12">
                        <h4>CREDIT CARD</h4>
                        <div className="p4">
                            <p>Powered by Stripe</p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <span className="icon-RightArrow"></span>
                    </div>
                </div>
                <div className="card-type d-flex align-items-center mb-24 cursor-pointer">
                    <div>
                        <img src={Ethereum} alt="" />
                    </div>
                    <div className="ml-12">
                        <h4>Ethereum</h4>
                        <div className="p4">
                            <p>Your entrance to the blockchain world</p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <span className="icon-RightArrow"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DigitalWalletPaymentStep;