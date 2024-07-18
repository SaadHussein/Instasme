import React from "react";
import Toolbar from "../Toolbar";
import classes from "../../../styles/global.module.css";
import Select from "../../../components/Global/Select/Select";
import Input from "../../../components/Global/Input/Input";
import TextArea from "../../../components/Global/TextArea/TextArea";
import DateInput from "../../../components/Global/DateInput/DateInput";
import Button from "../../../components/Global/Button/Button";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { AccountingPage } from "../../../data/Pages/accounting";
import privateClasses from "./CreateDeposite.module.css";

const CreateDeposite = () => {
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
							title={"List Deposite"}
							path={["Products", "List Deposite"]}
						/>
						<PagesNavigationBar pages={AccountingPage} />
					</div>
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
						>
							<div className="d-flex align-items-center justify-content-between gap-5">
								<div className="w-50">
									<DateInput />
								</div>
								<Select
									options={["Warehouse One", "Warehouse Two"]}
									label={"Warehouse"}
								/>
								<Select options={["One"]} label={"Deposit Category"} />
							</div>
							<div className="mt-4 w-100 d-flex align-items-start justify-content-between gap-5">
								<div style={{ width: "25%" }}>
									<Input
										label={"Amount"}
										placeholder={"Choose an Amount"}
										type={"number"}
									/>
								</div>
								<TextArea label={"Details"} placeholder={"A few words..."} />
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

export default CreateDeposite;
