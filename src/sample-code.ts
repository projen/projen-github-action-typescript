import { Component, SampleDir } from 'projen';
import { GitHubActionTypeScriptProject } from './project';
import { GitHubActionSourceCode } from './source-code';

export class SampleCode extends Component {
  constructor(project: GitHubActionTypeScriptProject, additionalFiles?: boolean) {
    super(project);

    const actionCode = [
      '// import * as github from \'@actions/github\';',
      'import { ActionManagerOptions } from \'./action-options\';',
      '',
      'export class ActionManager {',
      '',
      '  constructor(options: ActionManagerOptions) {',
      '    console.log(options);',
      '  }',
      '',
      '  main() {',
      '    // this is your action\'s entrypoint',
      '  }',
      '}',
    ].join('\n');

    if (additionalFiles) {
      const sourceCode = new GitHubActionSourceCode(project);
      new SampleDir(project, project.srcdir, {
        files: {
          'action.ts': actionCode,
          'index.ts': sourceCode.indexCode.join('\n'),
          'action-options.ts': sourceCode.actionOptionsCode.join('\n'),
        },
      });
    } else {
      new SampleDir(project, project.srcdir, {
        files: {
          'action.ts': actionCode,
        },
      });
    }
  }
}