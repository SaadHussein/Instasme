import React from "react";
import classes from "./RightAside.module.css";
import { Link } from "react-router-dom";

const RightAside = () => {
	return (
		<div
			id="kt_app_aside"
			className={`app-aside flex-column ${classes.rightAsideStyle}`}
			data-kt-drawer="true"
			data-kt-drawer-name="app-aside"
			data-kt-drawer-activate="{default: true, lg: false}"
			data-kt-drawer-overlay="true"
			data-kt-drawer-width="auto"
			data-kt-drawer-direction="end"
			data-kt-drawer-toggle="#kt_app_aside_mobile_toggle"
		>
			<div
				id="kt_app_aside_wrapper"
				className="d-flex flex-column align-items-center hover-scroll-y mt-lg-n3 py-5 py-lg-0 gap-4"
				data-kt-scroll="true"
				data-kt-scroll-activate="{default: false, lg: true}"
				data-kt-scroll-height="auto"
				data-kt-scroll-dependencies="#kt_app_header"
				data-kt-scroll-wrappers="#kt_app_aside_wrapper"
				data-kt-scroll-offset="5px"
			>
				<Link
					to="/"
					className="btn btn-icon btn-color-warning bg-hover-body h-45px w-45px flex-shrink-0"
					data-bs-toggle="tooltip"
					title="Profile"
					data-bs-custom-className="tooltip-inverse"
				>
					<i className="ki-outline ki-address-book fs-2x"></i>
				</Link>
			</div>
		</div>
	);
};

export default RightAside;
