import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";
import SubHeadingNode from "./SubHeadingNode";
import { useDispatch } from "react-redux";
import { actions } from "../Data/data";
import ReactTooltip from "react-tooltip";

export default function HeadingNode({ subjectId, chapterId, headingData, pressEnter, setPressEnter }) {
	const dispatch = useDispatch();
	const handleUpdate = (e, headingId) => {
		e.preventDefault();
		dispatch(actions.updateStandard([e.target.value, subjectId, chapterId, headingId]));
	};
	const handleDelete = (e, headingId) => {
		e.preventDefault();
		dispatch(actions.deleteStandard([subjectId, chapterId, headingId]));
	};
	const handleIndent = (e, headingId) => {
		e.preventDefault();
		dispatch(actions.indentStandard([subjectId, chapterId, headingId]));
	};
	const handleOutdent = (e, headingId) => {
		e.preventDefault();
		dispatch(actions.outdentStandard([subjectId, chapterId, headingId]));
	};
	const handleMoveUp = (e, headingId) => {
		e.preventDefault();
		dispatch(actions.moveUpStandard([subjectId, chapterId, headingId]));
	};
	const handleMoveDown = (e, headingId) => {
		e.preventDefault();
		dispatch(actions.moveDownStandard([subjectId, chapterId, headingId]));
	};
	const handlePressEnter = (e) => {
		if (e.keyCode === 13) {
			setPressEnter(!pressEnter);
		}
	};
	return (
		<>
			{headingData.map((data) => {
				return (
					<div key={data.id}>
						<div className="heading">
							<div className="iconsDiv">
								<ReactTooltip type="light" effect="solid" className="toolTip" />
								<button data-tip="Move Up" onClick={(e) => handleMoveUp(e, data.id)}>
									<UpIcon />
								</button>
								<button data-tip="Move Down" onClick={(e) => handleMoveDown(e, data.id)}>
									<DownIcon />
								</button>
								<button data-tip="Outdent" onClick={(e) => handleOutdent(e, data.id)}>
									<OutdentIcon />
								</button>
								<button data-tip="Indent" onClick={(e) => handleIndent(e, data.id)}>
									<IndentIcon />
								</button>
								<button data-tip="Delete" onClick={(e) => handleDelete(e, data.id)}>
									<DeleteIcon />
								</button>
							</div>
							<div className="highlighterDiv">&nbsp;</div>
							<label htmlFor={data.id}></label>
							<input
								onKeyDown={handlePressEnter}
								placeholder="Enter heading name"
								className="inputField"
								type="text"
								id={data.id}
								value={data.text}
								onChange={(e) => handleUpdate(e, data.id)}
								autoFocus={true}
							/>
						</div>
						<hr className="line" />
						<SubHeadingNode subHeadingData={data.children} subjectId={subjectId} chapterId={chapterId} headingId={data.id} pressEnter={pressEnter} setPressEnter={setPressEnter} />
					</div>
				);
			})}
		</>
	);
}
