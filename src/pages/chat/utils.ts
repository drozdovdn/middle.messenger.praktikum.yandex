import AddDelete from './modules/addDelete';
import InputForm from '../../components/inputForm';
import Input from '../../components/input';
import Button from '../../components/button';
import { createNewChat } from '../../actions/chat';

export const createChat = () => {
  const modal = document.querySelector('.add-chat');
  let title = '';
  if (modal) {
    modal.classList.remove('hidden-modal');
  } else {
    const modalCreateChat = new AddDelete({
      title: 'Создать чат',
      className: ['add-chat'],
      input: new InputForm({
        label: 'Название чата',
        input: new Input({
          name: 'name',
          type: 'text',
          value: title,
          events: {
            change: (e: any) => {
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
          },
        },
      }),
      events: {
        click: (e: any) => {
          if (e?.srcElement?.classList?.value === 'add-chat') {
            e?.target?.classList?.add('hidden-modal');
            console.log(e);
          }
        },
      },
    });
    const root: HTMLDivElement | null = document.querySelector('.root');
    if (root) {
      root.appendChild(modalCreateChat.getContent() as Node);
    }
  }
};
