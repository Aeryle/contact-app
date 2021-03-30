import './App.css';
import Contact from './components/Contact';

const fakeContact = {
	avatar: 'https://avatars.githubusercontent.com/u/47262222',
	name: 'Aeryle',
	status: true
};

function App() {
	return (
		<div className="App">
			<Contact {...fakeContact} />
		</div>
	);
}

export default App;
