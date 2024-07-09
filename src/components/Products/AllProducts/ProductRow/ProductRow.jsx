import React, { useRef, useState } from "react";

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
}) => {
	const [showActionsList, setShowActionsList] = useState(false);
	const actionListRef = useRef();

	return (
		<tr>
			<td>
				<div className="form-check form-check-sm form-check-custom form-check-solid">
					<input className="form-check-input" type="checkbox" value="1" />
				</div>
			</td>
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
			<td className="text-gray-800 text-hover-primary fw-bold">{type}</td>
			<td className="text-gray-800 text-hover-primary fw-bold">{name}</td>
			<td className="text-gray-800 text-hover-primary fw-bold">{code}</td>
			<td className="fw-bold text-gray-600">{brand}</td>
			<td className="fw-bold text-gray-600">{category}</td>
			<td className="text-primary fw-bold">${cost}</td>
			<td className="text-primary fw-bold">${price}</td>
			<td className="fw-bold text-gray-600">{unit}</td>
			<td className="fw-bold text-gray-600">{quantity}</td>
			<td className="text-start">
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
						zIndex: "107",
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
		</tr>
	);
};

export default ProductRow;
