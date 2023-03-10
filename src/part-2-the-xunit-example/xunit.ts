export class TestResult {
	runCount = 0
	errorCount = 0

	testStarted() {
		this.runCount += 1
	}

	testFailed() {
		this.errorCount += 1
	}

	summary() {
		return `${this.runCount} run, ${this.errorCount} failed`
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

	run(result: TestResult): void {
		result.testStarted()
		this.setUp()
		try {
			const method = this[this.name as keyof this] as (self: typeof this) => any
			method(this)
		} catch (error) {
			result.testFailed()
		}
		this.tearDown()
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

	testBrokenMethod() {
		throw new Error('test broken')
	}
}

export class TestSuite {
	tests: TestCase[] = []

	add(test: TestCase): void {
		this.tests.push(test)
	}

	run(result: TestResult): void {
		for (const test of this.tests) {
			test.run(result)
		}
	}
}
