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

	times(multiplier: number): Expression {
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

	plus(addend: Expression): Expression {
		return new Sum(this, addend)
	}

	reduce(bank: Bank, to: string): Money {
		const rate = bank.rate(this.currency, to)
		return new Money(this.amount / rate, to)
	}
}

export interface Expression {
	reduce(bank: Bank, to: string): Money
	plus(addend: Expression): Expression
	times(multiplier: number): Expression
}

export class Bank {
	private rates: { [key:number]: number } = {}

	reduce(source: Expression, to: string): Money {
		return source.reduce(this, to) as Money
	}

	rate(from: string, to: string): number {
		if (from === to) return 1
		return this.rates[new Pair(from, to).hashCode()]
	}

	addRate(from: string, to: string, rate: number): void {
		this.rates[new Pair(from, to).hashCode()] = rate
	}
}

export class Sum implements Expression {
	public augend: Expression
	public addend: Expression

	constructor(augend: Expression, addend: Expression) {
		this.augend = augend
		this.addend = addend
	}

	reduce(bank: Bank, to: string): Money {
		const amount = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount
		return new Money(amount, to)
	}

	plus(addend: Expression): Expression {
		return new Sum(this, addend)
	}

	times(multiplier: number): Expression {
		return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
	}
}

class Pair {
	private from: string
	private to: string
	
	constructor(from: string, to: string) {
		this.from = from
		this.to = to
	}

	equals(object: object): boolean {
		const pair: Pair = object as Pair
		return this.from === pair.from && this.to === pair.to
	}

	hashCode(): number {
		return 0
	}
}
