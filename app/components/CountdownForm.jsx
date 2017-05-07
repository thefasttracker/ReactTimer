import React, {Component} from 'react'

export default class CountdownForm extends Component {
	constructor(props) {
    	super(props)
  	}
	
	onSubmit = (e) => {
		e.preventDefault()
		let strSeconds = this.refs.seconds.value
		if (strSeconds.match(/^[0-9]*$/)) {
			this.refs.seconds.value=''
			this.props.onSetCountdown(parseInt(strSeconds, 10))
		}
	}

	render(){
		return(
			<div className="controls">
				<form ref="form" onSubmit={this.onSubmit} className="countdown-form">
					<input type="text" ref="seconds" placeholder="Enter time in seconds"/>
					<button className="button primary expanded">Start</button>
				</form>
			</div>
		)
	}
}
