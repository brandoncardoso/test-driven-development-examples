import { assert } from 'chai'
import { TestCase, TestResult, TestSuite, WasRun } from './xunit'

class TestCaseTest extends TestCase {
	testTemplateMethod() {
		const test = new WasRun('testMethod')
		const result = new TestResult()
		test.run(result)
		assert(test.log === 'setUp testMethod tearDown ')
	}

	testResult() {
		const test = new WasRun('testMethod')
		const result = new TestResult()
		test.run(result)
		assert('1 run, 0 failed' === result.summary())
	}

	testFailedResult() {
		const test = new WasRun('testBrokenMethod')
		const result = new TestResult()
		test.run(result)
		assert('1 run, 1 failed' === result.summary())
	}

	testFailedResultFormatting() {
		const result = new TestResult()
		result.testStarted()
		result.testFailed()
		assert('1 run, 1 failed' === result.summary())
	}

	testSuite() {
		const suite = new TestSuite()
		suite.add(new WasRun('testMethod'))
		suite.add(new WasRun('testBrokenMethod'))
		const result = new TestResult()
		suite.run(result)
		assert('2 run, 1 failed' === result.summary())
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
