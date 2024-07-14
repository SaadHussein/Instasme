import React, { useState } from "react";
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import classes from "./CompanyTable.module.css";
import CompanyTableRow from "../CompanyTableRow/CompanyTableRow";

const CompanyTable = ({ columnsVisible, companyTableItems }) => {
	const [company, setCompany] = useState([...companyTableItems]);
	const [sortItem, setSortItem] = useState("");
	const [order, setOrder] = useState("no-order");

	const sortUponItem = () => {
		if (order === "no-order") {
			setOrder("ascending");
			setCompany(() => {
				company.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return -1;
					}
					if (a[sortItem] > b[sortItem]) {
						return 1;
					}

					return 0;
				});

				return [...company];
			});
		} else if (order === "ascending") {
			setOrder("descending");
			setCompany(() => {
				company.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return 1;
					}
					if (a[sortItem] > b[sortItem]) {
						return -1;
					}
					return 0;
				});

				return [...company];
			});
		} else if (order === "descending") {
			setOrder("no-order");
			setSortItem("");
			setCompany([...companyTableItems]);
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
									column.label === "Phone" &&
									column.visible && (
										<th
											className={`min-w-100px text-startcursor-pointer text-hover-primary `}
											onClick={() => {
												setSortItem("phone");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-start`}
											>
												Phone{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "phone" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "phone" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "phone" && order === "ascending"
																	? "1"
																	: sortItem !== "phone" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "phone" && order === "ascending"
																	? "visible"
																	: sortItem !== "phone" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "phone" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "phone" && order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "phone" && order === "descending"
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
									column.label === "Country" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("country");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Country{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "country" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "country" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "country" && order === "ascending"
																	? "1"
																	: sortItem !== "country" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "country" && order === "ascending"
																	? "visible"
																	: sortItem !== "country" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "country" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "country" && order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "country" && order === "descending"
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
									column.label === "Email" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("email");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Email{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "email" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "email" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "email" && order === "ascending"
																	? "1"
																	: sortItem !== "email" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "email" && order === "ascending"
																	? "visible"
																	: sortItem !== "email" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "email" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "email" && order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "email" && order === "descending"
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
						{company.map((item, index) => (
							<CompanyTableRow
								columnsVisible={columnsVisible}
								key={index + item.warehouse}
								name={item.name}
								phone={item.phone}
								country={item.country}
								email={item.email}
								index={index}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CompanyTable;
