import React, { useEffect, useRef, useState } from "react";
import { utils, write } from "xlsx";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import "jspdf-autotable";
import classes from "./ExportButtonAndList.module.css";

const ExportButtonAndList = ({
	productTable = [],
	productTableHead = [],
	tableProducts = [],
}) => {
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

	const handleDownloadAsExcel = () => {
		const ws = utils.aoa_to_sheet(productTable);
		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, "Sheet1");

		const wbout = write(wb, { bookType: "xlsx", type: "array" });
		saveAs(
			new Blob([wbout], { type: "application/octet-stream" }),
			"ProductsTable.xlsx"
		);
		setShowExportList(false);
	};

	const handleDownloadAsCSV = () => {
		const csvContent =
			"data:text/csv;charset=utf-8," +
			productTable.map((e) => e.join(",")).join("\n");

		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "ProductsTable.csv");

		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
		setShowExportList(false);
	};

	const handleDownloadAsPDF = () => {
		const doc = new jsPDF();

		doc.setFontSize(16);
		doc.text(
			"INSTASME ERP Management Application By Brandmarks::ProductsTable",
			14,
			15
		);

		const tableHead = productTableHead
			.filter((col) => col.visible && col.label !== "Actions")
			.map((col) => col.label);

		const tableBody = tableProducts.map((row) => {
			return tableHead.map(
				(label) => row[label.toLowerCase().replace(" ", "_")]
			);
		});

		doc.autoTable({
			head: [tableHead],
			body: tableBody,
			startY: 25,
			styles: {
				font: "Arial",
				fontSize: 10,
				halign: "center",
				valign: "middle",
			},
			headStyles: {
				fillColor: [0, 123, 255],
				textColor: [255, 255, 255],
			},
			columnStyles: {
				0: { fontStyle: "bold" },
				8: { halign: "right" },
			},
		});

		setShowExportList(false);
		doc.save("ProductsTable.pdf");
	};

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
				<div className="menu-item px-3" onClick={handleDownloadAsExcel}>
					<div className="menu-link px-3 fs-6">Export as Excel</div>
				</div>
				<div className="menu-item px-3" onClick={handleDownloadAsCSV}>
					<div className="menu-link px-3 fs-6">Export as CSV</div>
				</div>
				<div className="menu-item px-3" onClick={handleDownloadAsPDF}>
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
