import { JobData } from '../job-data'
import { InMemoryJobRepository } from './in-memory-job-repository'

describe('In memory Job Repository', () => {
  test('should return null if user is not found', async () => {
    const jobs: JobData[] = []
    const jobRepo = new InMemoryJobRepository(jobs)
    const job = await jobRepo.findJobByName('any_job_name')
    expect(job).toBeNull()
  })
})
