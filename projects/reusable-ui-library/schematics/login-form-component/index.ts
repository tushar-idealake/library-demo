import {
  apply,
  applyTemplates,
  chain,
  externalSchematic,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { strings, normalize } from '@angular-devkit/core';
import { LoginComponentSchema } from './login-form-component';

export function LoginFormComponentGenerator(
  options: LoginComponentSchema
): Rule {
  return () => {
    const templateSource = apply(url('./files'), [
      applyTemplates({
        classify: strings.classify,
        dasherize: strings.dasherize,
        name: options.name,
      }),
      move(normalize(`/${options.path}/${strings.dasherize(options.name)}`)),
    ]);
    return chain([
      externalSchematic('@schematics/angular', 'component', options),
      mergeWith(templateSource, MergeStrategy.Overwrite),
    ]);
  };
}

export function addLoader(obj: { type: string }): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const content: Buffer | null = tree.read('./src/app/app.component.html');
    let strContent: string = '';
    let classContent: string = '';
    if (content) strContent = content.toString();

    if (obj.type) {
      classContent = obj.type;
    } else {
      classContent = 'pacman';
    }
    const content2Append = `   <form-generic-spinner type="${classContent}"></form-generic-spinner> \n`;
    const updatedContent = strContent + content2Append;

    tree.overwrite('./src/app/app.component.html', updatedContent);
    return tree;
  };
}
