import { useState } from 'react';
import { useData } from '../store/storeContext';

import './inputGroup.scss';

export const InputGroup = () => {
	const [name, setName] = useState('');
	const [itemName, setItemName] = useState('');
	const [itemCost, setItemCost] = useState('');
	const { friends, items, addFriend, addItem } = useData();

	const handleNameInputChange = (event) => {
		setName(event.target.value);
	};

	const handleItemInputChange = (event) => {
		setItemName(event.target.value);
	};

	const handleItemCostChange = (event) => {
		setItemCost(event.target.value);
	};

	const handleAddFriend = () => {
		if (
			name &&
			friends.filter((friend) => friend.name === name).length === 0
		) {
			addFriend(name);
			setName('');
		}
	};

	const handleAddItem = () => {
		if (
			itemName &&
			itemCost > 0 &&
			items.filter((item) => item.name === itemName).length === 0
		) {
			addItem(itemName, itemCost);
			setItemName('');
			setItemCost('');
		}
	};

	return (
		<div className="inputGroup">
			<div>
				<label htmlFor="name">
					<input
						className="nameInput"
						type="text"
						id="name"
						value={name}
						onChange={handleNameInputChange}
						placeholder="Name..."
						autoComplete="off"
					/>
				</label>
				<div className="btn" onClick={handleAddFriend}>
					Add Friend
				</div>
			</div>
			<div>
				<label htmlFor="item">
					<input
						type="text"
						id="item"
						value={itemName}
						onChange={handleItemInputChange}
						placeholder="Item..."
						autoComplete="off"
					/>
					<input
						type="number"
						id="item"
						value={itemCost}
						onChange={handleItemCostChange}
						placeholder="Cost..."
						autoComplete="off"
					/>
				</label>
				<div className="btn" onClick={handleAddItem}>
					Add Item
				</div>
			</div>
		</div>
	);
};
