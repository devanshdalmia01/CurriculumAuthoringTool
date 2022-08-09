import { useState } from "react";
import { toast } from "react-toastify";
import Base from "../Base";
import ChapterNode from "../Components/ChapterNode";
import TableHeading from "../Components/TableHeading";
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
					<form>
						<label className="addSubjectLabel" htmlFor="newSubjectName">
							Enter Subject Name
						</label>
						<input className="addSubjectInput" type="text" id="newSubjectName" placeholder="Example - Mathematics" value={newSubjectName} onChange={handleChange} />
						<button className="addSubjectButton" type="submit" onClick={addSubject}>
							Add Subject
						</button>
					</form>
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
					<div>{currentSubjectName}</div>
					<TableHeading />
					{jsonData.map((subject, index) => subject.text === currentSubjectName && <ChapterNode key={index} chapterData={subject.children} chapterOrderData={subject.order} />)}
				</main>
			</Base>
		</>
	);
}
