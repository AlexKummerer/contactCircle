import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.scss',
})
export class ContactsListComponent {
  contacts = [
    {
      id: 1,
      name: 'Max Mustermann',
      email: 'max.mustermann@example.com',
      phone: '1234567890',
    },
    {
      id: 2,
      name: 'Erika Mustermann',
      email: 'erika.mustermann@example.com',
      phone: '0987654321',
    },
    {
      id: 3,
      name: 'John Doe',
      email: '',
      phone: '5555555555',
    },
    {
      id: 4,
      name: 'Jane Doe',
      email: '',
      phone: '4444444444',
    },
    {
      id: 5,
      name: 'Alice',
      email: '',
      phone: '1234567890',
    },
  ];
}
