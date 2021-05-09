import { UserType, actionType } from 'types'

interface SetUserResponse {
  type: string;
  state: UserType;
}

interface UserStore {
  user: UserType;
}

export const userStore = {
  user: {},
}

const UserStore = (state: UserStore, action: actionType): UserStore => {
  switch (action.type) {
    case 'USER':
      return {
        ...state,
        ...action.state,
      }
    default:
      return state
  }
}

export const setUser = (state: UserStore): SetUserResponse => {
  return {
    type: 'USER',
    state,
  }
}

export default UserStore
