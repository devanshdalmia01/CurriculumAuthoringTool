import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const dataSlice = createSlice({
	name: "data",
	initialState: [],
	reducers: {
		addSubject(state, action) {
			if (action.payload === "") {
				return toast.warning("Please enter name!");
			} else {
				state.push({
					id: uuidv4(),
					indentLevel: 0,
					text: action.payload,
					children: [
						{
							id: uuidv4(),
							indentLevel: 1,
							text: "",
							children: [],
						},
					],
				});
			}
		},
		addStandard(state, action) {
			const subjectId = action.payload;
			let subjectIndex = state.findIndex((subject) => subject.id === subjectId);
			state[subjectIndex].children.push({
				id: uuidv4(),
				indentLevel: 1,
				text: "",
				children: [],
			});
		},
		deleteStandard(state, action) {
			const tempState = state;
			if (action.payload.length === 2) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				tempState[subjectIndex].children.splice(chapterIndex, 1);
				return tempState;
			} else if (action.payload.length === 3) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, 1);
				return tempState;
			} else if (action.payload.length === 4) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				let subHeadingIndex = tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.findIndex((subHeading) => subHeading.id === action.payload[3]);
				tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.splice(subHeadingIndex, 1);
				return tempState;
			}
		},
		updateStandard(state, action) {
			const tempState = state;
			const value = action.payload[0];
			if (action.payload.length === 3) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[1]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[2]);
				tempState[subjectIndex].children[chapterIndex].text = value;
				return tempState;
			} else if (action.payload.length === 4) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[1]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[2]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[3]);
				tempState[subjectIndex].children[chapterIndex].children[headingIndex].text = value;
				return tempState;
			} else if (action.payload.length === 5) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[1]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[2]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[3]);
				let subHeadingIndex = tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.findIndex((subHeading) => subHeading.id === action.payload[4]);
				tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex].text = value;
				return tempState;
			}
		},
		outdentStandard(state, action) {},
		indentStandard(state, action) {},
		moveUpStandard(state, action) {},
		moveDownStandard(state, action) {},
	},
});
const store = configureStore({
	reducer: dataSlice.reducer,
});
export const actions = dataSlice.actions;
export default store;
