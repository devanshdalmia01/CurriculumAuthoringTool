import { useState } from "react";
import makeJsonFile from "../Utilities/ExportData";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Data/data";

export default function TopBar({ setCurrentSubjectName }) {
	const [newSubjectName, setNewSubjectName] = useState("");
	const dispatch = useDispatch();
	const jsonData = useSelector((state) => state);
	const handleChange = (e) => {
		setNewSubjectName(e.target.value);
	};
	const handleAddSubject = (e) => {
		e.preventDefault();
		dispatch(actions.addSubject(newSubjectName));
		setCurrentSubjectName(newSubjectName);
		setNewSubjectName("");
	};
	const exportToJson = (e) => {
		e.preventDefault();
		makeJsonFile({
			data: JSON.stringify(jsonData),
			fileName: "data.json",
			fileType: "text/json",
		});
	};
	return (
		<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
			<form style={{ width: "50%" }}>
				<label className="addSubjectLabel" htmlFor="newSubjectName">
					Enter Subject Name
				</label>
				<input className="addSubjectInput" type="text" id="newSubjectName" placeholder="Example - Mathematics" value={newSubjectName} onChange={handleChange} />
				<button className="addSubjectButton" type="submit" onClick={handleAddSubject}>
					Add Subject
				</button>
			</form>
			{!(jsonData === undefined) && (
				<button className="exportButton" type="submit" onClick={exportToJson}>
					Export To JSON
				</button>
			)}
		</div>
	);
}
