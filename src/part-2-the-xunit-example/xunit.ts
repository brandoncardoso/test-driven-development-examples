export class TestCase {
	protected name: string

	constructor(name: string) {
		this.name = name
	}

	run(): void {
		const method = this[this.name as keyof this] as (self: typeof this) => any
		method(this)
	}
}

export class WasRun extends TestCase {
	wasRun: boolean

	constructor(name: string) {
		super(name)
		this.wasRun = false
	}

	testMethod(self: typeof this): void {
		self.wasRun = true
	}
}
