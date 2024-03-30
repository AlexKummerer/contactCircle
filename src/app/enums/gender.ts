export enum Gender {
  MAN,
  FEMALE,
}

export interface GenderLabel {
  label: string;
  value: Gender;
}

export const GenderLabels: GenderLabel[] = [
  { label: 'Männlich', value: Gender.MAN },
  { label: 'Weiblich', value: Gender.FEMALE },
];
