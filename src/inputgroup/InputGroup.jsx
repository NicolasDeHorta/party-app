import { useState } from 'react';
import { useData } from '../store/storeContext';

export const InputGroup = () => {
	const [name, setName] = useState('');
	const [item, setItem] = useState('');
	const { addFriend, addItem } = useData();

	const handleNameInputChange = (event) => {
		setName(event.target.value);
	};

	const handleAddFriend = () => {
		if (name) {
			addFriend(name);
			setName('');
		}
	};

	const handleItemInputChange = (event) => {
		setItem(event.target.value);
	};

	const handleAddItem = () => {
		if (item) {
			addItem(item);
			setItem('');
		}
	};

	return (
		<div className="inputGroup">
			<div>
				<label htmlFor="name">
					<input
						type="text"
						id="name"
						value={name}
						onChange={handleNameInputChange}
					/>
				</label>
				<button onClick={handleAddFriend}>Add Friend</button>
			</div>
			<div>
				<label htmlFor="item">
					<input
						type="text"
						id="item"
						value={item}
						onChange={handleItemInputChange}
					/>
				</label>
				<button onClick={handleAddItem}>Add Item</button>
			</div>
		</div>
	);
};
