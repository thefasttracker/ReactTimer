import React, {Component, PropTypes} from 'react'
import Nav from 'Nav'

export default (props) => {
	return(
		<div>
			<div>
				<Nav/>
				{props.children}
			</div>
		</div>	
	)
}