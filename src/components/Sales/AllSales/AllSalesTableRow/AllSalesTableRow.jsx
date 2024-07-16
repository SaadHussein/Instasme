import { useWindowWidth } from "@react-hook/window-size";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Completed from "../../../Global/Status/Completed";
import Pending from "../../../Global/Status/Pending";
import Ordered from "../../../Global/Status/Ordered";

const AllSalesTableRow = ({
	columnsVisible,
	date,
	reference,
	addedBy,
	customer,
	warehouse,
	status,
	grandTotal,
	paid,
	due,
	paymentStatus,
	shippingStatus,
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
					column.label === "Date" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">{date}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Reference" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">
							{reference}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Added By" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">
							{addedBy}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Customer" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">
							{customer}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Warehouse" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">{warehouse}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Status" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">
							{status === "Completed" ? (
								<Completed text={status} />
							) : status === "Pending" ? (
								<Pending text={status} />
							) : status === "Ordered" ? (
								<Ordered text={status} />
							) : (
								""
							)}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Grand Total" &&
					column.visible && (
						<td className="text-end text-primary fw-bold">
							$
							{count === 0 ? (
								<CountUp start={0} end={grandTotal} duration={3} />
							) : (
								grandTotal
							)}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Paid" &&
					column.visible && (
						<td className="text-end text-primary fw-bold">
							$
							{count === 0 ? (
								<CountUp start={0} end={paid} duration={3} />
							) : (
								paid
							)}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Due" &&
					column.visible && (
						<td className="text-end text-primary fw-bold">
							$
							{count === 0 ? <CountUp start={0} end={due} duration={3} /> : due}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Payment Status" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">
							{paymentStatus === "Paid" ? (
								<Completed text={paymentStatus} />
							) : paymentStatus === "Unpaid" ? (
								<Ordered text={paymentStatus} />
							) : (
								""
							)}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Shipping Status" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">
							{shippingStatus === "Delivered" ? (
								<Completed text={shippingStatus} />
							) : shippingStatus === "Packed" ? (
								<Pending text={shippingStatus} />
							) : (
								""
							)}
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
									<div className="menu-link px-3">Sale Detail</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Edit Sale</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Sale Return</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Show Payments</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Create Payment</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Edit Shipping</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Invoice POS</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Download PDF</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Email Notification</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">SMS Notification</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Delete Sale</div>
								</div>
							</div>
						</td>
					)
			)}
		</tr>
	);
};

export default AllSalesTableRow;
