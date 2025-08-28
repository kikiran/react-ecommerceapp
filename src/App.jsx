import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import ProductList from "./components/products/ProductList";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<Header />
			<Carousel />
			<ProductList />
			<Footer />
		</div>
	);
}

export default App;
