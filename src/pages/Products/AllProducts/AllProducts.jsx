import React from "react";
import classes from "../../../styles/global.module.css";
import Toolbar from "../../Accounting/Toolbar";
import { FaSearch } from "react-icons/fa";
import Input from "../../../components/Global/Input/Input";
import Button from "../../../components/Global/Button/Button";
import privateClasses from "./AllProducts.module.css";
import AllProductsTable from "../../../components/Products/AllProducts/AllProductsTable";
import Select from "../../../components/Global/Select/Select";
import {
	MdAcUnit,
	MdKeyboardArrowLeft,
	MdKeyboardArrowRight,
	MdOutlineBrandingWatermark,
} from "react-icons/md";
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

const AllProducts = () => {
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
								className={`d-flex align-items-center justify-content-between mb-8 ${privateClasses.tableHeader}`}
							>
								<SearchInputIvonInside />
								<div className="d-flex align-items-center justify-content-end gap-2">
									{/* <Button text={"Filter"} color="" />
									<Button text={"PDF"} />
									<Button text={"EXCEL"} />
									<Button text={"Import Products"} />
									<Button text={"Create"} /> */}
									<DateRange />
									<ExportButtonAndList />
								</div>
							</div>
							<AllProductsTable />
							<div className="d-flex align-items-center justify-content-between">
								<div className="d-flex align-items-center justify-content-start w-50 gap-3">
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
