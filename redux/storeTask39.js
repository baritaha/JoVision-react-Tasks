import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'savedText',
  initialState: '',
  reducers: {
    setSavedText: (state, action) => action.payload,
  },
});

export const { setSavedText } = textSlice.actions;
export default textSlice.reducer; // 🔥 Export only the reducer
