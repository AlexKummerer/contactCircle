import { createReducer, on } from '@ngrx/store';
import { Contact } from '../../models/contact.model';
import * as ContactActions from './contacts.actions';
import { Gender } from '../../enums/gender';
import { JobStatus } from '../../enums/jobstatus';

export interface ContactState {
  contacts: Contact[];
  error: string | undefined | null;
}

export const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      phoneNumber2: '0987654321',
      birthdate: new Date('1990-01-01'),
      jobStatus: JobStatus.ENPLOYED,
      gender: Gender.MAN,
      address: {
        street: '123 Main St',
        addressLine2: 'Apt 4B',
        postalCode: '12345',
        city: 'New York',
        country: 'USA',
      },
    },
    {
      id: 2,
      firstName: 'MArk',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      phoneNumber2: '0987654321',
      birthdate: new Date('1990-01-01'),
      jobStatus: JobStatus.HOUSEWIFE,
      gender: Gender.MAN,
      address: {
        street: '123 Main St',
        addressLine2: 'Apt 4B',
        postalCode: '12345',
        city: 'New York',
        country: 'USA',
      },
    },
  ],
  error: undefined,
};

export const contactReducer = createReducer(
  initialState,
  on(ContactActions.getContacts, (state) => ({
    ...state,
  })),

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
  on(ContactActions.deleteContact, (state, action) => ({
    ...state,
    contacts: state.contacts.filter((contact) => contact.id !== action.id),
  }))
);
