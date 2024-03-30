// country.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as CountryActions from './country.actions';
import { Country } from '../../models/country.model';

export interface CountryState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  countries: Country[];
  error: string | undefined | null;
}

export const initialState: CountryState = { countries: [], error: undefined };

export const countryReducer = createReducer(
  initialState,
  on(CountryActions.loadCountriesSuccess, (state, action) => ({
    ...state,
    countries: action.countries,
  })),
  on(CountryActions.loadCountriesFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
