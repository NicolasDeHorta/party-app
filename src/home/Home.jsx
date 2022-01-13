import { Header } from '../header/Header';
import { InputGroup } from '../inputgroup/InputGroup';
import { Table } from '../table/Table';

export const Home = () => {
	return (
		<div className="home">
			<Header />
			<InputGroup />
			<Table />
		</div>
	);
};
