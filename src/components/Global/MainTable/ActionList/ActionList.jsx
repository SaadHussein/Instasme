import React, { useState } from "react";
import classes from "./ActionList.module.css";
import { Link } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";

const ActionList = () => {
	const [showList, setShowList] = useState(false);
	return (
		// <ClickAwayListener
		// 	onClickAway={() => {
		// 		setShowList(false);
		// 	}}
		// >
		<div
			style={{
				position: "relative",
			}}
		>
			<div
				className="btn btn-light btn-active-light-primary btn-sm"
				onClick={() => {
					setShowList((prev) => !prev);
				}}
			>
				Actions
				<i className="ki-outline ki-down fs-5 m-0"></i>
			</div>

			<div
				className={`menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4 ${
					showList ? `show ${classes.showList}` : ""
				}`}
			>
				<div className="menu-item px-3">
					<Link className="menu-link px-3">View</Link>
				</div>
				<div className="menu-item px-3">
					<Link className="menu-link px-3">Edit</Link>
				</div>
				<div className="menu-item px-3">
					<Link className="menu-link px-3">Delete</Link>
				</div>
			</div>
		</div>
		// </ClickAwayListener>
	);
};

export default ActionList;
