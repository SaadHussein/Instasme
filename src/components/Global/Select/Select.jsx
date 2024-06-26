import React, { useEffect, useRef, useState } from "react";
import classes from "./Select.module.css";

const Select = ({
	label,
	options,
	defaultValue = "Select Value From Options",
}) => {
	const ref = useRef();
	const [showOptions, setShowOptions] = useState(false);
	useOnClickOutside(ref, () => setShowOptions(false));
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
				ref={ref}
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

function useOnClickOutside(ref, handler) {
	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
}

export default Select;
