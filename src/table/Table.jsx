import { useData } from '../store/storeContext';
import './table.scss';

export const Table = () => {
	const { friends, items, editFriend } = useData();

	const renderFriendRow = (friend) => {
		console.log(friend.name);
		return (
			<tr>
				<td>{friend.name}</td>
				{items.map((item) => (
					<td>
						<input
							type="checkbox"
							onChange={() => editFriend(friend.name, item)}
						/>
					</td>
				))}
			</tr>
		);
	};

	return (
		<div className="table">
			<table>
				<thead>
					<tr>
						<th>Friends</th>
						{items.map((item) => (
							<th>{item}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{friends.map((friend) => renderFriendRow(friend))}
				</tbody>
			</table>
		</div>
	);
};
