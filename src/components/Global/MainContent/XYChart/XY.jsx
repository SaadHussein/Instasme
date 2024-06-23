import React, { useEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const XY = () => {
	const chartDiv = useRef(null);

	useEffect(() => {
		// Create root element
		const root = am5.Root.new(chartDiv.current);

		// Set themes
		root.setThemes([am5themes_Animated.new(root)]);

		// Create chart
		const chart = root.container.children.push(
			am5xy.XYChart.new(root, {
				panX: true,
				panY: true,
				wheelX: "panX",
				wheelY: "zoomX",
				layout: root.verticalLayout,
				pinchZoomX: true,
			})
		);

		// The data
		const data = [
			{ day: "17-06-2024", PaymentSent: 640, PaymentReceived: 0 },
			{ day: "18-06-2024", PaymentSent: 2270, PaymentReceived: 0 },
			{ day: "19-06-2024", PaymentSent: 1000, PaymentReceived: 1736 },
			{ day: "20-06-2024", PaymentSent: 3066, PaymentReceived: 1000 },
			{ day: "21-06-2024", PaymentSent: 2000, PaymentReceived: 1792.8 },
			{ day: "22-06-2024", PaymentSent: 960, PaymentReceived: 2000 },
			{ day: "23-06-2024", PaymentSent: 1888, PaymentReceived: 1780 },
		];

		// Create axes
		const xRenderer = am5xy.AxisRendererX.new(root, {
			minorGridEnabled: true,
		});
		xRenderer.grid.template.set("location", 0.5);
		xRenderer.labels.template.setAll({
			location: 0.5,
			multiLocation: 0.5,
		});

		const xAxis = chart.xAxes.push(
			am5xy.CategoryAxis.new(root, {
				categoryField: "day",
				renderer: xRenderer,
				tooltip: am5.Tooltip.new(root, {}),
				snapTooltip: true,
			})
		);

		xAxis.data.setAll(data);

		const yAxis = chart.yAxes.push(
			am5xy.ValueAxis.new(root, {
				maxPrecision: 0,
				renderer: am5xy.AxisRendererY.new(root, {
					inversed: true,
				}),
			})
		);

		// Add cursor
		const cursor = chart.set(
			"cursor",
			am5xy.XYCursor.new(root, {
				alwaysShow: true,
				xAxis: xAxis,
				positionX: 1,
			})
		);

		cursor.lineY.set("visible", false);
		cursor.lineX.set("focusable", true);

		// Add series
		const createSeries = (name, field) => {
			const series = chart.series.push(
				am5xy.LineSeries.new(root, {
					name: name,
					xAxis: xAxis,
					yAxis: yAxis,
					valueYField: field,
					categoryXField: "day",
					tooltip: am5.Tooltip.new(root, {
						pointerOrientation: "horizontal",
						labelText: "[bold]{name}[/]\n{categoryX}: {valueY}",
					}),
				})
			);

			series.bullets.push(() =>
				am5.Bullet.new(root, {
					sprite: am5.Circle.new(root, {
						radius: 5,
						fill: series.get("fill"),
					}),
				})
			);

			series.set("setStateOnChildren", true);
			series.states.create("hover", {});
			series.mainContainer.set("setStateOnChildren", true);
			series.mainContainer.states.create("hover", {});
			series.strokes.template.states.create("hover", {
				strokeWidth: 4,
			});

			series.data.setAll(data);
			series.appear(1000);
		};

		// createSeries("PaymentSent", "Pnt Received");
		createSeries("Payment Sent", "PaymentSent");
		createSeries("Payment Received", "PaymentReceived");

		// Add scrollbar
		chart.set(
			"scrollbarX",
			am5.Scrollbar.new(root, {
				orientation: "horizontal",
				marginBottom: 20,
			})
		);

		const legend = chart.children.push(
			am5.Legend.new(root, {
				centerX: am5.p50,
				x: am5.p50,
			})
		);

		legend.itemContainers.template.states.create("hover", {});

		legend.itemContainers.template.events.on("pointerover", (e) => {
			e.target.dataItem.dataContext.hover();
		});
		legend.itemContainers.template.events.on("pointerout", (e) => {
			e.target.dataItem.dataContext.unhover();
		});

		legend.data.setAll(chart.series.values);

		chart.plotContainer.events.on("pointerout", () => {
			cursor.set("positionX", 1);
		});

		chart.plotContainer.events.on("pointerover", () => {
			cursor.set("positionX", undefined);
		});

		chart.appear(1000, 100);

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

export default XY;
