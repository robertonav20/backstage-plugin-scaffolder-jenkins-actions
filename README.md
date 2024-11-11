# Backstage Plugin Scaffolder Jenkins Actions - Alpha

The backstage-plugin-scaffolder-jenkins-actions module for [@backstage/plugin-scaffolder-backend](https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend).

This plugin was created through the Backstage CLI

## Supported Action

| Action | Description |
| --- | --- |
| build | Run a job |
| copy | Create a joby from another |
| create | Create a job given a xml|
| destroy  | Destroy a job |
| disable  | Disable a job |
| enable  | Enable a job |

## How to configure Jenkins client

An example of configuration to create jenkins client.

```yaml
jenkins:
  baseUrl: http://jenkins.local:8080
  username: admin
  password: admin
  crumbIssuerEnabled: true
```

## How to use it

Below, there is an example for each action

- Build job

  **Action input parameters**

  | Action | Description |
  | --- | --- |
  | *jobName* | Name of job |
  | *jobParameters* | optional job parameters (object) to execute it |

  **Template Step**

  ```yaml
  - id: jenkins-job-build
    name: Jenkins Job Build
    action: jenkins:job:build
    input:
      jobName: first-job
      jobParameters: some-value
  ```

- Copy job

  **Action input parameters**

  | Action | Description |
  | --- | --- |
  | *sourceJobName* | Name of source job |
  | *targetJobName* | Name of target job |

  **Template Step**

  ```yaml
  - id: jenkins-job-copy
    name: Jenkins Job Copy
    action: jenkins:job:copy
    input:
      sourceJobName: source-job
      targetJobName: target-job
  ```

- Create job

  **Action input parameters**

  | Action | Description |
  | --- | --- |
  | *jobName* | Name of job |
  | *jobXml* | Jenkins xml to create job |

  ```yaml
  - id: jenkins-job-create
    name: Jenkins Job Create
    action: jenkins:job:create
    input:
      jobName: first-job
      jobXml: |
        <flow-definition plugin="workflow-job@1447.v559b_c710cd2e">
        ... Jenkins content XML, was omitted for semplicity
        </flow-definition>
  ```

- Destroy job

  **Action input parameters**

  | Action | Description |
  | --- | --- |
  | *jobName* | Name of job |

  ```yaml
  - id: jenkins-job-destroy
    name: Jenkins Job Destroy
    action: jenkins:job:destroy
    input:
      jobName: first-job
  ```

- Disable job

  **Action input parameters**

  | Action | Description |
  | --- | --- |
  | *jobName* | Name of job |

  ```yaml
    - id: jenkins-job-disable
      name: Jenkins Job Disable
      action: jenkins:job:disable
      input:
        jobName: first-job
  ```

- Enable job

  **Action input parameters**

  | Action | Description |
  | --- | --- |
  | *jobName* | Name of job |
  | *jobParameters* | optional job parameters (object) to execute it |

  ```yaml
    - id: jenkins-job-enable
      name: Jenkins Job Enable
      action: jenkins:job:enable
      input:
        jobName: first-job
  ```

**`NOTE: no output will be provided after action excution`**

## Useful Links

The jenkins client used is available here <https://github.com/silas/node-jenkins#readme>

Here the link to npm package <https://www.npmjs.com/package/@robertonav20/backstage-plugin-scaffolder-jenkins-actions>
