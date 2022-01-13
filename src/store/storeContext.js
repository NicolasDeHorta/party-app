import { createContext, useState, useContext } from 'react';

//creating a new context
const DataContext = createContext();

export const useData = () => {
	//hook to make the usage easier
	return useContext(DataContext);
};

const friendsInitialValue = [
	{
		name: 'Nico',
		items: [],
	},
	{
		name: 'Nacho',
		items: [],
	},
	{
		name: 'Rodri',
		items: [],
	},
];

//Defining the wrapper
export const DataProvider = ({ children }) => {
	const [friends, setFriends] = useState(friendsInitialValue);
	const [items, setItems] = useState(['picada', 'bebidas', 'pizzas']);

	const addFriend = (newFriend) => {
		setFriends([...friends, { name: newFriend, items: [] }]);
	};

	const addItem = (newItem) => {
		setItems([...items, newItem]);
	};

	const editFriend = (friendName, item) => {
		const tempFriends = friends.map((friend) => {
			if (friend.name === friendName) {
				friend.items.push(item);
			}
		});

		setFriends(tempFriends);
		console.log(friends);
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
