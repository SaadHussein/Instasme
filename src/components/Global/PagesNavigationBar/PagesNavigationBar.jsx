import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./PagesNavigationBar.module.css";

const PagesNavigationBar = ({ pages }) => {
	const location = useLocation();
	return (
		<ul
			className={`nav nav-tabs nav-line-tabs nav-line-tabs-2x border-transparent fs-4 fw-semibold mb-15 ${classes.pagesNav}`}
		>
			{pages.map((item) => (
				<li className="nav-item">
					<Link
						className={`nav-link text-active-primary d-flex align-items-center pb-5 ${
							location.pathname === item.link ? "active" : ""
						}`}
						to={item.link}
					>
						{item.icon}
						{item.title}
					</Link>
				</li>
			))}
			{/* <li className="nav-item">
				<Link
					className="nav-link text-active-primary d-flex align-items-center pb-5 active"
					to="/"
				>
					<i className="ki-outline ki-home fs-2 me-2"></i>General
				</Link>
			</li>
			<li className="nav-item">
				<a
					className="nav-link text-active-primary d-flex align-items-center pb-5"
					href="#kt_ecommerce_settings_store"
				>
					<i className="ki-outline ki-shop fs-2 me-2"></i>Store
				</a>
			</li>
			<li className="nav-item">
				<a
					className="nav-link text-active-primary d-flex align-items-center pb-5"
					href="#kt_ecommerce_settings_localization"
				>
					<i className="ki-outline ki-compass fs-2 me-2"></i>Localization
				</a>
			</li>
			<li className="nav-item">
				<a
					className="nav-link text-active-primary d-flex align-items-center pb-5"
					href="#kt_ecommerce_settings_products"
				>
					<i className="ki-outline ki-package fs-2 me-2"></i>Products
				</a>
			</li>
			<li className="nav-item">
				<a
					className="nav-link text-active-primary d-flex align-items-center pb-5"
					href="#kt_ecommerce_settings_customers"
				>
					<i className="ki-outline ki-people fs-2 me-2"></i>Customers
				</a>
			</li> */}
		</ul>
	);
};

export default PagesNavigationBar;
