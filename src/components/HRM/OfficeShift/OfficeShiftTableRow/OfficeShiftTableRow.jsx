import { useWindowWidth } from "@react-hook/window-size";
import React, { useEffect, useRef, useState } from "react";

const OfficeShiftTableRow = ({ columnsVisible, name, company, index }) => {
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
					column.label === "Company" &&
					column.visible && (
						<td className="text-gray-800 text-hover-primary fw-bold">
							{company}
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
		</tr>
	);
};

export default OfficeShiftTableRow;
