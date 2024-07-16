import React, { useState } from "react";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import Toolbar from "../../Accounting/Toolbar";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { HRMPage } from "../../../data/Pages/pages";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import privateClasses from "./LeaveRequest.module.css";
import classes from "../../../styles/global.module.css";
import LeaveRequestTable from "../../../components/HRM/LeaveRequest/LeaveRequestTable/LeaveRequestTable";

const columnsTable = [
	{ label: "Employee", visible: true },
	{ label: "Company", visible: true },
	{ label: "Department", visible: true },
	{ label: "Leave Type", visible: true },
	{ label: "Start Date", visible: true },
	{ label: "Finish Date", visible: true },
	{ label: "Days", visible: true },
	{ label: "Status", visible: true },
	{ label: "Actions", visible: true },
];

const leaveRequestTableItems = [
	{
		employee: "Saad Hussein",
		company: "Brandmarks",
		department: "Frontend Development",
		leaveType: "Other",
		startDate: "30-07-2024",
		finishDate: "30-07-2024",
		days: 8,
		status: "pending",
	},
];

const LeaveRequest = () => {
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
						<Toolbar title={"Employees"} path={["HRM", "Employees"]} />
						<PagesNavigationBar pages={HRMPage} />
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
							<LeaveRequestTable
								columnsVisible={columns}
								leaveRequestTableItems={leaveRequestTableItems}
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

export default LeaveRequest;
