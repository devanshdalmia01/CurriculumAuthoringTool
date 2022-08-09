import Logo from "../Assets/Logo.svg";

export default function Navbar() {
	return (
		<>
			<header className="header">
				<img src={Logo} alt="App Logo" height={60} />
			</header>
		</>
	);
}
