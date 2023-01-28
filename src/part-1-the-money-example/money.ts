export class Dollar {
	private amount: number

	constructor(amount: number) {
		this.amount = amount
	}

	times(multiplier: number): Dollar {
		return new Dollar(this.amount * multiplier)
	}

	equals(object: object): boolean {
		const dollar = (object as Dollar)
		return this.amount === dollar.amount
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
