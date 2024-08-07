import { CiCreditCard2 } from "react-icons/ci";
import { FaStore } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { IoMdAlarm } from "react-icons/io";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdAccessAlarm, MdOutlineHolidayVillage } from "react-icons/md";
import { PiBagSimpleLight } from "react-icons/pi";
import { RxColorWheel } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";

const HRMPage = [
	{
		title: "Company",
		link: "/hrm/company",
		icon: <PiBagSimpleLight className="fs-2 me-2" />,
	},
	{
		title: "Departments",
		link: "/hrm/departments",
		icon: <FaStore className="fs-2 me-2" />,
	},
	{
		title: "Designation",
		link: "/hrm/designation",
		icon: <RxColorWheel className="fs-2 me-2" />,
	},
	{
		title: "Office Shift",
		link: "/hrm/office-shift",
		icon: <IoMdAlarm className="fs-2 me-2" />,
	},
	{
		title: "Payroll",
		link: "/hrm/payroll",
		icon: <LiaMoneyCheckAltSolid className="fs-2 me-2" />,
	},
	{
		title: "Holidays",
		link: "/hrm/holidays",
		icon: <MdOutlineHolidayVillage className="fs-2 me-2" />,
	},
	{
		title: "Employees",
		link: "/hrm/employees",
		icon: <GrUserWorker className="fs-2 me-2" />,
	},
	{
		title: "Attendances",
		link: "/hrm/attendances",
		icon: <MdAccessAlarm className="fs-2 me-2" />,
	},
	{
		title: "Leave Request",
		link: "/hrm/leave-request",
		icon: <SlCalender className="fs-2 me-2" />,
	},
	{
		title: "Leave Type",
		link: "/hrm/leave-type",
		icon: <CiCreditCard2 className="fs-2 me-2" />,
	},
];

export { HRMPage };
