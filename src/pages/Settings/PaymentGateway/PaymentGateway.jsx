import React from "react";
import Toolbar from "../../Accounting/Toolbar";
import Button from "../../../components/Global/Button/Button";
import classes from "../../../styles/global.module.css";
import Input from "../../../components/Global/Input/Input";
import CheckInput from "../../../components/Global/CheckInput/CheckInput";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { SettingsPage } from "../../../data/Pages/settings";
import privateClasses from "./PaymentGateway.module.css";

const PaymentGateway = () => {
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
							title={"Payment Gateway"}
							path={["Settings", "Payment Gateway"]}
						/>
						<PagesNavigationBar pages={SettingsPage} />
					</div>
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
						>
							<div className="mt-6 d-flex align-items-center justify-content-between gap-8">
								<Input
									label={"STRIPE_KEY"}
									placeholder={
										"Please leave this field blank if you have not change it"
									}
									type={"text"}
								/>
								<Input
									label={"STRIPE_SECRET"}
									placeholder={
										"Please leave this field blank if you have not change it"
									}
									type={"text"}
								/>
							</div>
							<div className="mt-6 d-flex align-items-center justify-content-start">
								<CheckInput label={"Delete Stripe API keys"} />
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

export default PaymentGateway;
