export class Money {
	protected amount: number
	protected currency: string

	constructor(amount: number, currency: string) {
		this.amount = amount
		this.currency = currency
	}

	static dollar(amount: number): Money {
		return new Dollar(amount, 'USD')
	}

	static franc(amount: number): Money {
		return new Franc(amount, 'CHF')
	}

	times(multiplier: number): Money {
		return this
	}

	getCurrency(): string {
		return this.currency
	}

	equals(money: Money): boolean {
		return this.amount === money.amount &&
			this.constructor.name === money.constructor.name
	}

	toString(): string {
		return `${this.amount} ${this.currency}`
	}
}

export class Dollar extends Money {
	times(multiplier: number): Money {
		return new Dollar(this.amount * multiplier, this.currency)
	}
}

export class Franc extends Money {
	times(multiplier: number): Money {
		return new Money(this.amount * multiplier, this.currency)
	}
}
