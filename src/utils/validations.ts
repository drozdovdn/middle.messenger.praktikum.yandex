export const isEmail = (email: string): boolean => {
  return /^([a-zA-Z0-9_.-])+@(([a-zA-Z])+\.)+([a-zA-Z0-9]{2,})+$/.test(email);
};
export const isLogin = (login: string): boolean => {
  return true;
};
export const isName = (login: string): boolean => {
  return true;
};
export const isPassword = (password: string): boolean => {
  return /(?=.*\d)([a-z/а-я])(?=.*[A-Z/А-Я]).{8,40}/.test(password);
};

export const isPhone = (phone: string): boolean => {
  return /^(\+)[\d]{10,15}$/.test(phone);
};
