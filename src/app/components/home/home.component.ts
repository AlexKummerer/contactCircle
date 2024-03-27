import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';

export interface Feature {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
public features :Feature[] = [
    {
      title: 'Kontaktverwaltung',
      description:
        'erwalten Sie Ihre Kontakte effizient und organisieren Sie sie in  benutzerdefinierten Gruppen',
      icon: 'pi pi-users',
      link: '/contacts',
    },
    {
      title: 'Protokolle',
      description: 'Erstellen Sie Protokolle und verwalten Sie Ihre Notizen und Dokumente einfach und effizient.',
      icon: 'pi pi-file',
      link: '/logs',
      disabled: true,
    },
    {
      title: 'Termine',
      description: 'Planen Sie Ihre Termine und Veranstaltungen einfach und behalten Sie den Überblick über Ihre Terminkalender',
      icon: 'pi pi-calendar',
      link: '/calendar',
      disabled: true,
    },
    {
      title: 'Aufgaben',
      description: 'Behalten Sie Ihre Aufgaben im Blick und organisieren Sie sie effizient für eine produktive Arbeitsweise.',
      icon: 'pi pi-check',
      link: '/tasks',
      disabled: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
