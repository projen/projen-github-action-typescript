import { Testing } from 'projen';
import { Type } from '../src/github-action-metadata';
import { RunsUsing } from '../src/model/actions-metadata-model';
import { GitHubActionTypeScriptOptions, GitHubActionTypeScriptProject } from '../src/project';

describe('GitHubActionTypeScriptProject', () => {
  test('default action metadata', () => {
    const project = new GitHubActionTypeScriptProject({
      name: 'test',
      defaultReleaseBranch: 'main',
    });

    const snapshot = Testing.synth(project);
    const workflow = snapshot['action.yml'];
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

    const snapshot = Testing.synth(project);
    const workflow = snapshot['action.yml'];
    expect(workflow).toContain(
      'runs:\n  using: node12\n  main: dist/index.js',
    );
    expect(workflow).toContain(
      'inputs:\n  input1:\n    description: my first input',
    );
  });

  describe('source code', () => {
    test('default source code', () => {
      const project = sampleProject();

      const snapshot = Testing.synth(project);
      const generatedIndex = snapshot['src/index.ts'];
      expect(generatedIndex).toMatchSnapshot();
      const generatedActionOptions = snapshot['src/options.generated.ts'];
      expect(generatedActionOptions).toMatchSnapshot();
    });

    test('refuse projen managed source code', () => {
      const project = sampleProject({
        manageOptionsFile: false,
      });

      // same sample code, but not projen managed
      const snapshot = Testing.synth(project);
      const generatedIndex = snapshot['src/index.ts'];
      expect(generatedIndex).toMatchSnapshot();
      const generatedActionOptions = snapshot['src/options.generated.ts'];
      expect(generatedActionOptions).toMatchSnapshot();
    });

    test('refuse sample code altogether', () => {
      const project = sampleProject({
        sampleCode: false,
        manageOptionsFile: false,
      });

      // no sample code generated
      const snapshot = Testing.synth(project);
      expect(snapshot['src/index.ts']).toBeUndefined();
      expect(snapshot['src/options.generated.ts']).toBeUndefined();
    });
  });
});

function sampleProject(overrides: Partial<GitHubActionTypeScriptOptions> = {}): GitHubActionTypeScriptProject {
  return new GitHubActionTypeScriptProject({
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
          required: true,
          type: Type.STRING,
        },
        input2: {
          description: 'my second input',
          default: '0',
          type: Type.NUMBER,
        },
        input3: {
          description: 'my third input',
          default: '[first, second]',
          type: Type.STRING_LIST,
        },
        input4: {
          description: 'my fourth input',
          required: true,
          type: Type.NUMBER_LIST,
        },
        input5: {
          description: 'my fifth input',
          default: '{}',
          type: Type.JSON,
        },
      },
    },
    ...overrides,
  });
}