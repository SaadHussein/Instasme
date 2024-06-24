import React from "react";
import UploadComponent from "./UploadComponent";
import Button from "../Button/Button";

const Upload = () => {
	return (
		<div className="d-flex flex-column align-items-start justify-content-start w-100">
			<h5 className="mb-6">Install/Upload Module</h5>
			<div className="w-100">
				<UploadComponent />
			</div>
			<div className="d-flex align-items-center justify-content-center my-8 w-100">
				<Button text={"Upload Module"} />
			</div>
		</div>
	);
};

export default Upload;
