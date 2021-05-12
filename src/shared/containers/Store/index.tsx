import React, { FC, useReducer } from 'react'
import Context from '../../../store/config/config'
import userReducer, { userStore } from 'store/userStore'
import { actionType } from 'types'

const Store: FC = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, userStore)

  const triggerDispatchs = (action: actionType) => {
    const dispatchs = [userDispatch]

    dispatchs.forEach((dispatch) => dispatch(action))
  }

  const combinedReducers = {
    store: {
      ...userState,
    },
    dispatch: (action: actionType) => triggerDispatchs(action),
  }

  return (
    <Context.Provider value={combinedReducers}>{children}</Context.Provider>
  )
}

export default Store
