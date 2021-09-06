import { useEffect, useState } from 'react';

import { API_URL } from '../constants';
import { requestData } from './requestDataFunctions';

export default function useGetBlogArticle(id: string) {
  const [article, setArticle] = useState({
    id: '',
    title: '',
    text: '',
  });
  const [isFetching, setFetching] = useState(false);
  const [isError, setError] = useState({
    hasError: false,
    errorStatusCode: '',
    errorMessage: '',
  });

  useEffect(() => {
    const endpoint = `${API_URL}/blog/${id}`;
    setFetching(true);

    requestData(endpoint, 'GET').then((res: any) => {
      const statusCode = res.statusCode.toString();

      if (statusCode.match(/^[23]\d{2}$/)) {
        const newArticle = res.data;
        setArticle(newArticle);
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
  }, [id]);

  return { article, isFetching, isError };
}
