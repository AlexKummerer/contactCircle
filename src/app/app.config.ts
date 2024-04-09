import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as fromApp from './store/app.reducer';
import { CountryEffects } from './store/country/country.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ContactEffects } from './store/contacts/contacts.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule, HttpClientModule),
    provideStore(fromApp.appReducer),
    provideEffects([CountryEffects, ContactEffects]),
    importProvidersFrom(StoreDevtoolsModule.instrument({logOnly: environment.production})),
  ],
};
