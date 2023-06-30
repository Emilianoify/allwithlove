import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import ProductsDetail from "./components/Products/ProductsDetail";

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<ProductsDetail />} />
				<Route path="/services" element={<Services />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
