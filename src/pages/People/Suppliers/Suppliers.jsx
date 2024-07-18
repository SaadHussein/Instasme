import React, { useState } from "react";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import privateClasses from "./Suppliers.module.css";
import classes from "../../../styles/global.module.css";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import Toolbar from "../../Accounting/Toolbar";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { GoPeople } from "react-icons/go";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import SuppliersTable from "../../../components/People/Suppliers/SuppliersTable/SuppliersTable";

const PeoplePage = [
	{
		title: "Customers",
		link: "/people/customers",
		icon: <GoPeople className="fs-2 me-2" />,
	},
	{
		title: "Suppliers",
		link: "/people/suppliers",
		icon: <GoPeople className="fs-2 me-2" />,
	},
	{
		title: "Users",
		link: "/people/users",
		icon: <GoPeople className="fs-2 me-2" />,
	},
];

const columnsTable = [
	{ label: "Code", visible: true },
	{ label: "Name", visible: true },
	{ label: "Phone", visible: true },
	{ label: "Email", visible: true },
	{ label: "Tax Number", visible: true },
	{ label: "Total Purchase Due", visible: true },
	{ label: "Total Purchase Return Due", visible: true },
	{ label: "Actions", visible: true },
];

const suppliersTableItems = [
	{
		code: "104",
		name: "Saad Hussein",
		phone: "0123456789",
		email: "Saad@gmail.com",
		taxNumber: 0.0,
		totalPurchaseDue: 0.0,
		totalPurchaseReturnDue: 0.0,
	},
];

const Suppliers = () => {
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
						<Toolbar title={"Suppliers"} path={["People", "Suppliers"]} />
						<PagesNavigationBar pages={PeoplePage} />
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
								<SuppliersTable
									columnsVisible={columns}
									suppliersTableItems={suppliersTableItems}
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

export default Suppliers;
