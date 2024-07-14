import React from "react";
import classes from "../../../styles/global.module.css";
import Toolbar from "../../Accounting/Toolbar";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { AiOutlineProduct, AiOutlineStock } from "react-icons/ai";
import { IoCreateOutline, IoPrint } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { MdAcUnit, MdOutlineBrandingWatermark } from "react-icons/md";
import privateClasses from "./CreateProduct.module.css";

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

const CreateProduct = () => {
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
							title={"Create Product"}
							path={["Products", "Create Product"]}
						/>
						<PagesNavigationBar pages={ProductsPage} />
					</div>
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
						></div>
					</div>
				</div>
			</div>
		</LoadingWrapper>
	);
};

export default CreateProduct;
