import React, { useEffect, useState } from "react";
import classes from "../../../styles/global.module.css";
import privateClasses from "./LoadingWrapper.module.css";
import { ScaleLoader } from "react-spinners";

const LoadingWrapper = ({ children }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, []);
	return (
		<>
			{loading ? (
				<div>
					<div
						className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
					>
						<div className="d-flex flex-column flex-column-fluid">
							<div
								id="kt_app_content"
								className="app-content flex-column-fluid"
							>
								<div
									id="kt_app_content_container"
									class="app-container container-fluid"
								>
									<div className={`${privateClasses.loader}`}>
										<ScaleLoader color="#1B84FF" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<>{children}</>
			)}
		</>
	);
};

export default LoadingWrapper;
