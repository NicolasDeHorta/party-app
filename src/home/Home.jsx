import { Header } from '../header/Header';
import { InputGroup } from '../inputgroup/InputGroup';
import { Table } from '../table/Table';
import { DataProvider } from '../store/storeContext';

export const Home = () => {
	return (
		<div className="home">
			<Header />
			<DataProvider>
				<InputGroup />
				<Table />
			</DataProvider>
		</div>
	);
};
