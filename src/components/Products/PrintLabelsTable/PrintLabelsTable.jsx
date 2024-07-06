import React from "react";
import Input from "../../Global/Input/Input";
import classes from "./PrintLabelsTable.module.css";

const PrintLabelsTable = () => {
	return (
		<div
			className={`card-body pt-0 ${classes.table}`}
			style={{ overflowX: "auto" }}
		>
			<table
				className="table align-middle table-row-dashed fs-6 gy-5"
				id="kt_ecommerce_report_sales_table"
			>
				<thead>
					<tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
						<th className="min-w-200px">Product</th>
						<th className="text-end w-200px">Code Product</th>
						<th className="text-end w-200px">Quantity</th>
					</tr>
				</thead>
				<tbody className="fw-semibold text-gray-600">
					<tr>
						<td className={`${classes.cellName}`}>
							<img
								src="/brandmarks.png"
								alt="product"
								className={`${classes.productImage}`}
							/>{" "}
							IPhone
						</td>
						<td className="text-end pe-0">454532</td>
						<td className="text-end">
							10
							{/* <Input label={""} placeholder={""} type={"number"} value={10} /> */}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default PrintLabelsTable;
