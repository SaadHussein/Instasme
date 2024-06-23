import React from "react";
import classes from "./StatisticsCard.module.css";
import { Link } from "react-router-dom";

const StatisticsCard = ({ amount, title, icon, link }) => {
	return (
		<div className="col-xl-3">
			<Link
				to={link}
				className="card bg-body hoverable card-xl-stretch mb-xl-8"
			>
				<div className={`card-body ${classes.alignItemsInCard}`}>
					<div>
						<div className="text-gray-900 fw-bold fs-2 mb-2 mt-5">
							{amount}$
						</div>
						<div className="fw-semibold text-gray-400">{title}</div>
					</div>
					{/* <i className="ki-outline ki-chart-simple text-primary fs-2x ms-n1"></i> */}
					{icon}
				</div>
			</Link>
		</div>
	);
};

export default StatisticsCard;
