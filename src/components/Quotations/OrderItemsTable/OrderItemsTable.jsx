import React from "react";

const OrderItemsTable = () => {
	return (
		<div className="card-body pt-0" style={{ overflowX: "auto" }}>
			<span
				className="card-label fw-bold text-gray-900"
				style={{ fontSize: "1.275rem" }}
			>
				Order Items *
			</span>
			<table
				className="table align-middle table-row-dashed fs-6 gy-5"
				id="kt_ecommerce_report_sales_table"
			>
				<thead>
					<tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
						<th className="min-w-75px">#</th>
						<th className="min-w-75px">Product</th>
						<th className="min-w-100px">Net Unit Price</th>
						<th className="text-start min-w-75px">Stock</th>
						<th className="text-start min-w-75px">Qty</th>
						<th className="text-start min-w-75px">Discount</th>
						<th className="text-start min-w-75px">Tax</th>
						<th className="text-start min-w-100px">Subtotal</th>
					</tr>
				</thead>
				<tbody className="fw-semibold text-gray-600">
					<tr>
						<td>454532</td>
						<td className="text-start pe-0">IPhone</td>
						<td className="text-start pe-0">1400</td>
						<td className="text-start pe-0">98</td>
						<td className="text-start pe-0">90</td>
						<td className="text-start pe-0">8</td>
						<td className="text-start pe-0">4567</td>
						<td className="text-start">3241</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default OrderItemsTable;
