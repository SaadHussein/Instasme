import React, { useState } from "react";
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import classes from "./UnitTable.module.css";
import UnitTableRow from "../UnitTableRow/UnitTableRow";

const UnitTable = ({ unitTableItems, columnsVisible }) => {
	const [unit, setUnit] = useState([...unitTableItems]);
	const [sortItem, setSortItem] = useState("");
	const [order, setOrder] = useState("no-order");

	const sortUponItem = () => {
		if (order === "no-order") {
			setOrder("ascending");
			setUnit(() => {
				unit.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return -1;
					}
					if (a[sortItem] > b[sortItem]) {
						return 1;
					}

					return 0;
				});

				return [...unit];
			});
		} else if (order === "ascending") {
			setOrder("descending");
			setUnit(() => {
				unit.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return 1;
					}
					if (a[sortItem] > b[sortItem]) {
						return -1;
					}
					return 0;
				});

				return [...unit];
			});
		} else if (order === "descending") {
			setOrder("no-order");
			setSortItem("");
			setUnit([...unitTableItems]);
		}
	};
	return (
		<div
			id="kt_referrals_1"
			className="card-body p-0 tab-pane fade show active"
			role="tabpanel"
		>
			<div className="table-responsive">
				<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
					<thead className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
						<tr>
							<th
								className="w-10px pe-2"
								style={{
									position: "relative",
									top: "-5px",
								}}
							>
								<div className="form-check form-check-sm form-check-custom form-check-solid me-3">
									<input
										className="form-check-input"
										type="checkbox"
										data-kt-check="true"
										data-kt-check-target="#kt_subscriptions_table .form-check-input"
										value="1"
									/>
								</div>
							</th>

							{columnsVisible.map((column) => {
								return (
									column.label === "Brand Image" &&
									column.visible && (
										<th
											className={`min-w-75px text-start cursor-pointer text-hover-primary`}
											style={{
												position: "relative",
												top: "-4px",
											}}
										>
											Brand Image
										</th>
									)
								);
							})}

							{columnsVisible.map((column) => {
								return (
									column.label === "Name" &&
									column.visible && (
										<th
											className={`min-w-100px text-startcursor-pointer text-hover-primary `}
											onClick={() => {
												setSortItem("name");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-start`}
											>
												Name{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "name" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "name" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "name" && order === "ascending"
																	? "1"
																	: sortItem !== "name" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "name" && order === "ascending"
																	? "visible"
																	: sortItem !== "name" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "name" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "name" && order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "name" && order === "descending"
																	? "visible"
																	: "hidden",
														}}
													/>
												</div>
											</p>
										</th>
									)
								);
							})}

							{columnsVisible.map((column) => {
								return (
									column.label === "Short Name" &&
									column.visible && (
										<th
											className={`min-w-100px text-startcursor-pointer text-hover-primary `}
											onClick={() => {
												setSortItem("shortName");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-start`}
											>
												Short Name{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "shortName" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "shortName" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "shortName" &&
																order === "ascending"
																	? "1"
																	: sortItem !== "shortName" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "shortName" &&
																order === "ascending"
																	? "visible"
																	: sortItem !== "shortName" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "shortName" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "shortName" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "shortName" &&
																order === "descending"
																	? "visible"
																	: "hidden",
														}}
													/>
												</div>
											</p>
										</th>
									)
								);
							})}

							{columnsVisible.map(
								(column) =>
									column.label === "Base Unit" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("baseUnit");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Base Unit{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "baseUnit" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "baseUnit" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "baseUnit" && order === "ascending"
																	? "1"
																	: sortItem !== "baseUnit" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "baseUnit" && order === "ascending"
																	? "visible"
																	: sortItem !== "baseUnit" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "baseUnit" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "baseUnit" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "baseUnit" &&
																order === "descending"
																	? "visible"
																	: "hidden",
														}}
													/>
												</div>
											</p>
										</th>
									)
							)}

							{columnsVisible.map(
								(column) =>
									column.label === "Operator" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("operator");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Operator{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "operator" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "operator" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "operator" && order === "ascending"
																	? "1"
																	: sortItem !== "operator" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "operator" && order === "ascending"
																	? "visible"
																	: sortItem !== "operator" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "operator" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "operator" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "operator" &&
																order === "descending"
																	? "visible"
																	: "hidden",
														}}
													/>
												</div>
											</p>
										</th>
									)
							)}

							{columnsVisible.map(
								(column) =>
									column.label === "Operation Value" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("operationValue");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Operation Value{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "operationValue" &&
															order === "ascending"
																? "#1b84ff"
																: sortItem !== "operationValue" ||
																  sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "operationValue" &&
																order === "ascending"
																	? "1"
																	: sortItem !== "operationValue" ||
																	  sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "operationValue" &&
																order === "ascending"
																	? "visible"
																	: sortItem !== "operationValue" ||
																	  sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "operationValue" &&
															order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "operationValue" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "operationValue" &&
																order === "descending"
																	? "visible"
																	: "hidden",
														}}
													/>
												</div>
											</p>
										</th>
									)
							)}

							{columnsVisible.map(
								(column) =>
									column.label === "Actions" &&
									column.visible && (
										<th
											className="text-end min-w-110px cursor-pointer text-hover-primary position-relative"
											style={{
												top: "-4px",
											}}
										>
											Actions
										</th>
									)
							)}
						</tr>
					</thead>
					<tbody className="fs-6 fw-semibold text-gray-600">
						{unit.map((item, index) => (
							<UnitTableRow
								columnsVisible={columnsVisible}
								key={index + item.warehouse}
								name={item.name}
								shortName={item.shortName}
								baseUnit={item.baseUnit}
								operator={item.operator}
								operationValue={item.operationValue}
								index={index}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UnitTable;
