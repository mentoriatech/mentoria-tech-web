import { actionType } from './config/types'

export const userStore = {
  user: {}
};

const UserStore = (state = userStore, action: actionType) => {
  switch (action.type) {
      case 'USER':
        return {
          ...state,
          ...action.state,
        }
    default:
      return state;
  }
};

export const setUser = (state: any) => {
  return {
    type: 'USER',
    state
  };
};

export default UserStore;
