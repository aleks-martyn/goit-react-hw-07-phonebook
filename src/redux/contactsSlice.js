import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledContacts = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleFulfilledAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, payload];
};

const handleFulfilledDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(({ id }) => id !== payload);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {},
});

export const contactsReducer = contactsSlice.reducer;
