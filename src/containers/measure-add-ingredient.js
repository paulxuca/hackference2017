import {connect} from 'react-redux';
import Component from '../components/measure-add-ingredient';

const mapStateToProps = state => ({
    ...state.measure
});

export default connect(mapStateToProps)(Component);
