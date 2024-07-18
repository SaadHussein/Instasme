import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../../components/Global/Header/MainHeader";
import LeftSidebar from "../../components/Global/LeftSidebar/LeftSidebar";
import RightAside from "../../components/Global/RightAside/RightAside";
import classes from "../../styles/global.module.css";
import Footer from "../../components/Global/Footer/Footer";
import privateClasses from "./Outlet.module.css";
import { ScaleLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { useWindowWidth } from "@react-hook/window-size";
import { setIsLeftSidebarOpen } from "../../redux/globalSlice";

const PagesOutlet = () => {
	const isLeftSidebarOpen = useSelector(
		(state) => state.global.isLeftSidebarOpen
	);
	const dispatch = useDispatch();
	const width = useWindowWidth();
	const [isLoad, setIsLoad] = useState(true);

	useEffect(() => {
		const onPageLoad = () => {
			console.log("Page loaded!");
			setIsLoad(false);
		};

		if (document.readyState === "complete") {
			onPageLoad();
		} else {
			window.addEventListener("load", onPageLoad, false);
			return () => window.removeEventListener("load", onPageLoad);
		}
	}, []);

	return (
		<>
			<div
				className={`${
					isLoad ? privateClasses.loaderOn : privateClasses.loaderOff
				}`}
			>
				<img
					src="/brandmarks.png"
					alt="Loader-Logo"
					className={`${privateClasses.logo}`}
				/>
				<ScaleLoader color="#1B84FF" />
			</div>
			<div>
				<MainHeader />
				<div
					className={`app-wrapper flex-column flex-row-fluid ${
						classes.globalStyle
					} ${isLeftSidebarOpen ? "" : privateClasses.leftSidebarClose}`}
					id="kt_app_wrapper"
				>
					<LeftSidebar />
					<div className={`${privateClasses.outletMarginTop}`}>
						<Outlet />
					</div>
					<RightAside />
					<Footer />
				</div>
			</div>
			{isLeftSidebarOpen && width <= 992 && (
				<div
					style={{ zIndex: 105 }}
					className="drawer-overlay"
					onClick={() => {
						dispatch(setIsLeftSidebarOpen({ value: !isLeftSidebarOpen }));
					}}
				></div>
			)}
		</>
	);
};

export default PagesOutlet;
