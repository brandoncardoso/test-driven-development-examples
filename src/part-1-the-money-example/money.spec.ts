import { expect } from 'chai'
import { Dollar, Franc } from './money'

describe('Multi-Currency Money', () => {
	it('should multiply dollars', () => {
		const five = new Dollar(5)
		expect(five.times(2).equals(new Dollar(10))).to.be.true
		expect(five.times(3).equals(new Dollar(15))).to.be.true
	})

	it('should check for equality', () => {
		expect(new Dollar(5).equals(new Dollar(5))).to.be.true
		expect(new Dollar(5).equals(new Dollar(6))).to.be.false
	})

	it('should multiply francs', () => {
		const five = new Franc(5)
		expect(new Franc(10).equals(five.times(2))).to.be.true
		expect(new Franc(15).equals(five.times(3))).to.be.true
	})
})
