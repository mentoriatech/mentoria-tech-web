import React, { useReducer } from 'react'
import Context from '../../../store/config/config'
import userReducer, { userStore } from 'store/userStore'


const Store = props => {
  const [userState, userDispatch] = useReducer(
    userReducer,
    userStore
  );

  const triggerDispatchs = (action) => {

    const dispatchs = [
      userDispatch,
    ]

    dispatchs.forEach(dispatch => dispatch(action))
  }

  const combinedReducers = {
    store: {
      ...userState,
    },
    dispatch: (action: string) => triggerDispatchs(action)
  };

  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;
