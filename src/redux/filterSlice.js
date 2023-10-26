import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterName(state, action) {
      return action.payload;
    },
  },
});

export const { filterName } = filterSlice.actions;
export default filterSlice.reducer;
