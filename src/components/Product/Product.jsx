import "./Product.scss"

const Product = ({productInfo}) => {
	return (
		<div className="product-bg">
			<div className="product-container">
			    <img
			    	src={productInfo.image}
					alt={productInfo.title}
					className="product-image"
			    />
			  	<div className="product-info">
				  	<div>
					    <small>{productInfo.category}</small>
					    <h1>{productInfo.title}</h1>
					    <h2>${productInfo.price}</h2>
					    <p className="product-description">{productInfo.description}</p>
				  	</div>
				    <div className="product-buttons">
				      <button className="product-add">Add to Cart</button>
				      <button className="product-like"><span>♥</span></button>
				    </div>
			  </div>
			</div>
		</div>
	)
}
export default Product;