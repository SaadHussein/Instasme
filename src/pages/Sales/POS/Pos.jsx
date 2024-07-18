import React from "react";
import classes from "../../../styles/global.module.css";
import PosToolbar from "../../../components/PosComponents/PosToolbar";
import PosItems from "../../../components/PosComponents/PosItems/PostItems";
import PosOrder from "../../../components/PosComponents/PosOrder/PosOrder";
import LoadingWrapper from "../../../components/Global/LoadingWrapper/LoadingWrapper";
import PagesNavigationBar from "../../../components/Global/PagesNavigationBar/PagesNavigationBar";
import { BsFiles } from "react-icons/bs";
import { LuFilePlus2 } from "react-icons/lu";
import pageClasses from "./Pos.module.css";
import Toolbar from "../../Accounting/Toolbar";

const SalesPage = [
	{
		title: "Create Sale",
		link: "/sales/create-sale",
		icon: <LuFilePlus2 className="fs-2 me-2" />,
	},
	{
		title: "All Sales",
		link: "/sales/all-sales",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "POS",
		link: "/sales/pos",
		icon: <BsFiles className="fs-2 me-2" />,
	},
	{
		title: "Shipments",
		link: "/sales/shipments",
		icon: <BsFiles className="fs-2 me-2" />,
	},
];

const Pos = () => {
	return (
		<LoadingWrapper>
			<div
				className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
			>
				<div className="d-flex flex-column flex-column-fluid">
					<div
						className={`d-flex align-items-center justify-content-between ${pageClasses.navPages}`}
					>
						<Toolbar title={"POS"} path={["Sales", "POS"]} />
						<PagesNavigationBar pages={SalesPage} />
					</div>
					<PosToolbar />
					<div id="kt_app_content" className="app-content flex-column-fluid">
						<div
							id="kt_app_content_container"
							class="app-container container-fluid"
						>
							<div className="d-flex flex-column flex-xl-row">
								<PosItems />
								<PosOrder />
							</div>
						</div>
					</div>
				</div>
			</div>
		</LoadingWrapper>
	);
};

export default Pos;
