import { templateType } from '../types';
import { getPagesUrl, getProjectPath, printMsg } from '../utils/common';
import {
  generatorTemplate,
  getTemplatePath,
  isFileExit,
  removeTplFileName,
  selectPrecisionTemplate,
  selectTemplate,
} from '../utils/generator';

export default async function createTemplate(pageName: string) {

  isFileExit(pageName);

  const { template } = (await selectTemplate()) as { template: templateType };

  const { precisionTemplate } = await selectPrecisionTemplate(template);

  const templatePath = getTemplatePath(template, precisionTemplate);

  await generatorTemplate(templatePath, getProjectPath(pageName, getPagesUrl()));

  removeTplFileName(getProjectPath(pageName, getPagesUrl()));

  printMsg("模板生成成功")
}
