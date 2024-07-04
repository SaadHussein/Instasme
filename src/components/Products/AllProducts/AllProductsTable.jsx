import React, { useState } from "react";
import ProductRow from "./ProductRow/ProductRow";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import classes from "./AllProductsTable.module.css";

const tableProducts = [
	{
		image: "/brandmarks.png",
		type: "Fruit",
		name: "Banana",
		code: "12345678",
		brand: "Fruits Brand",
		category: "Fruits",
		cost: 70,
		price: 70,
		unit: 20,
		quantity: 87,
	},
	{
		image: "/brandmarks.png",
		type: "Vegitables",
		name: "Tomato",
		code: "23456788",
		brand: "Vegitables Brand",
		category: "Vegitables",
		cost: 80,
		price: 80,
		unit: 25,
		quantity: 90,
	},
];

const AllProductsTable = () => {
	const [products, setProducts] = useState([...tableProducts]);
	const [sortItem, setSortItem] = useState("");
	const [order, setOrder] = useState("no-order");

	const sortUponItem = () => {
		if (order === "no-order") {
			setOrder("ascending");
			setProducts(() => {
				products.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return -1;
					}
					if (a[sortItem] > b[sortItem]) {
						return 1;
					}

					return 0;
				});

				return [...products];
			});
		} else if (order === "ascending") {
			setOrder("descending");
			setProducts(() => {
				products.sort((a, b) => {
					if (a[sortItem] < b[sortItem]) {
						return 1;
					}
					if (a[sortItem] > b[sortItem]) {
						return -1;
					}
					return 0;
				});

				return [...products];
			});
		} else if (order === "descending") {
			setOrder("no-order");
			setProducts([...tableProducts]);
		}
	};
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

							<th className={`min-w-75px text-start`}>Image</th>
							<th
								className={`min-w-75px text-start `}
								onClick={() => {
									setSortItem("type");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between mt-1`}
								>
									Type{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "type" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "type" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className={`min-w-100px text-start `}
								onClick={() => {
									setSortItem("name");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Name{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "name" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "name" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className={`min-w-75px text-start `}
								onClick={() => {
									setSortItem("code");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Code{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "code" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "code" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className="text-start min-w-70px "
								onClick={() => {
									setSortItem("brand");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Brand{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "brand" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "brand" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className="text-start min-w-70px "
								onClick={() => {
									setSortItem("category");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Category{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "category" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "category" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className="text-start min-w-70px "
								onClick={() => {
									setSortItem("cost");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Cost{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "cost" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "cost" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className="text-start min-w-70px "
								onClick={() => {
									setSortItem("price");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Price{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "price" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "price" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className="text-start min-w-70px "
								onClick={() => {
									setSortItem("unit");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Unit{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "unit" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "unit" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th
								className="text-start min-w-70px "
								onClick={() => {
									setSortItem("quantity");
									sortUponItem();
								}}
							>
								<p
									className={`${classes.tableHeader} d-flex align-items-center justify-content-between`}
								>
									Quantity{" "}
									<div
										className={`d-flex flex-column align-items-center justify-content-center ${classes.marginIcon}`}
									>
										<MdArrowDropUp
											size={18}
											color={`${
												sortItem === "quantity" && order === "ascending"
													? "#1b84ff"
													: ""
											}`}
										/>
										<MdArrowDropDown
											size={18}
											color={`${
												sortItem === "quantity" && order === "descending"
													? "#1b84ff"
													: ""
											}`}
										/>
									</div>
								</p>
							</th>
							<th className="text-start min-w-110px">Actions</th>
						</tr>
					</thead>
					<tbody className="fs-6 fw-semibold text-gray-600">
						{products.map((item) => (
							<ProductRow
								image={item.image}
								name={item.name}
								type={item.type}
								code={item.code}
								brand={item.brand}
								category={item.category}
								cost={item.cost}
								price={item.price}
								unit={item.unit}
								quantity={item.quantity}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllProductsTable;
