import { expect } from 'chai'
import { Bank, Expression, Money, Sum } from './money'

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

	it('Money.plus should return a Sum', () => {
		const five: Money = Money.dollar(5)
		const result: Expression = five.plus(five)
		const sum: Sum = result as Sum
		expect(five).to.equal(sum.augend)
		expect(five).to.equal(sum.addend)
	})

	it('should reduce a sum', () => {
		const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4))
		const bank: Bank = new Bank()
		const result: Money = bank.reduce(sum, 'USD')
		expect(result.equals(Money.dollar(7))).to.be.true
	})

	it('Bank should reduce a Money object', () => {
		const bank: Bank = new Bank()
		const result: Money = bank.reduce(Money.dollar(1), 'USD')
		expect(Money.dollar(1).equals(result)).to.be.true
	})

	it('should reduce money with different currencies', () => {
		const bank: Bank = new Bank()
		bank.addRate('CHF', 'USD', 2)
		const result = bank.reduce(Money.franc(2), 'USD')
		expect(result.equals(Money.dollar(1))).to.be.true
	})

	it('should have a rate of 1 when reducing money of the same currency', () => {
		expect(new Bank().rate('USD', 'USD')).to.equal(1)
	})

	it('should add money of mixed currencies', () => {
		const fiveDollars: Expression = Money.dollar(5)
		const tenFrancs: Expression = Money.franc(10)
		const bank: Bank = new Bank()
		bank.addRate('CHF', 'USD', 2)
		const result: Money = bank.reduce(fiveDollars.plus(tenFrancs), 'USD')
		expect(result.equals(Money.dollar(10))).to.be.true
	})

	it('Sum.plus should add currencies', () => {
		const fiveDollars: Expression = Money.dollar(5)
		const tenFrancs: Expression = Money.franc(10)
		const bank: Bank = new Bank()
		bank.addRate('CHF', 'USD', 2)
		const sum: Expression = new Sum(fiveDollars, tenFrancs).plus(fiveDollars)
		const result: Money = bank.reduce(sum, 'USD')
		expect(result.equals(Money.dollar(15))).to.be.true
	})

	it('Sum.times should multiply currencies', () => {
		const fiveDollars: Expression = Money.dollar(5)
		const tenFrancs: Expression = Money.franc(10)
		const bank: Bank = new Bank()
		bank.addRate('CHF', 'USD', 2)
		const sum: Expression = new Sum(fiveDollars, tenFrancs).times(2)
		const result: Money = bank.reduce(sum, 'USD')
		expect(result.equals(Money.dollar(20))).to.be.true
	})
})
