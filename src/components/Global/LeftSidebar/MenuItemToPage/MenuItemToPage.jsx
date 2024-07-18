import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import classes from "../LeftSidebar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLeftSidebarOpen } from "../../../../redux/globalSlice";

const MenuItemToPage = ({ title, icon, link }) => {
	const dispatch = useDispatch();
	const isLeftSidebarOpen = useSelector(
		(state) => state.global.isLeftSidebarOpen
	);
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		// <Link to={link}>
		<Link
			to={link}
			// data-kt-menu-trigger="click"
			// className={`menu-item here menu-accordion ${
			// 	isMenuOpen ? "show hover" : ""
			// }`}
			onClick={() => {
				dispatch(setIsLeftSidebarOpen({ value: !isLeftSidebarOpen }));
			}}
			className={`menu-item here menu-accordion`}
		>
			<span
				className="menu-link"
				// onClick={() => {
				// 	setIsMenuOpen((prev) => !prev);
				// }}
			>
				<span className="menu-icon">
					{/* <i className="ki-outline ki-briefcase fs-2"></i> */}
					{icon}
				</span>
				<span className="menu-title">{title}</span>
				{/* <span className="menu-arrow"></span> */}
			</span>
			{/* <div
				className={`menu-sub menu-sub-accordion ${
					isMenuOpen ? "show" : `${classes.menuClosed}`
				}`}
			>
				{menuItems.map((item) => (
					<MenuItem
						link={item.link}
						title={item.title}
						key={item.link + item.title}
					/>
				))}
			</div> */}
		</Link>
		// </Link>
	);
};

export default MenuItemToPage;
