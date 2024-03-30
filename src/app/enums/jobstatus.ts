export enum JobStatus {
  ENPLOYED,
  SELFEMPLOYED,
  PUPIL,
  STUDENT,
  RETIREE,
  UNEMPLOYED,
  HOUSEWIFE,
}

export interface JobStatusLabel {
  label: string;
  value: JobStatus;
}

export const JobStatusLabels: JobStatusLabel[] = [
  { label: 'Angestellt', value: JobStatus.ENPLOYED },
  { label: 'Selbstständig', value: JobStatus.SELFEMPLOYED },
  { label: 'Schüler', value: JobStatus.PUPIL },
  { label: 'Student', value: JobStatus.STUDENT },
  { label: 'Rentner', value: JobStatus.RETIREE },
  { label: 'Arbeitslos', value: JobStatus.UNEMPLOYED },
  { label: 'Hausfrau/-mann', value: JobStatus.HOUSEWIFE },
];
