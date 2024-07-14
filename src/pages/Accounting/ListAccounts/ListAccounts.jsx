import React, { useState } from "react";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import classes from "../../../styles/global.module.css";
import privateClasses from "./ListAccounts.module.css";
import Toolbar from "../Toolbar";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import Button from "../../../components/Global/Button/Button";
import { FiPlusCircle } from "react-icons/fi";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import { BsFiles } from "react-icons/bs";
import { VscNewFile } from "react-icons/vsc";
import ListAccountsTable from "../../../components/Accounting/ListAccounts/ListAccountsTable/ListAccountsTable";

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
	{ label: "Account Number", visible: true },
	{ label: "Account Name", visible: true },
	{ label: "Balance", visible: true },
	{ label: "Notes", visible: true },
	{ label: "Actions", visible: true },
];

const listAccountsTableItems = [
	{
		accountNumber: "23456789",
		accountName: "Bank 2",
		balance: 1234.56,
		notes: "Bank 2",
	},
];

const ListAccounts = () => {
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
							title={"List Accounts"}
							path={["Accounting", "List Accounts"]}
						/>
						<PagesNavigationBar pages={AccountingPage} />
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
							<ListAccountsTable
								columnsVisible={columns}
								listAccountsTableItems={listAccountsTableItems}
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

export default ListAccounts;
