import { JobData } from '../job-data'
import { JobRepository } from '../ports/job-repository'

export class InMemoryJobRepository implements JobRepository {
  private repository: JobData[]

  constructor (repository: JobData[]) {
    this.repository = repository
  }

  async add (job: JobData): Promise<void> {
    const exists = await this.exists(job)

    if (!exists) {
      this.repository.push(job)
    }
  }

  async findJobByName (name: string): Promise<JobData> {
    const jobs = this.repository.filter((job) => {
      return job.name === name
    })

    if (jobs.length > 0) {
      return jobs[0]
    }

    return null
  }

  async findAllJobs (): Promise<JobData[]> {
    return this.repository
  }

  async exists (job: JobData): Promise<boolean> {
    if (await this.findJobByName(job.name) === null) {
      return false
    }

    return true
  }
}
