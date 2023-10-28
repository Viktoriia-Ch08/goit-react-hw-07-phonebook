import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContacts,
  fetchContacts,
} from './operations/operations';

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => !action.payload.includes(contact.id)
        );
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContacts.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContacts.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setFilterValue } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
