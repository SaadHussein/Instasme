import React from "react";
import Toolbar from "../../Accounting/Toolbar";
import classes from "../../../styles/global.module.css";

const AllSales = () => {
	return (
		<div
			className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
		>
			<div className="d-flex flex-column flex-column-fluid">
				<Toolbar title={"All Sale"} path={["Sales", "All Sale"]} />
				<div id="kt_app_content" className="app-content flex-column-fluid">
					<div
						id="kt_app_content_container"
						class="app-container container-fluid"
					></div>
				</div>
			</div>
		</div>
	);
};

export default AllSales;
