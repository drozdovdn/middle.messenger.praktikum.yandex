function fetchWithRetry(url, options) {
  const requery = new HTTPTransport();
  return requery.get(url, options);
}
type DataProps = XMLHttpRequestBodyInit;

type MethodProps = 'GET' | 'POST' | 'PUT' | 'DELETE';

type OptionsProps = {
  method: MethodProps;
  timeout?: number;
  data?: DataProps;
  headers?: { [key: string]: string };
};

const METHODS: { [k: string]: MethodProps } = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export class HTTPTransport {
  get = (url: string, options: OptionsProps) => {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };

  put = (url: string, options: OptionsProps) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  post = (url: string, options: OptionsProps) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  delete = (url: string, options: OptionsProps) => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  // options:
  // headers — obj
  // data — obj
  request = (url: string, options: OptionsProps, timeout = 5000) => {
    const { method, data, headers = { 'content-type': 'application/json' } } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === METHODS.GET) {
        xhr.open(method, url + queryStringify(data));
      } else {
        xhr.open(method, url);
      }

      if (Object.values(headers).lenght !== 0) {
        Object.keys(headers).forEach((item) => {
          xhr.setRequestHeader(item, headers[item]);
        });
      }

      xhr.timeout = timeout;

      xhr.withCredentials = true;

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

/**
 *
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: DataProps): string {
  let result = '?';
  if (!data) {
return '';
}
  Object.keys(data).forEach((item) => {
    if (Array.isArray(data[item])) {
      result += `${item }=${ data[item].join(',') }&`;
    } else {
      result += `${item }=${ data[item] }&`;
    }
  });

  return result.slice(0, result.length - 1);
}
