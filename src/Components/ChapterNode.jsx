import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";
import HeadingNode from "./HeadingNode";

export default function ChapterNode({ chapterData, chapterOrderData }) {
	return (
		<>
			{chapterOrderData.map((order, index) => {
				let data = Object.values(chapterData)[order];
				let makingUnique = Math.random();
				return (
					<div key={index}>
						<div className="chapter">
							<div className="iconsDiv">
								<button>
									<UpIcon width="20" height="20" />
								</button>
								<button>
									<DownIcon width="20" height="20" />
								</button>
								<button>
									<OutdentIcon width="20" height="20" />
								</button>
								<button>
									<IndentIcon width="20" height="20" />
								</button>
								<button>
									<DeleteIcon width="20" height="20" />
								</button>
							</div>
							<div className="highlighterDiv">&nbsp;</div>
							{/* // TODO */}
							<label htmlFor={`chapterText${makingUnique}`}></label>
							<input className="inputField" type="text" id={`chapterText${makingUnique}`} defaultValue={data.text} />
						</div>
						<hr className="line" />
						<HeadingNode headingData={data.children} headingOrderData={data.order} />
					</div>
				);
			})}
		</>
	);
}
