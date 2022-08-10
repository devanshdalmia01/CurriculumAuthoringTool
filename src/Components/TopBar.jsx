export default function TopBar({ newSubjectName, handleChange, addSubject }) {
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
			<button className="exportButton" type="submit">
				Export To JSON
			</button>
		</div>
	);
}
