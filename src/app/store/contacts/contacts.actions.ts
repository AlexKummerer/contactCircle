import { createAction, props } from '@ngrx/store';
import { Contact } from '../../models/contact.model';

export const GET_CONTACTS = '[Contacts] Get Contacts';
export const GET_CONTACTS_SUCCESS = '[Contacts] Get Contacts Success';
export const GET_CONTACTS_FAILURE = '[Contacts] Get Contacts Failure';
export const GET_CONTACTS_BY_ID = '[Contacts] Get Contacts By Id';
export const ADD_CONTACT = '[Contacts] Add Contact';
export const UPDATE_CONTACT = '[Contacts] Update Contact';
export const UPDATE_CONTACT_SUCCESS = "[Contacts] Update Contact Sucess";
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
  props<{ id: string }>()
);
export const addContact = createAction(
  ADD_CONTACT,
  props<{ contact: Contact }>()
);
export const updateContact = createAction(
  UPDATE_CONTACT,
  props<{ contact: Contact }>()
);

export const updatedContactSuccess = createAction(
  UPDATE_CONTACT_SUCCESS,
  props<{ contacts: Contact[], redirect: boolean }>()
)

export const deleteContact = createAction(
  DELETE_CONTACT,
  props<{ id: string }>()
);


