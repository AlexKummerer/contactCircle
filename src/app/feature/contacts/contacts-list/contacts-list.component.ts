import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import * as fromApp from '../../../store/app.reducer';
import { Contact } from '../../../models/contact.model';
import { Subscription } from 'rxjs';
import * as ContactActions from '../../../store/contacts/contacts.actions';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent implements OnInit, OnDestroy {
  //
  contacts: Contact[] = [];
  private storeSub!: Subscription;
  constructor(private store: Store<fromApp.AppState>) {}
  ngOnInit() {
    this.store.dispatch(ContactActions.getContacts());
    this.storeSub = this.store.select('contact').subscribe((state) => {
      this.contacts = state.contacts;
    });
    console.log(this.contacts);

  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}
