import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'nrwl/nx-labs',
		branch: 'main',
		build: ['build-ci deno'],
		test: ['test-ci deno'],
		e2e: ['e2e-ci deno-e2e'],
	})
}
