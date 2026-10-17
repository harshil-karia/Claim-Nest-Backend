import { Types } from 'mongoose';
import {
  BankDetails,
  Claimant,
  CompanyDetails,
  DeceasedPerson,
  ShareDetails,
} from '../../../database/schemas/claim.schema';

export class CreateClaimDto {
  companyDetails: CompanyDetails;
  shareDetails: ShareDetails;
  bankDetails: BankDetails;
  claimant: Claimant[];
  deceasedPerson: DeceasedPerson;
  dematAccountNumber: string;
  userId: Types.ObjectId;
}
