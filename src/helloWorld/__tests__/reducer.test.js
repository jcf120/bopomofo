import { fromJS } from 'immutable'
import * as t from '../actionTypes'
import reducer from '../reducer'

describe("When a 'SAY_HELLO' action occurs", () => {
	const state = fromJS({
		isSayingHello: false,
	})

	const action = {
		type: t.SAY_HELLO,
	}

	const nextState = reducer(state, action)

	it("changes 'isSayingHello' from false to true", () => {
		expect(nextState.get("isSayingHello")).toBe(true)
	})
})