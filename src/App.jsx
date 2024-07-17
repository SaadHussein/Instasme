import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/style.bundle.css";
import "./styles/datatables.bundle.css";
import PagesOutlet from "./pages/Outlet/Outlet";
import MainPage from "./pages/MainPage/MainPage";
import Pos from "./pages/Sales/POS/Pos";
import CreateExpense from "./pages/Accounting/CreateExpense/CreateExpense";
import CreateDeposite from "./pages/Accounting/CreateDeposite/CreateDeposite";
import CreateAdjustment from "./pages/Adjustment/CreateAdjustment/CreateAdjustment";
import CreateQuotations from "./pages/Quotations/CreateQuotations/CreateQuotations";
import CreatePurchases from "./pages/Purchases/CreatePurchases/CreatePurchases";
import CreateSale from "./pages/Sales/CreateSale/CreateSale";
import PaymentGateway from "./pages/Settings/PaymentGateway/PaymentGateway";
import PosSettings from "./pages/Settings/PosSettings/PosSettings";
import MailSettings from "./pages/Settings/MailSettings/MailSettings";
import CreateTransfer from "./pages/Transfer/CreateTransfer/CreateTransfer";
import CreateProduct from "./pages/Products/CreateProduct/CreateProduct";
import PrintLabels from "./pages/Products/PrintLabels/PrintLabels";
import ModuleSettings from "./pages/Settings/ModuleSettings/ModuleSettings";
import AllSales from "./pages/Sales/AllSales/AllSales";
import AllPurchases from "./pages/Purchases/AllPurchases/AllPurchases";
import SalesReturn from "./pages/SalesReturn/SalesReturn";
import PurchasesReturn from "./pages/PurchasesReturn/PurchasesReturn";
import { useSelector } from "react-redux";
import AllProducts from "./pages/Products/AllProducts/AllProducts";
import AllAdjustment from "./pages/Adjustment/AllAdjustment/AllAdjustment";
import ListDeposite from "./pages/Accounting/ListDeposite/ListDeposite";
import AllQuotations from "./pages/Quotations/AllQuotations/AllQuotations";
import SalesReturns from "./pages/Returns/SalesReturns/SalesReturns";
import PurchasesReturns from "./pages/Returns/PurchasesReturns/PurchasesReturns";
import CountStock from "./pages/Products/CountStock/CountStock";
import Category from "./pages/Products/Category/Category";
import Brand from "./pages/Products/Brand/Brand";
import Unit from "./pages/Products/Unit/Unit";
import Company from "./pages/HRM/Company/Company";
import Departments from "./pages/HRM/Departments/Departments";
import Designation from "./pages/HRM/Designation/Designation";
import OfficeShift from "./pages/HRM/OfficeShift/OfficeShift";
import ListAccounts from "./pages/Accounting/ListAccounts/ListAccounts";
import TransferMoney from "./pages/Accounting/TransferMoney/TransferMoney";
import ExpenseCategory from "./pages/Accounting/ExpenseCategory/ExpenseCategory";
import DepositeCategory from "./pages/Accounting/DepositeCategory/DepositeCategory";
import AllExpenses from "./pages/Accounting/AllExpenses/AllExpenses";
import AllTransfers from "./pages/Transfer/AllTransfers/AllTransfers";
import Customers from "./pages/People/Customers/Customers";
import Suppliers from "./pages/People/Suppliers/Suppliers";
import Users from "./pages/People/Users/Users";
import Shipments from "./pages/Sales/Shipments/Shipments";
import Payroll from "./pages/HRM/Payroll/Payroll";
import Holidays from "./pages/HRM/Holidays/Holidays";
import Employees from "./pages/HRM/Employees/Employees";
import Attendances from "./pages/HRM/Attendances/Attendances";
import LeaveRequest from "./pages/HRM/LeaveRequest/LeaveRequest";
import LeaveType from "./pages/HRM/LeaveType/LeaveType";
import GroupPermissions from "./pages/Settings/GroupPermissions/GroupPermissions";
import Warehouse from "./pages/Settings/Warehouse/Warehouse";
import Currency from "./pages/Settings/Currency/Currency";
import Backup from "./pages/Settings/Backup/Backup";
import UsersReports from "./pages/Reports/UsersReports/UsersReports";
import BestCustomers from "./pages/Reports/BestCustomers/BestCustomers";
import TopSellingProducts from "./pages/Reports/TopSellingProducts/TopSellingProducts";
import ProductReport from "./pages/Reports/ProductReport/ProductReport";
import ExpenseReport from "./pages/Reports/ExpenseReport/ExpenseReport";
import StockReport from "./pages/Reports/StockReport/StockReport";
import DepositsReport from "./pages/Reports/DepositsReport/DepositsReport";

function App() {
	const isFullScreen = useSelector((state) => state.global.isFullScreen);

	const toggleFull = () => {
		const isFullScreen = document.fullscreenElement;
		const web = document.getElementById("our-website");
		console.log(web);

		if (isFullScreen) {
			document.exitFullscreen();
		} else {
			web.requestFullscreen();
		}
	};

	useEffect(() => {
		toggleFull();
	}, [isFullScreen]);

	return (
		<main>
			<Routes>
				<Route path="/" element={<PagesOutlet />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/products/create-product" element={<CreateProduct />} />
					<Route path="/products/print-labels" element={<PrintLabels />} />
					<Route path="/products/all-products" element={<AllProducts />} />
					<Route path="/products/count-stock" element={<CountStock />} />
					<Route path="/products/category" element={<Category />} />
					<Route path="/products/brand" element={<Brand />} />
					<Route path="/products/unit" element={<Unit />} />
					<Route path="/sales/pos" element={<Pos />} />
					<Route path="/sales-return" element={<SalesReturn />} />
					<Route path="/purchases-return" element={<PurchasesReturn />} />
					<Route path="/sales/all-sales" element={<AllSales />} />
					<Route path="/sales/create-sale" element={<CreateSale />} />
					<Route path="/sales/shipments" element={<Shipments />} />
					<Route
						path="/quotations/create-quotation"
						element={<CreateQuotations />}
					/>
					<Route
						path="/quotations/all-quotations"
						element={<AllQuotations />}
					/>
					<Route
						path="/adjustment/create-adjustment"
						element={<CreateAdjustment />}
					/>
					<Route
						path="/adjustment/all-adjustments"
						element={<AllAdjustment />}
					/>
					<Route
						path="/purchases/create-purchase"
						element={<CreatePurchases />}
					/>
					<Route path="/purchases/all-purchases" element={<AllPurchases />} />
					<Route
						path="/accounting/create-expense"
						element={<CreateExpense />}
					/>
					<Route
						path="/accounting/create-deposite"
						element={<CreateDeposite />}
					/>
					<Route path="/accounting/list-deposite" element={<ListDeposite />} />
					<Route path="/accounting/list-accounts" element={<ListAccounts />} />
					<Route path="/accounting/all-expenses" element={<AllExpenses />} />
					<Route
						path="/accounting/transfer-money"
						element={<TransferMoney />}
					/>
					<Route
						path="/accounting/expense-category"
						element={<ExpenseCategory />}
					/>
					<Route
						path="/accounting/deposite-category"
						element={<DepositeCategory />}
					/>
					<Route
						path="/settings/payment-gateway"
						element={<PaymentGateway />}
					/>
					<Route path="/settings/pos-settings" element={<PosSettings />} />
					<Route path="/settings/mail-settings" element={<MailSettings />} />
					<Route
						path="/settings/module-settings"
						element={<ModuleSettings />}
					/>
					<Route
						path="/transfer/create-transfer"
						element={<CreateTransfer />}
					/>
					<Route path="/transfer/all-transfers" element={<AllTransfers />} />
					<Route path="/returns/sales-return" element={<SalesReturns />} />
					<Route
						path="/returns/purchases-return"
						element={<PurchasesReturns />}
					/>
					<Route path="/hrm/company" element={<Company />} />
					<Route path="/hrm/departments" element={<Departments />} />
					<Route path="/hrm/designation" element={<Designation />} />
					<Route path="/hrm/office-shift" element={<OfficeShift />} />
					<Route path="/hrm/payroll" element={<Payroll />} />
					<Route path="/hrm/holidays" element={<Holidays />} />
					<Route path="/hrm/employees" element={<Employees />} />
					<Route path="/hrm/attendances" element={<Attendances />} />
					<Route path="/hrm/leave-request" element={<LeaveRequest />} />
					<Route path="/hrm/leave-type" element={<LeaveType />} />
					<Route path="/people/customers" element={<Customers />} />
					<Route path="/people/suppliers" element={<Suppliers />} />
					<Route path="/people/users" element={<Users />} />
					<Route
						path="/settings/group-permissions"
						element={<GroupPermissions />}
					/>
					<Route path="/settings/warehouse" element={<Warehouse />} />
					<Route path="/settings/currency" element={<Currency />} />
					<Route path="/settings/backup" element={<Backup />} />
					<Route path="/reports/users-reports" element={<UsersReports />} />
					<Route path="/reports/best-customers" element={<BestCustomers />} />
					<Route
						path="/reports/tob-selling-products"
						element={<TopSellingProducts />}
					/>
					<Route path="/reports/product-report" element={<ProductReport />} />
					<Route path="/reports/expense-report" element={<ExpenseReport />} />
					<Route path="/reports/stock-report" element={<StockReport />} />
					<Route path="/reports/deposits-report" element={<DepositsReport />} />
				</Route>
			</Routes>
		</main>
	);
}

export default App;
