import React, { useState } from "react";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import classes from "../../../styles/global.module.css";
import privateClasses from "./AllTransfers.module.css";
import { BsFiles } from "react-icons/bs";
import { LuFilePlus2 } from "react-icons/lu";
import Toolbar from "../../Accounting/Toolbar";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import AllTransfersTable from "../../../components/Transfer/AllTransfers/AllTransfersTable/AllTransfersTable";

const TransferPage = [
	{
		title: "All Transfers",
		link: "/transfer/all-transfers",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "Create Transfer",
		link: "/transfer/create-transfer",
		icon: <LuFilePlus2 className="fs-2 me-2" />,
	},
];

const columnsTable = [
	{ label: "Date", visible: true },
	{ label: "Reference", visible: true },
	{ label: "From Warehouse", visible: true },
	{ label: "To Warehouse", visible: true },
	{ label: "Items", visible: true },
	{ label: "Grand Total", visible: true },
	{ label: "Status", visible: true },
	{ label: "Actions", visible: true },
];

const allTransfersTableItems = [
	{
		date: "11-07-2024",
		reference: "TR_1115",
		fromWarehouse: "Warehouse 1",
		toWarehouse: "Warehouse 2",
		items: 1.0,
		grandTotal: 13000.0,
		status: "Completed",
	},
];

const AllTransfers = () => {
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
						<Toolbar
							title={"All Transfers"}
							path={["Transfer", "All Transfers"]}
						/>
						<PagesNavigationBar pages={TransferPage} />
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
										<ColumnVisibility
											columns={columns}
											changeLabelVisiblity={changeLabelVisiblity}
										/>
									</div>
								</div>
								<AllTransfersTable
									columnsVisible={columns}
									allTransfersTableItems={allTransfersTableItems}
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

export default AllTransfers;
