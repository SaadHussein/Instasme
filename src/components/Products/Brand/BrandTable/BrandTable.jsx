import React, { useState } from "react";
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import classes from "./BrandTable.module.css";
import BrandTableRow from "../BrandTableRow/BrandTableRow";

const BrandTable = ({ brandTableItems, columnsVisible }) => {
	const [brand, setBrand] = useState([...brandTableItems]);
	const [sortItem, setSortItem] = useState("");
	const [order, setOrder] = useState("no-order");

	const sortUponItem = () => {
		if (order === "no-order") {
			setOrder("ascending");
			setBrand(() => {
				brand.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return -1;
					}
					if (a[sortItem] > b[sortItem]) {
						return 1;
					}

					return 0;
				});

				return [...brand];
			});
		} else if (order === "ascending") {
			setOrder("descending");
			setBrand(() => {
				brand.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return 1;
					}
					if (a[sortItem] > b[sortItem]) {
						return -1;
					}
					return 0;
				});

				return [...brand];
			});
		} else if (order === "descending") {
			setOrder("no-order");
			setSortItem("");
			setBrand([...brandTableItems]);
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
									column.label === "Brand Name" &&
									column.visible && (
										<th
											className={`min-w-100px text-start cursor-pointer text-hover-primary `}
											onClick={() => {
												setSortItem("brandName");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-start`}
											>
												Brand Name{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "brandName" && order === "ascending"
																? "#1b84ff"
																: sortItem !== "brandName" || sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "brandName" &&
																order === "ascending"
																	? "1"
																	: sortItem !== "brandName" || sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "brandName" &&
																order === "ascending"
																	? "visible"
																	: sortItem !== "brandName" || sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "brandName" && order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "brandName" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "brandName" &&
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
									column.label === "Brand Description" &&
									column.visible && (
										<th
											className={`min-w-100px text-start cursor-pointer text-hover-primary `}
											onClick={() => {
												setSortItem("brandDescription");
												sortUponItem();
											}}
										>
											<p
												className={`${classes.tableHeader} d-flex align-items-center justify-content-start`}
											>
												Brand Description{" "}
												<div
													className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
												>
													<MdOutlineKeyboardArrowUp
														size={18}
														color={`${
															sortItem === "brandDescription" &&
															order === "ascending"
																? "#1b84ff"
																: sortItem !== "brandDescription" ||
																  sortItem === ""
																? "#99A1B7"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "brandDescription" &&
																order === "ascending"
																	? "1"
																	: sortItem !== "brandDescription" ||
																	  sortItem === ""
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "9px",
															visibility:
																sortItem === "brandDescription" &&
																order === "ascending"
																	? "visible"
																	: sortItem !== "brandDescription" ||
																	  sortItem === ""
																	? "visible"
																	: "hidden",
														}}
													/>

													<MdOutlineKeyboardArrowDown
														size={18}
														color={`${
															sortItem === "brandDescription" &&
															order === "descending"
																? "#1b84ff"
																: ""
														}`}
														style={{
															opacity:
																sortItem === "brandDescription" &&
																order === "descending"
																	? "1"
																	: "0",
															marginLeft: "8px",
															position: "relative",
															top: "-10px",
															visibility:
																sortItem === "brandDescription" &&
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
						{brand.map((item, index) => (
							<BrandTableRow
								columnsVisible={columnsVisible}
								key={index + item.warehouse}
								brandImage={item.brandImage}
								brandName={item.brandName}
								brandDescription={item.brandDescription}
								index={index}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default BrandTable;
