import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://653a2108e3b530c8d9e934a5.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      debugger;

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deletedContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactsIds, thunkAPI) => {
    try {
      return Promise.all(
        contactsIds.map(async id => {
          const response = await axios.delete(`/contacts/${id}`);
          return response.data.id;
        })
      );
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
