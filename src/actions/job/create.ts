import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import Jenkins from 'jenkins';

export function createJob(jenkins: Jenkins) {
  return createTemplateAction<{
    jobName: string;
    jobXml: string;
  }>({
    id: 'jenkins:job:create',
    description: 'Create a job jenkins given a name and gitlab repo',
    schema: {
      input: {
        type: 'object',
        required: ['jobName', 'jobXml'],
        properties: {
          jobName: {
            title: 'Jenkins job name',
            description: 'Name of jenkins item',
            type: 'string',
          },
          jobXml: {
            title: 'Jenkins job xml',
            description: 'XML of job used by jenkins to create the job',
            type: 'string'
          }
        },
      },
    },
    async handler(ctx) {
      ctx.logger.info(
        `Creating jenkins job ${ctx.input.jobName}`,
      );

      try {
        ctx.logger.debug("Trying to create job jenkins with this xml {}", ctx.input.jobXml);

        await jenkins.job.create(ctx.input.jobName, ctx.input.jobXml);
        ctx.logger.info('Job created successfully!');
      } catch (err) {
        ctx.logger.error('Error creating job please check', err);
        throw err;
      }
    },
  });
}
