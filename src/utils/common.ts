import { resolve } from 'path';

/**
 * 打印信息
 * @param msg 信息
 */
export function printMsg(msg: string): void {
  console.log(msg);
}

/**
 * 清空命令行
 */
export function clearConsole(): void {
  console.clear();
}

/**
 * 获取项目中pages的路径
 * @returns pages路径
 */
export function getPagesUrl(): string {
  return resolve(process.cwd(), './src/pages');
}

/**
 * 获取指定路径
 * @param pageName 项目名
 */
export function getProjectPath(pageName: string, path?: string): string {
  const filePath = path || process.cwd();

  return resolve(filePath, pageName);
}
