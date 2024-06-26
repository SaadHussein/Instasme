import React, { useState } from "react";
import classes from "./Select.module.css";

const Select = ({
	label,
	options,
	defaultValue = "Select Value From Options",
}) => {
	const [showOptions, setShowOptions] = useState(false);
	const [value, setValue] = useState(defaultValue);
	return (
		<div className={`fv-row w-100 ${classes.selectContainer}`}>
			<label className={`form-label`}>{label}</label>
			<div
				className={`form-select mb-2 ${classes.select} `}
				name="select"
				onClick={() => {
					setShowOptions((prev) => !prev);
				}}
			>
				<p className={`${classes.placeHolder}`}>{value}</p>
			</div>
			<div
				className={`${classes.optionsList} ${
					showOptions ? `${classes.okShow}` : `${classes.showOptions}`
				}`}
			>
				{options.map((option) => (
					<div
						className={`${classes.option}`}
						onClick={() => {
							setValue(option);
							setShowOptions(false);
						}}
					>
						{option}
					</div>
				))}
			</div>
			<div className="nav-icon i-Library-2"></div>
		</div>
	);
};

export default Select;
