import React from "react";
import Completed from "../../Status/Completed";
import Pending from "../../Status/Pending";
import Ordered from "../../Status/Ordered";
import Disabled from "../../Status/Disabled";

const SalesReport = () => {
	return (
		<div className="col-xl-12 mt-0">
			<div className="card card-flush">
				<div className="card-header align-items-center py-5 gap-2 gap-md-5">
					<div className="card-title">
						<div className="d-flex align-items-center position-relative my-1">
							<span className="card-label fw-bold text-gray-900">
								Recent Sales
							</span>
						</div>
						<div id="kt_ecommerce_report_sales_export" className="d-none"></div>
					</div>
				</div>
				<div className="card-body pt-0" style={{ overflowX: "auto" }}>
					<table
						className="table align-middle table-row-dashed fs-6 gy-5"
						id="kt_ecommerce_report_sales_table"
					>
						<thead>
							<tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
								<th className="min-w-70px">Reference</th>
								<th className="text-start min-w-150px pe-0">Customer</th>
								<th className="text-start min-w-150px pe-0">Warehouse</th>
								<th className="text-start min-w-75px pe-0">Status</th>
								<th className="text-start min-w-75px pe-0">Grand Total</th>
								<th className="text-start min-w-60px pe-0">Paid</th>
								<th className="text-start min-w-60px pe-0">Due</th>
								<th className="text-start min-w-75px">Payment Status</th>
							</tr>
						</thead>
						<tbody className="fw-semibold text-gray-600">
							<tr>
								<td>SL_1119</td>
								<td className="text-start pe-0">walk-in-customer</td>
								<td className="text-start pe-0">Warehouse 1</td>
								<td className="text-start pe-0">
									<Completed text={"Completed"} />
								</td>
								<td className="text-start pe-0">LE 81.00</td>
								<td className="text-start pe-0">LE 81.00</td>
								<td className="text-start pe-0">LE 81.00</td>
								<td className="text-start">
									<Completed text={"Paid"} />
								</td>
							</tr>
							<tr>
								<td>SL_1119</td>
								<td className="text-start pe-0">walk-in-customer</td>
								<td className="text-start pe-0">Warehouse 2</td>
								<td className="text-start pe-0">
									<Pending text={"Pending"} />
								</td>
								<td className="text-start pe-0">LE 81.00</td>
								<td className="text-start pe-0">LE 81.00</td>
								<td className="text-start pe-0">LE 81.00</td>
								<td className="text-start">
									<Disabled text={"Partial"} />
								</td>
							</tr>
							<tr>
								<td>SL_1119</td>
								<td className="text-start pe-0">walk-in-customer</td>
								<td className="text-start pe-0">Warehouse 1</td>
								<td className="text-start pe-0">
									<Ordered text={"Ordered"} />
								</td>
								<td className="text-start pe-0">LE 81.00</td>
								<td className="text-start pe-0">LE 81.00</td>
								<td className="text-start pe-0">LE 81.00</td>
								<td className="text-start">
									<Ordered text={"Unpaid"} />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default SalesReport;
