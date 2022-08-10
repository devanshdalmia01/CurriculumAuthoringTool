import UpIcon from "../Assets/Icons/UpIcon";
import DownIcon from "../Assets/Icons/DownIcon";
import OutdentIcon from "../Assets/Icons/OutdentIcon";
import IndentIcon from "../Assets/Icons/IndentIcon";
import DeleteIcon from "../Assets/Icons/DeleteIcon";

export default function SubHeadingNode({ subHeadingData, subHeadingOrderData }) {
	return (
		<>
			{subHeadingOrderData.map((order, index) => {
				let data = Object.values(subHeadingData)[order];
				let makingUnique = Math.random();
				return (
					<>
						<div key={index} className="subheading">
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
							<label htmlFor={`subHeadingText${makingUnique}`}></label>
							<input className="inputField" type="text" id={`subHeadingText${makingUnique}`} defaultValue={data.text} />
						</div>
						<hr className="line" />
					</>
				);
			})}
		</>
	);
}
