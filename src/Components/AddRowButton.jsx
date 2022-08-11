import AddIcon from "../Assets/Icons/AddIcon";
import { useDispatch } from "react-redux";
import { actions } from "../Data/data";

export default function AddRowButton({ subjectId }) {
	const dispatch = useDispatch();
	const handleAddStandard = (e) => {
		e.preventDefault();
		dispatch(actions.addStandard(subjectId));
	};
	return (
		<button className="addRowButton" onClick={handleAddStandard}>
			<AddIcon width="20" height="20" />
			<span style={{ marginLeft: "10px" }}>Add A Standard</span>
		</button>
	);
}
