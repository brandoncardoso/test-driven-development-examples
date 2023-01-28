export class Money {
	protected amount: number

	constructor(amount: number) {
		this.amount = amount
	}

	equals(money: Money): boolean {
		return this.amount === money.amount
	}
}

export class Dollar extends Money {

	constructor(amount: number) {
		super(amount)
	}

	times(multiplier: number): Dollar {
		return new Dollar(this.amount * multiplier)
	}
}

export class Franc {
	private amount: number

	constructor(amount: number) {
		this.amount = amount
	}

	times(multiplier: number): Franc {
		return new Franc(this.amount * multiplier)
	}

	equals(object: object): boolean {
		const franc = (object as Franc)
		return this.amount === franc.amount
	}
}
