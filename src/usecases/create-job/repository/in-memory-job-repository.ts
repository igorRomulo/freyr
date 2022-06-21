import { JobData } from '../job-data'
import { JobRepository } from '../ports/job-repository'

export class InMemoryJobRepository implements JobRepository {
  private repository: JobData[]

  constructor (repository: JobData[]) {
    this.repository = repository
  }

  add (job: JobData): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findJobByName (jobName: string): Promise<JobData> {
    return null
  }

  findAllJobs (): Promise<JobData[]> {
    throw new Error('Method not implemented.')
  }

  exists (job: JobData): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
