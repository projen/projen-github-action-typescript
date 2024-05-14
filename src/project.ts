import { typescript, YamlFile } from 'projen';
import { GitHubActionMetadata } from './github-action-metadata';
import { RunsUsing } from './model/actions-metadata-model';

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
}

/**
 * Create a GitHub Action with TypeScript.
 *
 * @pjid github-action-ts
 */
export class GitHubActionTypeScriptProject extends typescript.TypeScriptProject {
  constructor(options: GitHubActionTypeScriptOptions) {
    super(options);

    // standard GitHub action packages
    this.addDeps('@actions/core', '@actions/github');

    // package as a single runnable .js file in /dist
    this.addDevDeps('@vercel/ncc');
    this.packageTask.reset('ncc build --source-map --license licenses.txt');

    this.package.addField('main', options.entrypoint ?? 'lib/index.js');
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

    new YamlFile(this, 'action.yml', {
      obj: {
        ...defaultMetadataOptions,
        ...options.actionMetadata,
      },
    });
  }
}