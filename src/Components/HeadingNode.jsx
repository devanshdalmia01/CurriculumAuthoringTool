import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";
import SubHeadingNode from "./SubHeadingNode";
import { useDispatch } from "react-redux";
import { actions } from "../Data/data";

export default function HeadingNode({ subjectId, chapterId, headingData, outdentInput, indentInput }) {
	const dispatch = useDispatch();
	const handleUpdate = (e, headingId) => {
		e.preventDefault();
		dispatch(actions.updateStandard([e.target.value, subjectId, chapterId, headingId]));
	};
	const handleDelete = (e, headingId) => {
		e.preventDefault();
		dispatch(actions.deleteStandard([subjectId, chapterId, headingId]));
	};
	return (
		<>
			{headingData.map((data) => {
				return (
					<div key={data.id}>
						<div className="heading">
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
						<SubHeadingNode subHeadingData={data.children} subjectId={subjectId} chapterId={chapterId} headingId={data.id} outdentInput={outdentInput} indentInput={indentInput} />
					</div>
				);
			})}
		</>
	);
}
