import { useState } from "react";
import { toast } from "react-toastify";
import Base from "../Base";
import ChapterNode from "../Components/ChapterNode";
import TableHeading from "../Components/TableHeading";
import TopBar from "../Components/TopBar";
import AddIcon from "../Assets/Icons/AddIcon";
let data = require("../data.json");

export default function LoadCurriculum() {
	const [jsonData] = useState(data);
	const [newSubjectName, setNewSubjectName] = useState("");
	const [currentSubjectName, setCurrentSubjectName] = useState(jsonData[0].text);
	const handleChange = (event) => {
		setNewSubjectName(event.target.value);
	};
	const addSubject = (e) => {
		e.preventDefault();
		if (newSubjectName === "") {
			return toast.warning("Please enter name!");
		} else {
			jsonData.push({
				level: "subject",
				text: newSubjectName,
				children: {},
				order: [],
			});
			setCurrentSubjectName(newSubjectName);
			setNewSubjectName("");
		}
	};
	return (
		<>
			<Base>
				<main>
					<TopBar newSubjectName={newSubjectName} handleChange={handleChange} addSubject={addSubject} />
					{jsonData.map((subject, index) => {
						return (
							<button
								key={index}
								onClick={() => {
									setCurrentSubjectName(subject.text);
								}}
								className={currentSubjectName === subject.text ? "subjectChangeButton active" : "subjectChangeButton"}
							>
								{subject.text}
							</button>
						);
					})}
					<TableHeading currentSubjectName={currentSubjectName} />
					{jsonData.map((subject, index) => subject.text === currentSubjectName && <ChapterNode key={index} chapterData={subject.children} chapterOrderData={subject.order} />)}
					<button className="addRowButton" onClick={() => {}}>
						<AddIcon width="20" height="20" />
						<span style={{ marginLeft: "10px" }}>Add A Standard</span>
					</button>
				</main>
			</Base>
		</>
	);
}
