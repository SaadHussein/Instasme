import { Card } from "react-bootstrap";
import CountUp from "react-countup";
import classes from "./Statistics.module.css";
import { Link } from "react-router-dom";

const Statistics = ({ title, icon, number, backgroundColor, link }) => {
	return (
		<div className="col-xxl-3 col-sm-6">
			<Link to={link}>
				{/* <Card className={`widget-flat ${variant}`}> */}
				<Card
					className={`widget-flat`}
					style={{ backgroundColor: backgroundColor }}
				>
					<Card.Body>
						<div className={`float-end ${classes.widgetIcon}`}>
							{/* <i className={`${icon} widget-icon`}></i> */}
							{icon}
						</div>
						<h6
							className={`mt-0 text-white ${classes.titleSize}`}
							title={title}
						>
							{title}
						</h6>
						<h2 className={`my-2 text-white ${classes.numberSize}`}>
							LE <CountUp end={number} duration={4} />
							.00
						</h2>
						<p className="mb-0">
							{/* <span className="badge bg-white bg-opacity-10 me-1">{change}</span>
						&nbsp;
						<span className="text-nowrap">Since last month</span> */}
						</p>
					</Card.Body>
				</Card>
			</Link>
		</div>
	);
};

export default Statistics;
