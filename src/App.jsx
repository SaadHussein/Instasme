import { Routes, Route } from "react-router-dom";
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

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PagesOutlet />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/sales/pos" element={<Pos />} />
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
					<Route
						path="/accounting/create-expense"
						element={<CreateExpense />}
					/>
					<Route
						path="/accounting/create-deposite"
						element={<CreateDeposite />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
