import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdKey, MdStorefront } from "react-icons/md";

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
];

export { SettingsPage };
