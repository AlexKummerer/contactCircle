import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

 { path: 'contacts', loadChildren: () => import('./feature/contacts/contacts.module').then(m => m.ContactsModule) }
  // { path: 'appointments', component: AppointmentsComponent },
  // { path: 'tasks', component: TasksComponent }
];
