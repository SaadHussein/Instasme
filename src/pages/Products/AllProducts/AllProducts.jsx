import React from "react";
import classes from "../../../styles/global.module.css";
import Toolbar from "../../Accounting/Toolbar";
import MainTable from "../../../components/Global/MainTable/MainTable";
import { FaSearch } from "react-icons/fa";
import Input from "../../../components/Global/Input/Input";
import Button from "../../../components/Global/Button/Button";
import privateClasses from "./AllProducts.module.css";

const productsTableHeaders = [
	{
		name: "Image",
		width: "75",
	},
	{
		name: "Type",
		width: "75",
	},
	{
		name: "Name",
		width: "100",
	},
	{
		name: "Code",
		width: "75",
	},
	{
		name: "Brand",
		width: "75",
	},
	{
		name: "Category",
		width: "75",
	},
	{
		name: "Cost",
		width: "75",
	},
	{
		name: "Price",
		width: "75",
	},
	{
		name: "Unit",
		width: "75",
	},
	{
		name: "Quantity",
		width: "75",
	},
];

const AllProducts = () => {
	return (
		<div
			className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
		>
			<div className="d-flex flex-column flex-column-fluid">
				<Toolbar title={"All Products"} path={["Products", "All Products"]} />
				<div id="kt_app_content" className="app-content flex-column-fluid">
					<div
						id="kt_app_content_container"
						class="app-container container-fluid"
					>
						<div
							className={`d-flex align-items-center justify-content-between mb-8 ${privateClasses.tableHeader}`}
						>
							<div className="d-flex align-items-center justify-content-start gap-4">
								<FaSearch size={24} />
								<Input placeholder={"Search This Table"} />
							</div>
							<div className="d-flex align-items-center justify-content-end gap-2">
								<Button text={"Filter"} color="" />
								<Button text={"PDF"} />
								<Button text={"EXCEL"} />
								<Button text={"Import Products"} />
								<Button text={"Create"} />
							</div>
						</div>
						<MainTable tableHeader={productsTableHeaders} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllProducts;
