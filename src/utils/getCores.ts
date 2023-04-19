import { availableParallelism, type } from 'node:os'
import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const promiseBasedExec = promisify(exec)

export const getCores = async () => {
	let cores
	if (/windows/gi.test(type())) {
		const { stdout, stderr } = await promiseBasedExec(
			'wmic cpu get NumberOfCores',
		)

		if (stderr.length) {
			console.error(stderr)
			process.exit(1)
		}

		cores = stdout
			.split('')
			.filter((el: string) => /\d/.test(el))
			.join('')
	} else {
		return availableParallelism()
	}

	return Number(cores)
}
