import { expect } from 'chai'
import { Bank, Expression, Money } from './money'

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
		const five = Money.dollar(5)
		const sum: Expression = five.plus(five)
		const bank: Bank = new Bank()
		const reduced: Money = bank.reduce(sum, 'USD')
		expect(reduced.equals(Money.dollar(10))).to.be.true
	})
})
