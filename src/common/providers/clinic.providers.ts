import { Clinics } from '../entities';

export const ClinicProviders = [
  {
    provide: 'CLINIC_REPOSITORY',
    useValue: Clinics,
  },
];
