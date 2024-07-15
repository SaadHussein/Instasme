import React, { useState } from "react";
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import classes from "./AllTransfersTable.module.css";
import AllTransfersTableRow from "../AllTransfersTableRow/AllTransfersTableRow";

const AllTransfersTable = ({ columnsVisible, allTransfersTableItems }) => {
	const [allTransfers, setAllTransfers] = useState([...allTransfersTableItems]);
	const [sortItem, setSortItem] = useState("");
	const [order, setOrder] = useState("no-order");

	const sortUponItem = () => {
		if (order === "no-order") {
			setOrder("ascending");
			setAllTransfers(() => {
				allTransfers.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return -1;
					}
					if (a[sortItem] > b[sortItem]) {
						return 1;
					}

					return 0;
				});

				return [...allTransfers];
			});
		} else if (order === "ascending") {
			setOrder("descending");
			setAllTransfers(() => {
				allTransfers.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return 1;
					}
					if (a[sortItem] > b[sortItem]) {
						return -1;
					}
					return 0;
				});

				return [...allTransfers];
			});
		} else if (order === "descending") {
			setOrder("no-order");
			setSortItem("");
			setAllTransfers([...allTransfersTableItems]);
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
									column.label === "Date" &&
									column.visible && (
										<th
											className={`min-w-75px text-start cursor-pointer text-hover-primary`}
											onClick={() => {
												setSortItem("date");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-start mt-1`}
											>
												Date{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "date" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "date" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "date" && order === "ascending"
																	? "1"
																	: sortItem !== "date" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "date" && order === "ascending"
																	? "visible"
																	: sortItem !== "date" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "date" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "date" && order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "date" && order === "descending"
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
									column.label === "Reference" &&
									column.visible && (
										<th
											className={`min-w-100px text-startcursor-pointer text-hover-primary `}
											onClick={() => {
												setSortItem("reference");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-start`}
											>
												Reference{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "reference" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "reference" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "reference" &&
																order === "ascending"
																	? "1"
																	: sortItem !== "reference" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "reference" &&
																order === "ascending"
																	? "visible"
																	: sortItem !== "reference" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "reference" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "reference" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "reference" &&
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
									column.label === "From Warehouse" &&
									column.visible && (
										<th
											className={`min-w-75px text-start cursor-pointer text-hover-primary`}
											onClick={() => {
												setSortItem("fromWarehouse");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-start`}
											>
												From Warehouse{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "fromWarehouse" &&
															order === "ascending"
																? "#1b84ff"
																: sortItem !== "fromWarehouse" ||
																  sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "fromWarehouse" &&
																order === "ascending"
																	? "1"
																	: sortItem !== "fromWarehouse" ||
																	  sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "fromWarehouse" &&
																order === "ascending"
																	? "visible"
																	: sortItem !== "fromWarehouse" ||
																	  sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>
													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "fromWarehouse" &&
															order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "fromWarehouse" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "fromWarehouse" &&
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
									column.label === "To Warehouse" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("toWarehouse");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												To Warehouse{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "toWarehouse" &&
															order === "ascending"
																? "#1b84ff"
																: sortItem !== "toWarehouse" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "toWarehouse" &&
																order === "ascending"
																	? "1"
																	: sortItem !== "toWarehouse" ||
																	  sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "toWarehouse" &&
																order === "ascending"
																	? "visible"
																	: sortItem !== "toWarehouse" ||
																	  sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "toWarehouse" &&
															order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "toWarehouse" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "toWarehouse" &&
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
									column.label === "Items" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("items");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Items{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "items" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "items" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "items" && order === "ascending"
																	? "1"
																	: sortItem !== "items" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "items" && order === "ascending"
																	? "visible"
																	: sortItem !== "items" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "items" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "items" && order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "items" && order === "descending"
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
									column.label === "Grand Total" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("grandTotal");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Grand Total{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "grandTotal" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "grandTotal" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "grandTotal" &&
																order === "ascending"
																	? "1"
																	: sortItem !== "grandTotal" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "grandTotal" &&
																order === "ascending"
																	? "visible"
																	: sortItem !== "grandTotal" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "grandTotal" &&
															order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "grandTotal" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "grandTotal" &&
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
									column.label === "Status" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("status");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Status{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "status" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "status" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "status" && order === "ascending"
																	? "1"
																	: sortItem !== "status" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "status" && order === "ascending"
																	? "visible"
																	: sortItem !== "status" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>
													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "status" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "status" && order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "status" && order === "descending"
																	? "visible"
																	: "hidden",
														}}
													/>
												</div>
											</p>
										</th>
									)
							)}

							{/* {columnsVisible.map(
								(column) =>
									column.label === "Unit" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("unit");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Unit{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "unit" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "unit" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "unit" && order === "ascending"
																	? "1"
																	: sortItem !== "unit" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "unit" && order === "ascending"
																	? "visible"
																	: sortItem !== "unit" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>
													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "unit" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "unit" && order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "unit" && order === "descending"
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
									column.label === "Quantity" &&
									column.visible && (
										<th
											className="text-end min-w-70px cursor-pointer text-hover-primary pe-0"
											onClick={() => {
												setSortItem("quantity");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-end`}
											>
												Quantity{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "quantity" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "quantity" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "quantity" && order === "ascending"
																	? "1"
																	: sortItem !== "quantity" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "quantity" && order === "ascending"
																	? "visible"
																	: sortItem !== "quantity" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>
													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "quantity" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "quantity" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "quantity" &&
																order === "descending"
																	? "visible"
																	: "hidden",
														}}
													/>
												</div>
											</p>
										</th>
									)
							)} */}

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
						{allTransfers.map((item, index) => (
							<AllTransfersTableRow
								columnsVisible={columnsVisible}
								key={index + item.reference + item.grandTotal}
								date={item.date}
								reference={item.reference}
								fromWarehouse={item.fromWarehouse}
								toWarehouse={item.toWarehouse}
								items={item.items}
								grandTotal={item.grandTotal}
								status={item.status}
								index={index}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllTransfersTable;
