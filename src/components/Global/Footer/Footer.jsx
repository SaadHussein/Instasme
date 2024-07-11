import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
	return (
		<div id="kt_app_footer" className={`app-footer `}>
			{/* <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3"> */}
			<div className="app-container container-fluid d-flex flex-column align-items-center justify-content-start py-3">
				<div className="d-flex align-items-start justify-content-start w-100">
					<p>
						ERP INSTASME - Inventory - POS - Warehouses - Vendors - Sales - HR
					</p>
				</div>
				<div
					className={`d-flex align-items-center justify-content-between w-100 ${classes.footer}`}
				>
					<div className="d-flex align-items-center justify-content-start gap-3">
						<img
							src="/brandmarks.png"
							alt="BrandmarksLogo"
							className={`${classes.footerImage}`}
						/>
						<div className="d-flex flex-column align-items-start justify-content-start text-gray-900 order-2 order-md-1">
							<span className="text-muted fw-semibold me-1">
								&copy; 2024 Developed by Brandmarks
							</span>
							<a
								href="https://keenthemes.com"
								target="_blank"
								className="text-gray-800 text-hover-primary"
							>
								All rights reserved - v4.0.7
							</a>
						</div>
					</div>
					<ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
						<li className="menu-item">
							<Link href="/" target="_blank" className="menu-link px-2">
								About
							</Link>
						</li>
						<li className="menu-item">
							<Link href="/" target="_blank" className="menu-link px-2">
								Support
							</Link>
						</li>
						<li className="menu-item">
							<Link to="/" target="_blank" className="menu-link px-2">
								Purchase
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
