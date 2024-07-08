import React, { useState } from "react";
import classes from "./LabelHeaderReactSelect.module.css";
import Select from "react-select";

const LabelHeaderReactSelect = ({
	label,
	options,
	placeholder,
	name,
	defaultValue = "Select Value From Options",
}) => {
	const [selectedOption, setSelectedOption] = useState("");
	const handleChange = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className={`fv-row w-100 ${classes.selectContainer}`}>
			<label className={`form-label`}>{label}</label>
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
			</div>
			<div className="nav-icon i-Library-2"></div> */}
		</div>
	);
};

export default LabelHeaderReactSelect;
