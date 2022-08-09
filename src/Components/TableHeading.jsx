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
						Move, Outdent,
						<br />
						Indent, Delete
					</span>
				</div>
				<div style={{ marginLeft: "137px", flexGrow: "1" }}>
					Standard
					<span>
						<br />
						The text of the standard
					</span>
				</div>
			</div>
		</>
	);
}
