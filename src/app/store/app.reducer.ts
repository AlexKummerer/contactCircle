import * as fromCountry from  './country/country.reducer';

export interface AppState {
  country: fromCountry.CountryState;
  // contact: ContactState;
}

export const appReducer = {
  country: fromCountry.countryReducer,
  // contact: fromContact.contactReducer,
};
