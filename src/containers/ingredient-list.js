import {connect} from 'react-redux';
import List from '../components/ingredient-list';

const mapStateToProps = state => ({
    ingredients: state.measure.ingredients
});

export default connect(mapStateToProps)(List);
