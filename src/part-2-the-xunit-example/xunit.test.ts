import { assert } from 'chai'
import { TestCase, WasRun } from './xunit'

class TestCaseTest extends TestCase {
	testTemplateMethod() {
		const test = new WasRun('testMethod')
		test.run()
		assert(test.log === 'setUp testMethod tearDown ')
	}

	testResult() {
		const test = new WasRun('testMethod')
		const result = test.run()
		assert('1 run, 0 failed' === result.summary())
	}
}

new TestCaseTest('testTemplateMethod').run()
new TestCaseTest('testResult').run()
