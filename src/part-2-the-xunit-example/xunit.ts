export class WasRun {
	wasRun: boolean

	constructor(name: string) {
		this.wasRun = false
	}

	testMethod(): void {
		this.wasRun = true
	}

	run(): void {
		this.testMethod()
	}
}
