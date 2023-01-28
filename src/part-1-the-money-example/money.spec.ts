import { expect } from 'chai'
import { Franc, Money } from './money'

describe('Multi-Currency Money', () => {
	it('should multiply dollars', () => {
		const five : Money = Money.dollar(5)
		expect(five.times(2).equals(Money.dollar(10))).to.be.true
		expect(five.times(3).equals(Money.dollar(15))).to.be.true
	})

	it('should check for equality', () => {
		expect(Money.dollar(5).equals(Money.dollar(5))).to.be.true
		expect(Money.dollar(5).equals(Money.dollar(6))).to.be.false
		expect(new Franc(5).equals(new Franc(5))).to.be.true
		expect(new Franc(5).equals(new Franc(6))).to.be.false
		expect(new Franc(5).equals(Money.dollar(5))).to.be.false
	})

	it('should multiply francs', () => {
		const five = new Franc(5)
		expect(new Franc(10).equals(five.times(2))).to.be.true
		expect(new Franc(15).equals(five.times(3))).to.be.true
	})
})
