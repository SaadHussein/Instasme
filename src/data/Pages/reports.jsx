import { BsPieChart } from "react-icons/bs";
import { GiChart } from "react-icons/gi";

const ReportsPage = [
	{
		title: "Users Reports",
		link: "/reports/users-reports",
		icon: <BsPieChart className="fs-2 me-2" />,
	},
	{
		title: "Best Customers",
		link: "/reports/best-customers",
		icon: <BsPieChart className="fs-2 me-2" />,
	},
	{
		title: "Top Selling Products",
		link: "/reports/tob-selling-products",
		icon: <BsPieChart className="fs-2 me-2" />,
	},
	{
		title: "Product Report",
		link: "/reports/product-report",
		icon: <BsPieChart className="fs-2 me-2" />,
	},
	{
		title: "Expense Report",
		link: "/reports/expense-report",
		icon: <GiChart className="fs-2 me-2" />,
	},
	{
		title: "Stock Report",
		link: "/reports/stock-report",
		icon: <BsPieChart className="fs-2 me-2" />,
	},
];

export { ReportsPage };
