import {
  BankDetails,
  Claimant,
  CompanyDetails,
  DeceasedPerson,
  ShareDetails,
} from '../../../database/schemas/claim.schema';

export class UpdateClaimDto {
  companyDetails?: CompanyDetails;
  shareDetails?: ShareDetails;
  bankDetails?: BankDetails;
  claimant?: Claimant[];
  deceasedPerson?: DeceasedPerson;
  dematAccountNumber?: string;
}
