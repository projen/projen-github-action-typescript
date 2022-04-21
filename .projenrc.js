const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Kaizen Conroy',
  authorAddress: 'zen.conroy@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'projen-github-action-typescript',
  repositoryUrl: 'https://github.com/projen/projen-github-action-typescript.git',
  packageName: 'projen-github-action-typescript',
  deps: ['projen'],
  devDeps: ['fs-extra', '@types/fs-extra', 'glob'],
  peerDeps: ['projen'],

  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['cdklabs-automation'] },
});

project.synth();