import React, {Component, PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'

export default () => {
	return(
		<div className="top-bar">
			<div className="top-bar-left">
				<ul className="menu">
					<li className="menu-text">
						Timer React App
					</li>
					<li>
						<IndexLink to="/" activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
					</li>
					<li>
						<Link to="/" activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
					</li>
				</ul>
			</div>

			<div className="top-bar-right">
				<ul className="menu">
					<li className = "menu-text">
						Created by <a href="https://github.com/thefasttracker" target="_blank">Oleg Novikov</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
 