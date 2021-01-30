import React, { useState } from 'react';
import useInput from './hooks/useInput';

export default function App(props) {
	const [items, setItems] = useState([
		{
			item: groceryNewItem,
			brand: groceryNewBrand
			// units: 'Family Size',
			// quantity: 2,
			// isPurchased: true
		}
	]);

	const {
		value: groceryNewItem,
		bind: bindGroceryNewItem,
		reset: resetGroceryNewItem
	} = useInput('');

	const {
		value: groceryNewBrand,
		bind: bindGroceryNewBrand,
		reset: resetGroceryNewBrand
	} = useInput('');

	const addItem = event => {
		event.preventDefault();
		updateGroceryList([...groceryList, groceryNewItem]);
		resetGroceryNewItem();
		resetGroceryNewBrand();
	};

	const [groceryList, updateGroceryList] = useState(null);

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

			<ul id="grocery-list">
				{groceryList?.length
					? groceryList.map((listItem, i) => {
							return (
								<li key={listItem + '_' + i}>{`${i + 1}. ${listItem}`}</li>
							);
					  })
					: ''}
			</ul>

			<form className="task-form" onSubmit={addItem}>
				<label htmlFor="groceryNewItem">
					<span>Item:</span>
					<input type="text" id="groceryNewItem" {...bindGroceryNewItem} />
				</label>
				<label htmlFor="groceryNewBrand">
					<span>Brand:</span>
					<input type="text" id="groceryNewBrand" {...bindGroceryNewBrand} />
				</label>
				<button type="submit">Add Item</button>
			</form>
		</div>
	);
}
