import { EmailType } from '../models/EmailType';

export interface EmailTypesStoreState {
    emailTypes: EmailType[];
    error?: boolean;
    errorReason?:string;
}