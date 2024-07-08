import React, { useEffect, useState } from "react";
import Toolbar from "../../Accounting/Toolbar";
import classes from "../../../styles/global.module.css";
import Select from "../../../components/Global/Select/Select";
import InputWithSearchIcon from "../../../components/Global/InputWithSearchIcon/InputWithSearchIcon";
import PrintLabelsTable from "../../../components/Products/PrintLabelsTable/PrintLabelsTable";
import Button from "../../../components/Global/Button/Button";
import NewSelect from "../../../components/Global/RowSelect/RowSelect";
import pageClasses from "./PrintLabels.module.css";
import NewInputWithSearchIcon from "../../../components/Global/NewInputWithSearchIcon/NewInputWithSearchIcon";
import { RxUpdate } from "react-icons/rx";
import {
	MdAcUnit,
	MdOutlineBrandingWatermark,
	MdOutlineResetTv,
} from "react-icons/md";
import { IoCreateOutline, IoPrint } from "react-icons/io5";
import ReactSelect from "../../../components/Global/ReactSelect/ReactSelect";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineProduct, AiOutlineStock } from "react-icons/ai";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";

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

const PrintLabels = () => {
	return (
		<LoadingWrapper>
			<div
				className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
			>
				<div className="d-flex flex-column flex-column-fluid">
					<div
						className={`w-100 d-flex align-items-center justify-content-end mt-1 ${pageClasses.navPages}`}
					>
						<PagesNavigationBar pages={ProductsPage} />
					</div>
					<div
						style={{ backgroundColor: "white" }}
						className={`w-100 d-flex align-items-center justify-content-between ${pageClasses.responsiveHeader}`}
					>
						<Toolbar
							title={"Print Labels"}
							path={["Products", "Print Labels"]}
						/>

						<div
							className={`d-flex align-items-start justify-content-start gap-3 ${pageClasses.buttons}`}
						>
							<Button
								text={"Update"}
								hoverState="success"
								icon={
									<RxUpdate
										size={18}
										style={{
											marginRight: "4px",
											fontWeight: "500",
										}}
									/>
								}
							/>
							<Button
								text={"Reset"}
								hoverState="danger"
								icon={
									<MdOutlineResetTv
										size={18}
										style={{
											marginRight: "4px",
											fontWeight: "500",
										}}
									/>
								}
							/>
							<Button
								text={"Print"}
								color="#1B84FF"
								icon={
									<IoPrint
										size={18}
										style={{
											marginRight: "4px",
											fontWeight: "500",
										}}
									/>
								}
							/>
						</div>
					</div>
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
						>
							<div
								className={`d-flex align-items-center justify-content-between w-100 gap-10 ${pageClasses.selectsResponsive}`}
							>
								<div className={`card card-flush ${pageClasses.cardPadding}`}>
									<ReactSelect
										label={"Warehouse:"}
										placeholder={"Choose Warehouse"}
										options={[
											{ value: "Warehouse 1", label: "Warehouse 1" },
											{ value: "Warehouse 2", label: "Warehouse 2" },
										]}
										name={"warehouse"}
									/>
								</div>
								<div className={`card card-flush ${pageClasses.cardPadding}`}>
									<ReactSelect
										label={"Paper Size:"}
										placeholder={"Choose a Paper Size:"}
										options={[
											{ value: "Size 1", label: "Size 1" },
											{ value: "Size 2", label: "Size 2" },
										]}
										name={"paper-size"}
									/>
								</div>
							</div>
							<div className="w-100 mt-8">
								<div className={`card card-flush ${pageClasses.cardPadding} `}>
									<NewInputWithSearchIcon
										label={"Product:"}
										placeholder={"Scan/Search Product by Code Or Name"}
										type={"text"}
									/>
								</div>
							</div>
							<div className={`card card-flush ${pageClasses.tablePadding} `}>
								<div className="w-100 mt-8">
									<PrintLabelsTable />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</LoadingWrapper>
	);
};

export default PrintLabels;
