import { BsPieChart } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa6";
import { GiChart } from "react-icons/gi";
import { LuBarChart3 } from "react-icons/lu";

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
	{
		title: "Deposits Report",
		link: "/reports/deposits-report",
		icon: <LuBarChart3 className="fs-2 me-2" />,
	},
];

export { ReportsPage };
