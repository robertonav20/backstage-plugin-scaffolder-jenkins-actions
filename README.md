# backstage-plugin-scaffolder-jenkins-actions

The backstage-plugin-scaffolder-jenkins-actions module for [@backstage/plugin-scaffolder-backend](https://www.npmjs.com/package/@backstage/plugin-scaffolder-backend).

This plugin was created through the Backstage CLI

| Action | Description |
| --- | --- |
| build | Run a job |
| copy | Create a joby from another |
| create | Create a job |
| destroy  | Destroy a job |
| disable  | Disable a job |
| enable  | Enable a job |

This is an example of configuration to create jenkins client.

```yaml
jenkins:
  baseUrl: http://jenkins.local:8080
  username: admin
  password: admin
  crumbIssuerEnabled: true
```

The jenkins client used is available here https://github.com/silas/node-jenkins#readme