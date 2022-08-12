import Logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header className="header">
			<Link to="/">
				<img src={Logo} alt="App Logo" height={60} />
			</Link>
		</header>
	);
}
