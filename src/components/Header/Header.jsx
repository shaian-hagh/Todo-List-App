import "./Header.css"
const Header = ({getCategory}) => {

	const changeCategory = event => {
		getCategory(event.target.value)
	}

	return(
		<header className="header">
			<h1 className="header-title">Shopping Store</h1>
			<div className="header-category">
				<p>Categories:</p>
				<select
					onChange={changeCategory}
				>
					<option value="all">All</option>
					<option value="electronics">Electronics</option>
					<option value="jewelery">Jewelery</option>
					<option value="men's clothing">Men's Clothing</option>
					<option value="women's clothing">Women's Clothing</option>
				</select>
			</div>
		</header>
	)
}

export default Header;