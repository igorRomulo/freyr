import { JobData } from '../job-data'
import { InMemoryJobRepository } from './in-memory-job-repository'

describe('In memory Job Repository', () => {
  test('should return null if user is not found', async () => {
    // given
    const jobs: JobData[] = []
    const jobRepo = new InMemoryJobRepository(jobs)

    // when
    const job = await jobRepo.findJobByName('any_job_name')

    // then
    expect(job).toBeNull()
  })

  test('should return job if it is found in the repository', async () => {
    // given
    const jobs: JobData[] = []
    const name = 'any_job_name'
    const jobRepo = new InMemoryJobRepository(jobs)

    // when
    await jobRepo.add({ name })
    const job = await jobRepo.findJobByName(name)

    // then
    expect(job.name).toBe(name)
  })

  test('should return all job in the repository', async () => {
    // given
    const jobs: JobData[] = [
      { name: 'any_job_name' },
      { name: 'any_job_name' }
    ]
    const jobRepo = new InMemoryJobRepository(jobs)

    // when
    const job = await jobRepo.findAllJobs()

    // then
    expect((await job).length).toBe(2)
  })
})
