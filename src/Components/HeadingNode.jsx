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
				return (
					<div key={index}>
						<div className="heading" style={{ backgroundColor: "red" }}>
							<div>
								<UpIcon color="#fff" width="25" height="25" />
								<DownIcon color="#fff" width="25" height="25" />
								<OutdentIcon color="#fff" width="25" height="25" />
								<IndentIcon color="#fff" width="25" height="25" />
								<DeleteIcon color="#fff" width="25" height="25" />
							</div>
							<div></div>
							{/* // TODO */}
							<input type="text" defaultValue={data.text} />
						</div>
						<SubHeadingNode subHeadingData={data.children} subHeadingOrderData={data.order} />;
					</div>
				);
			})}
		</>
	);
}
