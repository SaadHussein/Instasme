import React from "react";
import ActionList from "./ActionList/ActionList";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const MainTable = ({ tableHeader }) => {
	return (
		<div
			id="kt_referrals_1"
			className="card-body p-0 tab-pane fade show active"
			role="tabpanel"
		>
			<div className="table-responsive">
				<table className="table align-middle table-row-bordered table-row-solid gy-4 gs-9">
					<thead className="border-gray-200 fs-5 fw-semibold bg-lighten">
						<tr>
							<th className="w-10px pe-2">
								<div className="form-check form-check-sm form-check-custom form-check-solid me-3">
									<input
										className="form-check-input"
										type="checkbox"
										data-kt-check="true"
										data-kt-check-target="#kt_subscriptions_table .form-check-input"
										value="1"
									/>
								</div>
							</th>
							{tableHeader.map((item) => (
								<th className={`min-w-${item.width}px text-start`}>
									{item.name}
								</th>
							))}
							<th className="text-start min-w-70px">Actions</th>
							{/* <th className="min-w-175px ps-9">Date</th>
							<th className="min-w-150px px-0">Order ID</th>
							<th className="min-w-350px">Details</th>
							<th className="min-w-125px">Amount</th>
							<th className="min-w-125px text-center">Invoice</th> */}
						</tr>
					</thead>
					<tbody className="fs-6 fw-semibold text-gray-600">
						<tr>
							<td>
								<div className="form-check form-check-sm form-check-custom form-check-solid">
									<input
										className="form-check-input"
										type="checkbox"
										value="1"
									/>
								</div>
							</td>
							<td>
								<img
									src="/brandmarks.png"
									alt="Product"
									style={{
										width: "50px",
										height: "50px",
									}}
								/>
							</td>
							<td>Fruit</td>
							<td>Banana</td>
							<td>12345678</td>
							<td>Fruit Brand</td>
							<td>Fruit</td>
							<td className="text-success">$38.00</td>
							<td className="text-success">$38.00</td>
							<td>20</td>
							<td>87</td>
							{/* <td className="text-center">
								<button className="btn btn-light btn-sm btn-active-light-primary">
									Download
								</button>
							</td> */}
							<td className="text-start">
								<Link>
									<FaRegEye size={20} className="me-3" />
								</Link>
								<Link>
									<CiEdit size={20} className="me-3" />
								</Link>
								<MdDelete size={20} />
							</td>
						</tr>
						<tr>
							<td>
								<div className="form-check form-check-sm form-check-custom form-check-solid">
									<input
										className="form-check-input"
										type="checkbox"
										value="1"
									/>
								</div>
							</td>
							<td>
								<img
									src="/brandmarks.png"
									alt="Product"
									style={{
										width: "50px",
										height: "50px",
									}}
								/>
							</td>
							<td>Vegitables</td>
							<td>Tomato</td>
							<td>92345678</td>
							<td>Vegitables Brand</td>
							<td>Vegitables</td>
							<td className="text-success">$37.00</td>
							<td className="text-success">$37.00</td>
							<td>25</td>
							<td>88</td>
							{/* <td className="text-center">
								<button className="btn btn-light btn-sm btn-active-light-primary">
									Download
								</button>
							</td> */}
							<td className="text-start">
								<Link>
									<FaRegEye size={20} className="me-3" />
								</Link>
								<Link>
									<CiEdit size={20} className="me-3" />
								</Link>
								<MdDelete size={20} />
							</td>
						</tr>
						{/* <tr>
							<td>
								<div className="form-check form-check-sm form-check-custom form-check-solid">
									<input
										className="form-check-input"
										type="checkbox"
										value="1"
									/>
								</div>
							</td>
							<td className="ps-9">Oct 24, 2020</td>
							<td className="ps-0">423445721</td>
							<td>Seller Fee</td>
							<td className="text-danger">$-2.60</td>
							<td className="text-center">
								<button className="btn btn-light btn-sm btn-active-light-primary">
									Download
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="form-check form-check-sm form-check-custom form-check-solid">
									<input
										className="form-check-input"
										type="checkbox"
										value="1"
									/>
								</div>
							</td>
							<td className="ps-9">Oct 08, 2020</td>
							<td className="ps-0">312445984</td>
							<td>Cartoon Mobile Emoji Phone Pack</td>
							<td className="text-success">$76.00</td>
							<td className="text-center">
								<button className="btn btn-light btn-sm btn-active-light-primary">
									Download
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="form-check form-check-sm form-check-custom form-check-solid">
									<input
										className="form-check-input"
										type="checkbox"
										value="1"
									/>
								</div>
							</td>
							<td className="ps-9">Sep 15, 2020</td>
							<td className="ps-0">312445984</td>
							<td>Iphone 12 Pro Mockup Mega Bundle</td>
							<td className="text-success">$5.00</td>
							<td className="text-center">
								<button className="btn btn-light btn-sm btn-active-light-primary">
									Download
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="form-check form-check-sm form-check-custom form-check-solid">
									<input
										className="form-check-input"
										type="checkbox"
										value="1"
									/>
								</div>
							</td>
							<td className="ps-9">May 30, 2020</td>
							<td className="ps-0">523445943</td>
							<td>Seller Fee</td>
							<td className="text-danger">$-1.30</td>
							<td className="text-center">
								<button className="btn btn-light btn-sm btn-active-light-primary">
									Download
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="form-check form-check-sm form-check-custom form-check-solid">
									<input
										className="form-check-input"
										type="checkbox"
										value="1"
									/>
								</div>
							</td>
							<td className="ps-9">Apr 22, 2020</td>
							<td className="ps-0">231445943</td>
							<td>Parcel Shipping / Delivery Service App</td>
							<td className="text-success">$204.00</td>
							<td className="text-center">
								<button className="btn btn-light btn-sm btn-active-light-primary">
									Download
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="form-check form-check-sm form-check-custom form-check-solid">
									<input
										className="form-check-input"
										type="checkbox"
										value="1"
									/>
								</div>
							</td>
							<td className="ps-9">Feb 09, 2020</td>
							<td className="ps-0">426445943</td>
							<td>Visual Design Illustration</td>
							<td className="text-success">$31.00</td>
							<td className="text-center">
								<button className="btn btn-light btn-sm btn-active-light-primary">
									Download
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="form-check form-check-sm form-check-custom form-check-solid">
									<input
										className="form-check-input"
										type="checkbox"
										value="1"
									/>
								</div>
							</td>
							<td className="ps-9">Nov 01, 2020</td>
							<td className="ps-0">984445943</td>
							<td>Abstract Vusial Pack</td>
							<td className="text-success">$52.00</td>
							<td className="text-center">
								<button className="btn btn-light btn-sm btn-active-light-primary">
									Download
								</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="form-check form-check-sm form-check-custom form-check-solid">
									<input
										className="form-check-input"
										type="checkbox"
										value="1"
									/>
								</div>
							</td>
							<td className="ps-9">Jan 04, 2020</td>
							<td className="ps-0">324442313</td>
							<td>Seller Fee</td>
							<td className="text-danger">$-0.80</td>
							<td className="text-center">
								<button className="btn btn-light btn-sm btn-active-light-primary">
									Download
								</button>
							</td>
						</tr> */}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MainTable;
