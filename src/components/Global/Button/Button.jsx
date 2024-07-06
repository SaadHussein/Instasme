import React from "react";
import classes from "./Button.module.css";

const Button = ({ text, color = "", icon = "", hoverState = "normal" }) => {
	return (
		<button
			type="submit"
			id="kt_ecommerce_edit_order_submit"
			className={`btn ${classes.button} ${
				hoverState === "danger"
					? classes.danger
					: hoverState === "success"
					? classes.success
					: "btn-primary"
			}`}
		>
			{icon ? icon : ""}
			<span className="indicator-label">{text}</span>
		</button>
	);
};

export default Button;
