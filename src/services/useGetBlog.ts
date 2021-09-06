import { useEffect, useState } from 'react';

import { API_URL } from '../constants';
import { requestData } from './requestDataFunctions';

export default function useGetBlog() {
  const [blog, setBlog] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [isError, setError] = useState({
    hasError: false,
    errorStatusCode: '',
    errorMessage: '',
  });

  useEffect(() => {
    const endpoint = `${API_URL}/blog`;
    setFetching(true);

    requestData(endpoint, 'GET').then((res: any) => {
      const statusCode = res.statusCode.toString();
      if (statusCode.match(/^[23]\d{2}$/)) {
        const newBlog = res.data.map((item: any) => {
          return {
            id: item.id,
            title: item.title,
            text: item.text,
          };
        });
        setBlog(newBlog);
        setFetching(false);
      } else {
        setFetching(false);
        setError({
          hasError: true,
          errorStatusCode: res.statusCode,
          errorMessage:
            res.data.message || 'Щось пішло не так, спробуйте знову.',
        });
      }
    });
  }, []);

  return { blog, isFetching, isError };
}
