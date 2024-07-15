import React, { useState } from "react";
import { FaStore } from "react-icons/fa6";
import { IoMdAlarm } from "react-icons/io";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { PiBagSimpleLight } from "react-icons/pi";
import { RxColorWheel } from "react-icons/rx";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import Toolbar from "../../Accounting/Toolbar";
import classes from "../../../styles/global.module.css";
import privateClasses from "./Payroll.module.css";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import PayrollTable from "../../../components/HRM/Payroll/PayrollTable/PayrollTable";

const HRMPage = [
	{
		title: "Company",
		link: "/hrm/company",
		icon: <PiBagSimpleLight className="fs-2 me-2" />,
	},
	{
		title: "Departments",
		link: "/hrm/departments",
		icon: <FaStore className="fs-2 me-2" />,
	},
	{
		title: "Designation",
		link: "/hrm/designation",
		icon: <RxColorWheel className="fs-2 me-2" />,
	},
	{
		title: "Office Shift",
		link: "/hrm/office-shift",
		icon: <IoMdAlarm className="fs-2 me-2" />,
	},
	{
		title: "Payroll",
		link: "/hrm/payroll",
		icon: <LiaMoneyCheckAltSolid className="fs-2 me-2" />,
	},
];

const columnsTable = [
	{ label: "Date", visible: true },
	{ label: "Reference", visible: true },
	{ label: "Employee", visible: true },
	{ label: "Account", visible: true },
	{ label: "Amount", visible: true },
	{ label: "Paid By", visible: true },
	{ label: "Payment Status", visible: true },
	{ label: "Actions", visible: true },
];

const payrollTableItems = [
	{
		date: "2024-07-15 15:00:04",
		reference: "SM_1117",
		employee: "Mr. Hani Thabet",
		account: "Mr.Hani@gmail.com",
		amount: 4000,
		paidBy: "Brandmarks",
		paymentStatus: "success",
	},
];

const Payroll = () => {
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
					{/* <PagesNavigationBar pages={ProductsPage} /> */}
					<div
						className={`d-flex align-items-center justify-content-between ${privateClasses.navPages}`}
					>
						<Toolbar title={"Payroll"} path={["HRM", "Payroll"]} />
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
							<PayrollTable
								columnsVisible={columns}
								payrollTableItems={payrollTableItems}
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

export default Payroll;
