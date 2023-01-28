import { assert } from 'chai'
import { TestCase, TestResult, WasRun } from './xunit'

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

	testFailedResult() {
		const test = new WasRun('testBrokenMethod')
		const result = test.run()
		assert('1 run, 1 failed' === result.summary())
	}

	testFailedResultFormatting() {
		const result = new TestResult()
		result.testStarted()
		result.testFailed()
		assert('1 run, 1 failed' === result.summary())
	}
}

console.log(new TestCaseTest('testTemplateMethod').run().summary())
console.log(new TestCaseTest('testResult').run().summary())
console.log(new TestCaseTest('testFailedResultFormatting').run().summary())
console.log(new TestCaseTest('testFailedResult').run().summary())
