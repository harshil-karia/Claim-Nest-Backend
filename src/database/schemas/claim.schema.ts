import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ClaimDocument = HydratedDocument<Claim>;

@Schema({
    collection: 'claims',
  _id: false,
})
export class Address {
  @Prop({
    required: true,
    trim: true,
  })
  addressLine1: string;

  @Prop({
    required: false,
    trim: true,
  })
  addressLine2?: string;

  @Prop({
    required: true,
    trim: true,
  })
  city: string;

  @Prop({
    required: true,
    trim: true,
  })
  state: string;

  @Prop({
    required: true,
    trim: true,
  })
  zipcode: string;

  @Prop({
    required: true,
    trim: true,
  })
  country: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);

@Schema({
  _id: false,
})
export class CompanyDetails {
  @Prop({
    required: true,
    trim: true,
  })
  name: string;

  @Prop({
    type: AddressSchema,
    required: true,
  })
  address: Address;
}

@Schema({
  _id: false,
})
export class SecurityDetails {
  @Prop({
    required: true,
    trim: true,
  })
  from: string;

  @Prop({
    required: true,
    trim: true,
  })
  to: string;
}

export const SecurityDetailsSchema =
  SchemaFactory.createForClass(SecurityDetails);

export const CompanyDetailsSchema =
  SchemaFactory.createForClass(CompanyDetails);

@Schema({
  _id: false,
})
export class ShareDetails {
  @Prop({
    required: true,
    trim: true,
  })
  folioNumber: string;

  @Prop({
    required: true,
    min: 0,
  })
  numberOfShares: number;

  @Prop({
    required: true,
    min: 0,
  })
  faceValue: number;
  @Prop({
    type: [SecurityDetailsSchema],
    required: true,
  })
  securityNumbers: SecurityDetails[];

  @Prop({
    type: [String],
    required: true,
  })
  certificateNumber: string[];
}

export const ShareDetailsSchema = SchemaFactory.createForClass(ShareDetails);

@Schema({
  _id: false,
})
export class BankDetails {
  @Prop({
    required: true,
    trim: true,
  })
  accountNumber: string;

  @Prop({
    required: true,
    trim: true,
  })
  bankName: string;

  @Prop({
    required: true,
    trim: true,
  })
  branchName: string;

  @Prop({
    required: true,
    trim: true,
  })
  ifscCode: string;

  @Prop({
    required: true,
    trim: true,
  })
  phone: string;

  @Prop({
    required: true,
    trim: true,
  })
  email: string;

  @Prop({
    type: [String],
    required: true,
  })
  accountHolderName: string[];

  @Prop({
    required: true,
    trim: true,
  })
  micrNumber: string;

  @Prop({
    type: AddressSchema,
    required: true,
  })
  address: Address;
}

export const BankDetailsSchema = SchemaFactory.createForClass(BankDetails);

@Schema({
  _id: false,
})
export class Claimant {
  @Prop({
    required: true,
    min: 1,
  })
  orderNumber: number;

  @Prop({
    required: true,
    trim: true,
  })
  firstName: string;

  @Prop({
    required: true,
    trim: true,
  })
  middleName: string;

  @Prop({
    required: true,
    trim: true,
  })
  lastName: string;

  @Prop({
    required: true,
    trim: true,
  })
  email: string;

  @Prop({
    required: true,
    trim: true,
  })
  phone: string;

  @Prop({
    required: true,
    trim: true,
  })
  birthCountry: string;

  @Prop({
    required: true,
    trim: true,
  })
  nationality: string;

  @Prop({
    required: true,
    trim: true,
  })
  birthPlace: string;

  @Prop({
    required: true,
    trim: true,
  })
  relation: string;

  @Prop({
    required: true,
    min: 0,
  })
  age: number;

  @Prop({
    required: true,
    trim: true,
    uppercase: true,
  })
  panNumber: string;

  @Prop({
    type: AddressSchema,
    required: true,
  })
  address: Address;
}

export const ClaimantSchema = SchemaFactory.createForClass(Claimant);

@Schema({
  _id: false,
})
export class DeceasedPerson {
  @Prop({
    required: true,
    trim: true,
  })
  firstName: string;

  @Prop({
    required: true,
    trim: true,
  })
  middleName: string;

  @Prop({
    required: true,
    trim: true,
  })
  lastName: string;

  @Prop({
    required: true,
  })
  dateOfDemise: Date;

  @Prop({
    required: false,
    trim: true,
  })
  alternateName?: string;
}

export const DeceasedPersonSchema =
  SchemaFactory.createForClass(DeceasedPerson);

@Schema({
  timestamps: true,
})
export class Claim {
  @Prop({
    type: CompanyDetailsSchema,
    required: true,
  })
  companyDetails: CompanyDetails;

  @Prop({
    type: ShareDetailsSchema,
    required: true,
  })
  shareDetails: ShareDetails;

  @Prop({
    type: BankDetailsSchema,
    required: true,
  })
  bankDetails: BankDetails;

  @Prop({
    type: [ClaimantSchema],
    required: true,
  })
  claimant: Claimant[];

  @Prop({
    type: DeceasedPersonSchema,
    required: true,
  })
  deceasedPerson: DeceasedPerson;

  @Prop({
    required: true,
    trim: true,
  })
  dematAccountNumber: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  userId: Types.ObjectId;
}

export const ClaimSchema = SchemaFactory.createForClass(Claim);
