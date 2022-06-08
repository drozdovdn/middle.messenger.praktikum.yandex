import { connect } from '../../store/connect';
import { Profile } from './profile';
import Block from '../../utils/block';
import { EVENT_UPDATE } from '../../store/store';

export default connect(Profile as typeof Block, (s) => s, EVENT_UPDATE.SETTINGS);
