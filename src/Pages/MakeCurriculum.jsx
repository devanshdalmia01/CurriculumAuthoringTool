// import { useState } from "react";
// import { toast } from "react-toastify";
// import Base from "../Base";
// import AddIcon from "../Assets/Icons/AddIcon";
// import ChapterNode from "../Components/ChapterNode";

export default function MakeCurriculum() {
	// const [newSubjectName, setNewSubjectName] = useState("");
	// const [currentSubjectName, setCurrentSubjectName] = useState("");
	// const [numberOfNodes, setNumberOfNodes] = useState(0);
	// const [nodeText, setNodeText] = useState("");
	// const [data, setData] = useState(new Map());
	// const handleChange = (event) => {
	// 	setNewSubjectName(event.target.value);
	// };
	// const addSubject = (e) => {
	// 	e.preventDefault();
	// 	if (newSubjectName === "") {
	// 		return toast.warning("Please enter name!");
	// 	} else {
	// 		data.set(newSubjectName, []);
	// 		setCurrentSubjectName(newSubjectName);
	// 		setNewSubjectName("");
	// 	}
	// };
	// return (
	// 	<>
	// 		<Base>
	// 			<main>
	// 				{Array.from(data.keys()).map((subject, index) => {
	// 					return (
	// 						<button
	// 							key={index}
	// 							onClick={() => {
	// 								setCurrentSubjectName(subject);
	// 							}}
	// 						>
	// 							{subject}
	// 						</button>
	// 					);
	// 				})}
	// 				<form>
	// 					<label htmlFor="newSubjectName">Enter Subject Name</label>
	// 					<input type="text" id="newSubjectName" value={newSubjectName} onChange={handleChange} />
	// 					<button type="submit" onClick={addSubject}>
	// 						Add Subject
	// 					</button>
	// 				</form>
	// 				<div>{currentSubjectName}</div>
	// 				<div style={{ display: "flex" }}>
	// 					<div>
	// 						Actions
	// 						<br />
	// 						Move, Outdent,
	// 						<br />
	// 						IndentIcon, Delete
	// 					</div>
	// 					<div>
	// 						Standard
	// 						<br />
	// 						The text of the standard
	// 					</div>
	// 				</div>
	// 				{/* {data.get(currentSubjectName)?.map((standardData, index) => {
	// 					return <ChapterNode key={index} standardData={standardData} nodeText={nodeText} setNodeText={setNodeText} data={data} currentSubjectName={currentSubjectName} />;
	// 				})} */}
	// 				<button
	// 				// onClick={() => {
	// 				// 	data.set(currentSubjectName, {
	// 				// 		x: 0,
	// 				// 		y: numberOfNodes,
	// 				// 		text: "",
	// 				// 		child: "",
	// 				// 	});
	// 				// 	setNumberOfNodes(numberOfNodes+1);
	// 				// }}
	// 				>
	// 					<AddIcon color="#fff" width="20" height="20" />
	// 					Add a standard
	// 				</button>
	// 			</main>
	// 		</Base>
	// 	</>
	// );
}
