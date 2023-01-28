export class Money {
	protected amount: number
	protected currency: string

	constructor(amount: number, currency: string) {
		this.amount = amount
		this.currency = currency
	}

	static dollar(amount: number): Money {
		return new Money(amount, 'USD')
	}

	static franc(amount: number): Money {
		return new Money(amount, 'CHF')
	}

	times(multiplier: number): Money {
		return new Money(this.amount * multiplier, this.currency)
	}

	getCurrency(): string {
		return this.currency
	}

	equals(money: Money): boolean {
		return this.amount === money.amount &&
			this.currency === money.currency
	}

	toString(): string {
		return `${this.amount} ${this.currency}`
	}

	plus(addend: Money): Money {
		return new Money(this.amount + addend.amount, this.currency)
	}
}
