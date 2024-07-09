import React, { useEffect, useRef, useState } from "react";
import classes from "./ExportButtonAndList.module.css";

const ExportButtonAndList = () => {
	const [showExportList, setShowExportList] = useState(false);
	const exportListRef = useRef();

	const handleClickOutside = (event) => {
		if (
			exportListRef.current &&
			!exportListRef.current.contains(event.target)
		) {
			setShowExportList(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className={`${classes.exportContainer}`}>
			<button
				type="button"
				className={`btn btn-light-primary width-full-invoices fs-6  ${
					showExportList ? "show" : ""
				}`}
				onClick={() => {
					setShowExportList((prev) => !prev);
				}}
			>
				<i class="ki-outline ki-exit-up fs-2"></i>Export
			</button>
			<div
				ref={exportListRef}
				className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4 ${
					showExportList
						? `show active-list-action-table-ex ${classes.exportList}`
						: ""
				}`}
			>
				<div className="menu-item px-3">
					<div className="menu-link px-3 fs-6">Copy to clipboard</div>
				</div>
				<div className="menu-item px-3">
					<div className="menu-link px-3 fs-6">Export as Excel</div>
				</div>
				<div className="menu-item px-3">
					<div className="menu-link px-3 fs-6">Export as CSV</div>
				</div>
				<div className="menu-item px-3">
					<div className="menu-link px-3 fs-6">Export as PDF</div>
				</div>
				<div className="menu-item px-3">
					<div className="menu-link px-3 fs-6">Export as Print</div>
				</div>
			</div>
		</div>
	);
};

export default ExportButtonAndList;
