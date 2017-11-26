import {connect} from 'react-redux';
import Measure from '../components/measure';

const mapStateToProps = state => ({
    isAddingIngredient: state.measure.isCameraOpen || state.measure.isFillingDetails
});

export default connect(mapStateToProps)(Measure);
