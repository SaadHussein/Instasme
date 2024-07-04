import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import classes from "./AdjustmentTable.module.css";
import AdjustmentRow from "./AdjustmentRow.jsx/AdjustmentRow";

const tableAdjustments = [
	{
		date: "04-07-2024",
		reference: "AD_1111",
		warehouse: "Warehouse 1",
		totalProducts: 1.0,
	},
	{
		date: "05-07-2024",
		reference: "AD_1112",
		warehouse: "Warehouse 2",
		totalProducts: 2.0,
	},
];

const AdjustmentTable = () => {
	const [adjustments, setAdjustments] = useState([...tableAdjustments]);
	const [sortItem, setSortItem] = useState("");
	const [order, setOrder] = useState("no-order");

	const sortUponItem = () => {
		if (order === "no-order") {
			setOrder("ascending");
			setAdjustments(() => {
				adjustments.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return -1;
					}
					if (a[sortItem] > b[sortItem]) {
						return 1;
					}

					return 0;
				});

				return [...adjustments];
			});
		} else if (order === "ascending") {
			setOrder("descending");
			setAdjustments(() => {
				adjustments.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return 1;
					}
					if (a[sortItem] > b[sortItem]) {
						return -1;
					}
					return 0;
				});

				return [...adjustments];
			});
		} else if (order === "descending") {
			setOrder("no-order");
			setAdjustments([...tableAdjustments]);
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
					<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
						<tr>
							<th className="w-10px pe-2">
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
							<th
								className={`min-w-120px text-start `}
								onClick={() => {
									setSortItem("date");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between mt-1`}
								>
									Date{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "date" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "date" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className={`min-w-140px text-start `}
								onClick={() => {
									setSortItem("reference");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Reference{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "reference" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "reference" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className={`min-w-125px text-start `}
								onClick={() => {
									setSortItem("warehouse");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Warehouse{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "warehouse" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "warehouse" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className="text-start min-w-70px "
								onClick={() => {
									setSortItem("totalProducts");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Total Products{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "totalProducts" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "totalProducts" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th className="text-start min-w-130px">Actions</th>
						</tr>
					</thead>
					<tbody className="fs-6 fw-semibold text-gray-600">
						{adjustments.map((item) => (
							<AdjustmentRow
								date={item.date}
								reference={item.reference}
								warehouse={item.warehouse}
								totalProducts={item.totalProducts}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AdjustmentTable;
