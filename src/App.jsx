import { Routes, Route } from "react-router-dom";
import "./styles/style.bundle.css";
import "./styles/datatables.bundle.css";
import PagesOutlet from "./pages/Outlet/Outlet";
import MainPage from "./pages/MainPage/MainPage";
import Pos from "./pages/POS/Pos";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<PagesOutlet />}>
					<Route index={true} element={<MainPage />} />
					<Route path="/pos" element={<Pos />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
