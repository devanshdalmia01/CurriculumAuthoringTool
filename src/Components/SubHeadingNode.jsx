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
