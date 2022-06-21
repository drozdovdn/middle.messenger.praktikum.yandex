import { Avatar } from './avatar';
import { EVENT_UPDATE } from '../../../../store/store';
import { connect } from '../../../../store/connect';
import Block from '@utils/block';

export default connect(Avatar as typeof Block, (s) => ({ user: s.user }), EVENT_UPDATE.SETTINGS);
