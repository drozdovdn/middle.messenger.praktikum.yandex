import AddDelete from './modules/addDelete';
import InputForm from '../../components/inputForm';
import Input from '../../components/input';
import Button from '../../components/button';
import { createNewChat } from '../../actions/chat';

export const createChat = () => {
  const modal = document.querySelector('.add-delete-modal');
  let title = '';
  if (modal) {
    modal.classList.remove('hidden-modal');
  } else {
    const modalCreateChat = new AddDelete({
      title: 'Создать чат',
      input: new InputForm({
        label: 'Название чата',
        input: new Input({
          name: 'name',
          type: 'text',
          value: title,
          events: {
            change: (e) => {
              title = e?.target?.value;
            },
          },
        }),
      }),
      button: new Button({
        name: 'Создать',
        className: ['create_chat'],
        events: {
          click: () => {
            createNewChat({ title });
            console.log({ title });
          },
        },
      }),
      events: {
        click: (e) => {
          if (e?.srcElement?.classList?.value === 'add-delete-modal') {
            e?.target?.classList?.add('hidden-modal');
            console.log(e);
          }
        },
      },
    });
    const root: HTMLDivElement | null = document.querySelector('.root');
    if (root) {
      root.appendChild(modalCreateChat.getContent());
    }
  }
};
