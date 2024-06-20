import React from "react";

const InputWithIcon = ({ label, placeholder, type, icon, value }) => {
	return (
		<div className="fv-row w-100 ">
			<label className="form-label">{label}</label>
			<div className="input-group">
				<input
					type={type}
					className="form-control form-control-solid"
					placeholder={placeholder}
					value={value}
				/>
				<button type="button" className="btn btn-icon btn-light">
					{icon}
				</button>
			</div>
		</div>
	);
};

export default InputWithIcon;
