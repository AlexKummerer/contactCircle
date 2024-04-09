import { createReducer, on } from '@ngrx/store';
import { Contact } from '../../models/contact.model';
import * as ContactActions from './contacts.actions';


export interface ContactState {
  contacts: Contact[];
  error: string | undefined | null;
  redirect: boolean;
}

export const initialState: ContactState = {
  contacts: [],
  error: undefined,
  redirect: false,
};

export const contactReducer = createReducer(
  initialState,


  on(ContactActions.getContactsSuccess, (state, action) => ({
    ...state,
    contacts: action.contacts,
  })),
  on(ContactActions.getContactsFailure, (state, action) => ({
    ...state,
    error: action.error,
  })),
  on(ContactActions.getContactsById, (state, action) => ({
    ...state,
    contacts: state.contacts.filter((contact) => contact.id === action.id),
  })),
  on(ContactActions.addContact, (state, action) => ({
    ...state,
    contacts: [...state.contacts, action.contact],
  })),
  on(ContactActions.updateContact, (state, action) => ({
    ...state,
    contacts: state.contacts.map((contact) =>
      contact.id === action.contact.id ? action.contact : contact
    ),
  })),

  on(ContactActions.updatedContactSuccess, (state, action) => ({
    ...state,
    contacts: [...action.contacts],
    redirect: action.redirect,
  })),



  on(ContactActions.deleteContact, (state, action) => ({
    ...state,
    contacts: state.contacts.filter((contact) => contact.id !== action.id),
  }))
);
