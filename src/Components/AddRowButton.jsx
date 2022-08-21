import AddIcon from "../Assets/Icons/AddIcon";
import { useDispatch } from "react-redux";
import { addStandard } from "../redux/storingData";
import { useRef, useEffect } from "react";

export default function AddRowButton({ subjectId, pressEnter }) {
	const firstUpdate = useRef(true);
	const pressButton = useRef(null);
	const dispatch = useDispatch();
	const handleAddStandard = (e) => {
		e.preventDefault();
		dispatch(addStandard(subjectId));
	};
	useEffect(() => {
		if (firstUpdate.current) {
			firstUpdate.current = false;
			return;
		}
		pressButton.current.click();
	}, [pressEnter]);
	return (
		<button ref={pressButton} className="addRowButton" onClick={handleAddStandard}>
			<AddIcon />
			<span style={{ marginLeft: "10px" }}>Add A Standard</span>
		</button>
	);
}
