export default function TableHeading({ currentSubjectName }) {
	return (
		<>
			<div className="subjectName">{currentSubjectName}</div>
			<hr className="line" />
			<div className="tableHeading">
				<div>
					Actions
					<span>
						<br />
						Move Up, Move Down, Outdent,
						<br />
						Indent, Delete
					</span>
				</div>
				<div style={{ marginLeft: "13.5%", flexGrow: "1" }}>
					Standard
					<span>
						<br />
						The text of the standard
					</span>
				</div>
			</div>
			<hr className="line" />
		</>
	);
}
