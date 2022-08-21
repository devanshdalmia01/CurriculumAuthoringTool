import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const dataSlice = createSlice({
	name: "data",
	initialState: {
		0: [],
	},
	reducers: {
		getDataFromFile(state, action) {
			const tempState = state[0];
			tempState = action.payload;
		},
		addSubject(state, action) {
			const tempState = state[0];
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
		},
		addStandard(state, action) {
			const tempState = state[0];
			let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload);
			if (tempState[subjectIndex].children.length === 0) {
				tempState[subjectIndex].children.push({
					id: uuidv4(),
					text: "",
					children: [],
				});
			} else if (tempState[subjectIndex].children.at(-1).children.length === 0) {
				if (tempState[subjectIndex].children.at(-1).text) {
					tempState[subjectIndex].children.push({
						id: uuidv4(),
						text: "",
						children: [],
					});
				} else {
					toast.error("Enter something first!");
				}
			} else if (tempState[subjectIndex].children.at(-1).children.at(-1).children.length === 0) {
				if (tempState[subjectIndex].children.at(-1).children.at(-1).text) {
					tempState[subjectIndex].children.at(-1).children.push({
						id: uuidv4(),
						text: "",
						children: [],
					});
				} else {
					toast.error("Enter something first!");
				}
			} else if (tempState[subjectIndex].children.at(-1).children.at(-1).children.at(-1).children.length === 0) {
				if (tempState[subjectIndex].children.at(-1).children.at(-1).children.at(-1).text) {
					tempState[subjectIndex].children.at(-1).children.at(-1).children.push({
						id: uuidv4(),
						text: "",
						children: [],
					});
				} else {
					toast.error("Enter something first!");
				}
			}
		},
		deleteStandard(state, action) {
			const tempState = state[0];
			let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
			let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
			if (action.payload.length === 2) {
				tempState[subjectIndex].children.splice(chapterIndex, 1);
			} else if (action.payload.length === 3) {
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, 1);
			} else if (action.payload.length === 4) {
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				let subHeadingIndex = tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.findIndex((subHeading) => subHeading.id === action.payload[3]);
				tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.splice(subHeadingIndex, 1);
			}
		},
		updateStandard(state, action) {
			const tempState = state[0];
			const value = action.payload[0];
			let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[1]);
			let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[2]);
			if (action.payload.length === 3) {
				tempState[subjectIndex].children[chapterIndex].text = value;
			} else if (action.payload.length === 4) {
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[3]);
				tempState[subjectIndex].children[chapterIndex].children[headingIndex].text = value;
			} else if (action.payload.length === 5) {
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[3]);
				let subHeadingIndex = tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.findIndex((subHeading) => subHeading.id === action.payload[4]);
				tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex].text = value;
			}
		},
		outdentStandard(state, action) {
			const tempState = state[0];
			if (action.payload.length === 3) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				if (tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length !== 0) {
					toast.error("This heading has subheadings, you cannot outdent this!");
				} else if (headingIndex === 0) {
					tempState[subjectIndex].children.splice(chapterIndex + 1, 0, tempState[subjectIndex].children[chapterIndex].children[headingIndex]);
					for (let i = headingIndex + 1; i < tempState[subjectIndex].children[chapterIndex].children.length; i++) {
						tempState[subjectIndex].children[chapterIndex + 1].children.push(tempState[subjectIndex].children[chapterIndex].children[i]);
					}
					tempState[subjectIndex].children[chapterIndex].children = [];
				} else if (headingIndex === tempState[subjectIndex].children[chapterIndex].children.length - 1) {
					tempState[subjectIndex].children.splice(chapterIndex + 1, 0, tempState[subjectIndex].children[chapterIndex].children[headingIndex]);
					tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, 1);
				} else {
					tempState[subjectIndex].children.splice(chapterIndex + 1, 0, tempState[subjectIndex].children[chapterIndex].children[headingIndex]);
					for (let i = headingIndex + 1; i < tempState[subjectIndex].children[chapterIndex].children.length; i++) {
						tempState[subjectIndex].children[chapterIndex + 1].children.push(tempState[subjectIndex].children[chapterIndex].children[i]);
					}
					tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, tempState[subjectIndex].children[chapterIndex].children.length - headingIndex);
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
				} else if (subHeadingIndex === 0 && tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length === 1) {
					tempState[subjectIndex].children[chapterIndex].children.splice(
						headingIndex + 1,
						0,
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex]
					);
					tempState[subjectIndex].children[chapterIndex].children[headingIndex].children = [];
				} else if (subHeadingIndex === tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length - 1) {
					tempState[subjectIndex].children[chapterIndex].children.splice(
						headingIndex + 1,
						0,
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex]
					);
					tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.splice(subHeadingIndex, 1);
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
				}
			}
		},
		indentStandard(state, action) {
			const tempState = state[0];
			if (action.payload.length === 2) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				if (tempState[subjectIndex].children[0].id === action.payload[1]) {
					toast.error("First chapter cannot be a heading!");
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
				}
			} else if (action.payload.length === 3) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				if (tempState[subjectIndex].children[chapterIndex].children[0].id === action.payload[2]) {
					toast.error("This is the first heading you cannot indent this!");
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
				}
			}
		},
		moveUpStandard(state, action) {
			const tempState = state[0];
			if (action.payload.length === 2) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				if (chapterIndex === 0) {
					toast.error("First chapter cannot be moved upwards!");
				} else {
					[tempState[subjectIndex].children[chapterIndex - 1], tempState[subjectIndex].children[chapterIndex]] = [
						tempState[subjectIndex].children[chapterIndex],
						tempState[subjectIndex].children[chapterIndex - 1],
					];
				}
			}
			if (action.payload.length === 3) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				if (headingIndex === 0 && chapterIndex === 0) {
					toast.error("First heading of the first chapter cannot be moved upwards!");
				} else if (headingIndex === 0 && chapterIndex !== 0) {
					tempState[subjectIndex].children[chapterIndex - 1].children.push(tempState[subjectIndex].children[chapterIndex].children[headingIndex]);
					tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, 1);
				} else {
					[tempState[subjectIndex].children[chapterIndex].children[headingIndex - 1], tempState[subjectIndex].children[chapterIndex].children[headingIndex]] = [
						tempState[subjectIndex].children[chapterIndex].children[headingIndex],
						tempState[subjectIndex].children[chapterIndex].children[headingIndex - 1],
					];
				}
			}
			if (action.payload.length === 4) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				let subHeadingIndex = tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.findIndex((subHeading) => subHeading.id === action.payload[3]);
				if (subHeadingIndex === 0) {
					toast.error("First subheading cannot be moved upwards!");
				} else {
					[
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex - 1],
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex],
					] = [
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex],
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex - 1],
					];
				}
			}
		},
		moveDownStandard(state, action) {
			const tempState = state[0];
			if (action.payload.length === 2) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				if (chapterIndex === tempState[subjectIndex].children.length - 1) {
					toast.error("Last chapter cannot be moved downwards!");
				} else {
					[tempState[subjectIndex].children[chapterIndex + 1], tempState[subjectIndex].children[chapterIndex]] = [
						tempState[subjectIndex].children[chapterIndex],
						tempState[subjectIndex].children[chapterIndex + 1],
					];
				}
			}
			if (action.payload.length === 3) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				if (headingIndex === tempState[subjectIndex].children[chapterIndex].children.length - 1 && chapterIndex === tempState[subjectIndex].children.length - 1) {
					tempState[subjectIndex].children.push(tempState[subjectIndex].children[chapterIndex].children[headingIndex]);
					tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, 1);
				} else if (headingIndex === tempState[subjectIndex].children[chapterIndex].children.length - 1 && chapterIndex !== tempState[subjectIndex].children.length - 1) {
					tempState[subjectIndex].children[chapterIndex + 1].children.unshift(tempState[subjectIndex].children[chapterIndex].children[headingIndex]);
					tempState[subjectIndex].children[chapterIndex].children.splice(headingIndex, 1);
				} else {
					[tempState[subjectIndex].children[chapterIndex].children[headingIndex + 1], tempState[subjectIndex].children[chapterIndex].children[headingIndex]] = [
						tempState[subjectIndex].children[chapterIndex].children[headingIndex],
						tempState[subjectIndex].children[chapterIndex].children[headingIndex + 1],
					];
				}
			}
			if (action.payload.length === 4) {
				let subjectIndex = tempState.findIndex((subject) => subject.id === action.payload[0]);
				let chapterIndex = tempState[subjectIndex].children.findIndex((chapter) => chapter.id === action.payload[1]);
				let headingIndex = tempState[subjectIndex].children[chapterIndex].children.findIndex((heading) => heading.id === action.payload[2]);
				let subHeadingIndex = tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.findIndex((subHeading) => subHeading.id === action.payload[3]);
				if (subHeadingIndex === tempState[subjectIndex].children[chapterIndex].children[headingIndex].children.length - 1) {
					toast.error("Last subheading cannot be moved downwards!");
				} else {
					[
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex + 1],
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex],
					] = [
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex],
						tempState[subjectIndex].children[chapterIndex].children[headingIndex].children[subHeadingIndex + 1],
					];
				}
			}
		},
	},
});

export const { getDataFromFile, addSubject, addStandard, deleteStandard, updateStandard, outdentStandard, indentStandard, moveUpStandard, moveDownStandard } = dataSlice.actions;

export default dataSlice.reducer;
