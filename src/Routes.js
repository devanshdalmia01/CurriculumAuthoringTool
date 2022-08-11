import React from "react";
import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import MakeCurriculum from "./Pages/MakeCurriculum";
import LoadCurriculum from "./Pages/LoadCurriculum";
import SelectPage from "./Pages/SelectPage";
import { Provider } from "react-redux";
import data from "./Data/data";

export default function Routes() {
	return (
		<Provider store={data}>
			<BrowserRouter>
				<RouterRoutes>
					<Route exact path="/" element={<SelectPage />} />
					<Route exact path="/makecurriculum" element={<MakeCurriculum />} />
					<Route exact path="/loadcurriculum" element={<LoadCurriculum />} />
				</RouterRoutes>
			</BrowserRouter>
		</Provider>
	);
}
