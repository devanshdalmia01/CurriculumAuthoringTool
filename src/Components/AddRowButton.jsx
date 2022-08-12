import AddIcon from "../Assets/Icons/AddIcon";
import { useDispatch } from "react-redux";
import { actions } from "../Data/data";
import { useRef, useEffect } from "react";

export default function AddRowButton({ subjectId, pressEnter }) {
	const firstUpdate = useRef(true);
	const pressButton = useRef(null);
	const dispatch = useDispatch();
	const handleAddStandard = (e) => {
		e.preventDefault();
		dispatch(actions.addStandard(subjectId));
	};
	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		pressButton.current.click();
	}, [pressButton]);
	return (
		<button ref={pressButton} className="addRowButton" onClick={handleAddStandard}>
			<AddIcon width="20" height="20" />
			<span style={{ marginLeft: "10px" }}>Add A Standard</span>
		</button>
	);
}
