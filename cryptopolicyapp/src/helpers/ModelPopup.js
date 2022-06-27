import Modal from "react-bootstrap/Modal";
// import crossImg from "../assets/images/icons/cross.svg";
const ModelPopup = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header
                style={{ display: props.showheader === "true" ? "" : "none" }}
            >
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.modelheading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="mt-16">
                <span className="icon-Cancel" aria-label="Close"
                    onClick={props.onHide}></span>
                {props.modelbody}
            </Modal.Body>
        </Modal>
    );
};
export default ModelPopup;