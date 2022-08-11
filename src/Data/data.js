import { configureStore, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const dataSlice = createSlice({
	name: "data",
	initialState: [],
	reducers: {
		addSubject(state, action) {
			if (action.payload === "") {
				return toast.warning("Please enter name!");
			} else {
				state.push({
					indentLevel: 0,
					text: action.payload,
					children: [],
				});
			}
		},
		addStandard(state, action) {},
		deleteStandard(state, action) {},
		updateStandard(state, action) {},
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
