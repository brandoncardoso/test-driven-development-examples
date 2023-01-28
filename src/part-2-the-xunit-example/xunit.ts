export class TestCase {
	protected name: string

	constructor(name: string) {
		this.name = name
	}

	setUp(): void {
		console.log('set up')
	}

	run(): void {
		this.setUp()
		const method = this[this.name as keyof this] as (self: typeof this) => any
		method(this)
	}
}

export class WasRun extends TestCase {
	wasRun: boolean
	wasSetup: boolean

	constructor(name: string) {
		super(name)
		this.wasRun = false
		this.wasSetup = false
	}

	setUp(): void {
		this.wasRun = false
		this.wasSetup = true
	}

	testMethod(self: typeof this): void {
		self.wasRun = true
	}
}
