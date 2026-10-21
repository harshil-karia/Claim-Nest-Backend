import { FORM_ISR_1_HTML } from './html/form-isr-1.html';
import { FORM_ISR_2_HTML } from './html/form-isr-2.html';
import { FORM_ISR_3_HTML } from './html/form-isr-3.html';
import { FORM_ISR_4_HTML } from './html/form-isr-4.html';
import { FORM_ISR_5_HTML } from './html/form-isr-5.html';
import { ANNEXURE_D_HTML } from './html/annexure-d.html';
import { ANNEXURE_E_HTML } from './html/annexure-e.html';

export const TEMPLATE_CODES = {
  FORM_ISR_1: 'FORM_ISR_1',
  FORM_ISR_2: 'FORM_ISR_2',
  FORM_ISR_3: 'FORM_ISR_3',
  FORM_ISR_4: 'FORM_ISR_4',
  FORM_ISR_5: 'FORM_ISR_5',
  ANNEXURE_D: 'ANNEXURE_D',
  ANNEXURE_E: 'ANNEXURE_E',
} as const;

export type TemplateCode = (typeof TEMPLATE_CODES)[keyof typeof TEMPLATE_CODES];

export const TEMPLATE_CATEGORIES = {
  KYC: 'KYC',
  TRANSMISSION: 'TRANSMISSION',
  NOMINATION: 'NOMINATION',
  INDEMNITY: 'INDEMNITY',
  AFFIDAVIT: 'AFFIDAVIT',
} as const;

export type TemplateCategory = (typeof TEMPLATE_CATEGORIES)[keyof typeof TEMPLATE_CATEGORIES];

export interface StaticTemplateItem {
  code: string;
  name: string;
  description: string;
  category: string;
  pageCount: number;
  pageSize: string;
  htmlContent: string;
  isActive: boolean;
}

export const STATIC_TEMPLATES: StaticTemplateItem[] = [
  {
    code: TEMPLATE_CODES.FORM_ISR_1,
    name: 'Form ISR-1',
    description:
      'Request for registering PAN, KYC details or changes/updation thereof for securities of listed companies held in physical form (SEBI)',
    category: TEMPLATE_CATEGORIES.KYC,
    pageCount: 3,
    pageSize: 'A4',
    htmlContent: FORM_ISR_1_HTML,
    isActive: true,
  },
  {
    code: TEMPLATE_CODES.FORM_ISR_2,
    name: 'Form ISR-2',
    description:
      'Confirmation of Signature of securities holder by the Banker (SEBI Circular No. SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2023/37)',
    category: TEMPLATE_CATEGORIES.KYC,
    pageCount: 1,
    pageSize: 'A4',
    htmlContent: FORM_ISR_2_HTML,
    isActive: true,
  },
  {
    code: TEMPLATE_CODES.FORM_ISR_3,
    name: 'Form ISR-3',
    description:
      'Declaration Form for Opting-out of Nomination by holders of physical securities in Listed Companies (SEBI Circular No. SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2023/37)',
    category: TEMPLATE_CATEGORIES.NOMINATION,
    pageCount: 1,
    pageSize: 'A4',
    htmlContent: FORM_ISR_3_HTML,
    isActive: true,
  },
  {
    code: TEMPLATE_CODES.FORM_ISR_4,
    name: 'Form ISR-4',
    description:
      'Request for issue of Duplicate Certificate and other Service Requests for securities held in physical form (SEBI Circular No. SEBI/HO/MIRSD/MIRSD-PoD-1/P/CIR/2023/37)',
    category: TEMPLATE_CATEGORIES.KYC,
    pageCount: 2,
    pageSize: 'A4',
    htmlContent: FORM_ISR_4_HTML,
    isActive: true,
  },
  {
    code: TEMPLATE_CODES.FORM_ISR_5,
    name: 'Form ISR-5 (Annexure C)',
    description:
      'Request for Transmission of Securities by Nominee or Legal Heir (For Transmission of securities on death of the Sole holder) (SEBI Circular No. SEBI/HO/MIRSD/MIRSD_RTAMB/P/CIR/2022/65)',
    category: TEMPLATE_CATEGORIES.TRANSMISSION,
    pageCount: 3,
    pageSize: 'A4',
    htmlContent: FORM_ISR_5_HTML,
    isActive: true,
  },
  {
    code: TEMPLATE_CODES.ANNEXURE_D,
    name: 'Annexure D',
    description:
      'Individual Affidavits to be given by ALL the Legal Heirs OR Legal Heirs named in Succession Certificate / Probate of Will / Will / Letter of Administration / Legal Heirship Certificate / Court Decree (SEBI Transmission without Nomination)',
    category: TEMPLATE_CATEGORIES.AFFIDAVIT,
    pageCount: 2,
    pageSize: 'A4',
    htmlContent: ANNEXURE_D_HTML,
    isActive: true,
  },
  {
    code: TEMPLATE_CODES.ANNEXURE_E,
    name: 'Annexure E',
    description:
      'Bond of Indemnity to be furnished jointly by all Legal Heir(s) including the Claimant(s) (SEBI Transmission without Nomination)',
    category: TEMPLATE_CATEGORIES.INDEMNITY,
    pageCount: 2,
    pageSize: 'A4',
    htmlContent: ANNEXURE_E_HTML,
    isActive: true,
  },
];
