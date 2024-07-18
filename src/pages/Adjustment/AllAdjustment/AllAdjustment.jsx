import React, { useState } from "react";
import classes from "../../../styles/global.module.css";
import privateClasses from "./AllAdjustment.module.css";
import { FaSearch } from "react-icons/fa";
import Input from "../../../components/Global/Input/Input";
import Button from "../../../components/Global/Button/Button";
import Toolbar from "../../Accounting/Toolbar";
import Select from "../../../components/Global/Select/Select";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import AdjustmentTable from "../../../components/Adjustment/AdjustmentTable/AdjustmentTable";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";

const AdjustmentsPages = [
	{
		title: "All Adjustments",
		link: "/adjustment/all-adjustments",
		icon: <AiOutlineProduct className="fs-2 me-2" />,
	},
	{
		title: "Create Adjustment",
		link: "/adjustment/create-adjustment",
		icon: <IoCreateOutline className="fs-2 me-2" />,
	},
];

const columnsTable = [
	{ label: "Date", visible: true },
	{ label: "Reference", visible: true },
	{ label: "Warehouse", visible: true },
	{ label: "Total Products", visible: true },
	{ label: "Actions", visible: true },
];

const tableAdjustments = [
	{
		date: "04-07-2024",
		reference: "AD_1111",
		warehouse: "Warehouse 1",
		totalProducts: 1.0,
	},
	{
		date: "05-07-2024",
		reference: "AD_1112",
		warehouse: "Warehouse 2",
		totalProducts: 2.0,
	},
];

const AllAdjustment = () => {
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
							title={"All Adjustments"}
							path={["Adjustments", "All Adjustments"]}
						/>
						<PagesNavigationBar pages={AdjustmentsPages} />
					</div>
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
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
										<ColumnVisibility
											columns={columns}
											changeLabelVisiblity={changeLabelVisiblity}
										/>
									</div>
								</div>
								<AdjustmentTable
									tableAdjustments={tableAdjustments}
									columnsVisible={columns}
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

export default AllAdjustment;
