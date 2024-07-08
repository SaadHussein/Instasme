import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import classes from "../LeftSidebar.module.css";
import { Link } from "react-router-dom";

const MenuItemToPage = ({ title, menuItems, icon, link }) => {
	// const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		// <Link to={link}>
		<Link
			to={link}
			// data-kt-menu-trigger="click"
			// className={`menu-item here menu-accordion ${
			// 	isMenuOpen ? "show hover" : ""
			// }`}
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
