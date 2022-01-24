import React, { memo } from "react";
import { connect } from "react-redux";
import { testAction } from "../../store/actionCreator";

const Index = memo(function Index(props) {
  console.log(props);
  return <div>发现音乐 </div>;
});

const stateToProps = (state) => ({
  test: state.test,
});
const actionToProps = (dispatch) => ({
  updateTest() {
    dispatch(testAction(1));
  },
});

export default connect(stateToProps, actionToProps)(Index);
