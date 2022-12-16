import { synthSnapshot } from 'projen/lib/util/synth';
import { GitHubActionTypeScriptProject } from '../src';
import { RunsUsing } from '../src/model/actions-metadata-model';

describe('GitHubActionTypeScriptProject', () => {
  test('default action metadata', () => {
    const project = new GitHubActionTypeScriptProject({
      name: 'test',
      defaultReleaseBranch: 'main',
    });

    const workflow = synthSnapshot(project)['action.yml'];
    expect(workflow).toContain(
      'runs:\n  using: node16\n  main: dist/index.js',
    );
  });

  test('custom action metadata', () => {
    const project = new GitHubActionTypeScriptProject({
      name: 'test',
      defaultReleaseBranch: 'main',
      actionMetadata: {
        runs: {
          using: RunsUsing.NODE_12,
          main: 'dist/index.js',
        },
        inputs: {
          input1: {
            description: 'my first input',
          },
        },
        outputs: {
          output1: {
            description: 'my first output',
          },
        },
      },
    });

    const workflow = synthSnapshot(project)['action.yml'];
    expect(workflow).toContain(
      'runs:\n  using: node12\n  main: dist/index.js',
    );
    expect(workflow).toContain(
      'inputs:\n  input1:\n    description: my first input',
    );
  });
});