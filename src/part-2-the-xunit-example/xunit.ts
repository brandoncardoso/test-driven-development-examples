export class TestResult {
	runCount = 0

	testStarted() {
		this.runCount += 1
	}

	summary() {
		return `${this.runCount} run, 0 failed`
	}
}

export class TestCase {
	protected name: string

	constructor(name: string) {
		this.name = name
	}

	setUp(): void {
		console.log('set up')
	}

	tearDown(): void {
		console.log('tear down')
	}

	run(): TestResult {
		const result = new TestResult()
		result.testStarted()
		this.setUp()
		const method = this[this.name as keyof this] as (self: typeof this) => any
		method(this)
		this.tearDown()
		return result
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

	tearDown(): void {
		this.log += 'tearDown '
	}

	testMethod(self: typeof this): void {
		self.wasRun = true
		self.log += 'testMethod '
	}
}
