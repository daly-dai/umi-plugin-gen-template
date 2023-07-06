import prompts from 'prompts';
import kleur from 'kleur';
import { resolve } from 'path';
import { existsSync } from 'fs';
import fs from 'fs-extra';

import { clearConsole, getPagesUrl, printMsg } from './common';
import { TEMPLATE_LIST, TEMPLATE_MAP } from '../constant';
import { templateType } from '../types';

/**
 * @description 判断src/pages 是否存在相同文件
 * @param projectName
 */
export function isFileExit(projectName: string) {
  const filePath = resolve(getPagesUrl(), projectName);

  // 验证文件是否已经存在，存在则推出进程
  if (existsSync(filePath)) {
    printMsg(kleur.red(`${filePath} 已经存在`));
    process.exit(1);
  }
}

/**
 * 输入文件名称
 * @returns
 */
export async function inputPageName() {
  const response = await prompts({
    name: 'pageName',
    type: 'text',
    message: '请输入模板名称',
  });

  return response;
}

/**
 * 前端模板大类选择
 */
export async function selectTemplate(): Promise<prompts.Answers<string>> {
  // 清空命令行
  clearConsole();
  printMsg('Start initializing the generator');
  printMsg('');

  const response = await prompts<string>([
    {
      name: 'template',
      type: 'select',
      message: 'Check the features needed for your project',
      choices: TEMPLATE_LIST,
    },
  ]);

  return response;
}

/**
 * 根据模板大类选择模板小类
 * @param template
 * @returns
 */
export async function selectPrecisionTemplate(
  template: templateType,
): Promise<prompts.Answers<string>> {
  const currentTem = TEMPLATE_MAP[template];

  const response = await prompts<string>([
    {
      name: 'precisionTemplate',
      type: 'select',
      message: 'Check the features needed for your project',
      choices: currentTem,
    },
  ]);

  return response;
}

/**
 * 获取模板地址
 * @param template 大类
 * @param precisionTemplate 子类
 * @returns
 */
export function getTemplatePath(template: string, precisionTemplate: string) {
  const templatePath = resolve(
    __dirname,
    `../template/${template}/${precisionTemplate}`,
  );

  return templatePath;
}

/**
 * 生成目标文件
 * @param templatePath 模板文件夹的地址
 * @param folderPath 复制的目标地址
 */
export async function generatorTemplate(
  templatePath: string,
  folderPath: string,
) {
  try {
    // 使用fs-extra中的copy函数复制目录
    await fs.copy(templatePath, folderPath);
  } catch (err) {
    console.error(err);
  }
}


/**
 * 去除指定文件下tpl的后缀名称
 * @param folderPath 
 */
export async function removeTplFileName(folderPath: string) {
  const files = fs.readdirSync(folderPath);

  files.forEach((file, index) => {
    const fileName = file.replace(/.tpl/g, '');

    fs.rename(`${folderPath}/${files[index]}`, `${folderPath}/${fileName}`)
  })
}