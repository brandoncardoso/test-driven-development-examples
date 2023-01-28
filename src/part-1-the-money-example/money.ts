export abstract class Money {
	protected amount: number
	protected currency: string

	constructor(amount: number) {
		this.amount = amount
	}

	static dollar(amount: number): Money {
		return new Dollar(amount, 'USD')
	}

	static franc(amount: number): Money {
		return new Franc(amount, 'CHF')
	}

	abstract times(multiplier: number): Money

	getCurrency(): string {
		return this.currency
	}

	equals(money: Money): boolean {
		return this.amount === money.amount &&
			this.constructor.name === money.constructor.name
	}
}

export class Dollar extends Money {
	constructor(amount: number, currency: string) {
		super(amount)
		this.currency = currency
	}

	times(multiplier: number): Money {
		return Money.dollar(this.amount * multiplier)
	}
}

export class Franc extends Money {
	constructor(amount: number, currency: string) {
		super(amount)
		this.currency = currency
	}

	times(multiplier: number): Money {
		return Money.franc(this.amount * multiplier)
	}
}
