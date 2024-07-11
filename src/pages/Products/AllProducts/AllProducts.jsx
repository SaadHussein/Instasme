import React, { useEffect, useState } from "react";
import classes from "../../../styles/global.module.css";
import Toolbar from "../../Accounting/Toolbar";
import privateClasses from "./AllProducts.module.css";
import AllProductsTable from "../../../components/Products/AllProducts/AllProductsTable";
import { MdAcUnit, MdOutlineBrandingWatermark } from "react-icons/md";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { AiOutlineProduct, AiOutlineStock } from "react-icons/ai";
import { IoCreateOutline, IoPrint } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import LabelHeaderReactSelect from "../../../components/Global/LabelHeaderReactSelect/LabelHeaderReactSelect";
import SearchInputIvonInside from "../../../components/Global/SearchInputIvonInside/SearchInputIvonInside";
import TablePagination from "../../../components/Global/TablePagination/TablePagination";
import DateRange from "../../../components/Global/DateRange/DateRange";
import ExportButtonAndList from "../../../components/Global/Export/ExportButtonAndList";
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
		link: "/products/Category",
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

const columnsTable = [
	{ label: "Image", visible: true },
	{ label: "Type", visible: true },
	{ label: "Name", visible: true },
	{ label: "Code", visible: true },
	{ label: "Brand", visible: true },
	{ label: "Category", visible: true },
	{ label: "Cost", visible: true },
	{ label: "Price", visible: true },
	{ label: "Unit", visible: true },
	{ label: "Quantity", visible: true },
	{ label: "Actions", visible: true },
];

const tableProducts = [
	{
		image: "/brandmarks.png",
		type: "Fruit",
		name: "Banana",
		code: "12345678",
		brand: "Fruits Brand",
		category: "Fruits",
		cost: 70,
		price: 70,
		unit: 20,
		quantity: 87,
	},
	{
		image: "/brandmarks.png",
		type: "Vegitables",
		name: "Tomato",
		code: "23456788",
		brand: "Vegitables Brand",
		category: "Vegitables",
		cost: 80,
		price: 80,
		unit: 25,
		quantity: 90,
	},
];

const AllProducts = () => {
	const [columns, setColumns] = useState([...columnsTable]);
	const [productExcel, setProductsExcel] = useState([]);

	const changeLabelVisiblity = (label) => {
		const updatedColumns = columns.map((column) =>
			column.label === label ? { ...column, visible: !column.visible } : column
		);

		setColumns([...updatedColumns]);
	};

	useEffect(() => {
		const excelData = tableProducts.map((row) => [
			row.image,
			row.type,
			row.name,
			row.code,
			row.brand,
			row.category,
			row.cost,
			row.price,
			row.unit,
			row.quantity,
		]);

		setProductsExcel(excelData);
	}, []);

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
							title={"All Products"}
							path={["Products", "All Products"]}
						/>
						<PagesNavigationBar pages={ProductsPage} />
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
									<ExportButtonAndList
										tableProducts={tableProducts}
										productTable={productExcel}
										productTableHead={columnsTable}
									/>
									<ColumnVisibility
										columns={columns}
										changeLabelVisiblity={changeLabelVisiblity}
									/>
								</div>
							</div>
							<AllProductsTable
								columnsVisible={columns}
								tableProducts={tableProducts}
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

export default AllProducts;
