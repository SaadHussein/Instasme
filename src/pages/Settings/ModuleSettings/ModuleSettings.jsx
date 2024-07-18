import React from "react";
import Toolbar from "../../Accounting/Toolbar";
import classes from "../../../styles/global.module.css";
import Upload from "../../../components/Global/Upload/Upload";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import privateClasses from "./ModuleSettings.module.css";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { SettingsPage } from "../../../data/Pages/settings";

const ModuleSettings = () => {
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
						title={"Module Settings"}
						path={["Settings", "Module Settings"]}
					/>
						<PagesNavigationBar pages={SettingsPage} />
					</div>
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
						>
							<Upload />
						</div>
					</div>
				</div>
			</div>
		</LoadingWrapper>
	);
};

export default ModuleSettings;
