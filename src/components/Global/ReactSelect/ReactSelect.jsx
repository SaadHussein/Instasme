import React, { useState } from "react";
import Select from "react-select";
import classes from "./ReactSelect.module.css";

const ReactSelect = ({ options, label, placeholder = "", name }) => {
	const [selectedOption, setSelectedOption] = useState("");
	const handleChange = (option) => {
		setSelectedOption(option);
	};
	return (
		<div className={`fv-row w-100 ${classes.selectContainer}`}>
			<label
				className={`fs-6 fw-semibold form-label mt-3 ${classes.selectLabel}`}
			>
				<span className="required">{label}</span>
			</label>

			<div className={`${classes.selectOptionsContainer}`}>
				<Select
					options={options}
					placeholder={placeholder}
					value={selectedOption}
					onChange={handleChange}
					name={name}
					styles={{
						control: (baseStyles, state) => ({
							...baseStyles,
							borderRadius: "0.75rem",
							border: "1px solid #dbdfe9",
							padding: "5px 0",
							fontWeight: "500",
							fontSize: "1.1rem",
							color: "black",
						}),
					}}
				/>
				{/* <div
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
				</div> */}
			</div>
			{/* <div className="nav-icon i-Library-2"></div> */}
		</div>
	);
};

export default ReactSelect;
