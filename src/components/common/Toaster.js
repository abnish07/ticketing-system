import React, { useEffect, useState } from "react";
import { Toast } from "react-bootstrap";
import { DELAY, TOAST_ERROR } from "../../constants/siteConstants";

export default function Toaster(props) {
  const [showToast, setToast] = useState(false);
  const { toastOpen, onClose } = props;

  useEffect(() => {
    toastOpen.isOpen && setToast(true);
  }, []);

  const hideToast = () => {
    setToast(false);
    onClose();
  };

  return (
    <div className="tost-style">
      <Toast onClose={hideToast} autohide show={showToast} delay={DELAY}>
        <Toast.Header
          className={`clr-white ${
            toastOpen.type === TOAST_ERROR ? "clr-error" : "clr-success"
          }`}
        >
          <strong className="mr-auto">{toastOpen.type}</strong>
        </Toast.Header>
        <Toast.Body>{toastOpen.toastMessage || "Error"}</Toast.Body>
      </Toast>
    </div>
  );
}
