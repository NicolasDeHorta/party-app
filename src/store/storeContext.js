import { createContext, useState, useContext } from 'react';

//creating a new context
const DataContext = createContext();

export const useData = () => {
	//hook to make the usage easier
	return useContext(DataContext);
};

const friendsInitialValue = [
	// {
	// 	name: 'Nico',
	// 	items: [],
	// },
	// {
	// 	name: 'Nacho',
	// 	items: [],
	// },
	// {
	// 	name: 'Rodri',
	// 	items: [],
	// },
];

const itemsInitialValue = [
	// {
	// 	name: 'picada',
	// 	cost: 320,
	// },
	// {
	// 	name: 'bebidas',
	// 	cost: 240,
	// },
	// {
	// 	name: 'pizzas',
	// 	cost: 600,
	// },
];

//Defining the wrapper
export const DataProvider = ({ children }) => {
	const [friends, setFriends] = useState(friendsInitialValue);
	const [items, setItems] = useState(itemsInitialValue);

	const addFriend = (newFriend) => {
		setFriends([...friends, { name: newFriend, items: [] }]);
	};

	const addItem = (newItem, itemCost) => {
		setItems([...items, { name: newItem, cost: parseFloat(itemCost) }]);
	};

	const editFriend = (friend, item) => {
		const tempFriends = friends;

		tempFriends.map((currentFriend) => {
			if (currentFriend === friend) {
				if (currentFriend.items.indexOf(item) === -1) {
					currentFriend.items.push(item);
				} else {
					currentFriend.items = currentFriend.items.filter(
						(delItem) => item !== delItem
					);
				}
			}
		});
		setFriends(tempFriends);
	};

	return (
		<DataContext.Provider
			value={{
				friends,
				items,
				addFriend,
				addItem,
				editFriend,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
