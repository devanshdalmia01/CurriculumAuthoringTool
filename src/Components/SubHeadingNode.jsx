import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";
import { useDispatch } from "react-redux";
import { updateStandard, deleteStandard, outdentStandard, moveUpStandard, moveDownStandard } from "../redux/storingData";
import { toast } from "react-toastify";
import ReactTooltip from "react-tooltip";

export default function SubHeadingNode({ subjectId, chapterId, headingId, subHeadingData, pressEnter, setPressEnter }) {
	const dispatch = useDispatch();
	const handleUpdate = (e, subHeadingId) => {
		e.preventDefault();
		dispatch(updateStandard([e.target.value, subjectId, chapterId, headingId, subHeadingId]));
	};
	const handleDelete = (e, subHeadingId) => {
		e.preventDefault();
		dispatch(deleteStandard([subjectId, chapterId, headingId, subHeadingId]));
	};
	const handleIndent = (e) => {
		e.preventDefault();
		return toast.error("You cannot indent a subheading!");
	};
	const handleOutdent = (e, subHeadingId) => {
		e.preventDefault();
		dispatch(outdentStandard([subjectId, chapterId, headingId, subHeadingId]));
	};
	const handleMoveUp = (e, subHeadingId) => {
		e.preventDefault();
		dispatch(moveUpStandard([subjectId, chapterId, headingId, subHeadingId]));
	};
	const handleMoveDown = (e, subHeadingId) => {
		e.preventDefault();
		dispatch(moveDownStandard([subjectId, chapterId, headingId, subHeadingId]));
	};
	const handlePressEnter = (e) => {
		if (e.keyCode === 13) {
			setPressEnter(!pressEnter);
		}
	};
	return subHeadingData.map((data) => {
		return (
			<div key={data.id}>
				<div className="subheading">
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
						<button data-tip="Indent" onClick={handleIndent}>
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
						placeholder="Enter subheading name"
						className="inputField"
						type="text"
						id={data.id}
						value={data.text}
						onChange={(e) => handleUpdate(e, data.id)}
						autoFocus={true}
					/>
				</div>
				<hr className="line" />
			</div>
		);
	});
}
