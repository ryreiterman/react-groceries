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

			{/* <ul>
				{groceryList.map(item => {
					return <li>{item.brand}</li>;
				})}
			</ul> */}

			<ul id="grocery-list">
				{groceryList?.length
					? groceryList.map((item, i) => {
							return (
								<>
									<li key={item.item + '_' + i}>{item.item}</li>
									<li key={item.brand + '_' + i}>{item.brand}</li>
									<li key={item.units + '_' + i}>{item.units}</li>
									<li key={item.quantity + '_' + i}>{item.quantity}</li>
								</>
							);
					  })
					: ''}
			</ul>

			<form className="task-form" onSubmit={addGrocery}>
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
		</div>
	);
}
