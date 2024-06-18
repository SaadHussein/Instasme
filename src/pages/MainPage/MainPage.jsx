import React from "react";
import StatisticsCard from "../../components/Global/MainContent/StatisticsCard/StatisticsCard";
import MultiBarGraph from "../../components/Global/MainContent/MultiBarGraph/MultiBarGraph";
import TopSellingProduct from "../../components/Global/MainContent/TopSellingProduct/TopSellingProduct";
import StockReport from "../../components/Global/MainContent/StockReport/StockReport";
import classes from "../../styles/global.module.css";
import PieChart from "../../components/Global/MainContent/PieChartGraph/PieChart";
import XYChart from "../../components/Global/MainContent/XYChart/XYChart";

const MainPage = () => {
	return (
		<div
			className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
		>
			<div className="d-flex flex-column flex-column-fluid">
				<div id="kt_app_content" className="app-content flex-column-fluid">
					<div
						id="kt_app_content_container"
						class="app-container container-fluid"
					>
						<div className="row g-5 g-xl-8">
							<StatisticsCard />
							<StatisticsCard />
							<StatisticsCard />
							<StatisticsCard />
						</div>
						<div className="row g-5 g-xl-10 g-xl-10">
							<MultiBarGraph />
							<PieChart />
						</div>
						<div className="row g-5 g-xl-10 g-xl-10 mt-1">
							<TopSellingProduct />
							<StockReport />
						</div>
						<div className="row g-5 g-xl-10 g-xl-10 mt-1">
							<XYChart />
							<PieChart />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
