import React from "react";
import Toolbar from "../../Accounting/Toolbar";
import classes from "../../../styles/global.module.css";
import Select from "../../../components/Global/Select/Select";
import InputWithSearchIcon from "../../../components/Global/InputWithSearchIcon/InputWithSearchIcon";
import PrintLabelsTable from "../../../components/Products/PrintLabelsTable/PrintLabelsTable";
import Button from "../../../components/Global/Button/Button";

const PrintLabels = () => {
	return (
		<div
			className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
		>
			<div className="d-flex flex-column flex-column-fluid">
				<Toolbar title={"Print Labels"} path={["Products", "Print Labels"]} />
				<div id="kt_app_content" className="app-content flex-column-fluid">
					<div
						id="kt_app_content_container"
						class="app-container container-fluid"
					>
						<div className="d-flex align-items-center justify-content-start w-50">
							<Select
								label={"Warehouse *"}
								options={["Warehouse 1", "Warehouse 2"]}
								defaultValue="Choose Warehouse"
							/>
						</div>
						<div className="w-100 mt-8">
							<InputWithSearchIcon
								label={"Product"}
								placeholder={"Scan/Search Product by Code Or Name"}
								type={"text"}
							/>
						</div>
						<div className="w-100 mt-8">
							<PrintLabelsTable />
						</div>
						<div className="w-100 mt-8">
							<Select
								label={"Paper Size"}
								options={["Size 1", "Size 2"]}
								defaultValue="Paper Size"
							/>
						</div>
						<div className="mt-8 d-flex align-items-start justify-content-start gap-6">
							<Button text={"Update"} />
							<Button text={"Reset"} color="#ef4444" />
							<Button text={"Print"} color="#6b7280" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PrintLabels;
