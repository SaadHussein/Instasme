import React, { useState } from "react";
import Toolbar from "../../Accounting/Toolbar";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import classes from "../../../styles/global.module.css";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import LeaveRequestTable from "../../../components/HRM/LeaveRequest/LeaveRequestTable/LeaveRequestTable";
import privateClasses from "./AllQuotations.module.css";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { BsFiles } from "react-icons/bs";
import { VscNewFile } from "react-icons/vsc";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import AllQuotationsTable from "../../../components/Quotations/AllQuotations/AllQuotationsTable/AllQuotationsTable";

const QuotationsPage = [
	{
		title: "All Quotations",
		link: "/quotations/all-quotations",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "Create Quotation",
		link: "/quotations/create-quotation",
		icon: <VscNewFile className="fs-2 me-2" />,
	},
];

const columnsTable = [
	{ label: "Date", visible: true },
	{ label: "Reference", visible: true },
	{ label: "Customer", visible: true },
	{ label: "Warehouse", visible: true },
	{ label: "Status", visible: true },
	{ label: "Grand Total", visible: true },
	{ label: "Actions", visible: true },
];

const allQuotationsTableItems = [
	{
		date: "01-01-2025",
		reference: "QT_1115",
		customer: "Saad Hussein",
		warehouse: "Warehouse One",
		status: "Pending",
		grandTotal: 74598,
	},
];

const AllQuotations = () => {
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
							title={"All Quotations"}
							path={["Quotations", "All Quotations"]}
						/>
						<PagesNavigationBar pages={QuotationsPage} />
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
									<ColumnVisibility
										columns={columns}
										changeLabelVisiblity={changeLabelVisiblity}
									/>
								</div>
							</div>
							<AllQuotationsTable
								columnsVisible={columns}
								allQuotationsTableItems={allQuotationsTableItems}
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

export default AllQuotations;
