import React, {Component, PropTypes} from 'react'

export default class Controls extends Component {
	constructor(props) {
    	super(props)
    }

    static PropTypes = {
    	countdownStatus: React.PropTypes.string.isRequired,
    	onStatusChange: React.PropTypes.func.isRequired
    }

    onStatusChange = (newStatus) => {
    	return () => {
    		this.props.onStatusChange(newStatus)
    	}
    }

    render() {
    	let {countdownStatus} = this.props
    	let renderStartStopButton = () => {
    		if (countdownStatus === 'started') {
    			return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
    		} else {
    			return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
    		}
    	}
    	return (
    		<div className="controls">
    			{renderStartStopButton()}
    			<button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
    		</div>
    	)
    }
}