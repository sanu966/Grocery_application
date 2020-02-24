import Register from '../../components/register/registerForm';
import { connect } from "react-redux";
const mapStateToProps = state => ({ cartProducts: state.plp.cartProducts });

export default connect(mapStateToProps, {})(Register);