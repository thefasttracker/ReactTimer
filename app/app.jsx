import ReactDOM from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Timer from 'Timer'
import Countdown from 'Countdown'

//foundation css
import 'style!css!foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

//app css
import 'style!css!sass!applicationStyles'

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}/>
			<IndexRoute component={Timer}/>
		</Route>
	</Router>, 
	document.getElementById('app')
);