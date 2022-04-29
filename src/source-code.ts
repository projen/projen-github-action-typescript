import { Component } from 'projen';
import { GitHubActionMetadata } from './github-action-metadata';
import { Type } from './model/actions-metadata-model';
import { GitHubActionTypeScriptProject } from './project';

interface PropType {
  readonly name: string;
  readonly type: Type;
  readonly required: boolean;
  readonly default?: string;
  readonly description: string;
}

export class GitHubActionSourceCode extends Component {
  private includeListFunction = false;
  private includeNumberFunction = false;
  private properties: Record<string, PropType> = {};

  /**
   * Code for options.generated.ts
   */
  public generatedOptionsCode: string[];

  constructor(project: GitHubActionTypeScriptProject) {
    super(project);

    this.getProperties(project.actionMetadata);

    const optionsInterface = `${project.actionName}Options`;
    this.generatedOptionsCode = [
      'import * as core from \'@actions/core\';',
      '',
      `export interface ${optionsInterface} {`,
      ...this.renderOptions(indent(1)),
      '}',
      '',
      `export function loadActionOptions(): ${optionsInterface} {`,
      '  return {',
      ...this.getInputs(indent(2)),
      '  };',
      '}',
      ...renderListFunction(this.includeListFunction),
      ...renderNumberFunction(this.includeNumberFunction),
    ];

  }

  private getProperties(actionMetadata: GitHubActionMetadata) {
    for (const [key, input] of Object.entries(actionMetadata.inputs ?? {})) {
      this.properties[key] = {
        name: sanitize(key),
        type: input.type ?? Type.STRING,
        required: input.required ?? false,
        default: input.default,
        description: input.description,
      };
    }
  }

  private getInputs(ind: string): string[] {
    const result = [];
    for (const [key, { name, type }] of Object.entries(this.properties)) {
      result.push(`${ind}${name}: ${this.getTypedInput(type, key)},`);
    }
    return result;
  }

  private getTypedInput(type: Type, key: string): string {
    let core = `core.getInput('${key}')`;

    switch (type) {
      case Type.STRING: {
        return core;
      }
      case Type.NUMBER: {
        return `Number(${core})`;
      }
      case Type.STRING_LIST: {
        this.includeListFunction = true;
        return `${LIST_FUNCTION}(${core})`;
      }
      case Type.NUMBER_LIST: {
        this.includeNumberFunction = true;
        return `${NUMBER_FUNCTION}(${LIST_FUNCTION}(${core}))`;
      }
      case Type.JSON: {
        return `JSON.parse(${core})`;
      }
    }
  }

  private renderOptions(ind: string): string[] {
    const result = [];
    for (const prop of Object.values(this.properties)) {
      for (const doc of docString(prop.description, prop.default)) {
        result.push(doc);
      }
      result.push(`${ind}readonly ${prop.name}${prop.required ? '' : '?'}: ${prop.type};`);
    }
    return result;

    function docString(desc: string, def?: string): string[] {
      const doc = [
        `${ind}/**`,
        `${ind} * ${desc}`,
      ];

      if (def) {
        doc.push(`${ind} *`);
        doc.push(`${ind} * @default - ${def}`);
      }

      doc.push(`${ind} */`);
      return doc;
    }
  }
}

function sanitize(name: string): string {
  const words = name.split('-');
  words[0].charAt(0).toLocaleLowerCase();
  for (let i = 1; i < words.length; i++) {
    words[i].charAt(0).toLocaleUpperCase();
  }
  return words.join('');
}

const LIST_FUNCTION = 'renderListInput';
function renderListFunction(include: boolean): string[] {
  if (!include) { return []; }
  return [
    '',
    '/**',
    ' * Renders a TypeScript list based on what we expect the list to look like in yaml.',
    ' * We expect to see something like "[item1,item2]". GitHub will return \'\' if the input',
    ' * is not defined, which will get translated by this function to [].',
    ' */',
    `function ${LIST_FUNCTION}(rawInput: string): string[] {`,
    '  return (rawInput === \'\' || rawInput === \'[]\') ? [] : rawInput.replace(/\\[|\\]/gi, \'\').split(\',\');',
    '}',
  ];
}

const NUMBER_FUNCTION = 'toNumberList';
function renderNumberFunction(include: boolean): string[] {
  if (!include) { return []; }
  return [
    '',
    `function ${NUMBER_FUNCTION}(list: string[]): number[] {`,
    '  return list.map((i) => Number(i));',
    '}',
  ];
}

function indent(len: number): string {
  return '  '.repeat(len);
}
