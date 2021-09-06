type Response<T extends object> = {
    statusCode: number;
    data: T;
  };
  
  export async function requestData<TData extends object>(
    url: string,
    method: string,
    body?: any
  ): Promise<Response<TData>> {
    const res = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  
    const statusCode = res.status;
    const parseBody = await res.json();
  
    return {
      statusCode,
      data: parseBody as TData,
    };
  }