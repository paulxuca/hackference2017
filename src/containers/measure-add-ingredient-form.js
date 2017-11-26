import {connect} from 'react-redux';
import Form from '../components/measure-add-ingredient-form';
import {onAddItem} from '../redux';

const mapStateToProps = state => ({
    ...state.measure.detailsForProduct
});

const mapDispatchToProps = dispatch => ({
    onSubmit: () => dispatch(onAddItem({
        units: 10
    }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
