import React from "react";

const Input = ({ label, placeholder, type, value = "", haveNote = false }) => {
	return (
		<div className="fv-row w-100 ">
			<label className="form-label">{label}</label>
			<input
				className="form-control mb-2"
				name="billing_order_postcode"
				placeholder={placeholder}
				type={type}
				value={value}
			/>
			{haveNote ? (
				<p>Supported: "smtp", "sendmail", "mailgun", "ses","postmark", "log"</p>
			) : (
				<p></p>
			)}
		</div>
	);
};

export default Input;
