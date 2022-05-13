import * as path from 'path';
import { SourceCode, typescript, YamlFile } from 'projen';
import { GitHubActionMetadata } from './github-action-metadata';
import { RunsUsing } from './model/actions-metadata-model';
import { SampleCode } from './sample-code';
import { GitHubActionSourceCode } from './source-code';
import { upperCase } from './utils';

/**
 * Properties for creating a GitHubActionTypeScriptProject.
 */
export interface GitHubActionTypeScriptOptions extends typescript.TypeScriptProjectOptions {
  /**
   * Options for the GitHub Action metadata stored in `action.yml`.
   *
   * @default - an action named after the project `name` that runs from `dist/index.js`.
   */
  readonly actionMetadata?: GitHubActionMetadata;

  /**
   * Let Projen manage index.ts and action-options.ts source code.
   *
   * @default true
   */
  readonly manageOptionsFile?: boolean;

  /**
   * The name of your action. This will get used in code generation.
   * For example,
   *
   * ```ts
   * export interface <actionName>Options {
   *   readonly token: string;
   * }
   * ```
   *
   * @default - same as the name of your project
   */
  readonly actionName?: string;
}

/**
 * Create a GitHub Action with TypeScript.
 *
 * @pjid github-action-ts
 */
export class GitHubActionTypeScriptProject extends typescript.TypeScriptProject {
  public readonly actionMetadata: GitHubActionMetadata;
  public readonly actionName: string;

  constructor(options: GitHubActionTypeScriptOptions) {
    super({
      ...options,
      sampleCode: false,
    });

    this.actionName = upperCase(options.actionName ?? this.name);

    // standard GitHub action packages
    this.addDeps('@actions/core', '@actions/github');

    // package as a single runnable .js file in /dist
    this.addDevDeps('@vercel/ncc');
    this.packageTask.reset('ncc build --source-map --license licenses.txt');

    this.package.addField('main', 'lib/index.js');
    this.addGitIgnore('!/dist/');
    this.annotateGenerated('/dist/**');

    // Create metadata for projen managed `action.yml` file.
    const defaultMetadataOptions: GitHubActionMetadata = {
      name: this.name,
      description: `A GitHub Action for ${this.name}`,
      runs: {
        using: RunsUsing.NODE_16,
        main: 'dist/index.js',
      },
    };

    this.actionMetadata = {
      ...defaultMetadataOptions,
      ...options.actionMetadata,
    };

    new YamlFile(this, 'action.yml', {
      obj: this.actionMetadata,
    });

    if (options.sampleCode ?? true) {
      // If you don't let projen manage files for you, we'll still add it as sample code
      new SampleCode(this, !options.manageOptionsFile);
    }

    // Let projen manage options.generated.ts for you
    if (options.manageOptionsFile ?? true) {
      const source = new GitHubActionSourceCode(this);
      const actionOptionsSrc = new SourceCode(this, path.join(this.srcdir, 'options.generated.ts'));
      renderSource(actionOptionsSrc, source.generatedOptionsCode);
    }
  }
}

function renderSource(src: SourceCode, content: string[]) {
  if (src.marker) {
    src.line(`// ${src.marker}`);
  }

  for (const line of content) {
    src.line(line);
  }
}
