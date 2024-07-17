import { useWindowWidth } from "@react-hook/window-size";
import React, { useEffect, useRef, useState } from "react";

const UsersReportsTableRow = ({
	columnsVisible,
	username,
	totalSales,
	totalPurchases,
	totalQuotations,
	totalReturnSales,
	totalReturnPurchases,
	totalTransfers,
	totalAdjustments,
	index,
}) => {
	const [showActionsList, setShowActionsList] = useState(false);
	const width = useWindowWidth();
	const actionListRef = useRef();
	const [count, setCount] = useState(0);

	const handleClickOutside = (event) => {
		if (
			actionListRef.current &&
			!actionListRef.current.contains(event.target)
		) {
			setShowActionsList(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCount(1);
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<tr>
			<td>
				<div className="form-check form-check-sm form-check-custom form-check-solid">
					<input className="form-check-input" type="checkbox" value="1" />
				</div>
			</td>
			{columnsVisible.map(
				(column) =>
					column.label === "Username" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">
							{username}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Total Sales" &&
					column.visible && (
						<td className="text-end fw-bold text-primary">{totalSales}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Total Purchases" &&
					column.visible && (
						<td className="text-end fw-bold text-primary">{totalPurchases}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Total Quotations" &&
					column.visible && (
						<td className="text-end fw-bold text-primary">{totalQuotations}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Total Return Sales" &&
					column.visible && (
						<td className="text-end fw-bold text-primary">
							{totalReturnSales}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Total Return Purchases" &&
					column.visible && (
						<td className="text-end fw-bold text-primary">
							{totalReturnPurchases}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Total Transfers" &&
					column.visible && (
						<td className="text-end fw-bold text-primary">{totalTransfers}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Total Adjustments" &&
					column.visible && (
						<td className="text-end fw-bold text-primary">
							{totalAdjustments}
						</td>
					)
			)}

			{columnsVisible.map(
				(column) =>
					column.label === "Actions" &&
					column.visible && (
						<td className="text-end">
							<div
								className={`btn btn-sm btn-light btn-flex btn-center btn-active-light-primary fs-6 ${
									showActionsList ? "show fs-6" : ""
								}`}
								onClick={() => {
									setShowActionsList((prev) => !prev);
								}}
							>
								Actions
								<i className="ki-outline ki-down fs-5 ms-1"></i>
							</div>
							<div
								className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4 ${
									showActionsList ? "show" : ""
								}`}
								ref={actionListRef}
								style={{
									zIndex: 107,
									position: "fixed",
									inset: "0px 0px auto auto",
									margin: "0px",
									transform: `translate(${width > 990 ? -140 : -40}px, ${
										(width > 1453
											? 375
											: width <= 1453 && width > 1307
											? 422.5
											: width <= 1307 && width > 1200
											? 420
											: width <= 1200 && width > 990
											? 520
											: width <= 990 && width > 832
											? 505
											: width <= 832 && width > 553
											? 547.5
											: width <= 553 && width > 541
											? 565
											: width <= 541 && width > 428
											? 565
											: width <= 428 && width > 366
											? 607.5
											: 607.5) +
										index * 80
									}px)`,
								}}
							>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Reports</div>
								</div>
							</div>
						</td>
					)
			)}
		</tr>
	);
};

export default UsersReportsTableRow;
