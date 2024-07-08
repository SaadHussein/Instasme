import React from "react";
import classes from "../../../styles/global.module.css";
import Toolbar from "../../Accounting/Toolbar";
import { FaSearch } from "react-icons/fa";
import Input from "../../../components/Global/Input/Input";
import Button from "../../../components/Global/Button/Button";
import privateClasses from "./AllProducts.module.css";
import AllProductsTable from "../../../components/Products/AllProducts/AllProductsTable";
import Select from "../../../components/Global/Select/Select";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";

const AllProducts = () => {
	return (
		<LoadingWrapper>
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
							<AllProductsTable />
							<div className="d-flex align-items-center justify-content-between">
								<div className="d-flex align-items-center justify-content-start w-50 gap-3">
									<p className={`${privateClasses.numberPerPage}`}>
										Rows Per Page:{" "}
									</p>
									<div className="w-150px">
										<Select defaultValue="10" options={[10, 20, 30, 40, 50]} />
									</div>
								</div>
								<div className="d-flex align-items-center justify-content-end gap-4">
									<MdKeyboardArrowLeft
										size={20}
										className={`${privateClasses.paginationArrow}`}
									/>
									<p
										className={`${privateClasses.paginationNumber} ${privateClasses.paginationNumberActive}`}
									>
										1
									</p>
									<p className={`${privateClasses.paginationNumber}`}>2</p>
									<MdKeyboardArrowRight
										size={20}
										className={`${privateClasses.paginationArrow}`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</LoadingWrapper>
	);
};

export default AllProducts;
