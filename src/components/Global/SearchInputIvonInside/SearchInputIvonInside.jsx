import React from "react";

const SearchInputIvonInside = () => {
	return (
		<div className="d-flex align-items-center position-relative my-1">
			<i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
			<input
				type="text"
				data-kt-ecommerce-order-filter="search"
				className="form-control form-control-solid w-250ppx ps-12"
				placeholder="Search Order"
			/>
		</div>
	);
};

export default SearchInputIvonInside;
