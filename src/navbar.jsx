import React from 'react';
import FontAwesome from 'react-fontawesome';
import style from './navbar.css';

class Navbar extends React.Component {
	
	constructor (props) {
		super(props)

		this.state = {
			dropdownOpen: false
		}
	}

	displayDropdown () {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
	}

	render () {

		const dropdownList = (className) => {
			return (
				<ul className={className}>
					<li><a href="about.html">ABOUT</a></li>			    	
				  	<li><a href="#sm-buttons">FOLLOW ME</a></li>
				</ul>
			)
		}

		return (
			<nav className="navbar">
				
				<a className="home-button" href="index.html">MSPUDDING</a>

				{dropdownList("navbar-list")}

				<button className="navbar-dropdown-button" onClick={this.displayDropdown.bind(this)}>
					<FontAwesome
				        name='bars'
				    />
				</button>

				{dropdownList("navbar-list-mobile" + (this.state.dropdownOpen === true ? ' navbar-list-mobile-open' : ''))}

			</nav>
		)


		// return (
		// 	<nav className="navbar navbar-text">
		// 		<ul className="navbar-brand">
		// 			<li><a href="index.html">MSPUDDING</a></li>
		// 		</ul>
		// 		<ul className="navbar-right">
		// 	  		<li><a href="#sm-buttons">FOLLOW ME</a></li>
		// 	  		<li><a href="about.html">ABOUT</a></li>
		// 		</ul>
		// 		<ul className="mobile-navbar-buttons">
		// 			<li><button id="menuButton" className="navbar-dropdown">
		// 				<FontAwesome
		// 			        name='bars'
		// 			        size='1x'
		// 			    />
		// 			</button></li>
		// 				<li><a className="mobile-buttons" href="about.html">ABOUT</a></li>			    	
		// 			  	<li><a className="mobile-buttons" href="#sm-buttons">FOLLOW ME</a></li>

		// 		</ul>
		// 	</nav>
		// )
	}
}




export default Navbar;