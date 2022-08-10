import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Base from "../Base";
import ChapterNode from "../Components/ChapterNode";
import TableHeading from "../Components/TableHeading";
import TopBar from "../Components/TopBar";
import AddRowButton from "../Components/AddRowButton";
import AddSubjectButton from "../Components/AddSubjectButton";

export default function LoadCurriculum() {
	const [fileName, setFileName] = useState("Select File");
	const [jsonData, setJsonData] = useState();
	const [fileUploaded, setFileUploaded] = useState(false);
	const [file, setFile] = useState("");
	const [newSubjectName, setNewSubjectName] = useState("");
	const [currentSubjectName, setCurrentSubjectName] = useState(jsonData ? jsonData[0].text : "");
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
	const getJSONData = (e) => {
		e.preventDefault();
		if (file) {
			if (file.type.includes("json")) {
				const reader = new FileReader();
				reader.onload = async (e) => {
					setJsonData(JSON.parse(e.target.result));
					setFileUploaded(true);
				};
				reader.readAsText(file);
			} else {
				return toast.error("Please upload a JSON file.");
			}
		} else {
			return toast.error("Please select a file.");
		}
	};
	useEffect(() => {
		if (jsonData) {
			setCurrentSubjectName(jsonData[0].text);
		}
	}, [fileUploaded, jsonData]);
	return (
		<>
			<Base>
				{fileUploaded ? (
					<main className="mainData">
						<TopBar newSubjectName={newSubjectName} handleChange={handleChange} addSubject={addSubject} />
						{jsonData.map((subject, index) => {
							let subjectName = subject.text;
							return <AddSubjectButton key={index} subjectName={subjectName} currentSubjectName={currentSubjectName} setCurrentSubjectName={setCurrentSubjectName} />;
						})}
						<TableHeading currentSubjectName={currentSubjectName} />
						{jsonData.map((subject, index) => subject.text === currentSubjectName && <ChapterNode key={index} chapterData={subject.children} chapterOrderData={subject.order} />)}
						<AddRowButton />
					</main>
				) : (
					<main className="uploadFile fromLoadCurriculum">
						<input
							type="file"
							id="fileInput"
							onChange={(e) => {
								setFile(e.target.files[0]);
								setFileName(e.target.files[0].name);
							}}
						/>
						<label htmlFor="fileInput">
							<svg style={{ marginRight: "20px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}>
								<path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
							</svg>
							<span>{fileName}</span>
						</label>
						<button style={{ fontSize: "18px", padding: "20px 25px" }} className="uploadButton" type="submit" onClick={getJSONData}>
							Upload
						</button>
					</main>
				)}
			</Base>
		</>
	);
}
