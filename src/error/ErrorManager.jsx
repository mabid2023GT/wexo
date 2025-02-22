import { useErrorStore } from "../state/ErrorStore";
import ErrorPopup from "./ErrorPopup";

const ErrorManager = () => {
  const { errorMessage, showErrorPopup, clearError } = useErrorStore();
  return showErrorPopup ? (
    <ErrorPopup message={errorMessage} onClose={clearError} />
  ) : null;
};

export default ErrorManager;
