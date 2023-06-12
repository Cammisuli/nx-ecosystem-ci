import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'nrwl/nx-labs',
		branch: 'main',
		build: ['build-ci remix'],
		test: ['test-ci remix'],
		e2e: ['e2e-ci remix-e2e'],
	})
}
