import React, { useState } from "react";
import Pie from "./Pie";
import PieEChart from "../PieChartEChart/PieEChart";

const PieChart = ({ chartTilte, dataFor }) => {
	return (
		<div className="col-xl-4 ">
			<div className="card card-flush h-xl-100">
				<div className="card-header pt-7">
					<h3 className="card-title align-items-start flex-column">
						<span className="card-label fw-bold text-gray-900">
							{chartTilte}
						</span>
					</h3>
				</div>
				<div className="card-body pt-5">
					<div
						id="kt_charts_widget_14_chart"
						className="w-100 h-350px"
						style={{ position: "relative" }}
					>
						<PieEChart dataFor={dataFor} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PieChart;
