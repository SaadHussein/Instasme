import React, { useState } from "react";
import Toolbar from "../Toolbar";
import classes from "../../../styles/global.module.css";
import privateClasses from "./ListDeposite.module.css";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
import DateRange from "../../../components/Global/DateRange/DateRange";
import { BsFiles } from "react-icons/bs";
import { VscNewFile } from "react-icons/vsc";
import ListDepositeTable from "../../../components/Accounting/ListDeposite/ListDepositeTable/ListDepositeTable";

const AccountingPage = [
	{
		title: "List Accounts",
		link: "/accounting/list-accounts",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "Transfer Money",
		link: "/accounting/transfer-money",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "Create Expense",
		link: "/accounting/create-expense",
		icon: <VscNewFile className="fs-2 me-2" />,
	},
	{
		title: "All Expenses",
		link: "/accounting/all-expenses",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "Create Deposite",
		link: "/accounting/create-deposite",
		icon: <VscNewFile className="fs-2 me-2" />,
	},
	{
		title: "List Deposite",
		link: "/accounting/list-deposite",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "Expense Category",
		link: "/accounting/expense-category",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "Deposite Category",
		link: "/accounting/deposite-category",
		icon: <BsFiles className="fs-2 me-2" />,
	},
];

const columnsTable = [
	{ label: "Date", visible: true },
	{ label: "Reference", visible: true },
	{ label: "Amount", visible: true },
	{ label: "Category", visible: true },
	{ label: "Account", visible: true },
	{ label: "Details", visible: true },
	{ label: "Actions", visible: true },
];

const listDepositeTable = [
	{
		date: "07-07-2024",
		reference: "DEP_1111",
		amount: 5000.0,
		category: "Advertising and Marketing",
		account: "Bank 1",
		details: "Deposit to Bank 1",
	},
];

const ListDeposite = () => {
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
							title={"List Deposite"}
							path={["Products", "List Deposite"]}
						/>
						<PagesNavigationBar pages={AccountingPage} />
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
								<ListDepositeTable
									columnsVisible={columns}
									listDepositeTable={listDepositeTable}
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

export default ListDeposite;
