import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";
import HeadingNode from "./HeadingNode";
import { useDispatch } from "react-redux";
import { actions } from "../Data/data";

export default function ChapterNode({ subjectId, chapterData, outdentInput, indentInput }) {
	const dispatch = useDispatch();
	const handleUpdate = (e, chapterId) => {
		e.preventDefault();
		dispatch(actions.updateStandard([e.target.value, subjectId, chapterId]));
	};
	const handleDelete = (e, chapterId) => {
		e.preventDefault();
		dispatch(actions.deleteStandard([subjectId, chapterId]));
	};
	return (
		<>
			{chapterData.map((data) => {
				return (
					<div key={data.id}>
						<div className="chapter">
							<div className="iconsDiv">
								<button data-tip="Move Up">
									<UpIcon width="20" height="20" />
								</button>
								<button data-tip="Move Down">
									<DownIcon width="20" height="20" />
								</button>
								<button data-tip="Outdent" onClick={outdentInput}>
									<OutdentIcon width="20" height="20" />
								</button>
								<button data-tip="Indent" onClick={indentInput}>
									<IndentIcon width="20" height="20" />
								</button>
								<button data-tip="Delete" onClick={(e) => handleDelete(e, data.id)}>
									<DeleteIcon width="20" height="20" />
								</button>
							</div>
							<div className="highlighterDiv">&nbsp;</div>
							<label htmlFor={data.id}></label>
							<input className="inputField" type="text" id={data.id} value={data.text} onChange={(e) => handleUpdate(e, data.id)} />
						</div>
						<hr className="line" />
						<HeadingNode headingData={data.children} subjectId={subjectId} chapterId={data.id} outdentInput={outdentInput} indentInput={indentInput} />
					</div>
				);
			})}
		</>
	);
}
