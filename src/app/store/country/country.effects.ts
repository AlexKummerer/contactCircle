// country.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as CountryActions from './country.actions';
import { Country } from '../../models/country.model';

@Injectable()
export class CountryEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountries),
      switchMap(() => {
        const storedCountries = localStorage.getItem('countries');
        if (storedCountries) {
          return of(CountryActions.loadCountriesSuccess({ countries: JSON.parse(storedCountries) }));
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.http.get<any[]>('https://restcountries.com/v3.1/all?fields=name,cca2,translations').pipe(
          map((countries) => {
            const countriesWithGermanNames : Country[] = countries.map(country  => ({
              name: country.translations.deu.common || country.name.common,
              code: country.cca2,
            }));
            localStorage.setItem('countries', JSON.stringify(countriesWithGermanNames));
            return CountryActions.loadCountriesSuccess({ countries : countriesWithGermanNames });
          }),

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          catchError((error : HttpErrorResponse) =>  {
          console.log(error);
          return of(CountryActions.loadCountriesFailure({ error : error.message  }));

           } )

        );
      })
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
