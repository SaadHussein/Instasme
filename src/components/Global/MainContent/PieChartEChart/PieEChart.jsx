import ReactECharts from "echarts-for-react";

const topSellingProductsData = [
	{ name: "Strawberry", value: 2 },
	{ name: "Macbook pro", value: 4 },
	{ name: "sunglasses", value: 4 },
	{ name: "earphones", value: 3 },
	{ name: "Banana", value: 2 },
];

const topCustomersData = [
	{ name: "Fred C. Rasmussen", value: 1 },
	{ name: "walk-in-customer", value: 2 },
	{ name: "Thomas M. Martin", value: 2 },
	{ name: "Beverly B. Huber", value: 1 },
	{ name: "Phyliss J. Polite", value: 1 },
];

const PieEChart = ({ dataFor }) => {
	const option = {
		// title: {
		// 	text: "Referer of a Website",
		// 	subtext: "Fake Data",
		// 	left: "center",
		// },
		textStyle: {
			fontSize: 14,
			fontWeight: 600,
		},
		tooltip: {
			trigger: "item",
			formatter:
				dataFor === "customers" ? "{b}: {c} Sales ({d}%)" : "{b}: {c} Sales",
		},
		// legend: {
		// 	orient: "vertical",
		// 	left: "left",
		// },
		series: [
			{
				name: "Access From",
				type: "pie",
				radius: "50%",
				data:
					dataFor === "customers" ? topCustomersData : topSellingProductsData,
				emphasis: {
					itemStyle: {
						shadowBlur: 10,
						shadowOffsetX: 0,
						shadowColor: "rgba(0, 0, 0, 0.5)",
					},
				},
			},
		],
	};
	return (
		<div style={{ position: "relative", top: "-50px" }}>
			<ReactECharts option={option} style={{ height: 450 }} />
		</div>
	);
};

export default PieEChart;
