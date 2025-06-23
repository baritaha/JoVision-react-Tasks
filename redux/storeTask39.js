import { configureStore, createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'savedText',
  initialState: '',
  reducers: {
    setSavedText: (state, action) => action.payload,
  },
});

export const { setSavedText } = textSlice.actions;

export default configureStore({
  reducer: {
    savedText: textSlice.reducer,
  },
});
