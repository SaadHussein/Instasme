import React, { useState } from "react";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import classes from "../../../styles/global.module.css";
import privateClasses from "./Company.module.css";
import Toolbar from "../../Accounting/Toolbar";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { PiBagSimpleLight } from "react-icons/pi";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import Button from "../../../components/Global/Button/Button";
import { FiPlusCircle } from "react-icons/fi";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import CompanyTable from "../../../components/HRM/Company/CompanyTable/CompanyTable";
import { FaStore } from "react-icons/fa6";
import { RxColorWheel } from "react-icons/rx";
import { IoMdAlarm } from "react-icons/io";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineHolidayVillage } from "react-icons/md";

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
	{
		title: "Holidays",
		link: "/hrm/holidays",
		icon: <MdOutlineHolidayVillage className="fs-2 me-2" />,
	},
];

const columnsTable = [
	{ label: "Name", visible: true },
	{ label: "Phone", visible: true },
	{ label: "Country", visible: true },
	{ label: "Email", visible: true },
	{ label: "Actions", visible: true },
];

const companyTableItems = [
	{
		name: "Brandmarks",
		phone: "+20123456789",
		country: "Egypt",
		email: "Brandmarks2024@gmail.com",
	},
];

const Company = () => {
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
						<Toolbar title={"Company"} path={["HRM", "Company"]} />
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
							<CompanyTable
								columnsVisible={columns}
								companyTableItems={companyTableItems}
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

export default Company;
