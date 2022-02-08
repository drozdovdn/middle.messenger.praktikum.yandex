export const isEmail = (email: string): string => {
  return /^([\w_\-\.])+\@([\w_\-\.])+\.([A-Za-z]{2,4})$/.test(email) ? email : '';
};
export const isLogin = (login: string): string => {
  return /^(?!\d+$)[\w-]{3,20}$/.test(login) ? login : '';
};
export const isName = (name: string): string => {
  return /^[A-ZА-Я]([A-ZА-Яa-zа-я-]*|\S*)$/.test(name) ? name : '';
};
export const isPassword = (password: string): string => {
  return /^(?=.*[A-ZА-Я])(?=.*\d)[A-Za-zА-Яа-я\d\S]{8,40}$/.test(password) ? password : '';
};
export const isPhone = (phone: string): string => {
  return /^(\+*(\d){10,15})$/.test(phone) ? phone : '';
};
