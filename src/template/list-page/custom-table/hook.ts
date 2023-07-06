import { FormInstance } from 'antd';
import { useEffect, useState } from 'react';

interface ResultData<T> {
  pageNum: number;
  pageSize: number;
  totalSize: number;
  dataList: Array<T>;
}
async function testFetch(params: any): Promise<ResultData<any>> {
  console.log(params);

  return new Promise((resolve) => {
    const result = {
      pageNum: 1,
      pageSize: 10,
      totalSize: 0,
      dataList: [],
    };

    resolve(result);
  });
}

const useTemplate = (form: FormInstance<any>) => {
  const [totalSize, setTotalSize] = useState(0);
  const [params, setParams] = useState({
    pageNum: 1,
    pageSize: 10,
  });

  const [pageData, setPageData] = useState<any[]>([]);

  const setParamsData = (data: any) => {
    setParams((pre) => ({
      ...pre,
      ...data,
    }));
  };

  const getPageData = async () => {
    const result = await testFetch(params);

    if (!result) return;

    const listData = result?.dataList || [];

    setTotalSize(result.totalSize || 0);
    setPageData(listData || []);
  };

  const handleReset = () => {
    setParams({
      pageNum: 1,
      pageSize: 10,
    });
  };

  const searchTableData = () => {
    const params = form.getFieldsValue();

    setParamsData(params);
  };

  useEffect(() => {
    getPageData();
  }, [params]);

  return {
    pageData,
    totalSize,
    params,
    searchTableData,
    handleReset,
    setParamsData,
  };
};

export default useTemplate;
