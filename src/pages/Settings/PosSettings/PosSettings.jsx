import React from "react";
import Input from "../../../components/Global/Input/Input";
import CheckInput from "../../../components/Global/CheckInput/CheckInput";
import Button from "../../../components/Global/Button/Button";
import Toolbar from "../../Accounting/Toolbar";
import classes from "../../../styles/global.module.css";
import PrivateClasses from "./PosSettings.module.css";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";

const PosSettings = () => {
	return (
		<LoadingWrapper>
			<div
				className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
			>
				<div className="d-flex flex-column flex-column-fluid">
					<Toolbar title={"POS Settings"} path={["Settings", "POS Settings"]} />
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
						>
							<h6>Pos Settings (Receipt)</h6>
							<div className="mt-8">
								<Input
									label={"Note to customer *"}
									placeholder={""}
									value="Thank You For Shopping With Us . Please Come Again"
									type={"text"}
								/>
							</div>
							<div className={`mt-8 ${PrivateClasses.checkInputs}`}>
								<CheckInput label={"Show Phone"} />
								<CheckInput label={"Show Address"} />
								<CheckInput label={"Show Email"} />
								<CheckInput label={"Show Customer"} />
								<CheckInput label={"Show Warehouse"} />
								<CheckInput label={"Show Tax & Discount & Shipping"} />
								<CheckInput label={"Show Barcode"} />
								<CheckInput label={"Show Note to customer"} />
								<CheckInput label={"Show Invoice automatically"} />
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

export default PosSettings;
