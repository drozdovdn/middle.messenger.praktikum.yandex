export const apiSettings = {
  baseUrl: 'https://ya-praktikum.tech/api/v2',
  wssUrl: 'wss://ya-praktikum.tech/ws',
};
/**
 * BaseUrlWss/chatList/USER_ID/CHAT_ID/TOKEN_VALUE
 * @param url -> USER_ID/CHAT_ID/TOKEN_VALUE
 */
export const createSocketCanal = (url: string) => {
  const socket = new WebSocket(`${apiSettings.wssUrl}/chats/${url}`);
  return socket;
};
