import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const ProductRow = ({
	image,
	type,
	name,
	code,
	brand,
	category,
	cost,
	price,
	unit,
	quantity,
	index,
	columnsVisible,
}) => {
	const [showActionsList, setShowActionsList] = useState(false);
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
					column.label === "Image" &&
					column.visible && (
						<td>
							<img
								src={image}
								alt="Product"
								style={{
									width: "50px",
									height: "50px",
								}}
							/>
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Type" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">{type}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Name" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">{name}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Code" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">{code}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Brand" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">{brand}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Category" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">{category}</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Cost" &&
					column.visible && (
						<td className="text-end text-primary fw-bold">
							$<CountUp start={0} end={cost} duration={3} />
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Price" &&
					column.visible && (
						<td className="text-end text-primary fw-bold">
							$<CountUp start={0} end={price} duration={3} />
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Unit" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">
							<CountUp start={0} end={unit} duration={3} />
						</td>
					)
			)}
			{columnsVisible.map(
				(column) =>
					column.label === "Quantity" &&
					column.visible && (
						<td className="text-end fw-bold text-gray-600">
							<CountUp start={0} end={quantity} duration={3} />
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
									transform: `translate(-140px, ${380 + index * 80}px)`,
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
			)}
		</tr>
	);
};

export default ProductRow;
