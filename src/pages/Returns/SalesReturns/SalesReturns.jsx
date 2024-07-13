import React, { useState } from "react";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import Toolbar from "../../Accounting/Toolbar";
import classes from "../../../styles/global.module.css";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import privateClasses from "./SalesReturns.module.css";
import { IoArrowBackOutline, IoArrowForward } from "react-icons/io5";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import SalesReturnTable from "../../../components/Returns/SalesReturn/SalesReturnTable/SalesReturnTable";

const ReturnsPage = [
	{
		title: "Sales Return",
		link: "/returns/sales-return",
		icon: <IoArrowForward className="fs-2 me-2" />,
	},
	{
		title: "Purchases Return",
		link: "/returns/purchases-return",
		icon: <IoArrowBackOutline className="fs-2 me-2" />,
	},
];

const columnsTable = [
	{ label: "Date", visible: true },
	{ label: "Reference", visible: true },
	{ label: "Customer", visible: true },
	{ label: "Warehouse", visible: true },
	{ label: "Sale Ref", visible: true },
	{ label: "Status", visible: true },
	{ label: "Grand Total", visible: true },
	{ label: "Paid", visible: true },
	{ label: "Due", visible: true },
	{ label: "Payment Status", visible: true },
	{ label: "Actions", visible: true },
];

const salesReturnsTable = [
	{
		date: "12-07-2024",
		reference: "Reference One",
		customer: "Saad Hussein",
		warehouse: "Warehouse One",
		saleRef: 6567,
		status: "success",
		grandTotal: 6787,
		paid: "Yes",
		due: "Saad",
		paymentStatus: "success",
	},
	{
		date: "11-08-2024",
		reference: "Reference Two",
		customer: "Mr. Hani Thabet",
		warehouse: "Warehouse Two",
		saleRef: 6597,
		status: "No",
		grandTotal: 9787,
		paid: "No",
		due: "Mr. Hani",
		paymentStatus: "No",
	},
];

const SalesReturns = () => {
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
							title={"Sales Return"}
							path={["Returns", "Sales Return"]}
						/>
						<PagesNavigationBar pages={ReturnsPage} />
					</div>

					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
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
									<ColumnVisibility
										changeLabelVisiblity={changeLabelVisiblity}
										columns={columns}
									/>
								</div>
							</div>
							<SalesReturnTable
								columnsVisible={columns}
								salesReturnsTable={salesReturnsTable}
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

export default SalesReturns;
