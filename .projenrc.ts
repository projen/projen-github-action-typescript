import { cdk } from 'projen';

const project = new cdk.JsiiProject({
  projenrcTs: true,
  author: 'Kaizen Conroy',
  authorAddress: 'zen.conroy@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'projen-github-action-typescript',
  repositoryUrl: 'https://github.com/projen/projen-github-action-typescript.git',
  packageName: 'projen-github-action-typescript',
  devDeps: ['fs-extra', '@types/fs-extra', 'glob'],
  peerDeps: ['projen'],
  jsiiVersion: '5.2.x',
  typescriptVersion: '5.2.x',

  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['cdklabs-automation'] },
});

project.synth();