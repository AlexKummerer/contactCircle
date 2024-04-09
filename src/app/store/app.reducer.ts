import * as fromCountry from  './country/country.reducer';
import * as fromContact from './contacts/contacts.reducer';

export interface AppState {
  country: fromCountry.CountryState;
  contact: fromContact.ContactState;
}

export const appReducer = {
  country: fromCountry.countryReducer,
  contact: fromContact.contactReducer,
};
