import { assert } from 'chai'
import { TestCase, TestResult, TestSuite, WasRun } from './xunit'

class TestCaseTest extends TestCase {
	result = new TestResult()

	setUp() {
		this.result = new TestResult()
	}

	testTemplateMethod(self: typeof this) {
		const test = new WasRun('testMethod')
		test.run(self.result)
		assert(test.log === 'setUp testMethod tearDown ')
	}

	testResult(self: typeof this) {
		const test = new WasRun('testMethod')
		test.run(self.result)
		assert('1 run, 0 failed' === self.result.summary())
	}

	testFailedResult(self: typeof this) {
		const test = new WasRun('testBrokenMethod')
		test.run(self.result)
		assert('1 run, 1 failed' === self.result.summary())
	}

	testFailedResultFormatting(self: typeof this) {
		self.result.testStarted()
		self.result.testFailed()
		assert('1 run, 1 failed' === self.result.summary())
	}

	testSuite(self: typeof this) {
		const suite = new TestSuite()
		suite.add(new WasRun('testMethod'))
		suite.add(new WasRun('testBrokenMethod'))
		suite.run(self.result)
		assert('2 run, 1 failed' === self.result.summary())
	}
}

const suite = new TestSuite()
suite.add(new TestCaseTest('testTemplateMethod'))
suite.add(new TestCaseTest('testResult'))
suite.add(new TestCaseTest('testFailedResultFormatting'))
suite.add(new TestCaseTest('testFailedResult'))
const result = new TestResult()
suite.run(result)
console.log(result.summary())
