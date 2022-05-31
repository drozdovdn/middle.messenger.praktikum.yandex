import {DialogMessage} from "./dialogMessage";
import {connect} from "../../../../store/connect";
import {EVENT_UPDATE} from "../../../../store/store";

export default connect(DialogMessage, (s) => {
  return { data_message: s?.messages}
}, EVENT_UPDATE.MESSAGES)

