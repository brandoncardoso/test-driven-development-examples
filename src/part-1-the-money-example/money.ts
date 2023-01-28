export class Money implements Expression {
	public amount: number
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

	plus(addend: Money): Expression {
		return new Sum(this, addend)
	}

	reduce(to: string): Money {
		return this
	}
}

export interface Expression {
	reduce(to: string): Money
}

export class Bank {
	reduce(source: Expression, to: string): Money {
		return source.reduce(to) as Money
	}
}

export class Sum implements Expression {
	public augend: Money
	public addend: Money

	constructor(augend: Money, addend: Money) {
		this.augend = augend
		this.addend = addend
	}

	reduce(to: string): Money {
		const amount = this.augend.amount + this.addend.amount
		return new Money(amount, to)
	}
}
