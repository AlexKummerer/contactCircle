import {
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { AsyncPipe } from '@angular/common';
import { Contact } from '../../../models/contact.model';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { JobStatus, JobStatusLabels } from '../../../enums/jobstatus';
import { Gender, GenderLabels } from '../../../enums/gender';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import * as CountryActions from '../../../store/country/country.actions';
import { Country } from '../../../models/country.model';
import { Subscription, map } from 'rxjs';
import * as ContactActions from '../../../store/contacts/contacts.actions';
@Component({
  selector: 'app-contacts-edit',
  standalone: true,
  imports: [
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    MessagesModule,
    AsyncPipe,
    CalendarModule,
    DropdownModule,
  ],
  templateUrl: './contacts-edit.component.html',
  styleUrl: './contacts-edit.component.scss',
})
export class ContactsEditComponent implements OnInit, OnDestroy {
  contactForm!: FormGroup;
  errorMessage: WritableSignal<Message[]> = signal([]);
  errorMessageValue: Message[] = [];
  jobStatusList = JobStatusLabels;
  genderStatusList = GenderLabels;
  countryList: Country[] = [];
  subscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(CountryActions.loadCountries());
    this.store
      .select('country')
      .pipe(map((countryState) => countryState.countries))
      .subscribe((country: Country[]) => {
        this.countryList = [...country];
        this.countryList = this.countryList.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      });

    this.contactForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.email])],
      firstName: [null],
      lastName: [null],
      nickname: [null],
      phone: [null, Validators.compose([Validators.pattern('^\\+?[0-9]*$')])],
      phone2: [null, Validators.compose([Validators.pattern('^\\+?[0-9]*$')])],
      birthdate: [null],
      jobStatus: [null],
      gender: [null],
      address: this.formBuilder.group({
        street: [null],
        addressLine2: [null],
        postalCode: [null],
        city: [null],
        country: [
          { value: { name: 'Deutschland', code: 'DE' }, disabled: false },
        ],
      }),
      // Add other form controls here based on your model
    });
  }
  onSaveButtonClick() {
    if (
      this.contactForm.controls['firstName'].value ||
      this.contactForm.controls['lastName'].value ||
      this.contactForm.controls['nickname'].value
    ) {
      const formValues = this.contactForm.value;
      const contact = new Contact(
        null,
        formValues.firstName,
        formValues.lastName,
        formValues.email,
        formValues.phone,
        formValues.phone2,
        formValues.birthdate,
        formValues.jobStatus?.value
          ? (formValues.jobStatus.value as JobStatus)
          : (formValues.jobStatus as string),
        formValues.gender?.value
          ? (formValues.gender.value as Gender)
          : undefined,
        { ...formValues.address, country: formValues.address.country.code }
      );

      this.store.dispatch(ContactActions.addContact({ contact }));
    } else {
      this.errorMessage.update((state) => [
        ...state,
        {
          severity: 'error',
          summary: 'Fehler beim Speichern des Kontakts',
          detail:
            'Bitte füllen Sie mindestens eines der folgenden Felder aus: Vorname, Nachname oder Spitzname.',
        },
      ]);

      this.errorMessageValue = this.errorMessage();
    }
  }

  onMessageClose(event: Message[]) {
    this.errorMessage.update(() => [...event]);
    this.errorMessageValue = this.errorMessage();
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
