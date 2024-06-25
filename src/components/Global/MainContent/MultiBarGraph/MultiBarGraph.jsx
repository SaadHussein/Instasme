import React from "react";
import MultiBar from "./MultiBar";
import BarChart from "../BarChart/BarChart";

const MultiBarGraph = () => {
	return (
		<div className="col-xl-8">
			<div className="card card-flush h-xl-100">
				<div className="card-header pt-7">
					<h3 className="card-title align-items-start flex-column">
						<span className="card-label fw-bold text-gray-900">
							This Week Sales & Purchases
						</span>
					</h3>
				</div>
				<div className="card-body pt-5">
					<div
						id="kt_charts_widget_15_chart"
						className="min-h-auto ps-4 pe-6 mb-3 h-350px"
					>
						<MultiBar />
						{/* <BarChart /> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MultiBarGraph;
