import React, { useState } from "react";
import Flatpickr from "react-flatpickr";

const DateRange = () => {
	const [dateRange, setDateRange] = useState("");

	const handleDateChange = (range) => {
		setDateRange(range);
	};

	return (
		<div className="input-group w-250px">
			<Flatpickr
				className="form-control form-control-solid rounded rounded-end-0"
				options={{
					mode: "range",
					dateFormat: "Y-m-d",
					onChange: handleDateChange,
				}}
				value={dateRange}
				placeholder="Pick Date Range"
			/>
			<button
				className="btn btn-icon btn-light"
				onClick={() => {
					setDateRange("");
				}}
			>
				<i className="ki-outline ki-cross fs-2"></i>
			</button>
		</div>
	);
};

export default DateRange;
