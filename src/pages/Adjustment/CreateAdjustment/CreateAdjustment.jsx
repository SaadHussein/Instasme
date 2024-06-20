import React from "react";
import Toolbar from "../../Accounting/Toolbar";
import DateInput from "../../../components/Global/DateInput/DateInput";
import Select from "../../../components/Global/Select/Select";
import TextArea from "../../../components/Global/TextArea/TextArea";
import classes from "../../../styles/global.module.css";
import Button from "../../../components/Global/Button/Button";
import InputWithSearchIcon from "../../../components/Global/InputWithSearchIcon/InputWithSearchIcon";
import ProductsTable from "../../../components/Adjustment/ProductsTable/ProductsTable";

const CreateAdjustment = () => {
	return (
		<div
			className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
		>
			<div className="d-flex flex-column flex-column-fluid">
				<Toolbar
					title={"Create Adjustment"}
					path={["Adjustment", "Create Deposite"]}
				/>
				<div id="kt_app_content" className="app-content flex-column-fluid">
					<div
						id="kt_app_content_container"
						class="app-container container-fluid"
					>
						<div className="d-flex align-items-center justify-content-between gap-5">
							<div className="w-75">
								<DateInput />
							</div>
							<Select
								options={["Warehouse One", "Warehouse Two"]}
								label={"Warehouse"}
							/>
						</div>
						<div className="mt-4 w-100 d-flex align-items-start justify-content-between gap-5">
							<InputWithSearchIcon
								label={"Product"}
								placeholder={"Scan/Search Product bu Code Or Name"}
								type={"text"}
							/>
						</div>
						<div className="w-100 my-4">
							<ProductsTable />
						</div>
						<div className="my-4 w-100">
							<TextArea label={"Note"} placeholder={"A few words..."} />
						</div>
						<div className="mt-4">
							<Button text={"Submit"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateAdjustment;
