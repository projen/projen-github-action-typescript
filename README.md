## Github Action Typescript Project

Welcome to the home of
[`projen-github-action-typescript`](https://www.npmjs.com/package/projen-github-action-typescript)!

This is an external [`projen`](https://github.com/projen/projen)
project type that aims to make creating GitHub Actions in 
TypeScript easier.

## Usage

```bash
npx projen new --from projen-github-action-typescript
```

## Features

- projen-managed `action.yml` file: write your yaml metadata in `.projenrc.js`,
  where your code is type-checked and available properties are easy to find.

  ```ts
  const project = new GitHubActionTypeScriptProject({
    name: 'my-project',
    defaultReleaseBranch: 'main',
    actionMetadata: {
      runs: {
        using: RunsUsing.NODE_12,
        main: 'dist/index.js',
      },
      inputs: {
        myInput: {
          description: 'my first input',
        },
      },
      outputs: {
        myOutput: {
          description: 'my first output',
        },
      },
    },
  });
  ```

- sensible defaults to JavaScript actions: JavaScript actions come pre-configured
  with the necessary workflow to bundle your source code into one `index.js`
  file that GitHub Actions can execute.

## Future Features

- generate an entrypoint file that receives inputs specified in `action.yml`.
- generate a CLI from `action.yml` inputs to unlock sensible testing of the action.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the Apache-2.0 License.
