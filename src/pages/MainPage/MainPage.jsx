import React from "react";
import StatisticsCard from "../../components/Global/MainContent/StatisticsCard/StatisticsCard";
import MultiBarGraph from "../../components/Global/MainContent/MultiBarGraph/MultiBarGraph";
import SolidGaugeChart from "../../components/Global/MainContent/SolidGaugeChart/SolidGaugeChart";
import TopSellingProduct from "../../components/Global/MainContent/TopSellingProduct/TopSellingProduct";
import StockReport from "../../components/Global/MainContent/StockReport/StockReport";
import classes from "../../styles/global.module.css";

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
							<SolidGaugeChart />
						</div>
						<div className="row g-5 g-xl-10 g-xl-10 mt-1">
							<TopSellingProduct />
							<StockReport />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
