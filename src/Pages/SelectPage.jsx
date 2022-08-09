import Base from "../Base";
import { Link } from "react-router-dom";
export default function SelectPage() {
	return (
		<>
			<Base>
				<Link className="switchTaskListButton" to="/makecurriculum">
					Make Curriculum
				</Link>
				<Link className="switchTaskListButton" to="/loadcurriculum">
					Load Curriculum
				</Link>
			</Base>
		</>
	);
}
