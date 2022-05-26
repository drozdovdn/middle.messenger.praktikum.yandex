import {ControlChat} from './controlChat';
import {connect} from "../../../../store/connect";
import {EVENT_UPDATE} from "../../../../store/store";

export default connect(ControlChat, (s) => s?.chat?.data_socket, EVENT_UPDATE.CONTROL_CHAT)
