import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import * as fromApp from '../../../store/app.reducer';
import { Contact } from '../../../models/contact.model';
import { Subscription } from 'rxjs';
import * as ContactActions from '../../../store/contacts/contacts.actions';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';


interface Column {
  field: string;
  header: string;
  sortable?: boolean;
  selected?: boolean;
}

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [TableModule, MultiSelectModule, FormsModule],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent implements OnInit, OnDestroy {
  //
  contacts: Contact[] = [];
  private storeSub!: Subscription;
  cols: Column[] = [
    { field: 'created', header: 'Created', sortable: true, selected: true },
    { field: 'firstName', header: 'First Name', sortable: true, selected: true },
    { field: 'lastName', header: 'Last Name', sortable: true, selected: true },
    { field: 'nickName', header: 'Nick Name', sortable: true, selected: true },
    { field: 'jobStatus', header: 'Job Status', sortable: true, selected: true },
    { field: 'gender', header: "Geschlecht", sortable: true, selected: true },
    { field: 'age', header: 'Alter', sortable: true, selected: true },
    { field: 'phoneNumber', header: 'Phone', sortable: true, selected: true },
    { field: 'phoneNumber2', header: 'Phone2', sortable: true, selected: true },
    { field: 'street', header: 'Straße/Nr', sortable: true, selected: true },
    { field: 'addressLine2', header: 'Adresszusatz', sortable: true, selected: true },
    { field: 'city', header: 'Ort', sortable: true, selected: true },
    { field: 'postalCode', header: 'PLZ', sortable: true, selected: true },
    { field: 'country', header: 'Land', sortable: true, selected: true },]

  selectedColumns: Column[] = [{ field: 'created', header: 'Created', sortable: true, selected: true },
  { field: 'firstName', header: 'First Name', sortable: true, selected: true },
  { field: 'lastName', header: 'Last Name', sortable: true, selected: true },
  { field: 'age', header: 'Alter', sortable: true, selected: true },
  { field: 'phoneNumber', header: 'Phone', sortable: true, selected: true },

  ];

  constructor(private store: Store<fromApp.AppState>) { }
  ngOnInit() {
    this.store.dispatch(ContactActions.getContacts());
    this.storeSub = this.store.select('contact').subscribe((state) => {
      this.contacts = state.contacts;
    });

  }
  get orderedSelectedColumns() {
    const selectedColumnFields = this.selectedColumns.map(col => col.field);
    return this.cols.filter(col => selectedColumnFields.includes(col.field));
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}
