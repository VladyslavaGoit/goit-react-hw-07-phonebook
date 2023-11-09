import { createSelector } from '@reduxjs/toolkit';

export const getContacts = store => store.contacts.contacts;

export const getIsLoading = store => store.contacts.isLoading;

export const getError = store => store.contacts.error;

export const getFilter = store => store.filter.value;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
