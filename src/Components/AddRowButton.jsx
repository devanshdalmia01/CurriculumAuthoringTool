import AddIcon from "../Assets/Icons/AddIcon";

export default function AddRowButton() {
	return (
		<button className="addRowButton" onClick={() => {}}>
			<AddIcon width="20" height="20" />
			<span style={{ marginLeft: "10px" }}>Add A Standard</span>
		</button>
	);
}
