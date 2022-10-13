import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: true,
    userData: {},
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {setLogin, setUserData} = userSlice.actions;
export default userSlice.reducer;
