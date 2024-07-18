import React from "react";
import Toolbar from "../../Accounting/Toolbar";
import DateInput from "../../../components/Global/DateInput/DateInput";
import Select from "../../../components/Global/Select/Select";
import TextArea from "../../../components/Global/TextArea/TextArea";
import classes from "../../../styles/global.module.css";
import Button from "../../../components/Global/Button/Button";
import InputWithSearchIcon from "../../../components/Global/InputWithSearchIcon/InputWithSearchIcon";
import ProductsTable from "../../../components/Adjustment/ProductsTable/ProductsTable";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import privateClasses from "./CreateAdjustment.module.css";

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

const CreateAdjustment = () => {
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
							title={"Create Adjustment"}
							path={["Adjustment", "Create Deposite"]}
						/>
						<PagesNavigationBar pages={AdjustmentsPages} />
					</div>
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
						>
							<div
								className={`d-flex align-items-center justify-content-between gap-5 ${privateClasses.selectsResponsive}`}
							>
								<div className={`w-75 ${privateClasses.dateSelectResponsive}`}>
									<DateInput />
								</div>
								<Select
									options={["Warehouse One", "Warehouse Two"]}
									label={"Warehouse"}
								/>
							</div>
							<div className="mt-4 w-100 d-flex align-items-start justify-content-between gap-5">
								<InputWithSearchIcon
									label={"Product"}
									placeholder={"Scan/Search Product bu Code Or Name"}
									type={"text"}
								/>
							</div>
							<div className="w-100 my-4">
								<ProductsTable />
							</div>
							<div className="my-4 w-100">
								<TextArea label={"Note"} placeholder={"A few words..."} />
							</div>
							<div className="mt-4">
								<Button text={"Submit"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</LoadingWrapper>
	);
};

export default CreateAdjustment;
