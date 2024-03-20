import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { JsonPipe } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [
    MenuModule,
    JsonPipe,
    MenubarModule,
    PanelMenuModule,
    IconFieldModule,
  ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.menuItems = [
      { label: 'Startseite', icon: PrimeIcons.HOME, routerLink: '/' },
      { label: 'Kontakte', icon:  PrimeIcons.USERS, routerLink: '/kontakte' , disabled: true},
      { label: 'Protokolle', icon: PrimeIcons.FILE, routerLink: '/protokolle' ,disabled: true},
      { label: 'Termine', icon: PrimeIcons.CALENDAR, routerLink: '/termine' ,disabled: true},
      { label: 'Aufgaben', icon: PrimeIcons.CHECK, routerLink: '/aufgaben' ,disabled: true},
    ];
  }
}
