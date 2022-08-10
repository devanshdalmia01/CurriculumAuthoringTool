import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";
import SubHeadingNode from "./SubHeadingNode";

export default function HeadingNode({ headingData, headingOrderData }) {
	return (
		<>
			{headingOrderData.map((order, index) => {
				let data = Object.values(headingData)[order];
				let makingUnique = Math.random();
				return (
					<div key={index}>
						<div className="heading">
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
							<label htmlFor={`headingText${makingUnique}`}></label>
							<input className="inputField" type="text" id={`headingText${makingUnique}`} defaultValue={data.text} />
						</div>
						<hr className="line" />
						<SubHeadingNode subHeadingData={data.children} subHeadingOrderData={data.order} />
					</div>
				);
			})}
		</>
	);
}
