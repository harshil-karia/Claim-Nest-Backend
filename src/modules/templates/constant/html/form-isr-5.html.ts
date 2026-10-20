export const FORM_ISR_5_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annexure C - Form ISR-5 - Request for Transmission of Securities by Nominee or Legal Heir</title>
  <style>
    /* Reset and Base Styles */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #525659;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      color: #000000;
      line-height: 1.35;
      padding: 24px 0;
      -webkit-font-smoothing: antialiased;
    }

    /* Print Setup */
    @page {
      size: A4 portrait;
      margin: 0;
    }

    @media print {
      body {
        background-color: transparent;
        padding: 0;
      }
      .page-preview-bar {
        display: none !important;
      }
      .page {
        margin: 0 !important;
        box-shadow: none !important;
        page-break-after: always;
        page-break-inside: avoid;
        height: 297mm !important;
        max-height: 297mm !important;
      }
      .page:last-of-type {
        page-break-after: avoid;
      }
    }

    /* Top Action Bar */
    .page-preview-bar {
      width: 210mm;
      margin: 0 auto 16px auto;
      background: #0f172a;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .bar-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    }

    .bar-title .badge {
      background: #3b82f6;
      color: #ffffff;
      font-size: 10.5px;
      font-weight: 700;
      padding: 3px 7px;
      border-radius: 4px;
      letter-spacing: 0.5px;
    }

    .bar-title .sub-text {
      color: #94a3b8;
      font-size: 12px;
    }

    .bar-actions {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .bar-actions button {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border: none;
      padding: 8px 16px;
      border-radius: 5px;
      font-weight: 600;
      cursor: pointer;
      font-size: 12.5px;
      transition: all 0.2s ease;
    }

    .btn-pdf {
      background: #dc2626;
      color: white;
    }

    .btn-pdf:hover {
      background: #b91c1c;
      transform: translateY(-1px);
    }

    .btn-docx {
      background: #2563eb;
      color: white;
    }

    .btn-docx:hover {
      background: #1d4ed8;
      transform: translateY(-1px);
    }

    /* Exact A4 Page Container (210mm x 297mm) */
    .page {
      width: 210mm;
      height: 297mm;
      min-height: 297mm;
      max-height: 297mm;
      margin: 0 auto 24px auto;
      background: #ffffff;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
      position: relative;
      padding: 12mm 16mm 10mm 16mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }

    .page-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    /* Header Box Table */
    .header-box-table {
      width: 100%;
      border-collapse: collapse;
      border: 1.2px solid #000000;
      margin-bottom: 8px;
    }

    .header-box-table td {
      border: 1.2px solid #000000;
      padding: 6px 10px;
      vertical-align: middle;
    }

    .header-title-cell {
      width: 76%;
    }

    .header-badge-cell {
      width: 24%;
      text-align: center;
      background: #f8fafc;
    }

    .main-title {
      font-size: 11pt;
      font-weight: bold;
      line-height: 1.3;
      color: #000000;
    }

    .sub-title {
      font-size: 8.8pt;
      font-style: italic;
      color: #111827;
      margin-top: 2px;
    }

    .annexure-badge {
      font-size: 10.5pt;
      font-weight: bold;
      color: #000000;
      white-space: nowrap;
    }

    /* Addressee Section */
    .addressee-block {
      font-size: 9.5pt;
      line-height: 1.35;
      margin-bottom: 8px;
    }

    .issuer-name-hint {
      margin-top: 3px;
    }

    /* Section Headings */
    .section-title {
      font-size: 9.5pt;
      font-weight: bold;
      margin-top: 6px;
      margin-bottom: 4px;
      line-height: 1.3;
      color: #000000;
    }

    /* Grid Tables */
    table.form-grid-table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #000000;
      font-size: 9pt;
      margin-bottom: 4px;
    }

    table.form-grid-table th,
    table.form-grid-table td {
      border: 1px solid #000000;
      padding: 4px 6px;
      vertical-align: middle;
      line-height: 1.3;
    }

    /* Clickable Checkbox Styling */
    .chk-box {
      display: inline-block;
      width: 13px;
      height: 13px;
      border: 1.2px solid #000000;
      margin-right: 4px;
      margin-left: 1px;
      vertical-align: middle;
      text-align: center;
      line-height: 12px;
      font-size: 10px;
      cursor: pointer;
      user-select: none;
      background: #ffffff;
      border-radius: 2px;
    }

    .chk-box.checked {
      background: #000000;
      color: #ffffff;
    }

    .chk-box.checked::after {
      content: "✓";
      color: #ffffff;
      font-size: 10px;
      display: block;
      line-height: 12px;
    }

    .proof-note {
      font-size: 8pt;
      font-style: italic;
      color: #374151;
      margin-bottom: 6px;
      line-height: 1.25;
    }

    .fill-line {
      display: inline-block;
      border-bottom: 1px dotted #000000;
      min-height: 15px;
      vertical-align: bottom;
    }

    /* Declaration Text */
    .declaration-text {
      font-size: 8.8pt;
      line-height: 1.4;
      text-align: justify;
      margin-bottom: 6px;
    }

    .declaration-text p {
      margin-bottom: 5px;
    }

    /* Documents Attached List */
    .docs-checklist-grid {
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-size: 8.8pt;
      margin-bottom: 6px;
    }

    .doc-chk-item {
      display: flex;
      align-items: baseline;
      line-height: 1.35;
    }

    .statutory-note {
      font-size: 8pt;
      font-style: italic;
      color: #1f2937;
      line-height: 1.3;
      padding: 4px 6px;
      background-color: #f8fafc;
      border-left: 3px solid #0f172a;
      margin-top: 4px;
    }

    /* Page Footer */
    .page-footer {
      text-align: center;
      font-size: 8.5pt;
      color: #555555;
      padding-top: 4px;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>

  <!-- Top Action Bar for Quick Printing / DOCX Download -->
  <div class="page-preview-bar">
    <div class="bar-title">
      <span class="badge">ANNEXURE C</span>
      <div>
        <strong>Annexure C - Form ISR-5: Transmission of Securities</strong>
        <div class="sub-text">SEBI Request for Transmission of Securities by Nominee or Legal Heir (A4 &bull; 3 Pages)</div>
      </div>
    </div>
    <div class="bar-actions">
      <button type="button" class="btn-pdf" onclick="downloadPdf()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        Print / Save PDF
      </button>
      <button type="button" class="btn-docx" onclick="downloadDocx()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download Original DOCX
      </button>
    </div>
  </div>

  <!-- ==================== PAGE 1 ==================== -->
  <div class="page page-1">
    <div class="page-content">
      <!-- Header Table -->
      <table class="header-box-table">
        <tr>
          <td class="header-title-cell">
            <div class="main-title">Request for Transmission of Securities by Nominee or Legal Heir</div>
            <div class="sub-title">(For Transmission of securities on death of the Sole holder)</div>
          </td>
          <td class="header-badge-cell">
            <div class="annexure-badge">Annexure C &ndash; ISR 5</div>
          </td>
        </tr>
      </table>

      <!-- To: Addressee -->
      <div class="addressee-block">
        <div><strong>To:</strong></div>
        <div><strong>The Listed Issuer/RTA,</strong></div>
        <div style="margin-top: 2px;">
          <span class="fill-line" style="width: 100%; min-height: 18px;"></span>
        </div>
        <div class="issuer-name-hint">
          <span class="fill-line" style="width: 60%; min-height: 18px;"></span> <strong>(Name of the Listed Issuer/RTA)</strong>
        </div>
      </div>

      <!-- Claimant & Guardian Table -->
      <table class="form-grid-table">
        <tr>
          <td colspan="2">
            <strong>Name of the Claimant(s):</strong> &nbsp;&nbsp; Mr./Ms. <span class="fill-line" style="width: 70%; min-height: 16px;"></span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 3px;">
              <span><strong>Name of the Guardian</strong> &nbsp; <small style="color: #4b5563;">&lArr; in case the claimant is a minor &rArr;</small></span>
              <span><strong>Date of Birth of the minor*:</strong> &nbsp; <span class="fill-line" style="min-width: 120px; min-height: 16px;"></span></span>
            </div>
            <div>
              Mr./Ms. <span class="fill-line" style="width: 90%; min-height: 16px;"></span>
            </div>
            <div style="margin-top: 4px;">
              <strong>Relationship with Minor:</strong> &nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Father</label> &nbsp;&nbsp;&nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Mother</label> &nbsp;&nbsp;&nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Court Appointed Guardian*</label>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div style="font-size: 8pt; color: #4b5563; margin-bottom: 2px;">[Multiple PAN may be entered]</div>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div>
                <strong>PAN (Claimant(s)/Guardian):</strong> &nbsp; <span class="fill-line" style="min-width: 160px; min-height: 16px;"></span>
              </div>
              <div>
                <label><span class="chk-box" onclick="toggleCheck(this)"></span> KYC Acknowledgment attached</label> &nbsp;&nbsp;&nbsp;
                <label><span class="chk-box" onclick="toggleCheck(this)"></span> KYC form attached</label>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <strong>Tax Status:</strong> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Resident Individual</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Resident Minor (through Guardian)</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> NRI</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> PIO</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Others (please specify): <span class="fill-line" style="min-width: 80px; min-height: 14px;"></span></label>
          </td>
        </tr>
      </table>
      <div class="proof-note">*Please attach relevant proof</div>

      <!-- Deceased Holder Demise Table -->
      <table class="form-grid-table">
        <tr>
          <td colspan="2" style="background: #fafafa; padding: 6px;">
            I/We, the claimant(s) named hereinabove, hereby inform you about the demise of the below mentioned Securities Holder(s) and request you to transmit the securities held by the deceased holder(s) in my/our favour in my/our capacity as &ndash;<br>
            <div style="margin-top: 4px;">
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Nominee</label> &nbsp;&nbsp;&nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Legal Heir</label> &nbsp;&nbsp;&nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Successor to the Estate of the deceased</label> &nbsp;&nbsp;&nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Administrator of the Estate of the deceased</label>
            </div>
          </td>
        </tr>
        <tr style="background: #f1f5f9; font-weight: bold;">
          <td style="width: 70%;">Name of the deceased holder(s)</td>
          <td style="width: 30%;">Date of demise**</td>
        </tr>
        <tr>
          <td style="height: 24px;">1)</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 20 &nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>
        <tr>
          <td style="height: 24px;">2)</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 20 &nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>
        <tr>
          <td style="height: 24px;">3)</td>
          <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 20 &nbsp;&nbsp;&nbsp;&nbsp;</td>
        </tr>
      </table>
      <div class="proof-note">**Please attach certified copy of Death Certificate.</div>

      <!-- Securities(s) & Folio(s) Table -->
      <div class="section-title">
        Securities(s) &amp; Folio(s) in respect of which Transmission of securities is being requested
      </div>
      <table class="form-grid-table">
        <tr style="background: #f1f5f9; font-weight: bold; text-align: center;">
          <td style="width: 44%; text-align: left;">Name of the Company</td>
          <td style="width: 20%;">Folio No.</td>
          <td style="width: 18%;">No. of Securities</td>
          <td style="width: 18%;">% of Claim@</td>
        </tr>
        <tr>
          <td style="height: 24px;">1)</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td style="height: 24px;">2)</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td style="height: 24px;">3)</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td style="height: 24px;">4)</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <div class="proof-note">
        @As per Nomination OR as per the Will/Probate/Succession Certificate/Letter of Administration/ Legal Heirship Certificate (or its equivalent certificate)/ Court Decree, if applicable.
      </div>
    </div>

    <div class="page-footer">
      Page 1 of 3
    </div>
  </div>

  <!-- ==================== PAGE 2 ==================== -->
  <div class="page page-2">
    <div class="page-content">
      <!-- Contact Details -->
      <div class="section-title">
        Contact details of the Claimant (s) <span style="font-weight: normal; font-size: 8pt; color: #4b5563;">[Provision for multiple entries may be made]</span>
      </div>
      <table class="form-grid-table">
        <tr>
          <td>
            <div style="display: flex; justify-content: space-between;">
              <div style="width: 50%;">
                <strong>Mobile No.:</strong> <span class="fill-line" style="min-width: 180px; min-height: 16px;"></span>
              </div>
              <div style="width: 50%;">
                <strong>Tel. No.</strong> STD - <span class="fill-line" style="min-width: 160px; min-height: 16px;"></span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Email Address:</strong> <span class="fill-line" style="width: 82%; min-height: 16px;"></span>
          </td>
        </tr>
      </table>

      <!-- Address Block -->
      <div class="section-title">
        Address <span style="font-weight: normal; font-size: 8pt; color: #4b5563;">(Please note that address will be updated as per address on KYC form / KYC Registration Agency records)</span>
      </div>
      <table class="form-grid-table">
        <tr>
          <td>
            <strong>Address Line 1:</strong> <span class="fill-line" style="width: 84%; min-height: 16px;"></span>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Address Line 2:</strong> <span class="fill-line" style="width: 84%; min-height: 16px;"></span>
          </td>
        </tr>
        <tr>
          <td>
            <div style="display: flex; justify-content: space-between;">
              <div><strong>City:</strong> <span class="fill-line" style="min-width: 140px; min-height: 16px;"></span></div>
              <div><strong>State:</strong> <span class="fill-line" style="min-width: 140px; min-height: 16px;"></span></div>
              <div><strong>PIN:</strong> <span class="fill-line" style="min-width: 100px; min-height: 16px;"></span></div>
            </div>
          </td>
        </tr>
      </table>

      <!-- Bank Account Details -->
      <div class="section-title">Bank Account Details of the Claimant</div>
      <table class="form-grid-table">
        <tr>
          <td colspan="2">
            <strong>Bank Name:</strong> <span class="fill-line" style="width: 85%; min-height: 16px;"></span>
          </td>
        </tr>
        <tr>
          <td style="width: 50%;">
            <strong>Account No.:</strong> <span class="fill-line" style="min-width: 180px; min-height: 16px;"></span>
          </td>
          <td style="width: 50%;">
            <strong>11-digit IFSC:</strong> <span class="fill-line" style="min-width: 160px; min-height: 16px;"></span>
          </td>
        </tr>
        <tr>
          <td style="width: 50%;">
            <strong>A/c. Type (✓):</strong> &nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> SB</label> &nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Current</label> &nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> NRO</label> &nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> NRE</label> &nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> FCN</label>
          </td>
          <td style="width: 50%;">
            <strong>9-digit MICR No.:</strong> <span class="fill-line" style="min-width: 150px; min-height: 16px;"></span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <strong>Name of Bank Branch:</strong> <span class="fill-line" style="width: 78%; min-height: 16px;"></span>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div style="display: flex; justify-content: space-between;">
              <div><strong>City:</strong> <span class="fill-line" style="min-width: 250px; min-height: 16px;"></span></div>
              <div><strong>PIN:</strong> <span class="fill-line" style="min-width: 160px; min-height: 16px;"></span></div>
            </div>
          </td>
        </tr>
      </table>
      <div style="font-size: 8.5pt; margin: 3px 0 5px 0; line-height: 1.35;">
        Please attach &amp; tick ✓: &nbsp;&nbsp;
        <label><span class="chk-box" onclick="toggleCheck(this)"></span> Cancelled cheque with claimant’s name printed</label> &nbsp;<strong>OR</strong>&nbsp;
        <label><span class="chk-box" onclick="toggleCheck(this)"></span> Claimant’s Bank Statement/Passbook (duly attested by the Bank Manager)</label>
      </div>
      <div style="font-size: 8.5pt; font-weight: bold; margin-bottom: 6px; line-height: 1.35;">
        I also request you to pay the UNCLAIMED amounts, if any, in respect of the deceased securities holder(s) by direct credit to the bank account mentioned above.
      </div>

      <!-- Additional KYC Information -->
      <div class="section-title">
        Additional KYC information <span style="font-weight: normal; font-size: 8pt; color: #4b5563;">(Please tick ✓ whichever is applicable)</span>
      </div>
      <table class="form-grid-table">
        <tr>
          <td>
            <strong>Occupation:</strong> &nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Private Sector Service</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Public Sector Service</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Government Service</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Business</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Professional</label><br>
            <div style="margin-top: 3px;">
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Agriculturist</label> &nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Retired</label> &nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Home Maker</label> &nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Student</label> &nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Forex Dealer</label> &nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Others (please specify): <span class="fill-line" style="min-width: 140px; min-height: 14px;"></span></label>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <strong>The Claimant is:</strong> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> a Politically Exposed Person</label> &nbsp;&nbsp;&nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Related to a Politically Exposed Person</label> &nbsp;&nbsp;&nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Neither (Not applicable)</label>
          </td>
        </tr>
        <tr>
          <td>
            <strong>Gross Annual Income (₹):</strong> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> Below 1 Lac</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> 1-5 Lacs</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> 5-10 Lacs</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> 10-25 Lacs</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> 25 Lacs-1 crore</label> &nbsp;&nbsp;
            <label><span class="chk-box" onclick="toggleCheck(this)"></span> &gt;1 crore</label>
          </td>
        </tr>
      </table>

      <!-- FATCA and CRS information -->
      <div class="section-title">FATCA and CRS information</div>
      <table class="form-grid-table">
        <tr>
          <td colspan="3">
            <div style="display: flex; justify-content: space-between;">
              <div><strong>Country of Birth:</strong> <span class="fill-line" style="min-width: 130px; min-height: 16px;"></span></div>
              <div><strong>Place of Birth:</strong> <span class="fill-line" style="min-width: 130px; min-height: 16px;"></span></div>
              <div><strong>Nationality:</strong> <span class="fill-line" style="min-width: 130px; min-height: 16px;"></span></div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="3">
            <div>
              <strong>Are you a tax resident of any country other than India?</strong> &nbsp;&nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> Yes</label> &nbsp;&nbsp;&nbsp;&nbsp;
              <label><span class="chk-box" onclick="toggleCheck(this)"></span> No</label>
            </div>
            <div style="font-size: 8pt; color: #4b5563; margin-top: 2px;">
              If Yes, please mention all the countries in which you are resident for tax purposes and the associated Taxpayer Identification Number and its identification type in the column below:
            </div>
          </td>
        </tr>
        <tr style="background: #f1f5f9; font-weight: bold; text-align: center;">
          <td style="width: 33%;">Country</td>
          <td style="width: 40%;">Tax-Payer Identification Number</td>
          <td style="width: 27%;">Identification Type</td>
        </tr>
        <tr><td style="height: 22px;"></td><td></td><td></td></tr>
        <tr><td style="height: 22px;"></td><td></td><td></td></tr>
        <tr><td style="height: 22px;"></td><td></td><td></td></tr>
      </table>
    </div>

    <div class="page-footer">
      Page 2 of 3
    </div>
  </div>

  <!-- ==================== PAGE 3 ==================== -->
  <div class="page page-3">
    <div class="page-content">
      <!-- Nomination -->
      <div class="section-title">
        Nomination@ <span style="font-weight: normal; font-size: 8pt; color: #4b5563;">(Please ✓ one of the options below)</span>
      </div>
      <table class="form-grid-table">
        <tr>
          <td>
            <label>
              <span class="chk-box" onclick="toggleCheck(this)"></span>
              <strong>I/We DO NOT wish to make a nomination.</strong> (Please tick ✓ if you do not wish to nominate anyone)
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <span class="chk-box" onclick="toggleCheck(this)"></span>
              I/We wish to make a nomination and hereby nominate the person/s more particularly described in the attached <strong>Nomination Form</strong> to receive the securities held in my/our folio in the event of my / our death.
            </label>
          </td>
        </tr>
      </table>
      <div class="proof-note" style="margin-bottom: 6px;">
        @ Guardian of a minor is not allowed to make a nomination on behalf of the minor
      </div>

      <!-- Declaration and Signature -->
      <div class="section-title">Declaration and Signature of the Claimant(s)</div>
      <div class="declaration-text">
        <p>I/We have attached herewith all the relevant / required documents as indicated in the attached Ready Reckoner as per Annexure A.</p>
        <p>I/We confirm that the information provided above is true and correct to the best of my knowledge and belief.</p>
        <p>I/We undertake to keep <span class="fill-line" style="min-width: 180px; min-height: 14px;"></span> (Name of the Company) / its RTA informed about any changes/modification to the above information in future and also undertake to provide any other additional information as may be required by the RTAs.</p>
        <p>I/We hereby authorize <span class="fill-line" style="min-width: 180px; min-height: 14px;"></span> (Name of the Company) and its RTA to provide/ share any of the information provided by me/us including my holdings in the <span class="fill-line" style="min-width: 160px; min-height: 14px;"></span> (Name of the Company) to any governmental or statutory or judicial authorities/agencies as required by law without any obligation of informing me/us of the same.</p>
      </div>

      <!-- Place, Date and Signature Table -->
      <table class="form-grid-table">
        <tr>
          <td style="width: 55%; vertical-align: top; padding: 8px 12px;">
            <div style="margin-bottom: 24px;">
              <strong>Place:</strong> <span class="fill-line" style="min-width: 200px; min-height: 16px;"></span>
            </div>
            <div>
              <strong>Date:</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 20 &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </td>
          <td style="width: 45%; text-align: center; vertical-align: bottom; padding: 8px 12px;">
            <div style="min-height: 55px;"></div>
            <div style="border-top: 1px solid #000000; padding-top: 4px; font-weight: bold; font-size: 8.8pt;">
              Signature of Claimant(s)
            </div>
          </td>
        </tr>
      </table>

      <!-- Documents Attached Checklist -->
      <div class="section-title" style="margin-top: 8px;">Documents Attached</div>
      <div class="docs-checklist-grid">
        <div class="doc-chk-item"><span class="chk-box" onclick="toggleCheck(this)"></span> Copy of Death Certificate of the deceased holder</div>
        <div class="doc-chk-item"><span class="chk-box" onclick="toggleCheck(this)"></span> Copy of Birth Certificate (in case the Claimant is a minor)</div>
        <div class="doc-chk-item"><span class="chk-box" onclick="toggleCheck(this)"></span> Copy of PAN Card of Claimant / Guardian</div>
        <div class="doc-chk-item"><span class="chk-box" onclick="toggleCheck(this)"></span> KYC Acknowledgment &nbsp;&nbsp;<strong>OR</strong>&nbsp;&nbsp; <span class="chk-box" onclick="toggleCheck(this)"></span> KYC form of Claimant</div>
        <div class="doc-chk-item"><span class="chk-box" onclick="toggleCheck(this)"></span> Cancelled cheque with claimant’s name printed &nbsp;&nbsp;<strong>OR</strong>&nbsp;&nbsp; <span class="chk-box" onclick="toggleCheck(this)"></span> Claimant’s Bank Statement/Passbook (duly attested by the Bank Manager)</div>
        <div class="doc-chk-item"><span class="chk-box" onclick="toggleCheck(this)"></span> Nomination Form duly completed</div>
        <div class="doc-chk-item"><span class="chk-box" onclick="toggleCheck(this)"></span> Annexure D - Individual Affidavits given EACH Legal Heir</div>
        <div class="doc-chk-item"><span class="chk-box" onclick="toggleCheck(this)"></span> Original security certificate(s)</div>
        <div class="doc-chk-item"><span class="chk-box" onclick="toggleCheck(this)"></span> Annexure E - Bond of Indemnity furnished by Legal Heirs</div>
        <div class="doc-chk-item"><span class="chk-box" onclick="toggleCheck(this)"></span> Annexure F - NOC from other Legal Heirs</div>
      </div>

      <!-- Statutory Note -->
      <div class="statutory-note">
        <strong>*Note:</strong> For transmission service requests, Form ISR-4 as per SEBI circular SEBI/HO/MIRSD/MIRSD_RTAMB/P/CIR/2022/8 dated January 25, 2022 will not be required.
      </div>
    </div>

    <div class="page-footer">
      Page 3 of 3
    </div>
  </div>

  <!-- Embedded DOCX and Action Script -->
  <script>
    const DOCX_BASE64 = "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";

    function toggleCheck(el) {
      el.classList.toggle('checked');
    }

    function downloadDocx() {
      try {
        const byteCharacters = atob(DOCX_BASE64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {
          type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Annexure C- ISR -5.DOCX';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      } catch (err) {
        console.error('Download error:', err);
        const fallback = document.createElement('a');
        fallback.href = 'Annexure C- ISR -5.DOCX';
        fallback.download = 'Annexure C- ISR -5.DOCX';
        fallback.click();
      }
    }

    function downloadPdf() {
      window.print();
    }
  </script>
</body>
</html>
`;
