import React from "react";
import classes from "./NewInputWithSearchIcon.module.css";

const NewInputWithSearchIcon = ({ label, placeholder, type }) => {
	return (
		<div
			className={`fv-row w-100 ${classes.inputDisplay}`}
			style={{ position: "relative" }}
		>
			<label className="fs-6 fw-semibold form-label mt-3">
				<span className="required">{label}</span>
			</label>
			<div className={`${classes.searchInput}`}>
				<i
					className={`ki-outline ki-magnifier search-icon fs-2 text-gray-500 position-absolute translate-middle-y ms-5 ${classes.searchIcon}`}
					style={{ top: "52.5% !important", left: "0" }}
				></i>
				<input
					type={type}
					className="search-input form-control form-control border h-lg-55px ps-13"
					name="search"
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default NewInputWithSearchIcon;
