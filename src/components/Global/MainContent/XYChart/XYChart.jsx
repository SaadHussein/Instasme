import React from "react";
import XY from "./XY";
import LineChart from "../LineChartEChart/LineChart";

const XYChart = () => {
	return (
		<div className="col-xxl-8 ">
			<div className="card card-flush h-md-100">
				<div className="card-header pt-7">
					<h3 className="card-title align-items-start flex-column">
						<span className="card-label fw-bold text-gray-900">
							Payment Sent & Received
						</span>
					</h3>
				</div>
				<div className="card-body pt-5">
					<div id="kt_charts_widget_13_chart">
						{/* <XY /> */}
						<LineChart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default XYChart;
