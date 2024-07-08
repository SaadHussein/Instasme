import React from "react";
import Toolbar from "../Accounting/Toolbar";
import classes from "../../styles/global.module.css";
import LoadingWrapper from "../../components/Global/LoadingWrapper/LoadingWrapper";

const SalesReturn = () => {
	return (
		<LoadingWrapper>
			<div
				className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
			>
				<div className="d-flex flex-column flex-column-fluid">
					<Toolbar title={"Sales Return"} path={["Sales Return"]} />
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
						></div>
					</div>
				</div>
			</div>
		</LoadingWrapper>
	);
};

export default SalesReturn;
