import { Routes } from "@angular/router";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { ContactsEditComponent } from "./contacts-edit/contacts-edit.component";
import { ContactsComponent } from "./contacts.component";

export const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
  },
  {
    path: 'details/:id',
    component: ContactDetailComponent,
  },
  {
    path: 'edit',
    component: ContactsEditComponent,
  },
  {
    path: 'edit/:id',
    component: ContactsEditComponent,
  },
];
