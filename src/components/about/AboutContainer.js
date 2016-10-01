import { connect } from 'react-redux';
import About from 'components/about/About';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    buttonTitle: 'Increment Counter'
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch({ type: 'INCREMENT_ASYNC' }),
  };
}

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(About);
export default AboutContainer;
