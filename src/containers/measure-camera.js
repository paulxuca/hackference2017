import {connect} from 'react-redux';
import Camera from '../components/measure-camera';
import {onReceiveBarCode} from '../redux';

const mapDispatchToProps = {
    onBarCode: onReceiveBarCode
};

export default connect(null, mapDispatchToProps)(Camera);
