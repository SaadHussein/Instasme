import React, { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import classes from "./RowSelect.module.css";

const NewSelect = ({
	label,
	options,
	defaultValue = "Select Value From Options",
}) => {
	const [showOptions, setShowOptions] = useState(false);
	const [value, setValue] = useState(defaultValue);
	return (
		<ClickAwayListener
			onClickAway={() => {
				setShowOptions(false);
			}}
		>
			<div className={`fv-row w-100 ${classes.selectContainer}`}>
				<label
					className={`fs-6 fw-semibold form-label mt-3 ${classes.selectLabel}`}
				>
					<span className="required">{label}</span>
				</label>
				<div className={`${classes.selectOptionsContainer}`}>
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
				</div>
				<div className="nav-icon i-Library-2"></div>
			</div>
		</ClickAwayListener>
	);
};

export default NewSelect;
