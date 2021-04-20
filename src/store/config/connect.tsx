import React from "react";
import Context from "./config";

const Connect = Component => {
  return (props) => (
    <Context.Consumer>
      {({ dispatch, store }) => {
        return <Component {...props} {...store} dispatch={dispatch} />;
      }}
    </Context.Consumer>
  );
};

export default Connect;
