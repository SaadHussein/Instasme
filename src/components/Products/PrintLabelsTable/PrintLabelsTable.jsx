import React from "react";
import Input from "../../Global/Input/Input";

const PrintLabelsTable = () => {
	return (
		<div className="card-body pt-0" style={{ overflowX: "auto" }}>
			<table
				className="table align-middle table-row-dashed fs-6 gy-5"
				id="kt_ecommerce_report_sales_table"
			>
				<thead>
					<tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
						<th className="min-w-100px">Product</th>
						<th className="text-start min-w-100px">Code Product</th>
						<th className="text-start min-w-75px">Quantity</th>
					</tr>
				</thead>
				<tbody className="fw-semibold text-gray-600">
					<tr>
						<td>IPhone</td>
						<td className="text-start pe-0">454532</td>
						<td className="text-start">
							<Input label={""} placeholder={""} type={"number"} value={10} />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default PrintLabelsTable;
