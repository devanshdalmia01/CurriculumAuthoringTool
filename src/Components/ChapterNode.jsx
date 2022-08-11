import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";
import HeadingNode from "./HeadingNode";
import { useDispatch } from "react-redux";
import { actions } from "../Data/data";
import { toast } from "react-toastify";
import ReactTooltip from "react-tooltip";

export default function ChapterNode({ subjectId, chapterData }) {
	const dispatch = useDispatch();
	const handleUpdate = (e, chapterId) => {
		e.preventDefault();
		dispatch(actions.updateStandard([e.target.value, subjectId, chapterId]));
	};
	const handleDelete = (e, chapterId) => {
		e.preventDefault();
		dispatch(actions.deleteStandard([subjectId, chapterId]));
	};
	const handleIndent = (e, chapterId) => {
		e.preventDefault();
		dispatch(actions.indentStandard([subjectId, chapterId]));
	};
	const handleOutdent = (e) => {
		e.preventDefault();
		return toast.error("You cannot outdent a chapter!");
	};
	return (
		<>
			{chapterData.map((data) => {
				return (
					<div key={data.id}>
						<div className="chapter">
							<div className="iconsDiv">
								<ReactTooltip type="light" effect="solid" className="toolTip" />
								<button data-tip="Move Up">
									<UpIcon width="20" height="20" />
								</button>
								<button data-tip="Move Down">
									<DownIcon width="20" height="20" />
								</button>
								<button data-tip="Outdent" onClick={handleOutdent}>
									<OutdentIcon width="20" height="20" />
								</button>
								<button data-tip="Indent" onClick={(e) => handleIndent(e, data.id)}>
									<IndentIcon width="20" height="20" />
								</button>
								<button data-tip="Delete" onClick={(e) => handleDelete(e, data.id)}>
									<DeleteIcon width="20" height="20" />
								</button>
							</div>
							<div className="highlighterDiv">&nbsp;</div>
							<label htmlFor={data.id}></label>
							<input placeholder="Enter chapter name" className="inputField" type="text" id={data.id} value={data.text} onChange={(e) => handleUpdate(e, data.id)} autoFocus={true} />
						</div>
						<hr className="line" />
						<HeadingNode headingData={data.children} subjectId={subjectId} chapterId={data.id} />
					</div>
				);
			})}
		</>
	);
}
