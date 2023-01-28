import { expect } from 'chai'
import { Money } from './money'

describe('Multi-Currency Money', () => {
	it('should multiply money', () => {
		const five : Money = Money.dollar(5)
		expect(five.times(2).equals(Money.dollar(10))).to.be.true
		expect(five.times(3).equals(Money.dollar(15))).to.be.true
	})

	it('should check for equality', () => {
		expect(Money.dollar(5).equals(Money.dollar(5))).to.be.true
		expect(Money.dollar(5).equals(Money.dollar(6))).to.be.false
		expect(Money.franc(5).equals(Money.dollar(5))).to.be.false
	})

	it('should have currencies', () => {
		expect(Money.dollar(1).getCurrency()).to.equal('USD')
		expect(Money.franc(1).getCurrency()).to.equal('CHF')
	})

	it('should do simple addition', () => {
		const sum: Money = Money.dollar(5).plus(Money.dollar(5))
		expect(sum.equals(Money.dollar(10))).to.be.true
	})
})
