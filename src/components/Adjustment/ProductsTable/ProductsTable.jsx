import React from "react";

const ProductsTable = () => {
	return (
		<div className="card-body pt-0" style={{ overflowX: "auto" }}>
			<table
				className="table align-middle table-row-dashed fs-6 gy-5"
				id="kt_ecommerce_report_sales_table"
			>
				<thead>
					<tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
						<th className="min-w-75px">#</th>
						<th className="min-w-100px">Code Product</th>
						<th className="text-start min-w-75px">Product</th>
						<th className="text-start min-w-75px">Stock</th>
						<th className="text-start min-w-75px">Qty</th>
						<th className="text-start min-w-100px">Type</th>
					</tr>
				</thead>
				<tbody className="fw-semibold text-gray-600">
					<tr>
						<td>454532</td>
						<td className="text-start pe-0">3</td>
						<td className="text-start pe-0">IPhone</td>
						<td className="text-start pe-0">8</td>
						<td className="text-start pe-0">4567</td>
						<td className="text-start">Mobile</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default ProductsTable;
