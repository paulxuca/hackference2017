import {connect} from 'react-redux';
import Empty from '../components/measure-empty';
import {onStartAddItem} from '../redux';

const mapDispatchToProps = {
    onPress: onStartAddItem
};

export default connect(null, mapDispatchToProps)(Empty);
