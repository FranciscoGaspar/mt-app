import { Component } from 'solid-js';
import HomePage from './pages';
import { Router, Route, Routes } from '@solidjs/router';
import Posts from './pages/posts';


const App: Component = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" component={HomePage} />
					<Route path="/posts" component={Posts} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
