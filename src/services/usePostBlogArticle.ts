import { useEffect, useState } from 'react';

import { API_URL } from '../constants';
import { requestData } from './requestDataFunctions';

interface BodyProps {
  id: string;
  title: string;
  text: string;
}

export default function usePostBlogArticle(body: BodyProps) {
  const [isFetching, setFetching] = useState(false);
  const [isError, setError] = useState({
    hasError: false,
    errorStatusCode: '',
    errorMessage: '',
  });

  useEffect(() => {
    const endpoint = `${API_URL}/blog/`;
    setFetching(true);

    requestData(endpoint, 'POST', body)
      .then((res: any) => {
        const statusCode = res.statusCode.toString();

        if (statusCode.match(/^[23]\d{2}$/)) {
          setError({ hasError: false, errorStatusCode: '', errorMessage: '' });
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
      })
      .catch((error) => {
        setError({
          hasError: true,
          errorStatusCode: error.statusCode,
          errorMessage: 'Щось пішло не так, спробуйте знову.',
        });
      });
  }, [body]);

  return { isFetching, isError };
}
