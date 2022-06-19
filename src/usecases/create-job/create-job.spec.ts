import { JobData } from './job-data'

describe('Create job use case', () => {
  test('Should add new job', async () => {
    // given
    const jobs: JobData[] = []
    const repo: JobRepository = new InMemoryJobRepository(jobs)
    const usecase: RegisterJob = new RegisterJob(repo)
    const jobName = 'any_job_name'

    // when
    const response = await usecase.registerJob({ jobName })
    const job = repo.findJobByName(jobName)

    // then
    expect((await job).name).toBe(jobName)
  })
})
