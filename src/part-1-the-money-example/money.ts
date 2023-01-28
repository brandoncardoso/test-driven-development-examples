export class Money {
	protected amount: number

	constructor(amount: number) {
		this.amount = amount
	}

	equals(money: Money): boolean {
		return this.amount === money.amount &&
			this.constructor.name === money.constructor.name
	}
}

export class Dollar extends Money {
	constructor(amount: number) {
		super(amount)
	}

	times(multiplier: number): Money {
		return new Dollar(this.amount * multiplier)
	}
}

export class Franc extends Money {
	constructor(amount: number) {
		super(amount)
	}

	times(multiplier: number): Money {
		return new Franc(this.amount * multiplier)
	}
}
