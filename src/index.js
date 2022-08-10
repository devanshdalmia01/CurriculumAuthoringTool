import ReactDOM from "react-dom/client";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import ReactTooltip from "react-tooltip";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Routes />
		<ReactTooltip type="light" effect="solid" className="toolTip" />
		<ToastContainer theme="colored" position="bottom-center" autoClose={5000} hideProgressBar={true} pauseOnFocusLoss pauseOnHover />
	</>
);
