
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './contacts-actions';

const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];


export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => {state.push(payload)},
  [deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

// import { createReducer } from '@reduxjs/toolkit';
// import { addContact, deleteContact } from './contacts-actions';

// const initialState = JSON.parse(window.localStorage.getItem('contacts')) ?? [];

// export const contactsReducer = createReducer(initialState, builder => {
//   builder
//     .addCase(addContact, (state, { payload }) => {
//       state.push(payload);
//     })
//     .addCase(deleteContact, (state, { payload }) => {
//       state = state.filter(contact => contact.id !== payload);
//     });
// });

