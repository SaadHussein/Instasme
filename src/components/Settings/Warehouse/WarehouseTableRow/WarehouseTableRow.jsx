import { useWindowWidth } from "@react-hook/window-size";
import React, { useEffect, useRef, useState } from "react";

const WarehouseTableRow = ({
	columnsVisible,
	index,
	name,
	phone,
	country,
	city,
	email,
	zipCode,
}) => {
	const [showActionsList, setShowActionsList] = useState(false);
	const width = useWindowWidth();
	const actionListRef = useRef();

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

	return (
		<tr>
			<td>
				<div className="form-check form-check-sm form-check-custom form-check-solid">
					<input className="form-check-input" type="checkbox" value="1" />
				</div>
			</td>
			{columnsVisible.map(
				(column) =>
					column.label === "Name" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">{name}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Phone" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">
							{phone}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Country" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">
							{country}
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "City" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">{city}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Email" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">{email}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Zip Code" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">{zipCode}</td>
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
									<div className="menu-link px-3">Edit</div>
								</div>
								<div className="menu-item px-3">
									<div className="menu-link px-3">Delete</div>
								</div>
							</div>
						</td>
					)
			)}
		</tr>
	);
};

export default WarehouseTableRow;
