import React from 'react';
import {render} from 'react-dom';

import reset from './reset.css';
import Navbar from './navbar.jsx';

class App extends React.Component {
	render () {
		return (
			<Navbar/>
		);
	}
}

var container = document.createElement('div');
document.body.appendChild(container);

render(<App/>, container)