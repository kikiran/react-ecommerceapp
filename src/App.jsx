import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import ProductList from "./components/products/ProductList";
import { Route, Routes } from "react-router-dom";
import ProudctDetail from "./components/products/ProudctDetail";
import CategoryPage from "./pages/CategoryPage";

function App() {
	return (
		<div>
			<Header />
			<Carousel />
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route path="/product/:id" element={<ProudctDetail />} />
				<Route
					path="/category/:categoryName"
					element={<CategoryPage />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
