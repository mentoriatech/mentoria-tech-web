import React from 'react'

interface StateProps {
  store: object;
  dispatch: (action: string) => void;
}

export const initialState : StateProps = {
  store: {},
  dispatch: (action) => {},
}

const Context = React.createContext(initialState)

export default Context

