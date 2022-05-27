import { WrapperComponent} from "./wrapperComponent";
import {connect} from "../../store/connect";
import {EVENT_UPDATE} from "../../store/store";


// export default WrapperComponent;
export default connect(
  WrapperComponent,
  (s) => {
    console.log({ s });
    return {
      user: s.user,
      data_socket: s.chat?.data_socket,
    };
  },
  EVENT_UPDATE.DIALOG_WINDOW
);
