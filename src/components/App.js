import React, { useState } from 'react';
// import useInput from './hooks/useInput';

export default function App(props) {
	const [newGrocery, setNewGrocery] = useState({
		item: '',
		brand: ''
		// units: 'Family Size',
		// quantity: 2,
		// isPurchased: true
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
		// resetGroceryNewItem();
		// resetGroceryNewBrand();
	};

	const handleChange = event => {
		setNewGrocery({
			...newGrocery,
			[event.target.id]: event.target.value
		});
	};

	// const {
	// 	value: groceryNewItem,
	// 	bind: bindGroceryNewItem,
	// 	reset: resetGroceryNewItem
	// } = useInput('');

	// const {
	// 	value: groceryNewBrand,
	// 	bind: bindGroceryNewBrand,
	// 	reset: resetGroceryNewBrand
	// } = useInput('');

	return (
		<div>
			<h1>Grocery List</h1>
			{/* {items.map(item => {
				return (
					<div key={`${item.item}${item.brand}`}>
						{item.item}-{item.brand}
					</div>
				);
			})} */}

			{/* <ul id="grocery-list">
				{groceryList?.length
					? groceryList.map((listItem, i) => {
							return (
								<li key={listItem + '_' + i}>{`${i + 1}. ${listItem}`}</li>
							);
					  })
					: ''}
			</ul> */}

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
				<button type="submit">Add Item</button>
			</form>
		</div>
	);
}
