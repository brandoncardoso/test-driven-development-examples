import { expect } from 'chai'

describe('Multi-Currency Money', () => {
	it('should multiply dollars', () => {
		const five = new Dollar(5)
		five.times(2)
		expect(five.amount).to.equal(10)
	})
})
