import { Contact } from './../../models/contact.model';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ContactActions from './contacts.actions';
import { JobStatus } from '../../enums/jobstatus';
import { Gender } from '../../enums/gender';
import { Router } from '@angular/router';

@Injectable()
export class ContactEffects {
  contacts: Contact[] = [
    new Contact(
      null,
      'John',
      'Doe',
      'john.doe@example.com',
      '1234567890',
      '0987654321',
      new Date('1990-01-01'),
      JobStatus.ENPLOYED,
      Gender.MAN,
      {
        street: '123 Main St',
        addressLine2: 'Apt 4B',
        postalCode: '12345',
        city: 'New York',
        country: 'USA',
      }
    ),

    new Contact(
      null,
      'MArk',
      'Doe',
      'john.doe@example.com',
      '1234567890',
      '0987654321',
      new Date('1990-01-01'),
      JobStatus.HOUSEWIFE,
      Gender.MAN,
      {
        street: '123 Main St',
        addressLine2: 'Apt 4B',
        postalCode: '12345',
        city: 'New York',
        country: 'USA',
      }
    ),
  ];


  loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.GET_CONTACTS),
      switchMap(() => {
        const storedContacts = localStorage.getItem('contacts');
        if (storedContacts) {
          return of(ContactActions.getContactsSuccess({ contacts: JSON.parse(storedContacts) }));
        }
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
        return of(ContactActions.getContactsSuccess({ contacts: this.contacts }));
      })
    )
  );

  addContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.addContact),
      switchMap((action) => {
        const storedContacts = localStorage.getItem('contacts');
        const contacts: Contact[] = storedContacts ? JSON.parse(storedContacts) : [];
        contacts.push(action.contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        return of(ContactActions.updatedContactSuccess({ contacts: contacts, redirect: true}));
      })
    )
  );

  updateContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.updateContact),
      switchMap((action) => {
        const storedContacts = localStorage.getItem('contacts');
        const contacts: Contact[] = storedContacts ? JSON.parse(storedContacts) : [];
        const updatedContacts = contacts.map((contact) =>
          contact.id === action.contact.id ? action.contact : contact
        );
        localStorage.setItem('contacts', JSON.stringify(updatedContacts));
        return of(ContactActions.updatedContactSuccess({ contacts: updatedContacts, redirect: true }));
      })
    )
  );

  updateContactSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactActions.UPDATE_CONTACT_SUCCESS),
      switchMap((_updateSuccesAcion: { contacts: Contact[], redirect: boolean } ) => {
        if (_updateSuccesAcion.redirect) {
          this.router.navigate(['/contacts']);
        }
        return of(null); // Return an empty observable
      })
    ),
    { dispatch: false }
  );









  constructor(private actions$: Actions, private router: Router) { }
}
