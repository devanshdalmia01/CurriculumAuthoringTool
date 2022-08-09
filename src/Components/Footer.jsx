export default function Footer({ fromSelectPage }) {
	return (
		<>
			<footer style={fromSelectPage ? { position: "fixed", bottom: "0px" } : { position: "unset" }}>
				<h1>&copy; 2022 Devansh Dalmia | All Rights Reserved</h1>
			</footer>
		</>
	);
}