import Base from "../Base";
import { Link } from "react-router-dom";

export default function SelectPage() {
	return (
		<Base>
			<div className="selectPage">
				<Link className="selectOption" to="/makecurriculum">
					Make Curriculum
				</Link>
				<Link className="selectOption" style={{ marginLeft: "50px" }} to="/loadcurriculum">
					Load Curriculum
				</Link>
			</div>
		</Base>
	);
}
