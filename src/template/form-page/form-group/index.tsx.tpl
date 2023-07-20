import { Button, Form, Typography } from 'antd';
import { FormGroup } from 'gov-digital-pc-lib';

const groupList = [
  {
    title: '基本信息',
    titleProps: { style: { fontSize: 20 } },
    fieldList: [
      {
        label: '姓名',
        name: 'name',
        colProps: { span: 24 },
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
    ],
  },
  {
    title: (
      <Typography.Title level={4} style={{ width: '100%' }}>
        额外信息
      </Typography.Title>
    ),
    fieldList: [
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
    ],
  },
];

export default () => {
  const [form] = Form.useForm();

  const searchTableData = () => {
    const params = form.getFieldsValue();

    console.log(params, 'params');
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <FormGroup
        form={form}
        groupList={groupList}
        rowProps={{ gutter: 16 }}
        colProps={{ span: 12 }}
      />
      <div style={{ display: 'flex' }}>
        <Button
          type="primary"
          style={{ marginRight: ' 12px' }}
          onClick={searchTableData}
        >
          提交
        </Button>
        <Button onClick={handleReset}>重置</Button>
      </div>
    </div>
  );
};
