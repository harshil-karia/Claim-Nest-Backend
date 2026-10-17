import { Test, TestingModule } from '@nestjs/testing';
import { ClaimsResolver } from './claims.resolver';
import { ClaimsService } from './claims.service';
import { ClaimType } from './dto/claim.type';
import { CreateClaimInput } from './dto/create-claim.input';

describe('ClaimsResolver', () => {
  let resolver: ClaimsResolver;
  let service: jest.Mocked<Partial<ClaimsService>>;

  const mockClaim: ClaimType = {
    id: 'claim_123',
    companyDetails: {
      name: 'Reliance Industries',
      address: {
        addressLine1: 'Maker Chambers',
        city: 'Mumbai',
        state: 'MH',
        zipcode: '400021',
        country: 'India',
      },
    },
    shareDetails: {
      folioNumber: 'RIL001',
      numberOfShares: 200,
      faceValue: 10,
      securityNumbers: [{ from: '1', to: '200' }],
      certificateNumber: ['R01'],
    },
    bankDetails: {
      accountNumber: '11223344',
      bankName: 'Kotak Bank',
      branchName: 'Nariman Point',
      ifscCode: 'KKBK0001',
      phone: '9876500000',
      email: 'claim@kotak.com',
      accountHolderName: ['Heir'],
      micrNumber: '400485002',
      address: {
        addressLine1: 'Bank Lane',
        city: 'Mumbai',
        state: 'MH',
        zipcode: '400021',
        country: 'India',
      },
    },
    claimant: [
      {
        orderNumber: 1,
        firstName: 'Claimant',
        middleName: 'A',
        lastName: 'Sharma',
        email: 'sharma@example.com',
        phone: '9876500000',
        birthCountry: 'India',
        nationality: 'Indian',
        birthPlace: 'Mumbai',
        relation: 'Spouse',
        age: 50,
        panNumber: 'ABCDE1111A',
        address: {
          addressLine1: 'Home Lane',
          city: 'Mumbai',
          state: 'MH',
          zipcode: '400021',
          country: 'India',
        },
      },
    ],
    deceasedPerson: {
      firstName: 'Deceased',
      middleName: 'B',
      lastName: 'Sharma',
      dateOfDemise: new Date(),
    },
    dematAccountNumber: '1208160000000000',
    userId: 'user_123',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    service = {
      findAll: jest.fn().mockResolvedValue([mockClaim]),
      findById: jest.fn().mockResolvedValue(mockClaim),
      createClaim: jest.fn().mockResolvedValue(mockClaim),
      updateClaim: jest.fn().mockResolvedValue(mockClaim),
      deleteClaim: jest.fn().mockResolvedValue(true),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClaimsResolver,
        {
          provide: ClaimsService,
          useValue: service,
        },
      ],
    }).compile();

    resolver = module.get<ClaimsResolver>(ClaimsResolver);
  });

  it('should return claims', async () => {
    const result = await resolver.getClaims();
    expect(result).toHaveLength(1);
    expect(result[0].companyDetails.name).toBe('Reliance Industries');
  });

  it('should return claim by ID', async () => {
    const result = await resolver.getClaimById('claim_123');
    expect(result.id).toBe('claim_123');
  });

  it('should create claim', async () => {
    const input: CreateClaimInput = {
      companyDetails: mockClaim.companyDetails,
      shareDetails: mockClaim.shareDetails,
      bankDetails: mockClaim.bankDetails,
      claimant: mockClaim.claimant,
      deceasedPerson: mockClaim.deceasedPerson,
      dematAccountNumber: mockClaim.dematAccountNumber,
      userId: 'user_123',
    };

    const result = await resolver.createClaim(input);
    expect(service.createClaim).toHaveBeenCalledWith(input, undefined);
    expect(result.id).toBe('claim_123');
  });

  it('should delete claim', async () => {
    const result = await resolver.deleteClaim('claim_123');
    expect(service.deleteClaim).toHaveBeenCalledWith('claim_123');
    expect(result).toBe(true);
  });
});
