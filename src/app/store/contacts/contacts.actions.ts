import { createAction, props } from '@ngrx/store';
import { Contact } from '../../models/contact.model';

export const GET_CONTACTS = '[Country] Get Contacts';
export const GET_CONTACTS_SUCCESS = '[Country] Get Contacts Success';
export const GET_CONTACTS_FAILURE = '[Country] Get Contacts Failure';
export const GET_CONTACTS_BY_ID = '[Country] Get Contacts By Id';
export const ADD_CONTACT = '[Country] Add Contact';
export const UPDATE_CONTACT = '[Country] Update Contact';
export const DELETE_CONTACT = '[Country] Delete Contact';

export const getContacts = createAction(GET_CONTACTS);
export const getContactsSuccess = createAction(
  GET_CONTACTS_SUCCESS,
  props<{ contacts: Contact[] }>()
);
export const getContactsFailure = createAction(
  GET_CONTACTS_FAILURE,
  props<{ error: string }>()
);
export const getContactsById = createAction(
  GET_CONTACTS_BY_ID,
  props<{ id: number }>()
);
export const addContact = createAction(
  ADD_CONTACT,
  props<{ contact: Contact }>()
);
export const updateContact = createAction(
  UPDATE_CONTACT,
  props<{ contact: Contact }>()
);
export const deleteContact = createAction(
  DELETE_CONTACT,
  props<{ id: number }>()
);


