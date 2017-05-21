import React from 'react'
import { shallow } from 'enzyme'
import Main from '../../components/Main'


describe("When 'isSayingHello' is falsey", () => {
	const props = {
		isSayingHello: false,
		sayHello: jest.fn(),
	}

	let wrapper = shallow(<Main {...props} />)
	let buttons = wrapper.find('button')

	it("renders a button", () => {
		expect(buttons.length).toBe(1)
	})

	it("doesn't render a message", () => {
		expect(wrapper.find('h1').length).toBe(0)
	})

	it("calls the mock when that button is clicked", () => {
		buttons.first().simulate('click')
		expect(props.sayHello).toHaveBeenCalled()
	})
})

describe("When 'isSayingHello' is truthy", () => {
	const props = {
		isSayingHello: true,
		sayHello: () => {},
	}

	let wrapper = shallow(<Main {...props} />)

	it("renders a message in an h1 tag", () => {
		expect(wrapper.find('h1').length).toBe(1)
	})

	it("doesn't render a message", () => {
		expect(wrapper.find('button').length).toBe(0)
	})

})