import { useWindowWidth } from "@react-hook/window-size";
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
	const width = useWindowWidth();
	const [count, setCount] = useState(0);
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
							$
							{count === 0 ? (
								<CountUp start={0} end={cost} duration={3} />
							) : (
								cost
							)}
						</td>
					)
			)}
			{columnsVisible.map(
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

//1453 1307 1200 832 553 541 373 366

//1455
