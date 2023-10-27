import { createSelector } from '@reduxjs/toolkit';

const selectPhonebook = state => state.contacts;

export const selectFilterValue = createSelector(
  selectPhonebook,
  contacts => contacts.filter
);

export const selectContacts = createSelector(
  selectPhonebook,
  contacts => contacts.items
);

export const selectIsLoading = createSelector(
  selectPhonebook,
  contacts => contacts.isLoading
);

export const selectError = createSelector(
  selectPhonebook,
  contacts => contacts.error
);
