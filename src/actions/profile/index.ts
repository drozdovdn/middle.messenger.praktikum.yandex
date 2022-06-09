import { Store } from '../../store/store';
import { profileApi } from '../../features/addAvatarModal/change-avatar-api';

const store = new Store();

export const changeAvatar = (data: FormData) => {
  profileApi.changeAvatar(data).then((res) => {
    if (res.status === 200) {
      const modal = document.querySelector('.add-avatar-modal');
      modal?.classList.add('hidden-modal');

      const { response } = res;
      store.set('user', JSON.parse(response));
    }
  });
};
