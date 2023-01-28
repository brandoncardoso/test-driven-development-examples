import { assert } from 'chai'
import { TestCase, WasRun } from './xunit'

const test = new WasRun('testMethod')
console.log(test.wasRun)
test.run()
console.log(test.wasRun)

class TestCaseTest extends TestCase {
	testRunning() {
		const test = new WasRun('testMethod')
		assert(!test.wasRun)
		test.run()
		assert(test.wasRun)
	}
}
new TestCaseTest('testRunning').run()
