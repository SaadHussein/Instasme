import React, { useState } from "react";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import privateClasses from "./TopSellingProducts.module.css";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import Toolbar from "../../Accounting/Toolbar";
import { ReportsPage } from "../../../data/Pages/reports";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import classes from "../../../styles/global.module.css";
import TopSellingProductsTable from "../../../components/Reports/TopSellingProducts/TopSellingProductsTable/TopSellingProductsTable";

const columnsTable = [
	{ label: "Code", visible: true },
	{ label: "Product", visible: true },
	{ label: "Total Sales", visible: true },
	{ label: "Total Amount", visible: true },
	// { label: "Actions", visible: true },
];

const topSellingProductsTableItems = [
	{
		code: "6753489384",
		product: "Banana",
		totalSales: 5,
		totalAmount: 4463,
	},
];

const TopSellingProducts = () => {
	const [columns, setColumns] = useState([...columnsTable]);

	const changeLabelVisiblity = (label) => {
		const updatedColumns = columns.map((column) =>
			column.label === label ? { ...column, visible: !column.visible } : column
		);

		setColumns([...updatedColumns]);
	};

	return (
		<LoadingWrapper>
			<div
				className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
			>
				<div className="d-flex flex-column flex-column-fluid">
					<div
						className={`d-flex align-items-center justify-content-between ${privateClasses.navPages}`}
					>
						<Toolbar
							title={"Top Selling Products"}
							path={["Reports", "Top Selling Products"]}
						/>
						<PagesNavigationBar pages={ReportsPage} />
					</div>
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							className="app-container container-fluid"
						>
							<div className="card card-flush p-5">
								<div
									className={`d-flex align-items-start justify-content-between mb-8 gap-2 ${privateClasses.tableHeader}`}
								>
									<SearchInputIvonInside />
									<div
										className={`d-flex align-items-center justify-content-end gap-2 ${privateClasses.tableButtons}`}
									>
										<DateRange />
										<ExportButtonAndList />
										{/* <Button
											text={"Create"}
											className="btn btn-primary width-full-invoices fs-6"
											color="#1B84FF"
											isFullInMobile={true}
											icon={
												<FiPlusCircle
													size={18}
													style={{
														marginRight: "4px",
														fontWeight: "500",
													}}
												/>
											}
										/> */}
										<ColumnVisibility
											columns={columns}
											changeLabelVisiblity={changeLabelVisiblity}
										/>
									</div>
								</div>
								<TopSellingProductsTable
									columnsVisible={columns}
									topSellingProductsTableItems={topSellingProductsTableItems}
								/>
								<div
									className={`d-flex align-items-center justify-content-between ${privateClasses.tableFooter}`}
								>
									<div
										className={`d-flex align-items-center justify-content-start w-50 gap-3 ${privateClasses.rowSelect}`}
									>
										<div className="w-150px">
											<LabelHeaderReactSelect
												defaultValue={10}
												label={""}
												name={"Rows-Per-Page"}
												placeholder={10}
												options={[
													{ value: 10, label: 10 },
													{ value: 20, label: 20 },
													{ value: 30, label: 30 },
													{ value: 40, label: 40 },
													{ value: 50, label: 50 },
												]}
											/>
										</div>
									</div>
									<TablePagination />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</LoadingWrapper>
	);
};

export default TopSellingProducts;
