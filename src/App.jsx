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

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PagesOutlet />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/products/create-product" element={<CreateProduct />} />
					<Route path="/products/print-labels" element={<PrintLabels />} />
					<Route path="/sales/pos" element={<Pos />} />
					<Route path="/sales-return" element={<SalesReturn />} />
					<Route path="/purchases-return" element={<PurchasesReturn />} />
					<Route path="/sales/all-sales" element={<AllSales />} />
					<Route path="/sales/create-sale" element={<CreateSale />} />
					<Route
						path="/quotations/create-quotation"
						element={<CreateQuotations />}
					/>
					<Route
						path="/adjustment/create-adjustment"
						element={<CreateAdjustment />}
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
				</Route>
			</Routes>
		</>
	);
}

export default App;
