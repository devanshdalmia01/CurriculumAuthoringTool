import { useState } from "react";
import makeJsonFile from "../Utilities/ExportData";
import { useDispatch, useSelector } from "react-redux";
import { addSubject } from "../redux/storingData";
import { toast } from "react-toastify";

export default function TopBar({ setCurrentSubjectName }) {
	const [newSubjectName, setNewSubjectName] = useState("");
	const dispatch = useDispatch();
	const jsonData = useSelector((state) => state[0]);
	const handleChange = (e) => {
		setNewSubjectName(e.target.value);
	};
	const handleAddSubject = (e) => {
		e.preventDefault();
		if (newSubjectName === "") {
			return toast.warning("Please enter something!");
		}
		dispatch(addSubject(newSubjectName));
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
				<input className="addSubjectInput" type="text" id="newSubjectName" placeholder="Example - Mathematics" value={newSubjectName} onChange={handleChange} autoFocus={true} />
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
