import { createSlice } from '@reduxjs/toolkit';
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
  extraReducers: {
    //fetchContacts
    [fetchContacts.pending](state) {
      setPending(state);
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      setRejected(state, action);
    },

    //addContact
    [addContact.pending](state) {
      setPending(state);
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [addContact.rejected](state, action) {
      setRejected(state, action);
    },

    // deleteContacts
    [deleteContacts.pending](state) {
      setPending(state);
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = state.items.filter(
        contact => !action.payload.includes(contact.id)
      );
    },
    [deleteContacts.rejected](state, action) {
      setRejected(state, action);
    },
  },
});

const setPending = state => {
  state.isLoading = true;
  state.error = null;
};

const setRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const { setFilterValue } = contactsSlice.actions;

export default contactsSlice.reducer;
