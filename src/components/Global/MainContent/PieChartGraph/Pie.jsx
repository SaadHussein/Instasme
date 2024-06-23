import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const topSellingProductsData = [
	{ category: "Strawberry", value: 2 },
	{ category: "Macbook pro", value: 4 },
	{ category: "sunglasses", value: 4 },
	{ category: "earphones", value: 3 },
	{ category: "Banana", value: 2 },
];

const topCustomersData = [
	{ category: "Fred C. Rasmussen", value: 1 },
	{ category: "walk-in-customer", value: 2 },
	{ category: "Thomas M. Martin", value: 2 },
	{ category: "Beverly B. Huber", value: 1 },
	{ category: "Phyliss J. Polite", value: 1 },
];

const Pie = ({ dataFor }) => {
	const chartDiv = useRef(null);

	useEffect(() => {
		// Create root element
		let root = am5.Root.new(chartDiv.current);

		// Set themes
		root.setThemes([am5themes_Animated.new(root)]);

		// Create chart
		let chart = root.container.children.push(
			am5percent.PieChart.new(root, {
				endAngle: 270,
			})
		);

		// Create series
		let series = chart.series.push(
			am5percent.PieSeries.new(root, {
				valueField: "value",
				categoryField: "category",
				endAngle: 270,
			})
		);

		series.states.create("hidden", {
			endAngle: -90,
		});

		// Set data
		series.data.setAll(
			dataFor === "customers" ? topCustomersData : topSellingProductsData
		);

		series.appear(1000, 100);

		return () => {
			root.dispose();
		};
	}, []);

	return (
		<div
			id="chartdiv"
			ref={chartDiv}
			style={{ width: "100%", height: "350px" }}
		></div>
	);
};

export default Pie;
