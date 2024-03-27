import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ CardModule, ContactsListComponent, ButtonModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  constructor(private router: Router) {}

  onAddButtonClick() {
    this.router.navigate(['/contacts/edit']);
    console.log('Add button clicked');
  }
}
