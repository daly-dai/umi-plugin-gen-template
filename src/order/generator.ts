import { templateType } from '../types';
import { getPagesUrl, getProjectPath } from '../utils/common';
import {
  generatorTemplate,
  getTemplatePath,
  isFileExit,
  selectPrecisionTemplate,
  selectTemplate,
} from '../utils/generator';

export default async function createTemplate(pageName: string) {
  console.log('start generator');
  isFileExit(pageName);

  const { template } = (await selectTemplate()) as { template: templateType };
  console.log(template, 'template');

  const { precisionTemplate } = await selectPrecisionTemplate(template);

  const templatePath = getTemplatePath(template, precisionTemplate);

  generatorTemplate(templatePath, getProjectPath(pageName, getPagesUrl()));
}
