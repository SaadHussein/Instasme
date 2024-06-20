import React from "react";

const OrderPriceDetails = () => {
	return (
		<div className="d-flex flex-stack bg-success rounded-3 p-6 mb-11">
			<div className="fs-6 fw-bold text-white">
				<span className="d-block lh-1 mb-2">Subtotal</span>
				<span className="d-block mb-2">Discounts</span>
				<span className="d-block mb-9">Tax(12%)</span>
				<span className="d-block fs-2qx lh-1">Total</span>
			</div>
			<div className="fs-6 fw-bold text-white text-end">
				<span className="d-block lh-1 mb-2" data-kt-pos-element="total">
					$100.50
				</span>
				<span className="d-block mb-2" data-kt-pos-element="discount">
					-$8.00
				</span>
				<span className="d-block mb-9" data-kt-pos-element="tax">
					$11.20
				</span>
				<span className="d-block fs-2qx lh-1" data-kt-pos-element="grant-total">
					$93.46
				</span>
			</div>
		</div>
	);
};

export default OrderPriceDetails;
