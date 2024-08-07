import React from "react";
import Toolbar from "../../Accounting/Toolbar";
import DateInput from "../../../components/Global/DateInput/DateInput";
import Button from "../../../components/Global/Button/Button";
import TextArea from "../../../components/Global/TextArea/TextArea";
import classes from "../../../styles/global.module.css";
import Select from "../../../components/Global/Select/Select";
import InputWithSearchIcon from "../../../components/Global/InputWithSearchIcon/InputWithSearchIcon";
import OrderItemsTable from "../../../components/Quotations/OrderItemsTable/OrderItemsTable";
import InputWithIcon from "../../../components/Global/InputWithIcon/InputWithIcon";
import { MdPercent } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import OrderPriceDetails from "../../../components/Global/OrderPriceDetails/OrderPriceDetails";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { BsFiles } from "react-icons/bs";
import { VscNewFile } from "react-icons/vsc";
import privateClasses from "./CreatePurchases.module.css";

const PurchasesPage = [
	{
		title: "All Purchases",
		link: "/purchases/all-purchases",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "Create Purchase",
		link: "/purchases/create-purchase",
		icon: <VscNewFile className="fs-2 me-2" />,
	},
];

const CreatePurchases = () => {
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
							title={"Create Purchase"}
							path={["Purchases", "Create Purchase"]}
						/>
						<PagesNavigationBar pages={PurchasesPage} />
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
									options={["Supplier One", "Supplier Two"]}
									label={"Supplier *"}
								/>
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
							<div className="w-100 my-6">
								<OrderItemsTable />
							</div>
							<div className="my-6 d-flex align-items-center justify-content-end w-100">
								<div className={`w-25 ${privateClasses.taxContainer}`}>
									<OrderPriceDetails />
								</div>
							</div>
							<div
								className={`d-flex align-items-center justify-content-between gap-8 ${privateClasses.inputsResponsive}`}
							>
								<InputWithIcon
									icon={<MdPercent />}
									label={"Order Tax"}
									placeholder={""}
									type={"text"}
									value={"0"}
								/>
								<InputWithIcon
									icon={<FaDollarSign />}
									label={"Discount"}
									placeholder={""}
									type={"text"}
									value={"0"}
								/>
								<InputWithIcon
									icon={<FaDollarSign />}
									label={"Shipping"}
									placeholder={""}
									type={"text"}
									value={"0"}
								/>
							</div>
							<div
								className={`w-50 my-5 ${privateClasses.selectsBottomResponsive}`}
							>
								<Select
									options={["Status One", "Status Two"]}
									label={"Status *"}
								/>
							</div>
							<div className="my-4 w-100">
								<TextArea label={"Note"} placeholder={"A few words..."} />
							</div>
							<div className="mt-6">
								<Button text={"Submit"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</LoadingWrapper>
	);
};

export default CreatePurchases;
