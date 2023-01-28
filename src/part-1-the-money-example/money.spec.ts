import { expect } from 'chai'
import { Dollar } from './money'

describe('Multi-Currency Money', () => {
	it('should multiply dollars', () => {
		const five = new Dollar(5)
		let product: Dollar = five.times(2)
		expect(product).to.equal(10)
		product = five.times(3)
		expect(product).to.equal(15)
	})
})
