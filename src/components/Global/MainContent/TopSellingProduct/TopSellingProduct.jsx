import React from "react";

const TopSellingProduct = () => {
	return (
		<div className="col-xl-4">
			<div className="card card-flush h-md-100">
				<div className="card-header pt-7">
					<h3 className="card-title align-items-start flex-column">
						<span className="card-label fw-bold text-gray-800">
							Top Selling Products
						</span>
					</h3>
				</div>
				<div className="card-body pt-4">
					<div className="table-responsive">
						<table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
							<thead>
								<tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
									<th className="p-0 w-50px pb-1">ITEM</th>
									<th className="ps-0 min-w-200px"></th>
									<th className="p-0 pb-1 min-w-120px">TOTAL SALES</th>
									<th className="text-end min-w-145px p-0 pb-1">TOTAL PRICE</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<img
											src="assets/media/stock/ecommerce/210.png"
											className="w-50px"
											alt=""
										/>
									</td>
									<td className="ps-0">
										<a
											href="apps/ecommerce/sales/details.html"
											className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
										>
											Elephant 1802
										</a>
										<span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
											Item: #XDG-2347
										</span>
									</td>
									<td>
										<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-start">
											4
										</span>
									</td>
									<td>
										<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
											LE 72.00
										</span>
									</td>
								</tr>
								<tr>
									<td>
										<img
											src="assets/media/stock/ecommerce/215.png"
											className="w-50px"
											alt=""
										/>
									</td>
									<td className="ps-0">
										<a
											href="apps/ecommerce/sales/details.html"
											className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
										>
											Red Laga
										</a>
										<span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
											Item: #XDG-2347
										</span>
									</td>
									<td>
										<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-start">
											4
										</span>
									</td>
									<td>
										<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
											LE 45.00
										</span>
									</td>
								</tr>
								<tr>
									<td>
										<img
											src="assets/media/stock/ecommerce/209.png"
											className="w-50px"
											alt=""
										/>
									</td>
									<td className="ps-0">
										<a
											href="apps/ecommerce/sales/details.html"
											className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
										>
											RiseUP
										</a>
										<span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
											Item: #XDG-2347
										</span>
									</td>
									<td>
										<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-start">
											3
										</span>
									</td>
									<td>
										<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
											LE 168.00
										</span>
									</td>
								</tr>
								<tr>
									<td>
										<img
											src="assets/media/stock/ecommerce/214.png"
											className="w-50px"
											alt=""
										/>
									</td>
									<td className="ps-0">
										<a
											href="apps/ecommerce/sales/details.html"
											className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
										>
											Yellow Stone
										</a>
										<span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
											Item: #XDG-2347
										</span>
									</td>
									<td>
										<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-start">
											2
										</span>
									</td>
									<td>
										<span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
											LE 72.00
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopSellingProduct;
