import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./AdjustmentRow.module.css";

const AdjustmentRow = ({ date, reference, warehouse, totalProducts }) => {
	return (
		<tr>
			<td>
				<div className="form-check form-check-sm form-check-custom form-check-solid">
					<input className="form-check-input" type="checkbox" value="1" />
				</div>
			</td>
			<td>{date}</td>
			<td>{reference}</td>
			<td>{warehouse}</td>
			<td>{totalProducts}</td>
			<td className="text-start">
				<Link>
					<FaRegEye size={20} className="me-3" />
				</Link>
				<Link>
					<CiEdit size={20} className="me-3" color="#17C653" />
				</Link>
				<MdDelete
					size={20}
					color="#F8285A"
					className={`${classes.deleteIcon}`}
				/>
			</td>
		</tr>
	);
};

export default AdjustmentRow;
