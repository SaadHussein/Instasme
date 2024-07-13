import React, { useEffect, useState } from "react";
import Completed from "../../../Global/Status/Completed";
import Failed from "../../../Global/Status/Failed";
import CountUp from "react-countup";

const PurchasesReturnTableRow = ({
	columnsVisible,
	date,
	supplier,
	due,
	grandTotal,
	paid,
	paymentStatus,
	reference,
	purchaseRef,
	status,
	warehouse,
	index,
}) => {
	const [count, setCount] = useState(0);

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
					column.label === "Supplier" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">
							{supplier}
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
					column.label === "Purchase Ref" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">{purchaseRef}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Status" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">
							{status === "success" ? (
								<Completed text={status} />
							) : status === "No" ? (
								<Failed text={status} />
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
						<td className="text-end fw-bold text-gray-600">
							{paid === "Yes" ? (
								<Completed text={paid} />
							) : paid === "No" ? (
								<Failed text={paid} />
							) : (
								""
							)}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Due" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">{due}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Payment Status" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">
							{paymentStatus === "success" ? (
								<Completed text={paymentStatus} />
							) : paymentStatus === "No" ? (
								<Failed text={paymentStatus} />
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
						<td className="text-end fw-bold text-gray-600">No Actions</td>
					)
			)}
			{/* {columnsVisible.map(
        (column) =>
            column.label === "Price" &&
            column.visible && (
                <td className="text-end text-primary fw-bold">
                    $
                    {count === 0 ? (
                        <CountUp start={0} end={price} duration={3} />
                    ) : (
                        price
                    )}
                </td>
            )
    )}
    {columnsVisible.map(
        (column) =>
            column.label === "Unit" &&
            column.visible && (
                <td className="text-end fw-bold text-gray-600">
                    {count === 0 ? (
                        <CountUp start={0} end={unit} duration={3} />
                    ) : (
                        unit
                    )}
                </td>
            )
    )}
    {columnsVisible.map(
        (column) =>
            column.label === "Quantity" &&
            column.visible && (
                <td className="text-end fw-bold text-gray-600">
                    {count === 0 ? (
                        <CountUp start={0} end={quantity} duration={3} />
                    ) : (
                        quantity
                    )}
                </td>
            )
    )} */}
			{/* {columnsVisible.map(
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
                            <div className="menu-link px-3">Cancel</div>
                        </div>
                        <div className="menu-item px-3">
                            <div className="menu-link px-3">View</div>
                        </div>
                        <div className="menu-item px-3">
                            <div className="menu-link px-3">Edit</div>
                        </div>
                        <div className="menu-item px-3">
                            <div className="menu-link px-3">Delete</div>
                        </div>
                    </div>
                </td>
            )
    )} */}
		</tr>
	);
};

export default PurchasesReturnTableRow;
