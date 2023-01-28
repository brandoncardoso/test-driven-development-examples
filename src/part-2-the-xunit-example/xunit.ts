export class WasRun {
	wasRun: boolean

	constructor(name: string) {
		this.wasRun = false
	}

	testMethod() {
		this.wasRun = true
	}
}
