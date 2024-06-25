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
import Statistics from "../../components/Global/MainContent/Statistics/Statistics";
import { BsCartPlus } from "react-icons/bs";

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
						<div className="row mb-6">
							{/* <StatisticsCard
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
							/> */}
							<Statistics
								title="Sales"
								number="1780.00"
								icon={<HiOutlineShoppingCart size={50} color="white" />}
								backgroundColor="#f24f7c"
							/>
							<Statistics
								title="Purchases"
								number="1160.00"
								backgroundColor="#716cb0"
								icon={<BsCartPlus size={50} color="white" />}
							/>
							<Statistics
								title="Sales Return"
								number="0.00"
								backgroundColor="#33b0e0"
								icon={<IoArrowRedoOutline size={50} color="white" />}
							/>
							<Statistics
								title="Purchases Return"
								number="0.00"
								backgroundColor="#3bc0c3"
								icon={<IoArrowUndoOutline size={50} color="white" />}
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
							<StockReport />
							<TopSellingProduct />
						</div>
						<div className="row g-5 g-xl-10 g-xl-10 mt-1 mb-10">
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
