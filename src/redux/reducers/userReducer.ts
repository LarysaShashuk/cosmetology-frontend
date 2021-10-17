import { UserStateType } from '../../types/types';

const initialState = {
  currentUser: {}, 
  isAuth: false,
};

const blogReducer = (state: UserStateType = initialState, action: any) => {
  switch (action.type) {
    

    default:
      return state;
  }
};

export default blogReducer;