type DataProps = XMLHttpRequestBodyInit;
type ParamsProps = Record<string, unknown>;

type MethodProps = 'GET' | 'POST' | 'PUT' | 'DELETE';

type OptionsProps = {
  method: MethodProps;
  timeout?: number;
  data?: DataProps;
  params?: ParamsProps;
  headers?: Record<string, string>;
};

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export class HTTPTransport {
  get = (url: string, options: OptionsProps) => {
    let urlRequest = url;
    if (options.params && Object.values(options.params).length) {
      urlRequest += queryStringify(options.params);
    }
    return this.request(urlRequest, { ...options, method: METHODS.GET }, options.timeout);
  };

  put = (url: string, options: OptionsProps) => {
    let urlRequest = url;
    if (options.params && Object.values(options.params).length) {
      urlRequest += queryStringify(options.params);
    }
    return this.request(urlRequest, { ...options, method: METHODS.PUT }, options.timeout);
  };

  post = (url: string, options: OptionsProps) => {
    let urlRequest = url;
    if (options.params && Object.values(options.params).length) {
      urlRequest += queryStringify(options.params);
    }
    return this.request(urlRequest, { ...options, method: METHODS.POST }, options.timeout);
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
      xhr.open(method, url);

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

      if (data) {
        xhr.send(data);
      } else {
        xhr.send();
      }
    });
  };
}

/**
 *
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: ParamsProps): string {
  if (!data) {
    return '';
  }
  const result = Object.entries(data).reduce((acc, [name, value]) => {
    if (Array.isArray(value)) {
      return `${acc}${name}=${value.join(',')}&`;
    }
    if (typeof value === 'object') {
      return `${acc}${name}=${JSON.stringify(value)}&`;
    }
    return `${acc}${name}=${value}&`;
  }, '?');
  return result.slice(1, -1);
}
