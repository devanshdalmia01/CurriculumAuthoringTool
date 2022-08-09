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
				return (
					<div key={index} className="heading">
						<div>
							<UpIcon color="#fff" width="20" height="20" />
							<DownIcon color="#fff" width="20" height="20" />
							<OutdentIcon color="#fff" width="20" height="20" />
							<IndentIcon color="#fff" width="20" height="20" />
							<DeleteIcon color="#fff" width="20" height="20" />
						</div>
						<div></div>
						{/* // TODO */}
						<input type="text" defaultValue={data.text} />
					</div>
				);
			})}
		</>
	);
}
