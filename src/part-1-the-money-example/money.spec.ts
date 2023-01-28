import { expect } from 'chai'
import { Dollar } from './money'

describe('Multi-Currency Money', () => {
	it('should multiply dollars', () => {
		const five = new Dollar(5)
		five.times(2)
		expect(five.amount).to.equal(10)
		five.times(3)
		expect(five.amount).to.equal(15)
	})
})
