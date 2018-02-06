import { EmailType } from '../models/EmailType';

export interface EmailTypesStoreState {
    emailTypes: EmailType[];
    selectedEmailType?: EmailType,
    error?: boolean;
    errorReason?: string;
}