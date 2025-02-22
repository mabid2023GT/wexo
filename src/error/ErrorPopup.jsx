import { XCircle } from "lucide-react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import '../assets/styles/ErrorPopup.scss'

const ErrorPopup = ({ message, onClose }) => {
  return ReactDOM.createPortal(
    <div className="error-popup-overlay">
      <div className="error-popup">
        <XCircle className="error-icon" />
        <p className="error-message">{message}</p>
        <button onClick={onClose} className="error-button">
          OK
        </button>
      </div>
    </div>,
    // Attach to <body>, making it independent from the app layout
    document.body
  );
};

export default ErrorPopup;

// Adding PropTypes validation for the ErrorPopup component
ErrorPopup.propTypes = {
  // Validate that 'message, onClose' is a required props
  message: PropTypes.node.isRequired,
  onClose: PropTypes.node.isRequired,
};
