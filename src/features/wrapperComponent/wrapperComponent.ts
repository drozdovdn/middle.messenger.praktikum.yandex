import './wrapperComponent.less'
import Block from "../../utils/block";
import {compile} from "../../utils/compile";
import {templater} from "../../templater";
import {WrapperComponentTmpl} from "./wrapperComponent.tmpl";
import {createSocketCanal} from "../../api/api-settings";
import ChatDialog from "../../pages/chat/modules/chatDialog";
import ControlChat from "../../pages/chat/modules/controlChat";
import DialogWindow from "../../pages/chat/modules/dialogWindow";


export class WrapperComponent extends Block {
  soket: any
  token: string | null
  constructor(props: any) {
    super('div', {...props, className: ['wrapper_component']});
    this.soket = null
    this.token = null
  }

  render(): DocumentFragment {
    console.log('WRAPPER', this.props)
    if(this.props?.data_socket?.token) {
      const { data_socket, user } = this.props;
      console.log('SOCKET')
      if (data_socket?.token && this.token !== data_socket?.token) {
        if(this.soket) {
          console.log('CLOSE', this.soket)
          this.soket.close()
          console.log('###', this.soket)

        }
        console.log('&&&&&&&&&&&', this.soket)
        this.soket?.addEventListener('close', () => {
          console.log('Соединение закрыто')
          this.soket = null
          this.soket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);
        })

        this.token = data_socket?.token
        if(!this.soket) {
          this.soket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);
        }


        this.soket?.addEventListener('open', () => {
          console.log('Соединение установлено!');
          this.soket.send(JSON.stringify({ content: 'Мое первое сообщение', type: 'message' }));
        });
      } else {
        // if(this.soket) {
        //   this.soket.close()
        //   this.soket = null
        // }
      }
    }


    return compile(templater, WrapperComponentTmpl, {
      content: new DialogWindow(this.props)
    })
  }
}
//
// function dialogWindows(data: any) {
//   console.log({data})
//   if (data.data_socket) {
//     const { data_socket, user } = data;
//
//     if (data_socket?.token) {
//       const socket = createSocketCanal(`${user?.id}/${data_socket?.id}/${data_socket?.token}`);
//
//       socket?.addEventListener('open', () => {
//         console.log('Соединение установлено!');
//         this.socket.send(JSON.stringify({ content: 'Мое первое сообщение', type: 'message' }));
//       });
//     }
//     console.log('RETURN')
//     return new ChatDialog({
//       header: new Header({ title: data_socket.title, src: data_socket.avatar }),
//       controlChat: new ControlChat(),
//     });
//   } else {
//     console.log('RETURN else')
//     return '<span>Выбериите чат чтобы отправить сообщение</span>';
//   }
// }
