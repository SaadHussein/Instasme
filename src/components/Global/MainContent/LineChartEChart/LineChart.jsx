import React from "react";
import ReactECharts from "echarts-for-react";
import "echarts/i18n/langFR";
const LineChart = () => {
	const option = {
		// title: {
		// 	text: "Stacked Line",
		// },
		textStyle: {
			fontSize: 13,
			fontWeight: 600,
		},
		tooltip: {
			trigger: "axis",
		},
		legend: {
			left: "right",
			data: ["Payment Sent", "Payment Received"],
		},
		grid: {
			left: "3%",
			right: "4%",
			bottom: "3%",
			containLabel: true,
		},
		// toolbox: {
		// 	feature: {
		// 		saveAsImage: {},
		// 	},
		// },
		xAxis: {
			type: "category",
			boundaryGap: false,
			axisLabel: {
				fontSize: 13,
			},
			data: [
				"17-06-2024",
				"18-06-2024",
				"19-06-2024",
				"20-06-2024",
				"21-06-2024",
				"22-06-2024",
				"23-06-2024",
			],
		},
		yAxis: {
			type: "value",
			axisLabel: {
				fontSize: 13,
			},
		},
		series: [
			{
				name: "Payment Sent",
				type: "line",
				data: [640, 2270, 1000, 3066, 2000, 960, 1888],
			},
			{
				name: "Payment Received",
				type: "line",
				data: [0, 0, 1736, 1000, 1792.8, 2000, 1780],
			},
		],
	};
	return (
		<ReactECharts
			option={option}
			style={{ height: 400 }}
			opts={{ locale: "FR" }}
		/>
	);
};
export default LineChart;
