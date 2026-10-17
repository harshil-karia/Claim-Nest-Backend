import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ClaimDocument } from '../../../database/schemas/claim.schema';
import { ClaimType } from '../dto/claim.type';
import { CreateClaimInput } from '../dto/create-claim.input';
import { CreateClaimDto } from '../dto/create-claim.dto';
import { UpdateClaimInput } from '../dto/update-claim.input';
import { UpdateClaimDto } from '../dto/update-claim.dto';

@Injectable()
export class ClaimNormalizer {
  toClaimType(claim: ClaimDocument): ClaimType {
    const raw = claim.toObject ? claim.toObject() : claim;

    return {
      id: claim._id.toString(),
      companyDetails: {
        name: claim.companyDetails.name,
        address: {
          addressLine1: claim.companyDetails.address.addressLine1,
          addressLine2: claim.companyDetails.address.addressLine2,
          city: claim.companyDetails.address.city,
          state: claim.companyDetails.address.state,
          zipcode: claim.companyDetails.address.zipcode,
          country: claim.companyDetails.address.country,
        },
      },
      shareDetails: {
        folioNumber: claim.shareDetails.folioNumber,
        numberOfShares: claim.shareDetails.numberOfShares,
        faceValue: claim.shareDetails.faceValue,
        securityNumbers: claim.shareDetails.securityNumbers.map((s) => ({
          from: s.from,
          to: s.to,
        })),
        certificateNumber: claim.shareDetails.certificateNumber,
      },
      bankDetails: {
        accountNumber: claim.bankDetails.accountNumber,
        bankName: claim.bankDetails.bankName,
        branchName: claim.bankDetails.branchName,
        ifscCode: claim.bankDetails.ifscCode,
        phone: claim.bankDetails.phone,
        email: claim.bankDetails.email,
        accountHolderName: claim.bankDetails.accountHolderName,
        micrNumber: claim.bankDetails.micrNumber,
        address: {
          addressLine1: claim.bankDetails.address.addressLine1,
          addressLine2: claim.bankDetails.address.addressLine2,
          city: claim.bankDetails.address.city,
          state: claim.bankDetails.address.state,
          zipcode: claim.bankDetails.address.zipcode,
          country: claim.bankDetails.address.country,
        },
      },
      claimant: claim.claimant.map((c) => ({
        orderNumber: c.orderNumber,
        firstName: c.firstName,
        middleName: c.middleName,
        lastName: c.lastName,
        email: c.email,
        phone: c.phone,
        birthCountry: c.birthCountry,
        nationality: c.nationality,
        birthPlace: c.birthPlace,
        relation: c.relation,
        age: c.age,
        panNumber: c.panNumber,
        address: {
          addressLine1: c.address.addressLine1,
          addressLine2: c.address.addressLine2,
          city: c.address.city,
          state: c.address.state,
          zipcode: c.address.zipcode,
          country: c.address.country,
        },
      })),
      deceasedPerson: {
        firstName: claim.deceasedPerson.firstName,
        middleName: claim.deceasedPerson.middleName,
        lastName: claim.deceasedPerson.lastName,
        dateOfDemise: claim.deceasedPerson.dateOfDemise,
        alternateName: claim.deceasedPerson.alternateName,
      },
      dematAccountNumber: claim.dematAccountNumber,
      userId: claim.userId.toString(),
      createdAt: (raw as { createdAt?: Date }).createdAt ?? new Date(),
      updatedAt: (raw as { updatedAt?: Date }).updatedAt ?? new Date(),
    };
  }

  toClaimTypeList(claims: ClaimDocument[]): ClaimType[] {
    return claims.map((claim) => this.toClaimType(claim));
  }

  toCreateClaimDto(
    input: CreateClaimInput,
    userId: Types.ObjectId,
  ): CreateClaimDto {
    return {
      companyDetails: {
        name: input.companyDetails.name.trim(),
        address: {
          addressLine1: input.companyDetails.address.addressLine1.trim(),
          addressLine2: input.companyDetails.address.addressLine2?.trim(),
          city: input.companyDetails.address.city.trim(),
          state: input.companyDetails.address.state.trim(),
          zipcode: input.companyDetails.address.zipcode.trim(),
          country: input.companyDetails.address.country.trim(),
        },
      },
      shareDetails: {
        folioNumber: input.shareDetails.folioNumber.trim(),
        numberOfShares: input.shareDetails.numberOfShares,
        faceValue: input.shareDetails.faceValue,
        securityNumbers: input.shareDetails.securityNumbers.map((s) => ({
          from: s.from.trim(),
          to: s.to.trim(),
        })),
        certificateNumber: input.shareDetails.certificateNumber.map((c) =>
          c.trim(),
        ),
      },
      bankDetails: {
        accountNumber: input.bankDetails.accountNumber.trim(),
        bankName: input.bankDetails.bankName.trim(),
        branchName: input.bankDetails.branchName.trim(),
        ifscCode: input.bankDetails.ifscCode.trim().toUpperCase(),
        phone: input.bankDetails.phone.trim(),
        email: input.bankDetails.email.toLowerCase().trim(),
        accountHolderName: input.bankDetails.accountHolderName.map((n) =>
          n.trim(),
        ),
        micrNumber: input.bankDetails.micrNumber.trim(),
        address: {
          addressLine1: input.bankDetails.address.addressLine1.trim(),
          addressLine2: input.bankDetails.address.addressLine2?.trim(),
          city: input.bankDetails.address.city.trim(),
          state: input.bankDetails.address.state.trim(),
          zipcode: input.bankDetails.address.zipcode.trim(),
          country: input.bankDetails.address.country.trim(),
        },
      },
      claimant: input.claimant.map((c) => ({
        orderNumber: c.orderNumber,
        firstName: c.firstName.trim(),
        middleName: c.middleName.trim(),
        lastName: c.lastName.trim(),
        email: c.email.toLowerCase().trim(),
        phone: c.phone.trim(),
        birthCountry: c.birthCountry.trim(),
        nationality: c.nationality.trim(),
        birthPlace: c.birthPlace.trim(),
        relation: c.relation.trim(),
        age: c.age,
        panNumber: c.panNumber.trim().toUpperCase(),
        address: {
          addressLine1: c.address.addressLine1.trim(),
          addressLine2: c.address.addressLine2?.trim(),
          city: c.address.city.trim(),
          state: c.address.state.trim(),
          zipcode: c.address.zipcode.trim(),
          country: c.address.country.trim(),
        },
      })),
      deceasedPerson: {
        firstName: input.deceasedPerson.firstName.trim(),
        middleName: input.deceasedPerson.middleName.trim(),
        lastName: input.deceasedPerson.lastName.trim(),
        dateOfDemise: new Date(input.deceasedPerson.dateOfDemise),
        alternateName: input.deceasedPerson.alternateName?.trim(),
      },
      dematAccountNumber: input.dematAccountNumber.trim(),
      userId,
    };
  }

  toUpdateClaimDto(input: UpdateClaimInput): UpdateClaimDto {
    const updateDto: UpdateClaimDto = {};

    if (input.companyDetails) {
      updateDto.companyDetails = {
        name: input.companyDetails.name.trim(),
        address: {
          addressLine1: input.companyDetails.address.addressLine1.trim(),
          addressLine2: input.companyDetails.address.addressLine2?.trim(),
          city: input.companyDetails.address.city.trim(),
          state: input.companyDetails.address.state.trim(),
          zipcode: input.companyDetails.address.zipcode.trim(),
          country: input.companyDetails.address.country.trim(),
        },
      };
    }

    if (input.shareDetails) {
      updateDto.shareDetails = {
        folioNumber: input.shareDetails.folioNumber.trim(),
        numberOfShares: input.shareDetails.numberOfShares,
        faceValue: input.shareDetails.faceValue,
        securityNumbers: input.shareDetails.securityNumbers.map((s) => ({
          from: s.from.trim(),
          to: s.to.trim(),
        })),
        certificateNumber: input.shareDetails.certificateNumber.map((c) =>
          c.trim(),
        ),
      };
    }

    if (input.bankDetails) {
      updateDto.bankDetails = {
        accountNumber: input.bankDetails.accountNumber.trim(),
        bankName: input.bankDetails.bankName.trim(),
        branchName: input.bankDetails.branchName.trim(),
        ifscCode: input.bankDetails.ifscCode.trim().toUpperCase(),
        phone: input.bankDetails.phone.trim(),
        email: input.bankDetails.email.toLowerCase().trim(),
        accountHolderName: input.bankDetails.accountHolderName.map((n) =>
          n.trim(),
        ),
        micrNumber: input.bankDetails.micrNumber.trim(),
        address: {
          addressLine1: input.bankDetails.address.addressLine1.trim(),
          addressLine2: input.bankDetails.address.addressLine2?.trim(),
          city: input.bankDetails.address.city.trim(),
          state: input.bankDetails.address.state.trim(),
          zipcode: input.bankDetails.address.zipcode.trim(),
          country: input.bankDetails.address.country.trim(),
        },
      };
    }

    if (input.claimant) {
      updateDto.claimant = input.claimant.map((c) => ({
        orderNumber: c.orderNumber,
        firstName: c.firstName.trim(),
        middleName: c.middleName.trim(),
        lastName: c.lastName.trim(),
        email: c.email.toLowerCase().trim(),
        phone: c.phone.trim(),
        birthCountry: c.birthCountry.trim(),
        nationality: c.nationality.trim(),
        birthPlace: c.birthPlace.trim(),
        relation: c.relation.trim(),
        age: c.age,
        panNumber: c.panNumber.trim().toUpperCase(),
        address: {
          addressLine1: c.address.addressLine1.trim(),
          addressLine2: c.address.addressLine2?.trim(),
          city: c.address.city.trim(),
          state: c.address.state.trim(),
          zipcode: c.address.zipcode.trim(),
          country: c.address.country.trim(),
        },
      }));
    }

    if (input.deceasedPerson) {
      updateDto.deceasedPerson = {
        firstName: input.deceasedPerson.firstName.trim(),
        middleName: input.deceasedPerson.middleName.trim(),
        lastName: input.deceasedPerson.lastName.trim(),
        dateOfDemise: new Date(input.deceasedPerson.dateOfDemise),
        alternateName: input.deceasedPerson.alternateName?.trim(),
      };
    }

    if (input.dematAccountNumber !== undefined) {
      updateDto.dematAccountNumber = input.dematAccountNumber.trim();
    }

    return updateDto;
  }
}
