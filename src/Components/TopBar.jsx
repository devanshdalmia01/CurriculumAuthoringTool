import makeJsonFile from "../Utilities/ExportData";

export default function TopBar({ newSubjectName, handleChange, addSubject, jsonData }) {
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
				<button className="addSubjectButton" type="submit" onClick={addSubject}>
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
