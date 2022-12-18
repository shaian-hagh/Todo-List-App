import { Link } from "react-router-dom"
import "./Card.css"

const Card = ({ product, moreInfo }) => {

	const checkRating = () => {
		if(product.rating.rate > 3.5) {
			return("green-color")
		} else if(product.rating.rate > 2.5) {
			return("yellow-color")
		} else {
			return("red-color")
		}
	}

	return (
		<div className="card">

			<img
				src={product.image}
				alt={product.title}
				className="card-image"
			/>

			<div className="card-info">

				<div>
					<small>{product.category}</small>
					<h5>{product.title}</h5>
				</div>

				<div>
					<h3>${product.price}</h3>
					<small className={checkRating()}>
						{product.rating.rate} / {product.rating.count}
					</small>
				</div>
				
				<Link
					onClick={() => {
						moreInfo(product)
					}}
					to="ProductInfo"
					className="card-button"
				>
				More Info
				</Link>
			</div>
		</div>
	)

}
export default Card;