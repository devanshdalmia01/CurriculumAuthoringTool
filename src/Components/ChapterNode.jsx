import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";
import HeadingNode from "./HeadingNode";

export default function ChapterNode({ chapterData }) {
	return (
		<>
			{chapterData.map((data, index) => {
				let makingUnique = Math.random();
				return (
					<div key={index}>
						<div className="chapter">
							<div className="iconsDiv">
								<button data-tip="Move Up">
									<UpIcon width="20" height="20" />
								</button>
								<button data-tip="Move Down">
									<DownIcon width="20" height="20" />
								</button>
								<button data-tip="Outdent">
									<OutdentIcon width="20" height="20" />
								</button>
								<button data-tip="Indent">
									<IndentIcon width="20" height="20" />
								</button>
								<button data-tip="Delete">
									<DeleteIcon width="20" height="20" />
								</button>
							</div>
							<div className="highlighterDiv">&nbsp;</div>
							{/* // TODO */}
							<label htmlFor={`chapterText${makingUnique}`}></label>
							<input className="inputField" type="text" id={`chapterText${makingUnique}`} defaultValue={data.text} />
						</div>
						<hr className="line" />
						<HeadingNode headingData={data.children} />
					</div>
				);
			})}
		</>
	);
}
