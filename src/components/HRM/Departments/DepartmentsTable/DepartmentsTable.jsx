import React, { useState } from "react";
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import classes from "./DepartmentsTable.module.css";
import DepartmentsTableRow from "../DepartmentsTableRow/DepartmentsTableRow";

const DepartmentsTable = ({ columnsVisible, departmentTableItems }) => {
	const [departments, setDepartments] = useState([...departmentTableItems]);
	const [sortItem, setSortItem] = useState("");
	const [order, setOrder] = useState("no-order");

	const sortUponItem = () => {
		if (order === "no-order") {
			setOrder("ascending");
			setDepartments(() => {
				departments.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return -1;
					}
					if (a[sortItem] > b[sortItem]) {
						return 1;
					}

					return 0;
				});

				return [...departments];
			});
		} else if (order === "ascending") {
			setOrder("descending");
			setDepartments(() => {
				departments.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return 1;
					}
					if (a[sortItem] > b[sortItem]) {
						return -1;
					}
					return 0;
				});

				return [...departments];
			});
		} else if (order === "descending") {
			setOrder("no-order");
			setSortItem("");
			setDepartments([...departmentTableItems]);
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
									column.label === "Department" &&
									column.visible && (
										<th
											className={`min-w-100px text-startcursor-pointer text-hover-primary `}
											onClick={() => {
												setSortItem("department");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-start`}
											>
												Department{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "department" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "department" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "department" &&
																order === "ascending"
																	? "1"
																	: sortItem !== "department" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "department" &&
																order === "ascending"
																	? "visible"
																	: sortItem !== "department" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "department" &&
															order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "department" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "department" &&
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

							{columnsVisible.map((column) => {
								return (
									column.label === "Department Head" &&
									column.visible && (
										<th
											className={`min-w-100px text-startcursor-pointer text-hover-primary `}
											onClick={() => {
												setSortItem("departmentHead");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-start`}
											>
												Department Head{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "departmentHead" &&
															order === "ascending"
																? "#1b84ff"
																: sortItem !== "departmentHead" ||
																  sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "departmentHead" &&
																order === "ascending"
																	? "1"
																	: sortItem !== "departmentHead" ||
																	  sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "departmentHead" &&
																order === "ascending"
																	? "visible"
																	: sortItem !== "departmentHead" ||
																	  sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "departmentHead" &&
															order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "departmentHead" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "departmentHead" &&
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
									column.label === "Company" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("company");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Company{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "company" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "company" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "company" && order === "ascending"
																	? "1"
																	: sortItem !== "company" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "company" && order === "ascending"
																	? "visible"
																	: sortItem !== "company" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "company" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "company" && order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "company" && order === "descending"
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
						{departments.map((item, index) => (
							<DepartmentsTableRow
								columnsVisible={columnsVisible}
								key={index + item.warehouse}
								department={item.department}
								departmentHead={item.departmentHead}
								company={item.company}
								index={index}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DepartmentsTable;
