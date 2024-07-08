import React from "react";
import classes from "../../../styles/global.module.css";
import Toolbar from "../../Accounting/Toolbar";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";

const CreateProduct = () => {
	return (
		<LoadingWrapper>
			<div
				className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
			>
				<div className="d-flex flex-column flex-column-fluid">
					<Toolbar
						title={"Create Product"}
						path={["Products", "Create Product"]}
					/>
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

export default CreateProduct;
