export class Contact {
  id: number | null; // Unique identifier for the contact
  firstName?: string; // First name of the contact
  lastName?: string; // Last name of the contact
  nickname?: string; // Nickname of the contact (optional)
  email?: string; // Email address of the contact
  phoneNumber?: string; // Phone number 1 of the contact (optional)
  phoneNumber2?: string; // Phone number 2 of the contact (optional)
  birthdate?: Date; // Birthdate of the contact (optional)
  jobStatus?: string; // Job status of the contact (optional)
  gender?: string; // Gender of the contact (optional)
  address?: {
    street?: string; // Street and number of the contact's address (optional)
    addressLine2?: string; // Address line 2 of the contact's address (optional)
    postalCode?: string; // Postal code of the contact's address (optional)
    city?: string; // City of the contact's address (optional)
    country?: string; // Country of the contact's address (optional)
  };

  hobby1?: string; // Hobby 1 of the contact (optional)
  hobby2?: string; // Hobby 2 of the contact (optional)
  relationshipStatus?: string; // Relationship status of the contact (optional)
  children?: number; // Number of children of the contact (optional)
  company?: string; // Company of the contact (optional)
  potential?: string; // Potential of the contact (optional)
  motivation?: string; // Motivation of the contact (optional)
  referredBy?: string; // How the contact was referred (optional)
  additionalInformation?: string; // Additional information about the contact (optional)
  status?: string; // Status of the contact (optional)
  focus?: boolean;
  createdAt?: Date; // Date and time when the contact was created

  constructor(
    id: number | null,
    firstName: string | null,
    lastName: string | null,
    email: string | null,
    phoneNumber: string | null,
    phoneNumber2: string | null,
    birthdate: Date | null,
    jobStatus: string | null,
    gender: string | null,
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
    this.jobStatus = jobStatus ?? undefined;
    this.gender = gender ?? undefined;
    this.address = address ?? undefined;
  }

  //   constructor(id: number, name: string, email: string, phone: string) {
  //     this.id = id;
  //     this.name = name;
  //     this.email = email;
  //     this.phone = phone;
  //   }
  // }
}
