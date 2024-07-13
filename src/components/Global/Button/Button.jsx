import React from "react";
import classes from "./Button.module.css";

const Button = ({
	text,
	className = "",
	color = "",
	icon = "",
	hoverState = "normal",
	isFullInMobile = false,
}) => {
	return (
		<button
			type="submit"
			id="kt_ecommerce_edit_order_submit"
			className={`btn ${className !== "" ? className : classes.button}  ${
				hoverState === "danger"
					? classes.danger
					: hoverState === "success"
					? classes.success
					: "btn-primary"
			} ${isFullInMobile ? classes.isFullWidthInMobile : ""}`}
		>
			{icon ? icon : ""}
			<span className="indicator-label">{text}</span>
		</button>
	);
};

export default Button;
