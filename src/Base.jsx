import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Base({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer
				fromSelectPage={children?.props?.children[0]?.props?.className?.includes("fromSelectPage") ? true : false}
				fromLoadCurriculum={children?.props?.className?.includes("fromLoadCurriculum") ? true : false}
			/>
		</>
	);
}
