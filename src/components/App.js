import React, { useState } from 'react';

export default function App(props) {
	const [newGrocery, setNewGrocery] = useState({
		item: '',
		brand: '',
		units: '',
		quantity: 0,
		isPurchased: false
	});

	const [groceryList, setGroceryList] = useState([]);

	const addGrocery = event => {
		event.preventDefault();
		setGroceryList([...groceryList, newGrocery]);
		setNewGrocery({
			item: '',
			brand: '',
			units: '',
			quantity: 0,
			isPurchased: false
		});
	};

	const handleChange = event => {
		setNewGrocery({
			...newGrocery,
			[event.target.id]: event.target.value
		});
	};

	return (
		<div>
			<h1>Grocery List</h1>

			<form className="grocery-form" onSubmit={addGrocery}>
				<label htmlFor="item">
					<span>Item:</span>
					<input
						id="item"
						type="text"
						value={newGrocery.item}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="brand">
					<span>Brand:</span>
					<input
						id="brand"
						type="text"
						value={newGrocery.brand}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="units">
					<span>Units:</span>
					<input
						id="units"
						type="text"
						value={newGrocery.units}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="quantity">
					<span>Quantity:</span>
					<input
						id="quantity"
						type="number"
						value={newGrocery.quantity}
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Add Item</button>
			</form>

			<div id="grocery-list">
				{groceryList?.length
					? groceryList.map((item, i) => {
							return (
								<div className="grocery-item">
									<div key={item.item + '_' + i}>Item: {item.item}</div>
									<div key={item.brand + '_' + i}>Brand: {item.brand}</div>
									<div key={item.units + '_' + i}>Units: {item.units}</div>
									<div key={item.quantity + '_' + i}>
										Quantity: {item.quantity}
									</div>
								</div>
							);
					  })
					: ''}
			</div>
		</div>
	);
}
