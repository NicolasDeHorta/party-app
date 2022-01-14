import { useData } from '../store/storeContext';
import './table.scss';

export const Table = () => {
	const { friends, items, editFriend } = useData();

	const renderFriendRow = (friend) => {
		return (
			<tr key={`row-${friend.name}`} className="friendRow">
				<td key={`name-${friend.name}`}>{friend.name}</td>
				{items.map((item) => (
					<td key={`chk-${friend.name}-${item.name}`}>
						<input
							type="checkbox"
							onChange={() => editFriend(friend, item)}
						/>
					</td>
				))}
			</tr>
		);
	};

	const renderTableHeaders = (items) => {
		return (
			<tr>
				<th>{friends.length > 0 && 'Friends'}</th>
				{items.map((item) => (
					<th key={`header-${item.name}`}>
						{item.name} <br />{' '}
						<span className="itemCost">$ {item.cost}</span>
					</th>
				))}
			</tr>
		);
	};

	const displayFriends = () => {
		friends.forEach((friend) => {
			if (friend.items.length > 0) {
				let totalCost = 0;
				let itemsText = '';
				friend.items.map((item, index) => {
					totalCost += item.cost;
					if (index !== friend.items.length - 1) {
						itemsText = `${itemsText}${item.name} `;
					} else {
						if (friend.items.length > 1) {
							itemsText = `${itemsText}y ${item.name}.`;
						} else {
							itemsText = `${item.name}.`;
						}
					}
				});
				console.log(
					`${friend.name} gastó en ${itemsText} TOTAL: ${totalCost}`
				);
			}
		});
	};

	return (
		<div className="table">
			<table>
				<thead>{items.length > 0 && renderTableHeaders(items)}</thead>
				<tbody>
					{friends.map((friend) => renderFriendRow(friend))}
				</tbody>
			</table>
			<div className="summaryButton" onClick={displayFriends}>
				Summary
			</div>
		</div>
	);
};
