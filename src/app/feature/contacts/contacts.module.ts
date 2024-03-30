import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';

const routes: Routes = [
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

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class ContactsModule {}
