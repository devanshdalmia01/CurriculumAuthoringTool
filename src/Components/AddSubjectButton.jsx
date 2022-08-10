export default function AddSubjectButton({ subjectName, currentSubjectName, setCurrentSubjectName }) {
	return (
		<button
			onClick={() => {
				setCurrentSubjectName(subjectName);
			}}
			className={currentSubjectName === subjectName ? "subjectChangeButton active" : "subjectChangeButton"}
		>
			{subjectName}
		</button>
	);
}
