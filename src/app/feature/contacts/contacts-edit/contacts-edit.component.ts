import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AsyncPipe, CommonModule } from '@angular/common';
import { patchState, signalState } from '@ngrx/signals';
import { state } from '@angular/animations';
import { Observable } from 'rxjs';
import { Contact } from '../../../models/contact.model';

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
  ],
  templateUrl: './contacts-edit.component.html',
  styleUrl: './contacts-edit.component.scss',
})
export class ContactsEditComponent implements OnInit {
  contactForm: FormGroup;
  errorMessage: WritableSignal<Message[]> = signal([]);
  errorMessageValue: Message[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email])],
      firstName: [''],
      lastName: [''],
      nickname: [''],
      phone: ['', Validators.compose([Validators.pattern('^[0-9]*$')])],
      phone2: ['', Validators.compose([Validators.pattern('^[0-9]*$')])],
      // Add other form controls here based on your model
    });
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email])],
      firstName: [''],
      lastName: [''],
      nickname: [''],
      phone: ['', Validators.compose([Validators.pattern('^\\+?[0-9]*$'),])],
      phone2: ['', Validators.compose([Validators.pattern('^\\+?[0-9]*$')])],
      // Add other form controls here based on your model
    });
  }
  onSaveButtonClick() {
    if (
      this.contactForm.controls['firstName'].value !== '' ||
      this.contactForm.controls['lastName'].value !== '' ||
      this.contactForm.controls['nickname'].value !== ''
    ) {
      let contact = new Contact(
        null,
        this.contactForm.controls['firstName'].value,
        this.contactForm.controls['lastName'].value,
        this.contactForm.controls['email'].value,
        this.contactForm.controls['phone'].value,
        this.contactForm.controls['phone2'].value,
        null,
        null,
        null,
        {
          street: '',
          addressLine2: '',
          postalCode: '',
          city: '',
          country: '',
        }
      );
      console.log(contact);

      console.log(this.contactForm);
    } else {
      this.errorMessage.update((state) => [
        ...state,
        {
          severity: 'error',
          summary: 'Error Message',
          detail: 'Please enter at least one field',
        },
      ]);

      this.errorMessageValue = this.errorMessage();
    }
  }

  onMessageClose(event: any) {
    this.errorMessage.update(() => [...event]);
    this.errorMessageValue = this.errorMessage();
  }
}
