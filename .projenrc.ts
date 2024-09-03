import { cdk } from 'projen';

const MIN_SUPPORTED_PROJEN_VERSION = '0.81.11';

const project = new cdk.JsiiProject({
  projenrcTs: true,
  author: 'Kaizen Conroy',
  authorAddress: 'zen.conroy@gmail.com',
  defaultReleaseBranch: 'main',
  name: 'projen-github-action-typescript',
  repositoryUrl: 'https://github.com/projen/projen-github-action-typescript.git',
  packageName: 'projen-github-action-typescript',
  devDeps: ['fs-extra', '@types/fs-extra', 'glob'],
  jsiiVersion: '5.2.x',
  typescriptVersion: '5.2.x',

  autoApproveUpgrades: true,
  autoApproveOptions: { allowedUsernames: ['cdklabs-automation'] },

  // Because this project vends a projen library, as well as is managed by projen itself, we need
  // to do something special here:
  //
  // - Because this project is a projen library, it needs a peerDependency on projen
  // - Because we want to maximize compatibility, that peerDependency should be as low as is
  //   correct (i.e., it should indicate the lowest projen version that
  //   introduces all features we need in the library), and it should not be
  //   auto-upgraded by projen version management tasks.
  // - For the version installed at build time we have 2 options:
  //   1) Just use the latest version and auto-upgrade
  //   2) Use the lowest version we advertise in the peerDep range: that way we are testing
  //      the library against the actual version we are advertising compatibility with, and
  //      don't every upgrade it.
  // - For the best correctness, we should either be using solution (2) or decoupling the
  //   projen versions for executing and for linking. We are choosing to use
  //   solution (1) instead, because we want to be consuming projen updates for managing
  //   repositories at scale, and because having 2 projen versions is awkward and currently
  //   not easily supported. We are aware this solution is slightly incorrect, but it is
  //   unlikely to cause problems in practice so we don't see the need to put in the effort
  //   to fix it (yet).

  // Must use >=, <, because ^ does not have correct semantics for 0.x versions
  peerDeps: [`projen@>=${MIN_SUPPORTED_PROJEN_VERSION} <1`],
  peerDependencyOptions: {
    pinnedDevDependency: false,
  },
});

project.github?.actions.set('actions/upload-artifact@v4', 'actions/upload-artifact@v4.3.6');

project.synth();