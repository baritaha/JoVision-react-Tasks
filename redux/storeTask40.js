import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'savedTextClass',
  initialState: '',
  reducers: {
    setSavedTextClass: (state, action) => action.payload,
  },
});

export const { setSavedTextClass } = textSlice.actions;
export default textSlice.reducer; // 🔥 Export only the reducer
