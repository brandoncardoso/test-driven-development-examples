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
	log = ''

	constructor(name: string) {
		super(name)
		this.wasRun = false
	}

	setUp(): void {
		this.log = 'setUp '
		this.wasRun = false
	}

	testMethod(self: typeof this): void {
		self.wasRun = true
	}
}
