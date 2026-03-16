import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import ProductList from "./components/products/ProductList";
import { Route, Routes } from "react-router-dom";
import ProudctDetail from "./components/products/ProudctDetail";
import CategoryPage from "./pages/CategoryPage";

function App() {
	const [cart, setCart] = useState([]);

	return (
		<div>
			<Header cart={cart} setCart={setCart} />
			<Carousel />
			<Routes>
				<Route path="/" element={<ProductList />} />
				<Route
					path="/product/:id"
					element={<ProudctDetail cart={cart} setCart={setCart} />}
				/>
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
