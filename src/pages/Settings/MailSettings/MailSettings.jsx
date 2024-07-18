import React from "react";
import Input from "../../../components/Global/Input/Input";
import Button from "../../../components/Global/Button/Button";
import Toolbar from "../../Accounting/Toolbar";
import classes from "../../../styles/global.module.css";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { SettingsPage } from "../../../data/Pages/settings";
import privateClasses from "./MailSettings.module.css";

const MailSettings = () => {
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
							title={"Mail Settings"}
							path={["Settings", "Mail Settings"]}
						/>
						<PagesNavigationBar pages={SettingsPage} />
					</div>
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
						>
							<h6>Mail Settings</h6>
							<div
								className={`d-flex align-items-start justify-content-between gap-8 mt-10 ${privateClasses.inputResponsive}`}
							>
								<Input
									label={"MAIL_MAILER *"}
									value="smtp"
									placeholder={""}
									type={"text"}
									haveNote={true}
								/>
								<Input
									label={"MAIL_HOST *"}
									value="mailtrap.io"
									placeholder={""}
									type={"text"}
								/>
								<Input
									label={"MAIL_PORT *"}
									value="2525"
									placeholder={""}
									type={"text"}
								/>
							</div>
							<div
								className={`d-flex align-items-center justify-content-between gap-8 mt-10 ${privateClasses.inputResponsive}`}
							>
								<Input
									label={"Sender Name *"}
									value="Admin"
									placeholder={""}
									type={"text"}
								/>
								<Input
									label={"MAIL_USERNAME *"}
									value="test"
									placeholder={""}
									type={"text"}
								/>
								<Input
									label={"MAIL_PASSWORD *"}
									value="test"
									placeholder={""}
									type={"text"}
								/>
							</div>
							<div className="d-flex align-items-center justify-content-start mt-10">
								<Input
									label={"MAIL_ENCRYPTION *"}
									value="tls"
									placeholder={""}
									type={"text"}
								/>
							</div>
							<div className="mt-8">
								<Button text={"Submit"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</LoadingWrapper>
	);
};

export default MailSettings;
