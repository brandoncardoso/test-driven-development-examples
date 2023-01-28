import { assert } from 'chai'
import { TestCase, WasRun } from './xunit'

class TestCaseTest extends TestCase {
	test: WasRun = new WasRun('testMethod')

	setUp() {
		this.test = new WasRun('testMethod')
	}

	testRunning(self: typeof this) {
		self.test.run()
		assert(self.test.wasRun)
	}

	testSetUp(self: typeof this) {
		self.test.run()
		assert(self.test.log === 'setUp ')
	}
}
new TestCaseTest('testRunning').run()
new TestCaseTest('testSetUp').run()
