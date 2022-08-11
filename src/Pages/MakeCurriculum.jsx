import { useState } from "react";
import { toast } from "react-toastify";
import Base from "../Base";
import ChapterNode from "../Components/ChapterNode";
import TableHeading from "../Components/TableHeading";
import TopBar from "../Components/TopBar";
import AddRowButton from "../Components/AddRowButton";
import AddSubjectButton from "../Components/AddSubjectButton";
import { useSelector } from "react-redux";

export default function MakeCurriculum() {
	const [newRowIndentLevel, setNewRowIndentLevel] = useState(1);
	const [currentSubjectName, setCurrentSubjectName] = useState("");
	const jsonData = useSelector((state) => state);

	const outdentInput = () => {
		if (newRowIndentLevel === 3) {
			setNewRowIndentLevel(2);
		} else if (newRowIndentLevel === 2) {
			setNewRowIndentLevel(1);
		} else if (newRowIndentLevel === 1) {
			return toast.error("You cannot outdent a Chapter.");
		}
	};

	const indentInput = () => {
		if (newRowIndentLevel === 1) {
			setNewRowIndentLevel(2);
		} else if (newRowIndentLevel === 2) {
			setNewRowIndentLevel(3);
		} else if (newRowIndentLevel === 3) {
			return toast.error("You cannot indent a Subheading.");
		}
	};
	console.log(jsonData, "idgaf555");
	return (
		<>
			<Base>
				<main className="mainData">
					<TopBar setCurrentSubjectName={setCurrentSubjectName} />
					{!(jsonData.length === 0) &&
						jsonData.map((subject, index) => {
							let subjectName = subject.text;
							return <AddSubjectButton key={index} subjectName={subjectName} currentSubjectName={currentSubjectName} setCurrentSubjectName={setCurrentSubjectName} />;
						})}
					{!(jsonData.length === 0) ? (
						jsonData.map(
							(subject, index) =>
								subject.text === currentSubjectName && (
									<div key={index}>
										<TableHeading currentSubjectName={currentSubjectName} />
										<ChapterNode chapterData={subject.children} subjectId={subject.id} outdentInput={outdentInput} indentInput={indentInput} />
										<AddRowButton subjectId={subject.id} />
									</div>
								)
						)
					) : (
						<h1 style={{ marginTop: "30px", textAlign: "center" }}>First Add A Subject</h1>
					)}
				</main>
			</Base>
		</>
	);
}
