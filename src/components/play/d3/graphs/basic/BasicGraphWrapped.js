import { connect } from 'react-redux';
import BasicGraph from 'components/play/d3/graphs/basic/BasicGraph';

const mapStateToProps = (state) => {
  return {
    data: state.graphs.basic.data,
  }
}

export default connect(mapStateToProps)(BasicGraph);
