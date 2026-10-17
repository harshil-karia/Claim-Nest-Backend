import { Types } from 'mongoose';
import { ClaimNormalizer } from './claim.normalizer';
import { ClaimDocument } from '../../../database/schemas/claim.schema';
import { CreateClaimInput } from '../dto/create-claim.input';

describe('ClaimNormalizer', () => {
  let normalizer: ClaimNormalizer;

  beforeEach(() => {
    normalizer = new ClaimNormalizer();
  });

  const mockDate = new Date();
  const mockClaimDoc = {
    _id: new Types.ObjectId('64b8f0f8f8f8f8f8f8f8f8f8'),
    companyDetails: {
      name: 'Tata Consultancy Services',
      address: {
        addressLine1: 'TCS House, Raveline Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipcode: '400001',
        country: 'India',
      },
    },
    shareDetails: {
      folioNumber: 'TCS00123',
      numberOfShares: 100,
      faceValue: 1,
      securityNumbers: [{ from: '1001', to: '1100' }],
      certificateNumber: ['CERT01'],
    },
    bankDetails: {
      accountNumber: '1234567890',
      bankName: 'HDFC Bank',
      branchName: 'Fort',
      ifscCode: 'HDFC0000123',
      phone: '9876543210',
      email: 'claimant@example.com',
      accountHolderName: ['Legal Heir'],
      micrNumber: '400240002',
      address: {
        addressLine1: '123 Marine Drive',
        city: 'Mumbai',
        state: 'Maharashtra',
        zipcode: '400020',
        country: 'India',
      },
    },
    claimant: [
      {
        orderNumber: 1,
        firstName: 'John',
        middleName: 'Robert',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '9876543210',
        birthCountry: 'India',
        nationality: 'Indian',
        birthPlace: 'Mumbai',
        relation: 'Son',
        age: 35,
        panNumber: 'ABCDE1234F',
        address: {
          addressLine1: '123 Marine Drive',
          city: 'Mumbai',
          state: 'Maharashtra',
          zipcode: '400020',
          country: 'India',
        },
      },
    ],
    deceasedPerson: {
      firstName: 'Robert',
      middleName: 'James',
      lastName: 'Doe',
      dateOfDemise: mockDate,
    },
    dematAccountNumber: '1208160012345678',
    userId: new Types.ObjectId('64b8f0f8f8f8f8f8f8f8f8f9'),
    toObject: () => ({ createdAt: mockDate, updatedAt: mockDate }),
  } as unknown as ClaimDocument;

  it('should transform a claim document to ClaimType', () => {
    const claimType = normalizer.toClaimType(mockClaimDoc);

    expect(claimType.id).toBe('64b8f0f8f8f8f8f8f8f8f8f8');
    expect(claimType.companyDetails.name).toBe('Tata Consultancy Services');
    expect(claimType.shareDetails.folioNumber).toBe('TCS00123');
    expect(claimType.shareDetails.numberOfShares).toBe(100);
    expect(claimType.bankDetails.ifscCode).toBe('HDFC0000123');
    expect(claimType.claimant).toHaveLength(1);
    expect(claimType.claimant[0].panNumber).toBe('ABCDE1234F');
    expect(claimType.deceasedPerson.firstName).toBe('Robert');
    expect(claimType.dematAccountNumber).toBe('1208160012345678');
    expect(claimType.userId).toBe('64b8f0f8f8f8f8f8f8f8f8f9');
  });

  it('should transform a list of claim documents', () => {
    const list = normalizer.toClaimTypeList([mockClaimDoc]);
    expect(list).toHaveLength(1);
    expect(list[0].id).toBe('64b8f0f8f8f8f8f8f8f8f8f8');
  });

  it('should convert CreateClaimInput to CreateClaimDto trimming strings', () => {
    const userId = new Types.ObjectId();
    const input: CreateClaimInput = {
      companyDetails: {
        name: '  Infosys Limited  ',
        address: {
          addressLine1: ' Electronics City ',
          city: ' Bengaluru ',
          state: ' Karnataka ',
          zipcode: ' 560100 ',
          country: ' India ',
        },
      },
      shareDetails: {
        folioNumber: ' INF001 ',
        numberOfShares: 50,
        faceValue: 5,
        securityNumbers: [{ from: ' 1 ', to: ' 50 ' }],
        certificateNumber: [' C1 '],
      },
      bankDetails: {
        accountNumber: ' 987654321 ',
        bankName: ' ICICI Bank ',
        branchName: ' Koramangala ',
        ifscCode: ' icic0000123 ',
        phone: ' 9999988888 ',
        email: ' TEST@EXAMPLE.COM ',
        accountHolderName: [' Heir One '],
        micrNumber: ' 560229002 ',
        address: {
          addressLine1: ' 456 Indiranagar ',
          city: ' Bengaluru ',
          state: ' Karnataka ',
          zipcode: ' 560038 ',
          country: ' India ',
        },
      },
      claimant: [
        {
          orderNumber: 1,
          firstName: '  Jane ',
          middleName: ' M ',
          lastName: ' Doe ',
          email: ' JANE@EXAMPLE.COM ',
          phone: ' 9999988888 ',
          birthCountry: ' India ',
          nationality: ' Indian ',
          birthPlace: ' Bengaluru ',
          relation: ' Daughter ',
          age: 30,
          panNumber: ' abcde1234z ',
          address: {
            addressLine1: ' 456 Indiranagar ',
            city: ' Bengaluru ',
            state: ' Karnataka ',
            zipcode: ' 560038 ',
            country: ' India ',
          },
        },
      ],
      deceasedPerson: {
        firstName: '  John ',
        middleName: ' D ',
        lastName: ' Doe ',
        dateOfDemise: mockDate,
      },
      dematAccountNumber: ' 1234567812345678 ',
    };

    const dto = normalizer.toCreateClaimDto(input, userId);

    expect(dto.companyDetails.name).toBe('Infosys Limited');
    expect(dto.bankDetails.ifscCode).toBe('ICIC0000123');
    expect(dto.bankDetails.email).toBe('test@example.com');
    expect(dto.claimant[0].panNumber).toBe('ABCDE1234Z');
    expect(dto.userId).toBe(userId);
  });
});
