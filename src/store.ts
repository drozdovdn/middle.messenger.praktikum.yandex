type ItemPros = Record<string, string>;
type StoreProps = {
  inputSettings: ItemPros;
  changePassword: ItemPros;
  oldData: ItemPros;
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
  oldData: {
    oldPassword: 'Q123456789',
  },
};
