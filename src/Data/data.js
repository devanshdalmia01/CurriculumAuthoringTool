import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const dataSlice = createSlice({
	name: "data",
	initialState: [],
	reducers: {
		addSubject(state, action) {
			const tempState = state;
			tempState.push({
				id: uuidv4(),
				text: action.payload,
				children: [
					{
						id: uuidv4(),
						text: "",
						children: [],
					},
				],
			});
			return tempState;
		},
		addStandard(state, action) {
			const tempState = state;
			let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload);
			if (tempState[subjectIndex].children.length === 0) {
				tempState[subjectIndex].children.push({
					id: uuidv4(),
					text: "",
					children: [],
				});
				return tempState;
			} else if (tempState[subjectIndex].children.at(-1).children.length === 0) {
				tempState[subjectIndex].children.push({
					id: uuidv4(),
					text: "",
					children: [],
				});
				return tempState;
			} else if (tempState[subjectIndex].children.at(-1).children.at(-1).children.length === 0) {
				tempState[subjectIndex].children.at(-1).children.push({
					id: uuidv4(),
					text: "",
					children: [],
				});
				return tempState;
			} else if (tempState[subjectIndex].children.at(-1).children.at(-1).children.at(-1).children.length === 0) {
				tempState[subjectIndex].children.at(-1).children.at(-1).children.push({
					id: uuidv4(),
					text: "",
					children: [],
				});
				return tempState;
			}
		},
		deleteStandard(state, action) {
			const tempState = state;
			let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
			let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
			if (action.payload.length === 2) {
				tempState[subjectIndex].children.splice(chapterIndex, 1);
				return tempState;
			} else if (action.payload.length === 3) {
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, 1);
				return tempState;
			} else if (action.payload.length === 4) {
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				let subHeadingIndex = tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.findIndex((subHeading) => subHeading.id === action.payload[3]);
				tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.splice(subHeadingIndex, 1);
				return tempState;
			}
		},
		updateStandard(state, action) {
			const tempState = state;
			const value = action.payload[0];
			let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[1]);
			let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[2]);
			if (action.payload.length === 3) {
				tempState[subjectIndex].children[chapterIndex].text = value;
				return tempState;
			} else if (action.payload.length === 4) {
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[3]);
				tempState[subjectIndex].children[chapterIndex].children[headingIndex].text = value;
				return tempState;
			} else if (action.payload.length === 5) {
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[3]);
				let subHeadingIndex = tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.findIndex((subHeading) => subHeading.id === action.payload[4]);
				tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex].text = value;
				return tempState;
			}
		},
		outdentStandard(state, action) {
			const tempState = state;
			if (action.payload.length === 3) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				if (tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length !== 0) {
					toast.error("This heading has subheadings cannot outdent!");
				} else if (headingIndex === 0) {
					tempState[subjectIndex].children.splice(chapterIndex + 1, 0, tempState[subjectIndex].children[chapterIndex].children[headingIndex]);
					for (let i = headingIndex + 1; i < tempState[subjectIndex].children[chapterIndex].children.length; i++) {
						tempState[subjectIndex].children[chapterIndex + 1].children.push(tempState[subjectIndex].children[chapterIndex].children[i]);
					}
					tempState[subjectIndex].children[chapterIndex].children = [];
					return tempState;
				} else if (headingIndex === tempState[subjectIndex].children[chapterIndex].children.length - 1) {
					tempState[subjectIndex].children.splice(chapterIndex + 1, 0, tempState[subjectIndex].children[chapterIndex].children[headingIndex]);
					tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, 1);
					return tempState;
				} else {
					tempState[subjectIndex].children.splice(chapterIndex + 1, 0, tempState[subjectIndex].children[chapterIndex].children[headingIndex]);
					for (let i = headingIndex + 1; i < tempState[subjectIndex].children[chapterIndex].children.length; i++) {
						tempState[subjectIndex].children[chapterIndex + 1].children.push(tempState[subjectIndex].children[chapterIndex].children[i]);
					}
					tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, tempState[subjectIndex].children[chapterIndex].children.length - headingIndex);
					return tempState;
				}
			} else if (action.payload.length === 4) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				let subHeadingIndex = tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.findIndex((subHeading) => subHeading.id === action.payload[3]);
				if (subHeadingIndex === 0) {
					tempState[subjectIndex].children[chapterIndex].children.splice(
						headingIndex + 1,
						0,
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex]
					);
					for (let i = subHeadingIndex + 1; i < tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length; i++) {
						tempState[subjectIndex].children[chapterIndex].children[headingIndex + 1].children.push(tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[i]);
					}
					tempState[subjectIndex].children[chapterIndex].children[headingIndex].children = [];
					return tempState;
				} else if (subHeadingIndex === 0 && tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length === 1) {
					tempState[subjectIndex].children[chapterIndex].children.splice(
						headingIndex + 1,
						0,
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex]
					);
					tempState[subjectIndex].children[chapterIndex].children[headingIndex].children = [];
					return tempState;
				} else if (subHeadingIndex === tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length - 1) {
					tempState[subjectIndex].children[chapterIndex].children.splice(
						headingIndex + 1,
						0,
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex]
					);
					tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.splice(subHeadingIndex, 1);
					return tempState;
				} else {
					tempState[subjectIndex].children[chapterIndex].children.splice(
						headingIndex + 1,
						0,
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex]
					);
					for (let i = subHeadingIndex + 1; i < tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length; i++) {
						tempState[subjectIndex].children[chapterIndex].children[headingIndex + 1].children.push(tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[i]);
					}
					tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.splice(
						subHeadingIndex,
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length - subHeadingIndex
					);
					return tempState;
				}
			}
		},
		indentStandard(state, action) {
			const tempState = state;
			if (action.payload.length === 2) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				if (tempState[subjectIndex].children[0].id === action.payload[1]) {
					toast.error("First position cannot be heading!");
				} else {
					let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
					tempState[subjectIndex].children[chapterIndex - 1].children.push({
						id: tempState[subjectIndex].children[chapterIndex].id,
						text: tempState[subjectIndex].children[chapterIndex].text,
						children: [],
					});
					for (let i = 0; i < tempState[subjectIndex].children[chapterIndex].children.length; i++) {
						tempState[subjectIndex].children[chapterIndex - 1].children.push(tempState[subjectIndex].children[chapterIndex].children[i]);
					}
					tempState[subjectIndex].children.splice(chapterIndex, 1);
					return tempState;
				}
			} else if (action.payload.length === 3) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				if (tempState[subjectIndex].children[chapterIndex].children[0].id === action.payload[2]) {
					toast.error("This is the first heading you cannot indent this.");
				} else {
					let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
					tempState[subjectIndex].children[chapterIndex].children[headingIndex - 1].children.push({
						id: tempState[subjectIndex].children[chapterIndex].children[headingIndex].id,
						text: tempState[subjectIndex].children[chapterIndex].children[headingIndex].text,
						children: [],
					});
					for (let i = 0; i < tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length; i++) {
						tempState[subjectIndex].children[chapterIndex].children[headingIndex - 1].push(tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[i]);
					}
					tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, 1);
					return tempState;
				}
			}
		},
		moveUpStandard(state, action) {},
		moveDownStandard(state, action) {},
	},
});
const store = configureStore({
	reducer: dataSlice.reducer,
});
export const actions = dataSlice.actions;
export default store;
