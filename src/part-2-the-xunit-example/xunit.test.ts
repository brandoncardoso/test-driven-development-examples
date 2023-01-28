import { WasRun } from './xunit'

const test = new WasRun('testMethod')
console.log(test.wasRun)
test.testMethod()
console.log(test.wasRun)
