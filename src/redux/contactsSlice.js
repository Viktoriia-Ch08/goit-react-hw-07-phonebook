import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
    },
    deleteContacts: {
      reducer: (state, action) => {
        debugger;
        state.contacts = state.contacts.filter(
          element => !action.payload.includes(element.id)
        );
      },
    },
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
