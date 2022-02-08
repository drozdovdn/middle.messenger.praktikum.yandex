type ItemPros = { [key: string]: string };
type StoreProps = {
  inputSettings: ItemPros;
  changePassword: ItemPros;
};
export const Store: StoreProps = {
  inputSettings: {
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Иван',
    phone: '+79099673030',
  },
  changePassword: {
    oldPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  },
};
