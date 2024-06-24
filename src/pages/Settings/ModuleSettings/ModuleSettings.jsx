import React from "react";
import Toolbar from "../../Accounting/Toolbar";
import classes from "../../../styles/global.module.css";
import Upload from "../../../components/Global/Upload/Upload";

const ModuleSettings = () => {
	return (
		<div
			className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
		>
			<div className="d-flex flex-column flex-column-fluid">
				<Toolbar
					title={"Module Settings"}
					path={["Settings", "Module Settings"]}
				/>
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
	);
};

export default ModuleSettings;
