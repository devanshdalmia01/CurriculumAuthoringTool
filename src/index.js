import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<Routes />
		<ToastContainer theme="colored" position="bottom-center" autoClose={5000} hideProgressBar={true} pauseOnFocusLoss pauseOnHover />
	</StrictMode>
);
