import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./ProductRow.module.css";

const ProductRow = ({
	image,
	type,
	name,
	code,
	brand,
	category,
	cost,
	price,
	unit,
	quantity,
}) => {
	return (
		<tr>
			<td>
				<div className="form-check form-check-sm form-check-custom form-check-solid">
					<input className="form-check-input" type="checkbox" value="1" />
				</div>
			</td>
			<td>
				<img
					src={image}
					alt="Product"
					style={{
						width: "50px",
						height: "50px",
					}}
				/>
			</td>
			<td>{type}</td>
			<td>{name}</td>
			<td>{code}</td>
			<td>{brand}</td>
			<td>{category}</td>
			<td className="text-success">${cost}</td>
			<td className="text-success">${price}</td>
			<td>{unit}</td>
			<td>{quantity}</td>
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

export default ProductRow;
