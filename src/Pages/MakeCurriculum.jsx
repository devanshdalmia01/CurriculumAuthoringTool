import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Base from "../Base";
import ChapterNode from "../Components/ChapterNode";
import TableHeading from "../Components/TableHeading";
import TopBar from "../Components/TopBar";
import AddRowButton from "../Components/AddRowButton";
import AddSubjectButton from "../Components/AddSubjectButton";

export default function MakeCurriculum() {
	const [jsonData, setJsonData] = useState([]);
	const [newSubjectName, setNewSubjectName] = useState("");
	const [currentSubjectName, setCurrentSubjectName] = useState("");
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
	console.log(jsonData);
	return (
		<>
			<Base>
				<main className="mainData">
					<TopBar newSubjectName={newSubjectName} handleChange={handleChange} addSubject={addSubject} jsonData={jsonData} />
					{!(jsonData.length === 0) &&
						jsonData.map((subject, index) => {
							let subjectName = subject.text;
							return <AddSubjectButton key={index} subjectName={subjectName} currentSubjectName={currentSubjectName} setCurrentSubjectName={setCurrentSubjectName} />;
						})}
					<TableHeading currentSubjectName={currentSubjectName} />
					{!(jsonData.length === 0) &&
						jsonData.map((subject, index) => subject.text === currentSubjectName && <ChapterNode key={index} chapterData={subject.children} chapterOrderData={subject.order} />)}
					<AddRowButton />
				</main>
			</Base>
		</>
	);
}
