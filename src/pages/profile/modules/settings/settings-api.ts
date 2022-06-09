import { HTTPTransport } from '../../../../utils/http-transport';
import { apiSettings } from '../../../../api/api-settings';
const { baseUrl } = apiSettings;
const http = new HTTPTransport(`${baseUrl }/user`);

export const settingsApi = {
  postUser: (data: Record<string, unknown>) => {
    return http.get(`/${data?.id}`, {});
  },
};
