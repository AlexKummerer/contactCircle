import { Gender } from "../enums/gender";
import { JobStatus } from "../enums/jobstatus";

export class Contact {
  id: number | null; // Unique identifier for the contact
  firstName?: string; // First name of the contact
  lastName?: string; // Last name of the contact
  nickname?: string; // Nickname of the contact (optional)
  email?: string; // Email address of the contact
  phoneNumber?: string; // Phone number 1 of the contact (optional)
  phoneNumber2?: string; // Phone number 2 of the contact (optional)
  birthdate?: Date; // Birthdate of the contact (optional)
  jobStatus?: JobStatus | string; // Job status of the contact (optional)
  gender?: Gender | undefined; // Gender of the contact (optional)
  address?: {
    street?: string; // Street and number of the contact's address (optional)
    addressLine2?: string; // Address line 2 of the contact's address (optional)
    postalCode?: string; // Postal code of the contact's address (optional)
    city?: string; // City of the contact's address (optional)
    country?: string; // Country of the contact's address (optional)
  };



  constructor(
    id: number| null ,
    firstName: string ,
    lastName: string ,
    email: string ,
    phoneNumber: string ,
    phoneNumber2: string ,
    birthdate: Date ,
    jobStatus: JobStatus | string,
    gender: Gender | undefined,
    address: {
      street: string;
      addressLine2: string;
      postalCode: string;
      city: string;
      country: string;
    }
  ) {
    this.id = id;
    this.firstName = firstName ?? undefined;
    this.lastName = lastName ?? undefined;
    this.email = email ?? undefined;
    this.phoneNumber = phoneNumber ?? undefined;
    this.phoneNumber2 = phoneNumber2 ?? undefined;
    this.birthdate = birthdate ?? undefined;
    this.jobStatus = jobStatus  ?? undefined;
    this.gender = gender ?? undefined;
    this.address = address ?? undefined;
  }

}
