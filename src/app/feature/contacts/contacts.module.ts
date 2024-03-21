import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
