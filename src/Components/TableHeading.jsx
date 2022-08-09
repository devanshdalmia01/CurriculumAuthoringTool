export default function TableHeading({ subHeadingData, subHeadingOrderData }) {
	return (
		<div className="tableHeading">
			<div>
				Actions
				<span>
					<br />
					Move, Outdent,
					<br />
					IndentIcon, Delete
				</span>
			</div>
			<div style={{ marginLeft: "100px", flexGrow: "1" }}>
				Standard
				<span>
					<br />
					The text of the standard
				</span>
			</div>
		</div>
	);
}
