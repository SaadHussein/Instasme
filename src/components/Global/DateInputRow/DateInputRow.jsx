import React, { useState } from "react";
import Calender from "./Calender";
import classes from "./DateInputRow.module.css";

const DateInputRow = () => {
	const [showCalender, setShowCalender] = useState(false);
	return (
		<div className={`fv-row ${classes.dateContainer}`}>
			<label className={`required form-label ${classes.labelDateInput}`}>
				Order Date:
			</label>
			<input
				id="kt_ecommerce_edit_order_date"
				name="order_date"
				placeholder="Select a date"
				className="form-control mb-2"
				value=""
			/>
			<div className={`${classes.calender}`}>
				<Calender />
			</div>
		</div>
	);
};

export default DateInputRow;
