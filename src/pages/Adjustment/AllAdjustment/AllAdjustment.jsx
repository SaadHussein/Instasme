import React from "react";
import classes from "../../../styles/global.module.css";
import privateClasses from "./AllAdjustment.module.css";
import { FaSearch } from "react-icons/fa";
import Input from "../../../components/Global/Input/Input";
import Button from "../../../components/Global/Button/Button";
import Toolbar from "../../Accounting/Toolbar";
import Select from "../../../components/Global/Select/Select";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import AdjustmentTable from "../../../components/Adjustment/AdjustmentTable/AdjustmentTable";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";

const AdjustmentsPages = [
	{
		title: "All Adjustments",
		link: "/adjustment/all-adjustments",
		icon: <AiOutlineProduct className="fs-2 me-2" />,
	},
	{
		title: "Create Adjustment",
		link: "/adjustment/create-adjustment",
		icon: <IoCreateOutline className="fs-2 me-2" />,
	},
];

const AllAdjustment = () => {
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
							title={"All Adjustments"}
							path={["Adjustments", "All Adjustments"]}
						/>
						<PagesNavigationBar pages={AdjustmentsPages} />
					</div>
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
							<AdjustmentTable />
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

export default AllAdjustment;
