import { assert } from 'chai'
import { TestCase, WasRun } from './xunit'

class TestCaseTest extends TestCase {
	testRunning() {
		const test = new WasRun('testMethod')
		assert(!test.wasRun)
		test.run()
		assert(test.wasRun)
	}

	testSetUp() {
		const test = new WasRun('testMethod')
		test.run()
		assert(test.wasSetup)
	}
}
new TestCaseTest('testRunning').run()
new TestCaseTest('testSetUp').run()
