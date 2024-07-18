import React, { useState } from "react";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import classes from "../../../styles/global.module.css";
import Toolbar from "../../Accounting/Toolbar";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { AiOutlineProduct, AiOutlineStock } from "react-icons/ai";
import { IoCreateOutline, IoPrint } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { MdAcUnit, MdOutlineBrandingWatermark } from "react-icons/md";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import privateClasses from "./CountStock.module.css";
import Button from "../../../components/Global/Button/Button";
import { FiPlusCircle } from "react-icons/fi";
import CountStockTable from "../../../components/Products/CountStock/CountStockTable/CountStockTable";
import ColumnVisibility from "../../../components/Global/ColumnVisibility/ColumnVisibility";

const ProductsPage = [
	{
		title: "All Products",
		link: "/products/all-products",
		icon: <AiOutlineProduct className="fs-2 me-2" />,
	},
	{
		title: "Create Product",
		link: "/products/create-product",
		icon: <IoCreateOutline className="fs-2 me-2" />,
	},
	{
		title: "Print Labels",
		link: "/products/print-labels",
		icon: <IoPrint className="fs-2 me-2" />,
	},
	{
		title: "Count Stock",
		link: "/products/count-stock",
		icon: <AiOutlineStock className="fs-2 me-2" />,
	},
	{
		title: "Category",
		link: "/products/category",
		icon: <BiCategoryAlt className="fs-2 me-2" />,
	},
	{
		title: "Brand",
		link: "/products/brand",
		icon: <MdOutlineBrandingWatermark className="fs-2 me-2" />,
	},
	{
		title: "Unit",
		link: "/products/unit",
		icon: <MdAcUnit className="fs-2 me-2" />,
	},
];

const countStockTable = [
	{
		date: "12-3-2025",
		warehouse: "Warehouse One",
		file: "File One",
	},
	{
		date: "13-3-2025",
		warehouse: "Warehouse Two",
		file: "File Two",
	},
];

const columnsTable = [
	{ label: "Date", visible: true },
	{ label: "Warehouse", visible: true },
	{ label: "File", visible: true },
];

const CountStock = () => {
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
						<Toolbar title={"Count Stock"} path={["Products", "Count Stock"]} />
						<PagesNavigationBar pages={ProductsPage} />
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
										<Button
											text={"Count"}
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
								<CountStockTable
									columnsVisible={columns}
									countStockTable={countStockTable}
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

export default CountStock;
