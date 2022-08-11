import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";
import { useDispatch } from "react-redux";
import { actions } from "../Data/data";
import { toast } from "react-toastify";

export default function SubHeadingNode({ subjectId, chapterId, headingId, subHeadingData }) {
	const dispatch = useDispatch();
	const handleUpdate = (e, subHeadingId) => {
		e.preventDefault();
		dispatch(actions.updateStandard([e.target.value, subjectId, chapterId, headingId, subHeadingId]));
	};
	const handleDelete = (e, subHeadingId) => {
		e.preventDefault();
		dispatch(actions.deleteStandard([subjectId, chapterId, headingId, subHeadingId]));
	};
	const handleIndent = (e) => {
		e.preventDefault();
		return toast.error("You cannot indent a subheading!");
	};
	const handleOutdent = (e, subHeadingId) => {
		e.preventDefault();
		dispatch(actions.outdentStandard([subjectId, chapterId, headingId, subHeadingId]));
	};
	return (
		<>
			{subHeadingData.map((data) => {
				return (
					<div key={data.id}>
						<div className="subheading">
							<div className="iconsDiv">
								<button data-tip="Move Up">
									<UpIcon width="20" height="20" />
								</button>
								<button data-tip="Move Down">
									<DownIcon width="20" height="20" />
								</button>
								<button data-tip="Outdent" onClick={(e) => handleOutdent(e, data.id)}>
									<OutdentIcon width="20" height="20" />
								</button>
								<button data-tip="Indent" onClick={handleIndent}>
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
					</div>
				);
			})}
		</>
	);
}
