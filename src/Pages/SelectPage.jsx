import Base from "../Base";
import { Link } from "react-router-dom";

export default function SelectPage() {
	return (
		<>
			<Base>
				<div className="selectPage">
					<Link className="selectOption fromSelectPage" to="/makecurriculum">
						Make Curriculum
					</Link>
					<Link className="selectOption" to="/loadcurriculum">
						Load Curriculum
					</Link>
				</div>
			</Base>
		</>
	);
}
