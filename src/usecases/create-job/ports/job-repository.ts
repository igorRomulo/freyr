import { JobData } from '../job-data'

export interface JobRepository {
  add(job: JobData): Promise<void>
  findJobByName(jobName: string): Promise<JobData>
  findAllJobs(): Promise<JobData[]>
  exists(job: JobData): Promise<boolean>
}
