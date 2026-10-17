import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Types } from 'mongoose';
import { ClaimsService } from './claims.service';
import { ClaimsRepository } from './claims.repository';
import { ClaimNormalizer } from './normalizers/claim.normalizer';
import { UsersRepository } from '../users/users.repository';
import { CreateClaimInput } from './dto/create-claim.input';

type MockType<T> = {
  [P in keyof T]?: jest.Mock;
};

describe('ClaimsService', () => {
  let service: ClaimsService;
  let claimsRepository: MockType<ClaimsRepository>;
  let usersRepository: MockType<UsersRepository>;
  let claimNormalizer: ClaimNormalizer;

  const validUserId = new Types.ObjectId().toString();
  const validClaimId = new Types.ObjectId().toString();

  const mockClaimInput: CreateClaimInput = {
    companyDetails: {
      name: 'TCS',
      address: {
        addressLine1: 'Line 1',
        city: 'Mumbai',
        state: 'MH',
        zipcode: '400001',
        country: 'India',
      },
    },
    shareDetails: {
      folioNumber: 'F123',
      numberOfShares: 10,
      faceValue: 1,
      securityNumbers: [{ from: '1', to: '10' }],
      certificateNumber: ['C1'],
    },
    bankDetails: {
      accountNumber: '123456',
      bankName: 'SBI',
      branchName: 'Main',
      ifscCode: 'SBIN0001',
      phone: '9999999999',
      email: 'bank@example.com',
      accountHolderName: ['Holder'],
      micrNumber: '400002001',
      address: {
        addressLine1: 'Bank Addr',
        city: 'Mumbai',
        state: 'MH',
        zipcode: '400001',
        country: 'India',
      },
    },
    claimant: [
      {
        orderNumber: 1,
        firstName: 'Claimant',
        middleName: 'M',
        lastName: 'One',
        email: 'c@example.com',
        phone: '9999999999',
        birthCountry: 'India',
        nationality: 'Indian',
        birthPlace: 'Mumbai',
        relation: 'Son',
        age: 30,
        panNumber: 'ABCDE1234F',
        address: {
          addressLine1: 'Home',
          city: 'Mumbai',
          state: 'MH',
          zipcode: '400001',
          country: 'India',
        },
      },
    ],
    deceasedPerson: {
      firstName: 'Deceased',
      middleName: 'D',
      lastName: 'Person',
      dateOfDemise: new Date(),
    },
    dematAccountNumber: '1234567890123456',
    userId: validUserId,
  };

  beforeEach(async () => {
    claimsRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      findAll: jest.fn(),
      findByUserId: jest.fn(),
      updateById: jest.fn(),
      deleteById: jest.fn(),
    };

    usersRepository = {
      findById: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClaimsService,
        ClaimNormalizer,
        {
          provide: ClaimsRepository,
          useValue: claimsRepository,
        },
        {
          provide: UsersRepository,
          useValue: usersRepository,
        },
      ],
    }).compile();

    service = module.get<ClaimsService>(ClaimsService);
    claimNormalizer = module.get<ClaimNormalizer>(ClaimNormalizer);
  });

  describe('createClaim', () => {
    it('should throw BadRequestException if userId is missing', async () => {
      const inputWithoutUser = { ...mockClaimInput, userId: undefined };
      await expect(service.createClaim(inputWithoutUser)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw NotFoundException if user does not exist in DB', async () => {
      usersRepository.findById!.mockResolvedValue(null);

      await expect(service.createClaim(mockClaimInput)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should create claim successfully when user exists', async () => {
      usersRepository.findById!.mockResolvedValue({ _id: new Types.ObjectId(validUserId) } as any);
      const mockSavedClaim = {
        _id: new Types.ObjectId(validClaimId),
        ...mockClaimInput,
        userId: new Types.ObjectId(validUserId),
        toObject: () => ({ createdAt: new Date(), updatedAt: new Date() }),
      };
      claimsRepository.create!.mockResolvedValue(mockSavedClaim as any);

      const result = await service.createClaim(mockClaimInput);

      expect(result.id).toBe(validClaimId);
      expect(result.companyDetails.name).toBe('TCS');
    });
  });

  describe('findById', () => {
    it('should throw BadRequestException if claim ID is invalid', async () => {
      await expect(service.findById('bad-id')).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException if claim does not exist', async () => {
      claimsRepository.findById!.mockResolvedValue(null);
      await expect(service.findById(validClaimId)).rejects.toThrow(NotFoundException);
    });

    it('should return claim if found', async () => {
      const mockDoc = {
        _id: new Types.ObjectId(validClaimId),
        ...mockClaimInput,
        userId: new Types.ObjectId(validUserId),
        toObject: () => ({}),
      };
      claimsRepository.findById!.mockResolvedValue(mockDoc as any);

      const result = await service.findById(validClaimId);
      expect(result.id).toBe(validClaimId);
    });
  });

  describe('deleteClaim', () => {
    it('should throw NotFoundException if claim does not exist to delete', async () => {
      claimsRepository.deleteById!.mockResolvedValue(null);
      await expect(service.deleteClaim(validClaimId)).rejects.toThrow(NotFoundException);
    });

    it('should return true when claim is deleted', async () => {
      claimsRepository.deleteById!.mockResolvedValue({ _id: validClaimId } as any);
      const result = await service.deleteClaim(validClaimId);
      expect(result).toBe(true);
    });
  });
});
