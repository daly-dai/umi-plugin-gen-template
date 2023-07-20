# umi-plugin-gen-template

A umi plugin

## Install

```bash
pnpm i umi-plugin-gen-template -D
```

## Usage

Configure in `.umirc.ts`,

```js
export default {
  plugins: [["umi-plugin-gen-template"]],
};
```

## 使用方式

```json
"scripts":{
  "gen": "max gt",
}
```

### 控制台输入

```bash
npm run gen 文件名
// 例
npm run gen home
```

## 相关模板

### 目前内置了两套模板

`form`与`list`可以根据自己的需要进行选择

## todo

模板配置的更加灵活，或者变更为在线模板

## LICENSE

MIT
