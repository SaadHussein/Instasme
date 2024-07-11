import React, { useEffect, useRef, useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import classes from "./ColumnVisibility.module.css";

const ColumnVisibility = ({ columns, changeLabelVisiblity }) => {
	const [showVisibleList, setShowVisibleList] = useState(false);
	const visibleList = useRef();

	const handleClickOutside = (event) => {
		if (visibleList.current && !visibleList.current.contains(event.target)) {
			setShowVisibleList(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<div className={`${classes.listContainer}`}>
			<button
				type="button"
				className={`btn btn-primary width-full-invoices fs-6  ${
					showVisibleList ? "show" : ""
				} ${classes.btnListContainer}`}
				onClick={() => {
					setShowVisibleList((prev) => !prev);
				}}
			>
				<AiFillEyeInvisible className="fs-2" /> Column Visibility
			</button>
			<div
				ref={visibleList}
				className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4 ${
					showVisibleList
						? `show active-list-action-table-visibility ${classes.list}`
						: ""
				}`}
			>
				{columns.map((column) => (
					<div className="menu-item px-3" key={column}>
						<label className="menu-link px-3">
							<div className="form-check form-check-sm form-check-custom form-check-solid me-3 d-flex align-items-end gap-4">
								<input
									className="form-check-input"
									type="checkbox"
									checked={column.visible}
									onChange={() => changeLabelVisiblity(column.label)}
									id={column.label}
								/>
								<label htmlFor={column.label} className="fs-6">
									{column.label}
								</label>
							</div>
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default ColumnVisibility;
