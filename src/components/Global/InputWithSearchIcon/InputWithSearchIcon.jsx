import React from "react";
import classes from "./InputWithSearchInput.module.css";

const InputWithSearchIcon = ({ label, placeholder, type }) => {
	return (
		<div className="fv-row w-100" style={{ position: "relative" }}>
			<label className="form-label">{label}</label>
			<i
				className={`ki-outline ki-magnifier search-icon fs-2 text-gray-500 position-absolute translate-middle-y ms-5 ${classes.searchIcon}`}
				style={{ marginTop: "11px", top: "55% !important", left: "0" }}
			></i>
			<input
				type={type}
				className="search-input form-control form-control border h-lg-55px ps-13"
				name="search"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default InputWithSearchIcon;
