import { useState, useEffect } from "react"
import Header from "../Header/Header"
import Card from "../Card/Card"
import "./Home.scss"


const Home = ({getInfo}) => {
	const [data, setData] = useState([]);
	const [category, setCategory] = useState("")

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${category}`)
			.then(res => res.json())
			.then(res => setData(res))
	}, [category]);

	const getCategory = event => {
		if(event === "all") {
			setCategory("")
		} else {
			setCategory(`category/${event}`)
		}
	}
	
	const moreInfo = event => {
		getInfo(event)
	}

	return (
		<>
			<Header getCategory={getCategory} />
			<div className="card-container">
				{
					data.map((product) => {
						return(
							<Card product={product} moreInfo={moreInfo} key={product.id} />
						)
					})
				}
			</div>
		</>
	)
}

export default Home;