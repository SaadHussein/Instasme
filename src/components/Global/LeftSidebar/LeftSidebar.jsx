import React, { useState } from "react";
import classes from "./LeftSidebar.module.css";
import {
	accounting,
	products,
	adjustment,
	quotations,
	purchases,
	sales,
	settings,
	transfer,
} from "../../../data/menu-data/dataMenu";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import { MdOutlineBook } from "react-icons/md";
import { TfiMapAlt } from "react-icons/tfi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { RiBillLine } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";

const LeftSidebar = () => {
	return (
		<div
			id="kt_app_sidebar"
			className={`app-sidebar flex-column ${classes.leftSidebarStyle}`}
			data-kt-drawer="true"
			data-kt-drawer-name="app-sidebar"
			data-kt-drawer-activate="{default: true, lg: false}"
			data-kt-drawer-overlay="true"
			data-kt-drawer-width="250px"
			data-kt-drawer-direction="start"
			data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
		>
			<div id="kt_app_sidebar_wrapper" className="app-sidebar-wrapper">
				<div
					className="hover-scroll-y my-5 my-lg-2 mx-4"
					data-kt-scroll="true"
					data-kt-scroll-activate="{default: false, lg: true}"
					data-kt-scroll-height="auto"
					data-kt-scroll-dependencies="#kt_app_header"
					data-kt-scroll-wrappers="#kt_app_sidebar_wrapper"
					data-kt-scroll-offset="5px"
				>
					<div
						id="#kt_app_sidebar_menu"
						data-kt-menu="true"
						data-kt-menu-expand="false"
						className="app-sidebar-menu-primary menu menu-column menu-rounded menu-sub-indention menu-state-bullet-primary px-3 mb-5"
					>
						<Link
							to={"/"}
							style={{
								fontSize: "1.15rem",
								color: "#252F4A",
								fontWeight: "600",
							}}
						>
							<div
								data-kt-menu-trigger="click"
								className={`menu-item here menu-accordion`}
							>
								<span className="menu-link">
									<span className="menu-icon">
										<i className="ki-outline ki-home-2 fs-2"></i>
									</span>
									<span className="menu-title">Dashboards</span>
								</span>
								<div className={`menu-sub menu-sub-accordion`}></div>
							</div>
						</Link>

						<Menu
							menuItems={products}
							title={"Products"}
							icon={<MdOutlineBook size={21} />}
						/>
						<Menu
							menuItems={adjustment}
							title={"Adjustment"}
							icon={<TfiMapAlt size={21} />}
						/>
						<Menu
							menuItems={quotations}
							title={"Quotations"}
							icon={<PiShoppingCartSimple size={21} />}
						/>
						<Menu
							menuItems={purchases}
							title={"Purchases"}
							icon={<RiBillLine size={21} />}
						/>
						<Menu
							menuItems={sales}
							title={"Sales"}
							icon={<PiShoppingCartSimple size={21} />}
						/>
						<Menu
							menuItems={accounting}
							title={"Accounting"}
							icon={<FaWallet size={21} />}
						/>
						<Menu
							menuItems={settings}
							title={"Settings"}
							icon={<IoSettingsOutline size={21} />}
						/>
						<Menu
							menuItems={transfer}
							title={"Transfer"}
							icon={<TbArrowBackUp size={21} />}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSidebar;
