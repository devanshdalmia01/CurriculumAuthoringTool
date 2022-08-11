import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Base from "../Base";
import ChapterNode from "../Components/ChapterNode";
import TableHeading from "../Components/TableHeading";
import TopBar from "../Components/TopBar";
import AddRowButton from "../Components/AddRowButton";
import AddSubjectButton from "../Components/AddSubjectButton";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../Data/data";

export default function MakeCurriculum() {
	const dispatch = useDispatch();
	const jsonData = useSelector((state) => state);
	const [newSubjectName, setNewSubjectName] = useState("");
	const [currentSubjectName, setCurrentSubjectName] = useState("");
	const handleChange = (event) => {
		setNewSubjectName(event.target.value);
	};
	const addSubject = (e) => {
		e.preventDefault();
		dispatch(actions.addSubject(newSubjectName));
		setCurrentSubjectName(newSubjectName);
		setNewSubjectName("");
	};
	console.log(jsonData, "idgaf555");
	return (
		<>
			<Base>
				<main className="mainData">
					<TopBar newSubjectName={newSubjectName} handleChange={handleChange} addSubject={addSubject} />
					{!(jsonData === undefined) &&
						jsonData.map((subject, index) => {
							let subjectName = subject.text;
							return <AddSubjectButton key={index} subjectName={subjectName} currentSubjectName={currentSubjectName} setCurrentSubjectName={setCurrentSubjectName} />;
						})}
					<TableHeading currentSubjectName={currentSubjectName} />
					{!(jsonData === undefined) && jsonData.map((subject, index) => subject.text === currentSubjectName && <ChapterNode key={index} chapterData={subject.children} />)}
					<AddRowButton />
				</main>
			</Base>
		</>
	);
}
