import { Auth } from './auth';
import { connect } from '../../store/connect';

// export default Auth;
export default connect(Auth, (state) => state);
