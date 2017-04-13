import React from 'react'
import { shallow } from 'enzyme'
import Main from '../../components/Main'

it("Renders the message 'MAIN' in an h1 tag", () => {

  let wrapper = shallow(<Main />)
  let headers = wrapper.find('h1')

  expect(headers.length).toBe(1)
  expect(headers.first().text()).toBe("MAIN")
})
