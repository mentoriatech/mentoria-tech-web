import React from 'react'
import { actionType } from 'types'
interface StateProps {
  store: unknown;
  dispatch: (action: actionType) => void;
}

export const initialState: StateProps = {
  store: {},
  dispatch: (action) => action,
}

const Context = React.createContext<StateProps>(initialState)

export default Context
