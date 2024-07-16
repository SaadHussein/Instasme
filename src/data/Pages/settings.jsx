import { CiDollar } from "react-icons/ci";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdKey, MdOutlineBackup, MdStorefront } from "react-icons/md";

const SettingsPage = [
	{
		title: "Payment Gateway",
		link: "/settings/payment-gateway",
		icon: <LiaMoneyCheckAltSolid className="fs-2 me-2" />,
	},
	{
		title: "POS Settings",
		link: "/settings/pos-settings",
		icon: <MdKey className="fs-2 me-2" />,
	},
	{
		title: "Mail Settings",
		link: "/settings/mail-settings",
		icon: <MdKey className="fs-2 me-2" />,
	},
	{
		title: "Module Settings",
		link: "/settings/group-settings",
		icon: <MdKey className="fs-2 me-2" />,
	},
	{
		title: "Group Permissions",
		link: "/settings/group-permissions",
		icon: <MdKey className="fs-2 me-2" />,
	},
	{
		title: "Warehouse",
		link: "/settings/warehouse",
		icon: <MdStorefront className="fs-2 me-2" />,
	},
	{
		title: "Currency",
		link: "/settings/currency",
		icon: <CiDollar className="fs-2 me-2" />,
	},
	{
		title: "Backup",
		link: "/settings/backup",
		icon: <MdOutlineBackup className="fs-2 me-2" />,
	},
];

export { SettingsPage };
