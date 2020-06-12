import React from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import './App.css';

export default class MainRouter extends Component {

	render() {
		return (
			<React.Fragment>
			<h1>Clayhouse</h1>
				<HashRouter>
					<header>
						<nav>
							<NavLink
								className='navlink'
								exact
								to="/"
							>
								Home
							</NavLink>
              <NavLink
								className='navlink'
                exact
                to="/products"
              >
                Products
              </NavLink>
              <NavLink
								className='navlink'
                exact
                to="/show-schedule"
              >
                Show Schedule
              </NavLink>
							<NavLink
								className='navlink'
								exact
								to="/contact-us"
							>
								Contact Us
							</NavLink>
						</nav>
					</header>
					<div
						// className={Route.to === '/my-plots' ? '' : 'app-container'}
						className={'site-container'}
					>
						<Route path="/" exact component={Home} />

					</div>
						<Route path="/products" component={products} />
						<Route path="/show-schedule" component={show-schedule} />
						<Route path="/contact-us" component={contact-us} />
				</HashRouter>
        </React.Fragment>
        );
	}
}
