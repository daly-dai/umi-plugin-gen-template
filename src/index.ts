import type { IApi } from 'umi';

import createTemplate from './order/generator';

export default (api: IApi) => {
  api.describe({
    key: 'generator:tem',
  });

  api.registerCommand({
    name: 'genTem',
    alias: 'gt',
    details: 'umi generate template',
    description: 'generate code snippets quickly',
    // strict 模式下强校验 Umi 项目的配置文件内容，如果有非法内容中断命令执行；loose 模式下不执行配置文件的校验检查
    configResolveMode: 'loose',
    async fn({ args }) {
      const [pageName] = args._;

      createTemplate(pageName);
    },
  });
};
