# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### ActionMetadata <a name="ActionMetadata" id="projen-github-action-typescript.ActionMetadata"></a>

A Github Action Metadata file definition.

#### Initializer <a name="Initializer" id="projen-github-action-typescript.ActionMetadata.Initializer"></a>

```typescript
import { ActionMetadata } from 'projen-github-action-typescript'

const actionMetadata: ActionMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.ActionMetadata.property.description">description</a></code> | <code>string</code> | A short description of the action. |
| <code><a href="#projen-github-action-typescript.ActionMetadata.property.name">name</a></code> | <code>string</code> | The name of your action. |
| <code><a href="#projen-github-action-typescript.ActionMetadata.property.runs">runs</a></code> | <code><a href="#projen-github-action-typescript.JavaScriptRuns">JavaScriptRuns</a> \| <a href="#projen-github-action-typescript.CompositeRuns">CompositeRuns</a> \| <a href="#projen-github-action-typescript.DockerRuns">DockerRuns</a></code> | Specifies whether this is a JavaScript action, a composite action, or a Docker container action and how the action is executed. |
| <code><a href="#projen-github-action-typescript.ActionMetadata.property.author">author</a></code> | <code>string</code> | The name of the action's author. |
| <code><a href="#projen-github-action-typescript.ActionMetadata.property.branding">branding</a></code> | <code><a href="#projen-github-action-typescript.Branding">Branding</a></code> | You can use a color and a Feather icon to create a badge to personalize and distinguish your action. |
| <code><a href="#projen-github-action-typescript.ActionMetadata.property.inputs">inputs</a></code> | <code>{[ key: string ]: <a href="#projen-github-action-typescript.Input">Input</a>}</code> | Input parameters allow you to specify data that the action expects to use during runtime. |
| <code><a href="#projen-github-action-typescript.ActionMetadata.property.outputs">outputs</a></code> | <code>{[ key: string ]: <a href="#projen-github-action-typescript.Output">Output</a>}</code> | Output parameters allow you to declare data that an action sets. |

---

##### `description`<sup>Required</sup> <a name="description" id="projen-github-action-typescript.ActionMetadata.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short description of the action.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-github-action-typescript.ActionMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of your action.

GitHub displays the `name` in the Actions tab to
help visually identify actions in each job.

---

##### `runs`<sup>Required</sup> <a name="runs" id="projen-github-action-typescript.ActionMetadata.property.runs"></a>

```typescript
public readonly runs: JavaScriptRuns | CompositeRuns | DockerRuns;
```

- *Type:* <a href="#projen-github-action-typescript.JavaScriptRuns">JavaScriptRuns</a> | <a href="#projen-github-action-typescript.CompositeRuns">CompositeRuns</a> | <a href="#projen-github-action-typescript.DockerRuns">DockerRuns</a>

Specifies whether this is a JavaScript action, a composite action, or a Docker container action and how the action is executed.

---

##### `author`<sup>Optional</sup> <a name="author" id="projen-github-action-typescript.ActionMetadata.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* none

The name of the action's author.

---

##### `branding`<sup>Optional</sup> <a name="branding" id="projen-github-action-typescript.ActionMetadata.property.branding"></a>

```typescript
public readonly branding: Branding;
```

- *Type:* <a href="#projen-github-action-typescript.Branding">Branding</a>
- *Default:* no branding

You can use a color and a Feather icon to create a badge to personalize and distinguish your action.

Badges are shown next to your action name in
GitHub Marketplace.

> [https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#branding](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#branding)

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="projen-github-action-typescript.ActionMetadata.property.inputs"></a>

```typescript
public readonly inputs: {[ key: string ]: Input};
```

- *Type:* {[ key: string ]: <a href="#projen-github-action-typescript.Input">Input</a>}
- *Default:* {}

Input parameters allow you to specify data that the action expects to use during runtime.

GitHub stores input parameters as environment variables.
Input ids with uppercase letters are converted to lowercase during runtime.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="projen-github-action-typescript.ActionMetadata.property.outputs"></a>

```typescript
public readonly outputs: {[ key: string ]: Output};
```

- *Type:* {[ key: string ]: <a href="#projen-github-action-typescript.Output">Output</a>}
- *Default:* {}

Output parameters allow you to declare data that an action sets.

This is
useful for actions that run later in a workflow, as they can use the output
data set in previously run actions.

If you don't declare an output in your action metadata file, you can still
set outputs and use them in a workflow.

> [https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter)

---

### ActionStep <a name="ActionStep" id="projen-github-action-typescript.ActionStep"></a>

Definition for a step used in a composite action.

#### Initializer <a name="Initializer" id="projen-github-action-typescript.ActionStep.Initializer"></a>

```typescript
import { ActionStep } from 'projen-github-action-typescript'

const actionStep: ActionStep = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.ActionStep.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Sets environment variables for steps to use in the runner environment. |
| <code><a href="#projen-github-action-typescript.ActionStep.property.id">id</a></code> | <code>string</code> | A unique identifier for the step. |
| <code><a href="#projen-github-action-typescript.ActionStep.property.if">if</a></code> | <code>string</code> | You can use the if conditional to prevent a job from running unless a condition is met. |
| <code><a href="#projen-github-action-typescript.ActionStep.property.name">name</a></code> | <code>string</code> | A name for your step to display on GitHub. |
| <code><a href="#projen-github-action-typescript.ActionStep.property.run">run</a></code> | <code>string</code> | Runs command-line programs using the operating system's shell. |
| <code><a href="#projen-github-action-typescript.ActionStep.property.uses">uses</a></code> | <code>string</code> | Selects an action to run as part of a step in your job. |
| <code><a href="#projen-github-action-typescript.ActionStep.property.with">with</a></code> | <code>{[ key: string ]: any}</code> | A map of the input parameters defined by the action. |
| <code><a href="#projen-github-action-typescript.ActionStep.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | Specifies a working directory for a step. |
| <code><a href="#projen-github-action-typescript.ActionStep.property.shell">shell</a></code> | <code>string</code> | Which shell to use for running the step. |

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-github-action-typescript.ActionStep.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets environment variables for steps to use in the runner environment.

You can also set environment variables for the entire workflow or a job.

---

##### `id`<sup>Optional</sup> <a name="id" id="projen-github-action-typescript.ActionStep.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the step.

You can use the id to reference the
step in contexts.

---

##### `if`<sup>Optional</sup> <a name="if" id="projen-github-action-typescript.ActionStep.property.if"></a>

```typescript
public readonly if: string;
```

- *Type:* string

You can use the if conditional to prevent a job from running unless a condition is met.

You can use any supported context and expression to
create a conditional.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-github-action-typescript.ActionStep.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for your step to display on GitHub.

---

##### `run`<sup>Optional</sup> <a name="run" id="projen-github-action-typescript.ActionStep.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

Runs command-line programs using the operating system's shell.

If you do
not provide a name, the step name will default to the text specified in
the run command.

---

##### `uses`<sup>Optional</sup> <a name="uses" id="projen-github-action-typescript.ActionStep.property.uses"></a>

```typescript
public readonly uses: string;
```

- *Type:* string

Selects an action to run as part of a step in your job.

An action is a
reusable unit of code. You can use an action defined in the same
repository as the workflow, a public repository, or in a published Docker
container image.

---

##### `with`<sup>Optional</sup> <a name="with" id="projen-github-action-typescript.ActionStep.property.with"></a>

```typescript
public readonly with: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A map of the input parameters defined by the action.

Each input parameter
is a key/value pair. Input parameters are set as environment variables.
The variable is prefixed with INPUT_ and converted to upper case.

---

##### `workingDirectory`<sup>Optional</sup> <a name="workingDirectory" id="projen-github-action-typescript.ActionStep.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

Specifies a working directory for a step.

Overrides a job's working directory.

---

##### `shell`<sup>Optional</sup> <a name="shell" id="projen-github-action-typescript.ActionStep.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

Which shell to use for running the step.

---

*Example*

```typescript
"bash"
```


### Branding <a name="Branding" id="projen-github-action-typescript.Branding"></a>

Definition for branding the GitHub Action.

#### Initializer <a name="Initializer" id="projen-github-action-typescript.Branding.Initializer"></a>

```typescript
import { Branding } from 'projen-github-action-typescript'

const branding: Branding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.Branding.property.color">color</a></code> | <code>string</code> | The background color of the badge. |
| <code><a href="#projen-github-action-typescript.Branding.property.icon">icon</a></code> | <code>string</code> | The name of the v4.28.0 Feather icon to use. Brand icons are omitted. See link for additional omitted icons as well as an exhaustive list of currently supported icons:. |

---

##### `color`<sup>Required</sup> <a name="color" id="projen-github-action-typescript.Branding.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

The background color of the badge.

Can be one of:
- `white`
- `yellow`
- `blue`
- `green`
- `orange`
- `red`
- `purple`
- `gray-dark`

---

##### `icon`<sup>Required</sup> <a name="icon" id="projen-github-action-typescript.Branding.property.icon"></a>

```typescript
public readonly icon: string;
```

- *Type:* string

The name of the v4.28.0 Feather icon to use. Brand icons are omitted. See link for additional omitted icons as well as an exhaustive list of currently supported icons:.

> [https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#brandingicon](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#brandingicon)

---

### CompositeRuns <a name="CompositeRuns" id="projen-github-action-typescript.CompositeRuns"></a>

Runs property for a composite action.

#### Initializer <a name="Initializer" id="projen-github-action-typescript.CompositeRuns.Initializer"></a>

```typescript
import { CompositeRuns } from 'projen-github-action-typescript'

const compositeRuns: CompositeRuns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.CompositeRuns.property.steps">steps</a></code> | <code><a href="#projen-github-action-typescript.ActionStep">ActionStep</a>[]</code> | The steps that you plan to run in a composite action. |
| <code><a href="#projen-github-action-typescript.CompositeRuns.property.using">using</a></code> | <code><a href="#projen-github-action-typescript.RunsUsing">RunsUsing</a></code> | The runtime used to execute the specified code. |

---

##### `steps`<sup>Required</sup> <a name="steps" id="projen-github-action-typescript.CompositeRuns.property.steps"></a>

```typescript
public readonly steps: ActionStep[];
```

- *Type:* <a href="#projen-github-action-typescript.ActionStep">ActionStep</a>[]

The steps that you plan to run in a composite action.

---

##### `using`<sup>Required</sup> <a name="using" id="projen-github-action-typescript.CompositeRuns.property.using"></a>

```typescript
public readonly using: RunsUsing;
```

- *Type:* <a href="#projen-github-action-typescript.RunsUsing">RunsUsing</a>

The runtime used to execute the specified code.

For JavaScript actions:
- use `RunsUsing.NODE_12` for Node.js v12.
- use `RunsUsing.NODE_16` for Node.js v16.

For composite actions:
- use `RunsUsing.COMPOSITE`

For docker container actions:
- use `RunsUsing.DOCKER`

---

### DockerRuns <a name="DockerRuns" id="projen-github-action-typescript.DockerRuns"></a>

Runs property for a Docker container action.

#### Initializer <a name="Initializer" id="projen-github-action-typescript.DockerRuns.Initializer"></a>

```typescript
import { DockerRuns } from 'projen-github-action-typescript'

const dockerRuns: DockerRuns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.DockerRuns.property.image">image</a></code> | <code>string</code> | The Docker image to use as the container to run the action. |
| <code><a href="#projen-github-action-typescript.DockerRuns.property.using">using</a></code> | <code><a href="#projen-github-action-typescript.RunsUsing">RunsUsing</a></code> | The runtime used to execute the specified code. |
| <code><a href="#projen-github-action-typescript.DockerRuns.property.entrypoint">entrypoint</a></code> | <code>string</code> | Overrides the Docker `ENTRYPOINT` in the Dockerfile, or sets it if one was not already specified. |
| <code><a href="#projen-github-action-typescript.DockerRuns.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Specifies a key/value map of environment variables to set in the container environment. |
| <code><a href="#projen-github-action-typescript.DockerRuns.property.postEntrypoint">postEntrypoint</a></code> | <code>string</code> | Allows you to run a cleanup script once `entrypoint` action has completed. |
| <code><a href="#projen-github-action-typescript.DockerRuns.property.preEntrypoint">preEntrypoint</a></code> | <code>string</code> | Allows you to run a script before the `entrypoint` action begins. |

---

##### `image`<sup>Required</sup> <a name="image" id="projen-github-action-typescript.DockerRuns.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

The Docker image to use as the container to run the action.

---

##### `using`<sup>Required</sup> <a name="using" id="projen-github-action-typescript.DockerRuns.property.using"></a>

```typescript
public readonly using: RunsUsing;
```

- *Type:* <a href="#projen-github-action-typescript.RunsUsing">RunsUsing</a>

The runtime used to execute the specified code.

For JavaScript actions:
- use `RunsUsing.NODE_12` for Node.js v12.
- use `RunsUsing.NODE_16` for Node.js v16.

For composite actions:
- use `RunsUsing.COMPOSITE`

For docker container actions:
- use `RunsUsing.DOCKER`

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen-github-action-typescript.DockerRuns.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* uses `ENTRYPOINT` instruction in Dockerfile.

Overrides the Docker `ENTRYPOINT` in the Dockerfile, or sets it if one was not already specified.

---

##### `env`<sup>Optional</sup> <a name="env" id="projen-github-action-typescript.DockerRuns.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies a key/value map of environment variables to set in the container environment.

---

##### `postEntrypoint`<sup>Optional</sup> <a name="postEntrypoint" id="projen-github-action-typescript.DockerRuns.property.postEntrypoint"></a>

```typescript
public readonly postEntrypoint: string;
```

- *Type:* string
- *Default:* no post script

Allows you to run a cleanup script once `entrypoint` action has completed.

---

##### `preEntrypoint`<sup>Optional</sup> <a name="preEntrypoint" id="projen-github-action-typescript.DockerRuns.property.preEntrypoint"></a>

```typescript
public readonly preEntrypoint: string;
```

- *Type:* string
- *Default:* no pre script

Allows you to run a script before the `entrypoint` action begins.

---

### GitHubActionMetadata <a name="GitHubActionMetadata" id="projen-github-action-typescript.GitHubActionMetadata"></a>

A Github Action Metadata file definition.

#### Initializer <a name="Initializer" id="projen-github-action-typescript.GitHubActionMetadata.Initializer"></a>

```typescript
import { GitHubActionMetadata } from 'projen-github-action-typescript'

const gitHubActionMetadata: GitHubActionMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.GitHubActionMetadata.property.runs">runs</a></code> | <code><a href="#projen-github-action-typescript.JavaScriptRuns">JavaScriptRuns</a> \| <a href="#projen-github-action-typescript.CompositeRuns">CompositeRuns</a> \| <a href="#projen-github-action-typescript.DockerRuns">DockerRuns</a></code> | Specifies whether this is a JavaScript action, a composite action, or a Docker container action and how the action is executed. |
| <code><a href="#projen-github-action-typescript.GitHubActionMetadata.property.author">author</a></code> | <code>string</code> | The name of the action's author. |
| <code><a href="#projen-github-action-typescript.GitHubActionMetadata.property.branding">branding</a></code> | <code><a href="#projen-github-action-typescript.Branding">Branding</a></code> | You can use a color and a Feather icon to create a badge to personalize and distinguish your action. |
| <code><a href="#projen-github-action-typescript.GitHubActionMetadata.property.description">description</a></code> | <code>string</code> | A short description of the action. |
| <code><a href="#projen-github-action-typescript.GitHubActionMetadata.property.inputs">inputs</a></code> | <code>{[ key: string ]: <a href="#projen-github-action-typescript.Input">Input</a>}</code> | Input parameters allow you to specify data that the action expects to use during runtime. |
| <code><a href="#projen-github-action-typescript.GitHubActionMetadata.property.name">name</a></code> | <code>string</code> | The name of your action. |
| <code><a href="#projen-github-action-typescript.GitHubActionMetadata.property.outputs">outputs</a></code> | <code>{[ key: string ]: <a href="#projen-github-action-typescript.Output">Output</a>}</code> | Output parameters allow you to declare data that an action sets. |

---

##### `runs`<sup>Required</sup> <a name="runs" id="projen-github-action-typescript.GitHubActionMetadata.property.runs"></a>

```typescript
public readonly runs: JavaScriptRuns | CompositeRuns | DockerRuns;
```

- *Type:* <a href="#projen-github-action-typescript.JavaScriptRuns">JavaScriptRuns</a> | <a href="#projen-github-action-typescript.CompositeRuns">CompositeRuns</a> | <a href="#projen-github-action-typescript.DockerRuns">DockerRuns</a>

Specifies whether this is a JavaScript action, a composite action, or a Docker container action and how the action is executed.

---

##### `author`<sup>Optional</sup> <a name="author" id="projen-github-action-typescript.GitHubActionMetadata.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string
- *Default:* none

The name of the action's author.

---

##### `branding`<sup>Optional</sup> <a name="branding" id="projen-github-action-typescript.GitHubActionMetadata.property.branding"></a>

```typescript
public readonly branding: Branding;
```

- *Type:* <a href="#projen-github-action-typescript.Branding">Branding</a>
- *Default:* no branding

You can use a color and a Feather icon to create a badge to personalize and distinguish your action.

Badges are shown next to your action name in
GitHub Marketplace.

> [https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#branding](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#branding)

---

##### `description`<sup>Optional</sup> <a name="description" id="projen-github-action-typescript.GitHubActionMetadata.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* a basic description is provided for you

A short description of the action.

---

##### `inputs`<sup>Optional</sup> <a name="inputs" id="projen-github-action-typescript.GitHubActionMetadata.property.inputs"></a>

```typescript
public readonly inputs: {[ key: string ]: Input};
```

- *Type:* {[ key: string ]: <a href="#projen-github-action-typescript.Input">Input</a>}
- *Default:* {}

Input parameters allow you to specify data that the action expects to use during runtime.

GitHub stores input parameters as environment variables.
Input ids with uppercase letters are converted to lowercase during runtime.

---

##### `name`<sup>Optional</sup> <a name="name" id="projen-github-action-typescript.GitHubActionMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* this.name

The name of your action.

GitHub displays the `name` in the Actions tab to
help visually identify actions in each job.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="projen-github-action-typescript.GitHubActionMetadata.property.outputs"></a>

```typescript
public readonly outputs: {[ key: string ]: Output};
```

- *Type:* {[ key: string ]: <a href="#projen-github-action-typescript.Output">Output</a>}
- *Default:* {}

Output parameters allow you to declare data that an action sets.

This is
useful for actions that run later in a workflow, as they can use the output
data set in previously run actions.

If you don't declare an output in your action metadata file, you can still
set outputs and use them in a workflow.

> [https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter)

---

### GitHubActionTypeScriptOptions <a name="GitHubActionTypeScriptOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions"></a>

Properties for creating a GitHubActionTypeScriptProject.

#### Initializer <a name="Initializer" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.Initializer"></a>

```typescript
import { GitHubActionTypeScriptOptions } from 'projen-github-action-typescript'

const gitHubActionTypeScriptOptions: GitHubActionTypeScriptOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with @codeCovTokenSecret. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use github workflows to handle dependency upgrades. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions.property.actionMetadata">actionMetadata</a></code> | <code><a href="#projen-github-action-typescript.GitHubActionMetadata">GitHubActionMetadata</a></code> | Options for the GitHub Action metadata stored in `action.yml`. |

---

##### `name`<sup>Required</sup> <a name="name" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="buildWorkflowTriggers" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.buildWorkflowTriggers"></a>

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `actionMetadata`<sup>Optional</sup> <a name="actionMetadata" id="projen-github-action-typescript.GitHubActionTypeScriptOptions.property.actionMetadata"></a>

```typescript
public readonly actionMetadata: GitHubActionMetadata;
```

- *Type:* <a href="#projen-github-action-typescript.GitHubActionMetadata">GitHubActionMetadata</a>
- *Default:* an action named after the project `name` that runs from `dist/index.js`.

Options for the GitHub Action metadata stored in `action.yml`.

---

### Input <a name="Input" id="projen-github-action-typescript.Input"></a>

Define an input to a GitHub Action.

#### Initializer <a name="Initializer" id="projen-github-action-typescript.Input.Initializer"></a>

```typescript
import { Input } from 'projen-github-action-typescript'

const input: Input = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.Input.property.description">description</a></code> | <code>string</code> | A description of the input parameter. |
| <code><a href="#projen-github-action-typescript.Input.property.default">default</a></code> | <code>string</code> | The default value when the input parameter is not specified in the workflow file. |
| <code><a href="#projen-github-action-typescript.Input.property.deprecationMessage">deprecationMessage</a></code> | <code>string</code> | If this parameter is set, it will be logged as a warning message if the input parameter is used. |
| <code><a href="#projen-github-action-typescript.Input.property.required">required</a></code> | <code>boolean</code> | Indicate whether the action requires the input parameter. |

---

##### `description`<sup>Required</sup> <a name="description" id="projen-github-action-typescript.Input.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the input parameter.

---

##### `default`<sup>Optional</sup> <a name="default" id="projen-github-action-typescript.Input.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

The default value when the input parameter is not specified in the workflow file.

This is required if `required=true`.

---

##### `deprecationMessage`<sup>Optional</sup> <a name="deprecationMessage" id="projen-github-action-typescript.Input.property.deprecationMessage"></a>

```typescript
public readonly deprecationMessage: string;
```

- *Type:* string
- *Default:* none

If this parameter is set, it will be logged as a warning message if the input parameter is used.

---

##### `required`<sup>Optional</sup> <a name="required" id="projen-github-action-typescript.Input.property.required"></a>

```typescript
public readonly required: boolean;
```

- *Type:* boolean
- *Default:* false

Indicate whether the action requires the input parameter.

---

### JavaScriptRuns <a name="JavaScriptRuns" id="projen-github-action-typescript.JavaScriptRuns"></a>

Runs property for a JavaScript Action.

#### Initializer <a name="Initializer" id="projen-github-action-typescript.JavaScriptRuns.Initializer"></a>

```typescript
import { JavaScriptRuns } from 'projen-github-action-typescript'

const javaScriptRuns: JavaScriptRuns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.JavaScriptRuns.property.main">main</a></code> | <code>string</code> | The file that contains your action code. |
| <code><a href="#projen-github-action-typescript.JavaScriptRuns.property.using">using</a></code> | <code><a href="#projen-github-action-typescript.RunsUsing">RunsUsing</a></code> | The runtime used to execute the specified code. |
| <code><a href="#projen-github-action-typescript.JavaScriptRuns.property.post">post</a></code> | <code>string</code> | Allows you to run a script at the end of a job, once the `main` action has completed. |
| <code><a href="#projen-github-action-typescript.JavaScriptRuns.property.postIf">postIf</a></code> | <code>string</code> | Allows you to define conditions for the `post` action execution. |
| <code><a href="#projen-github-action-typescript.JavaScriptRuns.property.pre">pre</a></code> | <code>string</code> | Allows you to run a script at the start of a job, before the `main` action begins. |
| <code><a href="#projen-github-action-typescript.JavaScriptRuns.property.preIf">preIf</a></code> | <code>string</code> | Allows you to define conditions for the `pre` action execution. |

---

##### `main`<sup>Required</sup> <a name="main" id="projen-github-action-typescript.JavaScriptRuns.property.main"></a>

```typescript
public readonly main: string;
```

- *Type:* string

The file that contains your action code.

The runtime specified in the
`using` property executes this file.

---

##### `using`<sup>Required</sup> <a name="using" id="projen-github-action-typescript.JavaScriptRuns.property.using"></a>

```typescript
public readonly using: RunsUsing;
```

- *Type:* <a href="#projen-github-action-typescript.RunsUsing">RunsUsing</a>

The runtime used to execute the specified code.

For JavaScript actions:
- use `RunsUsing.NODE_12` for Node.js v12.
- use `RunsUsing.NODE_16` for Node.js v16.

For composite actions:
- use `RunsUsing.COMPOSITE`

For docker container actions:
- use `RunsUsing.DOCKER`

---

##### `post`<sup>Optional</sup> <a name="post" id="projen-github-action-typescript.JavaScriptRuns.property.post"></a>

```typescript
public readonly post: string;
```

- *Type:* string
- *Default:* no post steps

Allows you to run a script at the end of a job, once the `main` action has completed.

---

##### `postIf`<sup>Optional</sup> <a name="postIf" id="projen-github-action-typescript.JavaScriptRuns.property.postIf"></a>

```typescript
public readonly postIf: string;
```

- *Type:* string
- *Default:* no conditions

Allows you to define conditions for the `post` action execution.

The
`post` action will only run if the conditions in `postIf` are met.

For example, you can include the condition `runner.os == 'linux'` and
`post` will only run on Linux-based runners.

---

##### `pre`<sup>Optional</sup> <a name="pre" id="projen-github-action-typescript.JavaScriptRuns.property.pre"></a>

```typescript
public readonly pre: string;
```

- *Type:* string
- *Default:* no pre steps

Allows you to run a script at the start of a job, before the `main` action begins.

---

##### `preIf`<sup>Optional</sup> <a name="preIf" id="projen-github-action-typescript.JavaScriptRuns.property.preIf"></a>

```typescript
public readonly preIf: string;
```

- *Type:* string

Allows you to define conditions for the `pre` action execution.

The
`pre` action will only run if the conditions in `preIf` are met.

For example, you can include the condition `runner.os == 'linux'` and
`pre` will only run on Linux-based runners.

---

### Output <a name="Output" id="projen-github-action-typescript.Output"></a>

Define an output in a GitHub Action.

#### Initializer <a name="Initializer" id="projen-github-action-typescript.Output.Initializer"></a>

```typescript
import { Output } from 'projen-github-action-typescript'

const output: Output = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.Output.property.description">description</a></code> | <code>string</code> | The description of the output parameter. |
| <code><a href="#projen-github-action-typescript.Output.property.value">value</a></code> | <code>string</code> | The value that the output parameter will be mapped to. |

---

##### `description`<sup>Required</sup> <a name="description" id="projen-github-action-typescript.Output.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the output parameter.

---

##### `value`<sup>Optional</sup> <a name="value" id="projen-github-action-typescript.Output.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value that the output parameter will be mapped to.

This property is required if you are using composite actions,
and must be omitted otherwise.

---

## Classes <a name="Classes" id="Classes"></a>

### GitHubActionTypeScriptProject <a name="GitHubActionTypeScriptProject" id="projen-github-action-typescript.GitHubActionTypeScriptProject"></a>

Create a GitHub Action with TypeScript.

#### Initializers <a name="Initializers" id="projen-github-action-typescript.GitHubActionTypeScriptProject.Initializer"></a>

```typescript
import { GitHubActionTypeScriptProject } from 'projen-github-action-typescript'

new GitHubActionTypeScriptProject(options: GitHubActionTypeScriptOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.Initializer.parameter.options">options</a></code> | <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions">GitHubActionTypeScriptOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="projen-github-action-typescript.GitHubActionTypeScriptProject.Initializer.parameter.options"></a>

- *Type:* <a href="#projen-github-action-typescript.GitHubActionTypeScriptOptions">GitHubActionTypeScriptOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `pattern`<sup>Required</sup> <a name="pattern" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

---

##### `addTask` <a name="addTask" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="projen-github-action-typescript.GitHubActionTypeScriptProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="projen-github-action-typescript.GitHubActionTypeScriptProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="projen-github-action-typescript.GitHubActionTypeScriptProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="projen-github-action-typescript.GitHubActionTypeScriptProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="projen-github-action-typescript.GitHubActionTypeScriptProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="projen-github-action-typescript.GitHubActionTypeScriptProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="projen-github-action-typescript.GitHubActionTypeScriptProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="projen-github-action-typescript.GitHubActionTypeScriptProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="projen-github-action-typescript.GitHubActionTypeScriptProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="projen-github-action-typescript.GitHubActionTypeScriptProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-github-action-typescript.GitHubActionTypeScriptProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="projen-github-action-typescript.GitHubActionTypeScriptProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-github-action-typescript.GitHubActionTypeScriptProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="projen-github-action-typescript.GitHubActionTypeScriptProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-github-action-typescript.GitHubActionTypeScriptProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="projen-github-action-typescript.GitHubActionTypeScriptProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="projen-github-action-typescript.GitHubActionTypeScriptProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="projen-github-action-typescript.GitHubActionTypeScriptProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="projen-github-action-typescript.GitHubActionTypeScriptProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="projen-github-action-typescript.GitHubActionTypeScriptProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="projen-github-action-typescript.GitHubActionTypeScriptProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="projen-github-action-typescript.GitHubActionTypeScriptProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="projen-github-action-typescript.GitHubActionTypeScriptProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="projen-github-action-typescript.GitHubActionTypeScriptProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="projen-github-action-typescript.GitHubActionTypeScriptProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="projen-github-action-typescript.GitHubActionTypeScriptProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="projen-github-action-typescript.GitHubActionTypeScriptProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-github-action-typescript.GitHubActionTypeScriptProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="projen-github-action-typescript.GitHubActionTypeScriptProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---


## Enums <a name="Enums" id="Enums"></a>

### RunsUsing <a name="RunsUsing" id="projen-github-action-typescript.RunsUsing"></a>

The GitHub Action runtime or composite/docker identifier.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-github-action-typescript.RunsUsing.NODE_12">NODE_12</a></code> | "node12". |
| <code><a href="#projen-github-action-typescript.RunsUsing.NODE_16">NODE_16</a></code> | "node16". |
| <code><a href="#projen-github-action-typescript.RunsUsing.COMPOSITE">COMPOSITE</a></code> | "composite". |
| <code><a href="#projen-github-action-typescript.RunsUsing.DOCKER">DOCKER</a></code> | "docker". |

---

##### `NODE_12` <a name="NODE_12" id="projen-github-action-typescript.RunsUsing.NODE_12"></a>

"node12".

---


##### `NODE_16` <a name="NODE_16" id="projen-github-action-typescript.RunsUsing.NODE_16"></a>

"node16".

---


##### `COMPOSITE` <a name="COMPOSITE" id="projen-github-action-typescript.RunsUsing.COMPOSITE"></a>

"composite".

---


##### `DOCKER` <a name="DOCKER" id="projen-github-action-typescript.RunsUsing.DOCKER"></a>

"docker".

---

