import { configureStore } from '@reduxjs/toolkit';
import savedText from './storeTask39';
import savedTextClass from './storeTask40';

const rootStore = configureStore({
  reducer: {
    savedText,
    savedTextClass,
  },
});

export default rootStore;
