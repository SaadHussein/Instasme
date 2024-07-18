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
	hrm,
	people,
	reports,
} from "../../../data/menu-data/dataMenu";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import {
	MdOutlineBook,
	MdOutlineCompareArrows,
	MdPeople,
} from "react-icons/md";
import { TfiMapAlt } from "react-icons/tfi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { RiBillLine, RiGovernmentLine } from "react-icons/ri";
import { TbArrowBackUp } from "react-icons/tb";
import {
	IoArrowBackOutline,
	IoArrowForward,
	IoSettingsOutline,
} from "react-icons/io5";
import { FaChartLine, FaWallet } from "react-icons/fa";
import MenuItemToPage from "./MenuItemToPage/MenuItemToPage";
import { useSelector } from "react-redux";

const LeftSidebar = () => {
	const isLeftSidebarOpen = useSelector(
		(state) => state.global.isLeftSidebarOpen
	);
	return (
		<div
			id="kt_app_sidebar"
			className={`app-sidebar flex-column ${classes.leftSidebarStyle} ${
				isLeftSidebarOpen ? "" : classes.leftSidebarStyleClose
			}`}
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
					className={`hover-scroll-y my-5 my-lg-2 mx-4 ${classes.overflowLeftSidebar}`}
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

						<MenuItemToPage
							title={"Products"}
							icon={<MdOutlineBook size={21} />}
							link={"/products/all-products"}
						/>
						<MenuItemToPage
							title={"Adjustment"}
							icon={<TfiMapAlt size={21} />}
							link={"/adjustment/all-adjustments"}
						/>
						<MenuItemToPage
							title={"Quotations"}
							icon={<PiShoppingCartSimple size={21} />}
							link={"/quotations/all-quotations"}
						/>
						<MenuItemToPage
							title={"Purchases"}
							icon={<RiBillLine size={21} />}
							link={"/purchases/all-purchases"}
						/>
						<MenuItemToPage
							title={"Sales"}
							icon={<PiShoppingCartSimple size={21} />}
							link={"/sales/all-sales"}
						/>
						<MenuItemToPage
							title={"Returns"}
							icon={<MdOutlineCompareArrows size={21} />}
							link={"/returns/sales-return"}
						/>
						<MenuItemToPage
							title={"HRM"}
							icon={<RiGovernmentLine size={21} />}
							link={"/hrm/company"}
						/>
						<MenuItemToPage
							title={"Transfer"}
							icon={<TbArrowBackUp size={21} />}
							link={"/transfer/all-transfers"}
						/>
						<MenuItemToPage
							title={"Accounting"}
							icon={<FaWallet size={21} />}
							link={"/accounting/list-accounts"}
						/>
						<MenuItemToPage
							title={"People"}
							icon={<MdPeople size={21} />}
							link={"/people/customers"}
						/>
						<MenuItemToPage
							title={"Settings"}
							icon={<IoSettingsOutline size={21} />}
							link={"/settings/payment-gateway"}
						/>
						<MenuItemToPage
							title={"Reports"}
							icon={<FaChartLine size={21} />}
							link={"/reports/users-reports"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSidebar;
