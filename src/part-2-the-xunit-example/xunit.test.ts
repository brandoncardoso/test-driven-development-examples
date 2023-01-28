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

new TestCaseTest('testTemplateMethod').run()
new TestCaseTest('testResult').run()
new TestCaseTest('testFailedResult').run()
