import { Component, SampleDir } from 'projen';
import { GitHubActionTypeScriptProject } from './project';
import { GitHubActionSourceCode } from './source-code';

export class SampleCode extends Component {
  constructor(project: GitHubActionTypeScriptProject, optionsFile?: boolean) {
    super(project);

    const indexCode = [
      'import * as core from \'@actions/core\';',
      'import { loadActionOptions } from \'./options.generated.ts\';',
      '',
      'async function run() {',
      '  const options = loadActionOptions();',
      '  console.log(options);',
      '}',
      '',
      'run().catch(error => {',
      '  core.setFailed(error.message);',
      '});',
      '',
    ].join('\n');

    if (optionsFile) {
      const sourceCode = new GitHubActionSourceCode(project);
      new SampleDir(project, project.srcdir, {
        files: {
          'index.ts': indexCode,
          'options.generated.ts': sourceCode.generatedOptionsCode.join('\n'),
        },
      });
    } else {
      new SampleDir(project, project.srcdir, {
        files: {
          'index.ts': indexCode,
        },
      });
    }
  }
}