import { assert } from 'chai'
import { TestCase, WasRun } from './xunit'

class TestCaseTest extends TestCase {
	testTemplateMethod() {
		const test = new WasRun('testMethod')
		test.run()
		assert(test.log === 'setUp testMethod ')
	}
}

new TestCaseTest('testTemplateMethod').run()
