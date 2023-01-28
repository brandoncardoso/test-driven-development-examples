export class WasRun {
	name: string
	wasRun: boolean

	constructor(name: keyof WasRun) {
		this.name = name
		this.wasRun = false
	}

	testMethod(self: typeof this): void {
		self.wasRun = true
	}

	run(): void {
		const method = this[this.name as keyof WasRun] as (self: typeof this) => any
		method(this)
	}
}
