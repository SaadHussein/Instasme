import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const MultiBar = () => {
	const chartRef = useRef(null);

	useLayoutEffect(() => {
		const root = am5.Root.new(chartRef.current);

		root.setThemes([am5themes_Animated.new(root)]);

		const chart = root.container.children.push(
			am5xy.XYChart.new(root, {
				panX: false,
				panY: false,
				wheelX: "panX",
				wheelY: "zoomX",
				layout: root.verticalLayout,
			})
		);

		chart
			.get("colors")
			.set("colors", [am5.color(0x3bc0c3), am5.color(0x716cb0)]);

		const legend = chart.children.push(
			am5.Legend.new(root, {
				centerX: am5.p50,
				x: am5.p50,
				y: am5.percent(95),
			})
		);

		const data = [
			{
				day: "17-06-2024",
				sales: 1736,
				purchases: 2243,
			},
			{
				day: "18-06-2024",
				sales: 1650,
				purchases: 2304,
			},
			{
				day: "19-06-2024",
				sales: 1874.8,
				purchases: 2960,
			},
			{
				day: "20-06-2024",
				sales: 1792.8,
				purchases: 2716,
			},
			{
				day: "21-06-2024",
				sales: 2648,
				purchases: 2640,
			},
			{
				day: "22-06-2024",
				sales: 2320,
				purchases: 2270,
			},
			{
				day: "23-06-2024",
				sales: 1780,
				purchases: 1160,
			},
		];

		const xRenderer = am5xy.AxisRendererX.new(root, {
			cellStartLocation: 0.1,
			cellEndLocation: 0.9,
			minorGridEnabled: true,
		});

		const xAxis = chart.xAxes.push(
			am5xy.CategoryAxis.new(root, {
				categoryField: "day",
				renderer: xRenderer,
				tooltip: am5.Tooltip.new(root, {}),
			})
		);

		xRenderer.grid.template.setAll({
			location: 1,
		});

		xAxis.data.setAll(data);

		const yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
				renderer: am5xy.AxisRendererY.new(root, {
					strokeOpacity: 0.1,
				}),
			})
		);

		function makeSeries(name, fieldName) {
			const series = chart.series.push(
				am5xy.ColumnSeries.new(root, {
					name: name,
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: fieldName,
					categoryXField: "day",
				})
			);

			series.columns.template.setAll({
				tooltipText: "{name}: LE {categoryX} | {valueY}",
				width: am5.percent(90),
				tooltipY: 0,
				strokeOpacity: 0,
			});

			series.data.setAll(data);

			series.appear();

			series.bullets.push(() => {
				return am5.Bullet.new(root, {
					locationY: 0,
					sprite: am5.Label.new(root, {
						text: "{valueY}",
						fill: root.interfaceColors.get("alternativeText"),
						centerY: 0,
						centerX: am5.p50,
						populateText: true,
					}),
				});
			});

			legend.data.push(series);
		}

		makeSeries("Sales", "sales");
		makeSeries("Purchases", "purchases");

		chart.appear(1000, 100);

		return () => {
			root.dispose();
		};
	}, []);

	return (
		<div
			id="chartdiv"
			style={{ width: "100%", height: "350px" }}
			ref={chartRef}
		></div>
	);
};

export default MultiBar;
