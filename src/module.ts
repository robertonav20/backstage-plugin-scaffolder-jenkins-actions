import { coreServices, createBackendModule } from '@backstage/backend-plugin-api';
import { scaffolderActionsExtensionPoint } from '@backstage/plugin-scaffolder-node/alpha';
import { buildJob, copyJob, createJob, destroyJob, disableJob, enableJob } from './actions/job/';
import { buildJenkinsClient, JenkinsConfig } from "./config";

/**
 * A backend module that registers the action into the scaffolder
 */
export const scaffolderBackendModuleJenkinsActions = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'backstage-plugin-scaffolder-jenkins-actions',
  register({ registerInit }) {
    registerInit({
      deps: {
        scaffolderActions: scaffolderActionsExtensionPoint,
        config: coreServices.rootConfig,
        logger: coreServices.logger
      },
      async init({ config, logger, scaffolderActions }) {
        const jenkinsClient = buildJenkinsClient(JenkinsConfig.fromConfig(config));

        scaffolderActions.addActions(createJob(jenkinsClient));
        scaffolderActions.addActions(copyJob(jenkinsClient));
        scaffolderActions.addActions(buildJob(jenkinsClient));
        scaffolderActions.addActions(enableJob(jenkinsClient));
        scaffolderActions.addActions(disableJob(jenkinsClient));
        scaffolderActions.addActions(destroyJob(jenkinsClient));

        logger.info("Jenkins actions module started successfully")
      }
    });
  },
})
