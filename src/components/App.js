import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Product from "./Product/Product"
import "./App.css"

const App = () => {
	const [productInfo, setProductInfo] = useState({})
	
	const getInfo = event => {
		setProductInfo(event)
	}

	return(
		<>
			<BrowserRouter>

				<Routes>

					<Route
						path="/"
						element={<Home getInfo={getInfo} />}
					>
					</Route>

					<Route
						path="ProductInfo"
						element={<Product productInfo={productInfo} />}
					>
					</Route>

				</Routes>

			</BrowserRouter>
		</>
	)
}

export default App;