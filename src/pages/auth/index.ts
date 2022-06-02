import { Auth } from './auth';
import { connect } from '../../store/connect';
import Block from '../../utils/block';

export default connect(Auth as typeof Block, (state) => state);
