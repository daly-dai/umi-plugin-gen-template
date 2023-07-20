import { FormTable } from 'gov-digital-pc-lib';

interface ListInstance {
  pageNum: number;
  pageSize: number;
  total: number;
  dataList: Array<any>;
}

const fieldList = [
  {
    label: '姓名',
    name: 'name',
  },
  {
    label: '年龄',
    name: 'age',
    type: 'inputnumber',
  },
  {
    label: '出生日期',
    name: 'birthday',
    type: 'datepicker',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '出生日期',
    dataIndex: 'birthday',
  },
];

const dataList = [
  {
    name: '测试1',
    age: 11,
    birthday: '2023-01-01',
  },
  {
    name: '测试2',
    age: 12,
    birthday: '2024-01-01',
  },
  {
    name: '测试3',
    age: 13,
    birthday: '2025-01-01',
  },
  {
    name: '测试4',
    age: 14,
    birthday: '2026-01-01',
  },
];

const request = async (): Promise<ListInstance> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        pageNum: 1,
        pageSize: 10,
        total: 4,
        dataList,
      });
    }, 1000);
  });
};

export default () => {
  return (
    <FormTable
      rowKey="name"
      fieldList={fieldList}
      columns={columns}
      request={request}
    />
  );
};
