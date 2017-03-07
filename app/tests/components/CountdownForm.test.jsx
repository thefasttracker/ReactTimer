import ReactDOM from 'react-dom'
import React from 'react'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-addons-test-utils'
import CountdownForm from 'CountdownForm'

describe('CountdownForm', () => {
	it('should exist', () => {
		expect(CountdownForm).toExist()
	})

	it('Should call onSetCountdown if valid seconds entered', () => {
			let spy = expect.createSpy()
			let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
			let $el = $(ReactDOM.findDOMNode(countdownForm))
			countdownForm.refs.seconds.value = '109'
			TestUtils.Simulate.submit($el.find('form')[0])

			expect(spy).toHaveBeenCalledWith(109)
	})

	it('Should not call onSetCountdown if invalid seconds entered', () => {
			let spy = expect.createSpy()
			let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
			let $el = $(ReactDOM.findDOMNode(countdownForm))
			countdownForm.refs.seconds.value = 'aaa'
			TestUtils.Simulate.submit($el.find('form')[0])

			expect(spy).toNotHaveBeenCalled()
	})
})
