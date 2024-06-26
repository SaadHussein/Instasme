import React from "react";

const StockReport = () => {
	return (
		<div className="col-xl-8">
			<div className="card card-flush h-xl-100">
				<div className="card-header pt-7">
					<h3 className="card-title align-items-start flex-column">
						<span className="card-label fw-bold text-gray-900">
							Stock Alert
						</span>
					</h3>
				</div>
				<div className="card-body" style={{ overflowX: "auto" }}>
					<table
						className="table align-middle table-row-dashed fs-6 gy-3"
						id="kt_table_widget_5_table"
					>
						<thead>
							<tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
								<th className="min-w-30px">Code</th>
								<th className="text-start pe-3 min-w-150px">Product</th>
								<th className="text-start pe-3 min-w-140px">Warehouse</th>
								<th className="text-start pe-3 min-w-120px">Quantity</th>
								<th className="text-start pe-3 min-w-100px">Alert Quantity</th>
							</tr>
						</thead>
						<tbody className="fw-bold text-gray-600">
							<tr>
								<td>
									<div className="text-gray-900 text-hover-primary">
										70171027
									</div>
								</td>
								<td className="text-start">Banana</td>
								<td className="text-start">Warehouse 1</td>
								<td className="text-start">10</td>
								<td className="text-start">
									<span className="badge py-3 px-4 fs-7 badge-light-danger">
										10 PCS
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<div className="text-gray-900 text-hover-primary">
										80256894
									</div>
								</td>
								<td className="text-start">Orange</td>
								<td className="text-start">Warehouse 2</td>
								<td className="text-start">47</td>
								<td className="text-start">
									<span className="badge py-3 px-4 fs-7 badge-light-danger">
										50 PCS
									</span>
								</td>
							</tr>
							<tr>
								<td>
									<div className="text-gray-900 text-hover-primary">
										80256894
									</div>
								</td>
								<td className="text-start">Orange</td>
								<td className="text-start">Warehouse 1</td>
								<td className="text-start">47</td>
								<td className="text-start">
									<span className="badge py-3 px-4 fs-7 badge-light-danger">
										50 PCS
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default StockReport;
