import React, { useState } from "react";
import Toolbar from "../../Accounting/Toolbar";
import classes from "../../../styles/global.module.css";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import privateClasses from "./AllSales.module.css";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import { LuFilePlus2 } from "react-icons/lu";
import { BsFiles } from "react-icons/bs";
import Button from "../../../components/Global/Button/Button";
import { FiPlusCircle } from "react-icons/fi";
import AllSalesTable from "../../../components/Sales/AllSales/AllSalesTable/AllSalesTable";

const SalesPage = [
	{
		title: "Create Sale",
		link: "/sales/create-sale",
		icon: <LuFilePlus2 className="fs-2 me-2" />,
	},
	{
		title: "All Sales",
		link: "/sales/all-sales",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "POS",
		link: "/sales/pos",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "Shipments",
		link: "/sales/shipments",
		icon: <BsFiles className="fs-2 me-2" />,
	},
];

const columnsTable = [
	{ label: "Date", visible: true },
	{ label: "Reference", visible: true },
	{ label: "Added By", visible: true },
	{ label: "Customer", visible: true },
	{ label: "Warehouse", visible: true },
	{ label: "Status", visible: true },
	{ label: "Grand Total", visible: true },
	{ label: "Paid", visible: true },
	{ label: "Due", visible: true },
	{ label: "Payment Status", visible: true },
	{ label: "Shipping Status", visible: true },
	{ label: "Actions", visible: true },
];

const salesTableItems = [
	{
		date: "2024-07-15 15:00:04",
		reference: "SL_1117",
		addedBy: "Saad Hussein",
		customer: "Thomas M. Martin",
		warehouse: "Warehouse 1",
		status: "Completed",
		grandTotal: 20.0,
		due: 20.0,
		paid: 20.0,
		paymentStatus: "Paid",
		shippingStatus: "Delivered",
	},
	{
		date: "2024-07-15 15:00:04",
		reference: "SL_1118",
		addedBy: "Saad Hussein",
		customer: "Thomas M. Martin",
		warehouse: "Warehouse 2",
		status: "Ordered",
		grandTotal: 30.0,
		due: 30.0,
		paid: 30.0,
		paymentStatus: "Unpaid",
		shippingStatus: "Packed",
	},
];

const AllSales = () => {
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
							title={"All Purchases"}
							path={["Purchases", "All Purchases"]}
						/>
						<PagesNavigationBar pages={SalesPage} />
					</div>
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							className="app-container container-fluid"
						>
							<div
								className={`d-flex align-items-start justify-content-between mb-8 gap-2 ${privateClasses.tableHeader}`}
							>
								<SearchInputIvonInside />
								<div
									className={`d-flex align-items-center justify-content-end gap-2 ${privateClasses.tableButtons}`}
								>
									<DateRange />
									<ExportButtonAndList />
									<Button
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
									/>
									<ColumnVisibility
										columns={columns}
										changeLabelVisiblity={changeLabelVisiblity}
									/>
								</div>
							</div>
							<AllSalesTable
								columnsVisible={columns}
								salesTableItems={salesTableItems}
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
		</LoadingWrapper>
	);
};

export default AllSales;
