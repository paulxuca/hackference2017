import {connect} from 'react-redux';
import Prompt from '../components/measure-add-ingredient-prompt';
import {onStartAddItem} from '../redux';

const mapDispatchToProps = {
    onPress: onStartAddItem
};

export default connect(null, mapDispatchToProps)(Prompt);
