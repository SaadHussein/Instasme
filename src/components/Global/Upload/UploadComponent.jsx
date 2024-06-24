// import React from "react";
// import { UploadOutlined } from "@ant-design/icons";
// import { Button, message, Upload } from "antd";
// const props = {
// 	name: "file",
// 	// action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
// 	action: "https://httpbin.org/post",
// 	headers: {
// 		authorization: "authorization-text",
// 	},
// 	onChange(info) {
// 		if (info.file.status !== "uploading") {
// 			console.log(info.file, info.fileList);
// 		}
// 		if (info.file.status === "done") {
// 			message.success(`${info.file.name} file uploaded successfully`);
// 		} else if (info.file.status === "error") {
// 			message.error(`${info.file.name} file upload failed.`);
// 		}
// 	},
// };
// const UploadComponent = () => (
// 	<Upload {...props}>
// 		<Button icon={<UploadOutlined />}>Click to Upload</Button>
// 	</Upload>
// );
// export default UploadComponent;

import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import React, { useState } from "react";

const UploadComponent = () => {
	const [fileList, setFileList] = useState([]);
	const [uploadedFile, setUploadedFile] = useState(null);

	const handleChange = (info) => {
		setFileList(info.fileList);

		if (info.file.status !== "uploading") {
			console.log("File:", info.file);
			console.log("File List:", info.fileList);
		}

		if (info.file.status === "done") {
			message.success(`${info.file.name} file uploaded successfully`);
			// Store the uploaded file in the state
			setUploadedFile(info.file.originFileObj);
		} else if (info.file.status === "error") {
			message.error(`${info.file.name} file upload failed.`);
		}
	};

	const props = {
		name: "file",
		action: "https://httpbin.org/post", // Your local server endpoint
		headers: {
			authorization: "authorization-text",
		},
		onChange: handleChange,
	};

	return (
		<div>
			<Upload {...props} fileList={fileList}>
				<Button icon={<UploadOutlined />}>Click to Upload</Button>
				<p className="mt-1">The module must be uploaded as zip file</p>
			</Upload>
			{/* {uploadedFile && (
				<div>
					<h3>Uploaded File:</h3>
					<p>{uploadedFile.name}</p>
					<img
						src={URL.createObjectURL(uploadedFile)}
						alt={uploadedFile.name}
						style={{ maxWidth: "100%" }}
					/>
				</div>
			)} */}
		</div>
	);
};

export default UploadComponent;
