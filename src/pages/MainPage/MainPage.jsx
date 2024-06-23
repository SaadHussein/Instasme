import React from "react";
import StatisticsCard from "../../components/Global/MainContent/StatisticsCard/StatisticsCard";
import MultiBarGraph from "../../components/Global/MainContent/MultiBarGraph/MultiBarGraph";
import TopSellingProduct from "../../components/Global/MainContent/TopSellingProduct/TopSellingProduct";
import StockReport from "../../components/Global/MainContent/StockReport/StockReport";
import classes from "../../styles/global.module.css";
import PieChart from "../../components/Global/MainContent/PieChartGraph/PieChart";
import XYChart from "../../components/Global/MainContent/XYChart/XYChart";
import Select from "../../components/Global/Select/Select";
import SalesReport from "../../components/Global/MainContent/SalesReport/SalesReport";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";

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
						<div className="w-50 mb-6">
							<Select
								label={"Select a Warehouse"}
								options={["Warehouse One", "Warehouse Two"]}
							/>
						</div>
						<div className="row g-5 g-xl-8">
							<StatisticsCard
								amount={"1,820.00"}
								icon={<HiOutlineShoppingCart size={30} color="#1B84FF" />}
								link={"/"}
								title={"Sales"}
							/>
							<StatisticsCard
								amount={"1,160.00"}
								icon={<HiOutlineShoppingCart size={30} color="#1B84FF" />}
								link={"/"}
								title={"Purchases"}
							/>
							<StatisticsCard
								amount={"0.00"}
								icon={<IoArrowRedoOutline size={30} color="#1B84FF" />}
								link={"/"}
								title={"Sales Return"}
							/>
							<StatisticsCard
								amount={"0.00"}
								icon={<IoArrowUndoOutline size={30} color="#1B84FF" />}
								link={"/"}
								title={"Purchases Return"}
							/>
						</div>
						<div className="row g-5 g-xl-10 g-xl-10">
							<MultiBarGraph />
							<PieChart
								chartTilte={"Top Selling Products (2024)"}
								dataFor={"topProducts"}
							/>
						</div>
						<div className="row g-5 g-xl-10 g-xl-10 mt-1">
							<TopSellingProduct />
							<StockReport />
						</div>
						<div className="row g-5 g-xl-10 g-xl-10 mt-1">
							<XYChart />
							<PieChart
								chartTilte={"Top 5 Customers (June)"}
								dataFor={"customers"}
							/>
						</div>
						<div className="row g-5 g-xl-10 g-xl-10 mt-1">
							<SalesReport />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPage;
