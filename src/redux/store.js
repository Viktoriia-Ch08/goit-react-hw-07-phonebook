import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filterSlice';
import contactsSlice from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
  },
});
