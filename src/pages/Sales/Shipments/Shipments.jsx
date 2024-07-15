import React, { useState } from "react";
import { BsFiles } from "react-icons/bs";
import { LuFilePlus2 } from "react-icons/lu";
import Toolbar from "../../Accounting/Toolbar";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import classes from "../../../styles/global.module.css";
import privateClasses from "./Shipments.module.css";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import ShipmentsTable from "../../../components/Sales/Shipments/ShipmentsTable/ShipmentsTable";

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
	{ label: "Shipment Ref", visible: true },
	{ label: "Sale Ref", visible: true },
	{ label: "Customer", visible: true },
	{ label: "Warehouse", visible: true },
	{ label: "Status", visible: true },
	{ label: "Actions", visible: true },
];

const shipmentsTableItems = [
	{
		date: "2024-07-15 15:00:04",
		shipmentRef: "SM_1117",
		saleRef: "SM_1117",
		customer: "Thomas M. Martin",
		warehouse: "Warehouse 1",
		status: "Delivered",
	},
];

const Shipments = () => {
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
						<Toolbar title={"Shipments"} path={["Sales", "Shipments"]} />
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
									<ColumnVisibility
										columns={columns}
										changeLabelVisiblity={changeLabelVisiblity}
									/>
								</div>
							</div>
							<ShipmentsTable
								columnsVisible={columns}
								shipmentsTableItems={shipmentsTableItems}
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

export default Shipments;
