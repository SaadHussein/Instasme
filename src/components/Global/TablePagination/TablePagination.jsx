import React from "react";

const TablePagination = () => {
	return (
		<div className="dt-paging paging_simple_numbers">
			<ul className="pagination">
				<li className="dt-paging-button page-item disabled">
					<div className="page-link previous">
						<i className="previous"></i>
					</div>
				</li>
				<li className="dt-paging-button page-item active">
					<div className="page-link">1</div>
				</li>
				<li className="dt-paging-button page-item">
					<div className="page-link">2</div>
				</li>
				<li className="dt-paging-button page-item">
					<div className="page-link">3</div>
				</li>
				<li className="dt-paging-button page-item">
					<div className="page-link">4</div>
				</li>
				<li className="dt-paging-button page-item">
					<div className="page-link">5</div>
				</li>
				<li className="dt-paging-button page-item">
					<div className="page-link next">
						<i className="next"></i>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default TablePagination;
