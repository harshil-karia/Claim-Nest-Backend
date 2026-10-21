export const FORM_ISR_4_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form ISR-4 - Request for Duplicate Certificate and other Service Requests</title>
  <style>
    /* Reset and Base Styles */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #525659;
      font-family: Arial, "Helvetica Neue", Helvetica, "Times New Roman", Times, serif;
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

    /* Page container: Exact A4 Dimensions */
    .page {
      width: 210mm;
      height: 297mm;
      min-height: 297mm;
      max-height: 297mm;
      margin: 0 auto 24px auto;
      background: #ffffff;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      padding: 10mm 15mm 10mm 15mm;
    }

    .page-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Typography & Header styling */
    .form-code {
      font-size: 11pt;
      font-weight: bold;
      margin-bottom: 2px;
    }

    .form-title {
      font-size: 13.5pt;
      font-weight: bold;
      text-align: center;
      line-height: 1.25;
      letter-spacing: 0.1px;
      margin-bottom: 2px;
    }

    .form-subtitle {
      font-size: 9.5pt;
      text-align: center;
      margin-bottom: 6px;
    }

    .date-row {
      text-align: right;
      font-size: 10pt;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .section-title {
      font-size: 9.8pt;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .section-desc {
      font-size: 9.5pt;
      font-weight: bold;
      margin-bottom: 6px;
    }

    /* 16 character Demat digit cells */
    .demat-wrapper {
      margin-bottom: 8px;
    }

    .demat-label {
      font-size: 9.5pt;
      margin-bottom: 4px;
    }

    .demat-box-grid {
      display: flex;
      gap: 0;
    }

    .demat-digit-box {
      width: 24px;
      height: 28px;
      border: 1px solid #000000;
      margin-right: -1px;
      text-align: center;
      line-height: 28px;
      font-size: 10pt;
      font-weight: bold;
      background: #ffffff;
    }

    .cml-instruction {
      font-size: 9pt;
      margin-bottom: 3px;
    }

    .cml-instruction.bold {
      font-weight: bold;
    }

    /* PAN / Specimen Signature Table */
    table.pan-sig-table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #000000;
      margin: 8px auto 6px auto;
      font-size: 9.5pt;
    }

    table.pan-sig-table td {
      border: 1px solid #000000;
      padding: 8px 12px;
      vertical-align: middle;
    }

    .col-pan {
      width: 50%;
      vertical-align: middle;
    }

    .col-specimen {
      width: 50%;
      text-align: center;
      vertical-align: middle;
    }

    .pan-val-line {
      display: inline-block;
      min-width: 105px;
      border-bottom: 1px dotted #000000;
      min-height: 16px;
    }

    .disclaimer-note {
      font-size: 8.5pt;
      line-height: 1.35;
      margin-bottom: 8px;
      font-weight: 500;
    }

    /* Service Requests Checkbox Table */
    table.checkbox-table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #000000;
      font-size: 9.2pt;
      margin: 0 auto 6px auto;
    }

    table.checkbox-table td {
      border: 1px solid #000000;
      padding: 6px 10px;
      vertical-align: middle;
      height: 38px;
    }

    .cb-col-1 {
      width: 50%;
    }

    .cb-col-2 {
      width: 50%;
    }

    .cb-box {
      display: inline-block;
      width: 13px;
      height: 13px;
      border: 1px solid #000000;
      margin-right: 6px;
      vertical-align: middle;
    }

    /* Page Footer */
    .page-footer {
      text-align: right;
      font-size: 9pt;
      color: #333333;
      padding-top: 4px;
    }

    /* ================= PAGE 2 STYLES ================= */
    table.cert-table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #000000;
      font-size: 9.2pt;
      margin: 0 auto 4px auto;
    }

    table.cert-table td {
      border: 1px solid #000000;
      padding: 5px 8px;
      vertical-align: middle;
    }

    .cert-label-col {
      width: 38%;
      font-weight: normal;
    }

    .cert-val-col {
      width: 62%;
    }

    .cert-table tr.row-names td {
      vertical-align: top;
      height: 60px;
    }

    .cert-table tr.row-dist td {
      vertical-align: top;
      height: 60px;
      line-height: 1.6;
    }

    .cert-table tr.row-face td {
      height: 38px;
    }

    .cert-footnote {
      font-size: 8.5pt;
      margin-bottom: 6px;
    }

    /* Specific Request Checkboxes on Page 2 */
    .specific-requests-container {
      font-size: 8.8pt;
      line-height: 1.4;
      margin-bottom: 6px;
    }

    .req-item {
      margin-bottom: 3px;
    }

    .req-sub-table {
      width: calc(100% - 18px);
      margin: 3px 0 4px 18px;
      border-collapse: collapse;
      font-size: 8.5pt;
    }

    .req-sub-table td {
      border: 1px solid #000000;
      padding: 3px 8px;
    }

    .attach-instruction {
      font-size: 8.8pt;
      margin: 4px 0 6px 0;
    }

    /* Declaration Table */
    table.declaration-table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid #000000;
      font-size: 9pt;
      margin: 0 auto 6px auto;
    }
}

    table.declaration-table th,
    table.declaration-table td {
      border: 1px solid #000000;
      padding: 5px 8px;
      vertical-align: top;
    }

    table.declaration-table th {
      font-weight: bold;
      background-color: #fafafa;
      text-align: center;
      font-size: 8.8pt;
    }

    .decl-col-label {
      width: 18%;
      font-weight: normal;
      text-align: left;
    }

    .decl-col-h1 {
      width: 32%;
    }

    .decl-col-h2 {
      width: 25%;
    }

    .decl-col-h3 {
      width: 25%;
    }

    .decl-sig-row td {
      height: 50px;
    }

    .decl-name-row td {
      height: 28px;
    }

    .decl-addr-row td {
      height: 52px;
    }

    .decl-pin-row td {
      height: 32px;
      vertical-align: middle;
    }

    .check-icon {
      font-size: 11pt;
      font-weight: bold;
      margin-right: 4px;
    }

    /* PIN Digit Box Grid (6 cells) */
    .pin-box-grid {
      display: inline-flex;
      gap: 0;
      vertical-align: middle;
    }

    .pin-digit-box {
      width: 18px;
      height: 22px;
      border: 1px solid #000000;
      margin-right: -1px;
      text-align: center;
      line-height: 22px;
      font-size: 9pt;
      font-weight: bold;
      background: #ffffff;
    }

    .final-rta-note {
      font-size: 8.5pt;
      line-height: 1.35;
      margin-top: 4px;
    }
  </style>
</head>
<body>

  <!-- Download Actions Bar -->
  <div class="page-preview-bar">
    <div class="bar-title">
      <span class="badge">FORM ISR-4</span>
      <strong>Request for issue of Duplicate Certificate and other Service Requests</strong>
      <span class="sub-text">(2 Pages Template)</span>
    </div>
    <div class="bar-actions">
      <button class="btn-pdf" onclick="downloadPdf()">
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
          <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.422c.15.34.09.733-.035 1.08-.12.333-.31.67-.542 1.014a21.4 21.4 0 0 1-.954 1.258c.277.67.65 1.34 1.107 1.954.34.457.738.877 1.18 1.238.35.286.72.53 1.087.718.33.17.65.27.935.27.18 0 .34-.04.47-.13.19-.13.29-.35.26-.6-.04-.32-.23-.62-.51-.88-.27-.25-.62-.48-1.02-.67a14.3 14.3 0 0 0-1.84-.66c-.36-.09-.73-.17-1.1-.23a12.7 12.7 0 0 0-1.57-.14 9.4 9.4 0 0 0-1.42.11c-.48.08-.94.22-1.35.43-.37.19-.68.45-.88.77-.18.29-.22.63-.1.95.09.25.28.47.53.58z"/>
        </svg>
        Download PDF
      </button>
      <button class="btn-docx" onclick="downloadDocx()">
        <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
          <path d="M5.5 12h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zm0-2h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1zm0-2h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1z"/>
        </svg>
        Download DOCX
      </button>
    </div>
  </div>

  <!-- ==================== PAGE 1 ==================== -->
  <div class="page">
    <div class="page-content">
      <div>
        <!-- Header -->
        <div class="form-code">Form ISR-4</div>
        <div class="form-title">
          Request for issue of Duplicate Certificate and other Service Requests
        </div>
        <div class="form-subtitle">
          (for Securities –Shares / Debentures /Bonds, etc., held in physical form)
        </div>

        <div class="date-row">
          Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ 20&nbsp;&nbsp;&nbsp;&nbsp;
        </div>

        <!-- Mandatory Documents -->
        <div class="section-title">
          Mandatory Documents/details required for processing all service request:
        </div>
        <div class="section-desc">
          I / We are submitting the following documents / details with respect to service request (tick &#10003; relevant box)
        </div>

        <!-- Demat Account No -->
        <div class="demat-wrapper">
          <div class="demat-label">Demat Account No.</div>
          <div class="demat-box-grid">
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
            <div class="demat-digit-box"></div>
          </div>
        </div>

        <div class="cml-instruction bold">
          Provide latest Client Master List (CML) of your Demat Account, not older than two months, duly self-attested.
        </div>
        <div class="cml-instruction">
          Also, provide duly filled-in demat conversion request form.
        </div>

        <div style="font-size: 9.2pt; margin: 6px 0 4px 0;">
          Provide the following details, if they are not already available with the RTA ( see SEBI circular dated November 03, 2021 in this regard)
        </div>

        <!-- PAN / Specimen Signature Table -->
        <table class="pan-sig-table">
          <tbody>
            <tr>
              <td class="col-pan">
                PAN : <span class="pan-val-line"></span> , <span class="pan-val-line"></span>
              </td>
              <td class="col-specimen">
                <strong>Specimen Signature</strong>
              </td>
            </tr>
            <tr>
              <td class="col-pan">Nomination / Declaration to Opt- out</td>
              <td class="col-specimen" style="height: 46px;"></td>
            </tr>
          </tbody>
        </table>

        <!-- Disclaimer Note -->
        <div class="disclaimer-note">
          * (Your address, e-mail address, mobile number and bank details shall be updated in your folio from the active Demat Account details, received through the Depository, for your safety and security of securities and to facilitate efficient service, If you desire to update different details in your folio, you are requested to request the RTA, by duly filling up Form ISR-1, duly self-attested, with relevant proofs)
        </div>

        <!-- Service Requests Checkboxes Section -->
        <div class="section-desc" style="margin-top: 6px;">
          I / We request you for the following (tick &#10003; relevant box)
        </div>

        <table class="checkbox-table">
          <tbody>
            <tr>
              <td class="cb-col-1"><span class="cb-box"></span> Issue of Duplicate certificate</td>
              <td class="cb-col-2"><span class="cb-box"></span> Claim from Unclaimed Suspense Account</td>
            </tr>
            <tr>
              <td class="cb-col-1"><span class="cb-box"></span> Replacement / Renewal / Exchange of securities certificate</td>
              <td class="cb-col-2"><span class="cb-box"></span> Endorsement</td>
            </tr>
            <tr>
              <td class="cb-col-1"><span class="cb-box"></span> Sub-division / Splitting of securities certificate</td>
              <td class="cb-col-2"><span class="cb-box"></span> Consolidation of Folios</td>
            </tr>
            <tr>
              <td class="cb-col-1"><span class="cb-box"></span> Consolidation of Securities certificate</td>
              <td class="cb-col-2"><span class="cb-box"></span> Transmission</td>
            </tr>
            <tr>
              <td colspan="2"><span class="cb-box"></span> Transposition (Mention the new order of holders here)</td>
            </tr>
            <tr>
              <td colspan="2"><span class="cb-box"></span> Claim from Suspense Escrow Demat Account</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="page-footer">
        Page | 1
      </div>
    </div>
  </div>

  <!-- ==================== PAGE 2 ==================== -->
  <div class="page">
    <div class="page-content">
      <div>
        <!-- Certificate Details Section -->
        <div style="font-size: 9.5pt; font-weight: normal; margin-bottom: 5px;">
          I/We are enclosing certificate(s) as detailed below**:
        </div>

        <table class="cert-table">
          <tbody>
            <tr>
              <td class="cert-label-col">Name of the Issuer Company</td>
              <td class="cert-val-col"></td>
            </tr>
            <tr>
              <td class="cert-label-col">Folio Number</td>
              <td class="cert-val-col"></td>
            </tr>
            <tr class="row-names">
              <td class="cert-label-col">Name(s) of the security holder(s) as per the certificate(s)</td>
              <td class="cert-val-col">
                1. <br>
                2. <br>
                3. 
              </td>
            </tr>
            <tr>
              <td class="cert-label-col">Certificate numbers</td>
              <td class="cert-val-col"></td>
            </tr>
            <tr class="row-dist">
              <td class="cert-label-col">Distinctive numbers</td>
              <td class="cert-val-col">
                From &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; TO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </td>
            </tr>
            <tr class="row-face">
              <td class="cert-label-col">Number &amp; Face value of Securities</td>
              <td class="cert-val-col">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SHARES &amp; FACE VALUE OF RS: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EACH .
              </td>
            </tr>
          </tbody>
        </table>

        <div class="cert-footnote">
          **Wherever applicable / whichever details are available
        </div>

        <!-- Document / details required for specific service request -->
        <div style="font-size: 9.3pt; font-weight: bold; margin-bottom: 5px;">
          Document / details required for specific service request:
        </div>

        <div class="specific-requests-container">
          <div class="req-item"><span class="cb-box"></span> Duplicate securities certificate</div>
          
          <div class="req-item">
            <span class="cb-box"></span> Claim from Unclaimed Suspense Account
            <table class="req-sub-table">
              <tr>
                <td style="width: 38%;">Securities claimed</td>
                <td style="width: 62%;">(in numbers) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (in words)</td>
              </tr>
            </table>
          </div>

          <div class="req-item">
            <span class="cb-box"></span> Replacement / Renewal / Exchange of securities certificate<br>
            <span style="font-size: 8.2pt; color: #333; padding-left: 20px;">(that is defaced, mutilated, torn, decrepit, worn out or where the page on the reverse is full)</span>
          </div>

          <div class="req-item"><span class="cb-box"></span> Endorsement</div>
          <div class="req-item"><span class="cb-box"></span> Sub-division / Splitting of securities certificate</div>
          <div class="req-item"><span class="cb-box"></span> Consolidation of securities certificate/ Folios</div>
          <div class="req-item"><span class="cb-box"></span> Transmission</div>
          <div class="req-item"><span class="cb-box"></span> Transposition</div>
          
          <div class="req-item">
            <span class="cb-box"></span> Claim from Suspense Escrow Demat Account
            <table class="req-sub-table">
              <tr>
                <td style="width: 38%;">Securities claimed</td>
                <td style="width: 62%;">(in numbers) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (in words)</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="attach-instruction">
          Provide / attach original securities certificate(s) for request for item numbers III to VI above.
        </div>

        <!-- Declaration Section -->
        <div style="font-size: 9.3pt; font-weight: bold; margin: 8px 0 5px 0;">
          Declaration: All the above facts stated are true and correct to best of my / our knowledge and belief.
        </div>

        <table class="declaration-table">
          <thead>
            <tr>
              <th class="decl-col-label"></th>
              <th class="decl-col-h1">Security Holder 1 / Claimant</th>
              <th class="decl-col-h2">Security Holder 2</th>
              <th class="decl-col-h3">Security Holder 3</th>
            </tr>
          </thead>
          <tbody>
            <tr class="decl-sig-row">
              <td class="decl-col-label">Signature</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="decl-name-row">
              <td class="decl-col-label">Name</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="decl-addr-row">
              <td class="decl-col-label">Full address</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr class="decl-pin-row">
              <td class="decl-col-label">PIN</td>
              <td>
                <div class="pin-box-grid" style="display: flex; justify-content: center;">
                  <div class="pin-digit-box"></div>
                  <div class="pin-digit-box"></div>
                  <div class="pin-digit-box"></div>
                  <div class="pin-digit-box"></div>
                  <div class="pin-digit-box"></div>
                  <div class="pin-digit-box"></div>
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div class="final-rta-note">
          After processing the service request, the RTA / Listed Company shall issue the Securities in dematerialized form only in the Demat account provided above.
        </div>
      </div>

      <div class="page-footer">
        Page | 2
      </div>
    </div>
  </div>

  <!-- Embedded DOCX and Action Script -->
  <script>
    const DOCX_BASE64 = "UEsDBBQABgAIAAAAIQDIMwzHogEAAC4IAAATAAgCW0NvbnRlbnRfVHlwZXNdLnhtbCCiBAIooAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0lU1Lw0AQhu+C/yHsVZptPYhIUw9+HFVQwet2d9Iu7he702r/vZOmDSKpqba5BJKZed8nb8jO+PrTmmwJMWnvCjbKhywDJ73Sblaw15f7wSXLEgqnhPEOCraCxK4npyfjl1WAlNG0SwWbI4YrzpOcgxUp9wEcVUofrUC6jTMehHwXM+Dnw+EFl94hOBxgpcEm41soxcJgdvdJj2uSCCax7KZurLwKJkIwWgqkOl869cNlsHHIaXLdk+Y6pDNqYLzVoarsNtjMPVI0USvInkTEB2Gpi3/4qLjycmFpMv9dpoXTl6WW0MxXaiF6CSlR5tbkTcUK7bb8bRxykdDbN2u4RrBP0Yc0OhinEa30IKKGJsOdWbiFnUIk+uOH0Uh3QiRcGUjHJ6h1u+0BkQb6ANgodyJ8wPS5N4pv4p0gpffoPPbxNRrpTghwqieGrfJeOUA8/J9sTQHiHv7kJ6YG+iDYSHdCIK0EqK+HJ7GW+c2SOtcHIa2Y+I/X3u6QanoQ9joBG0eSPvj9oFpPCtRfvetT+0iHf4s5X2/7yRcAAAD//wMAUEsDBBQABgAIAAAAIQCZVX4F/gAAAOECAAALAAgCX3JlbHMvLnJlbHMgogQCKKAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArJJNSwMxEIbvgv8hzL072yoi0t1eROhNZP0BQzL7gZsPkqm2/94oii7UtYceM3nnyTND1pu9HdUrxzR4V8GyKEGx094MrqvguXlY3IJKQs7Q6B1XcOAEm/ryYv3EI0luSv0QksoUlyroRcIdYtI9W0qFD+zyTeujJcnH2GEg/UId46osbzD+ZkA9YaqtqSBuzRWo5hD4FLZv20Hzvdc7y06OPIG8F3aGzSLE3B9lyNOohmLHUoHx+jGXE1IIRUYDHjdanW7097RoWciQEGofed7nIzEntDzniqaJH5s3Hw2ar/KczfU5bfQuibf/rOcz862Ek49ZvwMAAP//AwBQSwMEFAAGAAgAAAAhAJCXKZ1WKwAAl+wBABEAAAB3b3JkL2RvY3VtZW50LnhtbOx9y47bSLbgfoD5ByIXA3fBdjL4puc6L/hsG6hyG053VfWSKTEt3qJINUllOms1wHzCBWY1m/mP+Zr+gfmFiRclvhmkREmZZi1KzmDw8EScZ5w4ceLf/v37OuQe/CQN4uj9FXjLX3F+tIiXQfTt/dXfv7pvtCsuzbxo6YVx5L+/evLTq3+/+a//5d8e3y3jxXbtRxkHQUTpu8fN4v3VKss2766v08XKX3vp23WwSOI0vs/eLuL1dXx/Hyz868c4WV4LPODxvzZJvPDTFH7P8qIHL72i4Bbf2aAtE+8RvowASteLlZdk/vc9DDAYiHytX2t1QMIIQHCEAqiDEgeDUq4RVjVA0ihAEKsaJHkcpIbBKeMgCXVI6jhIYh2SNg5SjZ3WdQaPN34EH97HydrL4J/Jt+u1l/yx3byBgDdeFtwFYZA9QZi8koPxguiPERjBt3YQ1uJyMAT1eh0v/VBc5lDi91fbJHpH33+zex+h/o68T392b/gh22fh5/Rr/3sWpln+bsIyd+R1myoWPGvXiR/CeYyjdBVsdtphPRYafLjKgTx0TcDDOsz7PW4Ao6i1qTabkGEPkAV9Srt1SDDvhgh4BmoiELs3WFAofzPHZA05eP/hUVNTmFzAqHxyAEINgLLwGY1FDkOjMK4Xe+lGcAJGscrhEKogOMF+YgGjDqwiUwCQLrPlahAUIZ/Xa/Sul3krL90xOoLoD0NK3oF7WhfmaPPtMEH4axJvN3towWHQPu5V4iNyTgbAogJVFPL0MGRuV94Gasr14t3Hb1GceHchxAiKBwc5nMMUQP+HjIJ+8D/977gd0ZpDOubqBnpVd/HyCf1u4DPp3cZLvI+QKXlT0l3Bkq9wK7RJGWpV6X+w9R304JZfYEfekkRNsnZNtn/vbcMMPVFdUbSF/Mln1MTLvKVZ+MObzwn+uc2eQojquwcPKvuvQRb6V9foQUKepxtvAUebd3gDePT4mj6/3sHB/8tuXKhNUGtG+uAnRWwLCGBHEsOHE7dJ/NRPHvyrG676OgH88fbLm6YnTGii16TS2wjx+rQLjisKjsgy7XQgedPnpKGxQIvyk2G0yCe5GWdJkHjVVJRjsEoBl/2E3vnQREASCYQvgghy9LvQv4cvaqqEoQXfVvAvIEkS6fMfi3wQC2iJ/aTEUXf4j/TPvIvYxVFM7yC6fvH/ufXTrIv3HF4wHR0PkhXsABZlxhTO5jPAMkjTrf8M8IzvnwGS9nYTBgsvew4TavlJFtw/F2y9aPkcmDRb+c9B6G8hEOjzXAqmFZtODRCDFUhLsK8b7aboWIYNRG16u6kRvDsNJx5Jj+HcD1xgMJltvdHEvBpsgzqgDSdvF2q3/mKbBFngl2lYQbDgO41G8F//4z/H4rjykunxG4nc9YXiZft3kKW3FzxxZhwt09cXKhd+tnh7qbit/HCgFT4ZakF0oYhtVk8pdLLCrtf77B8riijE95fSh64bTSIvW7oI+MNMIn2CoRO0ystaM14+fYWg6WBq5lKk5rJnDtEI8t/6SICgGCYw9PJIFF1RBcNCS+Vxxj3z7lL6m2OF7Dl6eROncKp0asfbOgABUCq29tBF3ANRi36tPkeg6FHkToSo11bf+NFQHyKfCRLSsBwVOGpRRO4qhGNlzhsbLinedYmj4ABHQzSbBoEW6Sj+14ZdGyrNYacDDDTjFIz4bsvoee3wQTPQfpJBjya5wAsKA0KTfLs83c3qSxAERzHhouCcihgrmW41q+i2LJryUcLUrXh+8D2UnkB1XrRdk05B+BDmXSj3w2cfkUYk9KDo717oU95wFZYPOe9aXLLhx/CvlRd9C1C2hKyoVX17Bxf6JXW7+1KbsiXS8QtKuMji5KmLKVVJ0ZQxofN8RzS9XvqZF4SdDvjoryRw6R0kfqcjOBp4z3p1NNz9ds4k4L2w5t8dBS562hCnKTBeo3XM+a/9c4iIDVH0AuAyR/d/6KZs8a+bYzGSLADVNo6sR7oiLqLSK7wF3Y49q3xUaAwF8S17JS3vtE75R+6a+83nvMTn0u3dOsgyNJvZyodeexjGaNOfyzOvUtiXinCr0UYzUV9Ej0TuMchWkCfSjb/IuCzmKN/lbMK49mH71qssWPzRBTFxYzQFj++8dBEE769+g1ODDEOKtbIRpaW26oDxqqLIl//vf/7fcejfeCmcgNB/8KLsNfzXvZ+guUEkC6I0S7YLnL7yFxbGlyxoQhWmICQvAx1b2sEG9OcgzT7DD35LvA3l8EYrurewh1hRQaTLkLYeiqDrFTvb4HyIIoFCZHhndEWF6p2jyW0XpW1/7Q3cUhzM9yOF6MZYLOJtdKnYfYrfNrJ/dhfSH9rzLixveqM8ir8mwZLy0F0IScYRJe4m8Ro5rJA7NOQaE2Vea33wk8yIFqsYLiOQRGH1ECd/5m0b75uP2hDs3yHuioKlCv35D/Qn9erg37/B5kdk6dDjpw2cGG+bxbvHP8fxHznevGTgbvdBkmZf4kckTQhtj/61f2jF4XaNcm/z53kD7hLFH0zoDO7++pX8tXNMC/OGZgn98xv8hTAIrlIuN3Pr6VsJgXK6ZGVfD0hQNRI9v4tSabKlazbS8x3a/yteDtP3CWDKA8kHH0lAzoMC2GGR91iQ/+d/UYZG6O5Yevndy9+i/SqhNFEyXdOhqOdI8kDVbUHcL9pLYyyu421VBLLbZLfKT3BOTGGUrKbsPAaJOJV7qf45QAlpp7RNvzfoV0zEYxFekXnD0aUK4WXb0lVDR676TPgXSnjHEHVdrGSUiaooqErFKZ0J/5IID2RId9esEB7OpiDz8izxL5fwsmPyJtTrFcK7LrQA7i6DeCb8iyO8aIuuIzkoNFbcJ9UkHmjansoz4V+cxKuiZWtiReIVYKqyjF2+mfAvlPCS6BqGjqIPRa9edSWTB7ONf/aER4/NOFn6CZnGeJN/MwpC0gGOIovXlWb8rd2Lrewj6KqrOJZZZh+gW7qoySQoN5J9yt1n9sl/jyz/QLMMwTarW22yLCu668zy/3IXd66kuSKoWHygSnDVZ5O90ZnwL5HwEhR4zXaqyUSOZmqWOFv8FyzxoqAbPF/NzrIlR9PBLPEveFXvOJZhOBXCK4BXLUOZt2xesMRriuTYAiJQcXFnSNC9U+c43sslvCo4pm3LlVW9IruiI6l7gs6Ef3HhHFtXFNGpSLxiSqLhyvNy7ocN5zyS5KhKK8agP8ij2Jpk2qJVZqrGrMQKU83xnE7+KfEB+iFtNCmu4sSJCi/KUmVrhoUIE9SiuTDKYNjHJg6zcHedI2sQ+yphecvRoFmunE1kSXYnhBV00SjY9O6CT7Tzj07YRtFgo7Z3R/9uo6ckGQaw+IoJZqFnN+n6tGXv+S2+aYJBXo4iH3nX+Y2KaGQ3n5P4IVh2FggpoN0mKaGX+S2nB7IbKwx85rTmYcdmfvHSjLkOyzDQSI4mAfyqqZnSLufM3Omwfvm5GUj58PexUGMuvTQM7FO8nYZGQ7L5h0FmyMUvisXNay6KMy4Ol+joyMqLuOwx5tZxlK3S16XzyPQ/L0MC0322bgTyrfjddR5EHD1N2Yq1tNBQwkKzE/SdnxwJnkVPoregFc2CRbDxouynEpzrZqth86IkyzaD1Tiqj32Q1UBDqbtKu4NZPtSvRhp4X1f+GoJaB1GcfEAHs6pzZYRp/JrbEGPCLbfhE3cfhKG/fBNE3BKJKbeII1qmfHfaDJWxeMswtQBoGlwWo9XveIM85PR0Pi0tlDZ43XXtw9C5yDNeiBS0a7kUxe505dHX1QwOyBlPPbEruFNjtjtMeqH40WOt4yscTYteMLDK5Ck5jtXonRo1L7lUYYDO16XOWZj43vJiKfoAZRQd0LxQ/NBx9QtF7XItw5evxoViVlv6FvEq+Lmnxiv1WQMgx8Js9bTxkzCI/uCSdwF0HpOPS418oPCVRRzGCBH8IV5SBIs6e9XPP77b5g2o8kmIT0Pjt4vvFUd865gfSyhdF3DqmoDx46Msd5rxLYJksQ29hFt6cJXNfYof/PUdXJvz4mtUKwpMOXaKAlz4ZKsAVZb45iXdRXTGfYKBsZtrBDYc2acbVm0H4z/ixQDsoOPKFrUdrbuweUtrGWdw+tEb6Z9w3YT/QcaGv5STEP9HQKFlyfi3yztnw98vbbENfz2AK+Ol/+FQAL+OBYCIXSbFXfiz9xRv0ZgIze6D7xBiTjXLD8NfPMwEdOLLTLCjcD4xjY/JZwuwqqUUAM5VbC2lgP/qLqWAG1pKKRSGvuPnllIKMlUwpWaZJ0UeCYjmw/67dXxxP89wVVNWKpnz1TAAOexv8YLmmkTEc+msHPaXhF2ZyLxH264yTgthTSSxDN1UxMpmhmg7Cu8o5WTRQZsZigssycEjaoxffEVuZSWAsQ9OhXgnSFBxqAv98WWLblvxv3uLjHJct3ZDuoz0KOnCSkxPbrYnRRX52fjUpZtNXXG1su0f/o3OGpmuIkKKHvaFEeFhmg1y2MB+z//r+lJ/3cexA3x9rhESS4plDndrFlSsWJgFFcgWUG2VJUdjfFTxPFLZMb+3G38RrP2oi5CFqnqTrAwqXFEvBFrHOvgWeaj0eTtXoB/Su9eQSJKhGLaFZv0YhkThMV9jBI5oSCTTVQ0LF0U6M3/q2BKdhj8/xesgwtcXdqq4PVUm4dAOBDvr8J4RL9tfwPVX78ydM4ITXyhif9tkQ25GY7BicAVQAojkYKepWvXDMPulqoYiu7j02nSbdE36oZzhV1QD1QKTX6GlSblP/iP3JV57UZNmKM0M+iFtjQl9kq5IjjIm7+uIRZ13xO7YsBQdR5RsEanNAqIC78gub2ITcATV3YYoVdoyPqayV9r7+MK4oq75iKlstIjgT9yrf8TbhPOWS9iWvub8N2svCPd/r+O7AI4h2uLwEFxPcnde9MeuKGu68sKQu/O57YZEkoKIQ+ksqJZrEHP3SbymdULRXjbWdtwuqL7r3CHMdxVJbc/4edulrQo+9qAoVXNfOGXcwoMj2WarOAn+9PEYv3w1UFlUMhO4xbuLH/zdXMEZ4NBs7ecnfct9LEXBXnOb0PdSVG+WFllFM76FDRXsGuKHgMfDK05eawBxaLjQhcTj0IWUAwKDY5NbmvtCVmGYAjDdFAyLCBeyUMdHhAHRJpMM57AAcBtGkqQCq2Zdy5J53ayCAZAlhSk7aPqcEWolj15dv8E66Q2XjLYX3u9xjtDUFnQ+gytVZul2Jj61i9d9e8b58PqteyNs4oV4B2ItdewvBDto8i4UM/Z7Fk6NWc8G+lnnjCG16oz44cL6XbhNrEAupm5/XrT/jHNRXYxjiN1Y38Xfj74vq2l43TTvy877suVQzbPYl5XJDXnVZknDq38Cgn1fVnFkF5h2WzidAKEYVULn+n4nOO/REjpHKDfNd/PWjibqoqr0lIWfNHReO6TXowyRTqLavtC7qvmNJPBC7pevCF+q+HdNFT1ILkQu6sF//a//M0xxH/Prx7XIH9N02+nNWCpQZKk4mJN5C92Hus6ImL3dhL230k+NX8V8M+z9LfwkC+7riCOJoToAd2xRHEipMSsOReFdQa2WfxmoOOg9Qxg6q+LoXfyLKjWNbT0EQC5zb+8hSuTqHzT69kPFArE5OIgskv2IQhA5+xkdUcqN9D7EICskrE3iyLgO9j7cQDNtejkKUXTWgQeKixV6wXqchigc1O5Gg8HpRpH6ibFgmIy/Rws0HfVzn6dH5Xabbvwo9bmmo64lXYZ+yEv9rpdkOrwptTk6BAjFoOp6absKA3mPY7heMjBNBYBpz+oxul5gtwU2SJWRO+L22kuqnPeftdfIuEV1O3iPRMNGcbc0ffE3IcQE3el42IwcD6cfI2D9xY/8R6/zUtY5zF/Dy/m+QPrkcpcsXOovtkmQBZDlT+lwA0vTdUHqyek+0Ur9tF5qn091FvU/GKmT+LROtIyTtK7tSxyJfkj/frdJBq6j8IhPL8RtUnRLNPgcz9ltmt5xgcI0Vl3ebu/eLIOHANXWGCaQP7whvN2E5ILuLvwuNnin2KqgnOXIbDOwgtHuAnvZMTfAO7qiuCw3eL80F+DlLPW6mMmKozQOg2Vvbvr5xOvMcj9cQF2c7tkum+iHdO11hiQb2KaCi5sPdYYUfbdhmPc4yvadaGmyeWCe96wRZo3wEj2Bm9ud0T8ngpftU/CaIpi8Xr2j66wapJSRe1B5tznWMCGbfk28KF0HaW1xV+JT9ENe6LWvgqNLjgXa/FsChH69Zl9xnjb+WC4PjdKh8xh+NVsJpffcbrxoN9puoVEd6ApU7zC+CLMbdJLtWFLyYxhfzOC43Ot5wxfdNEWvvfrFj4Z7CL1wp0C1J7n6QrCM/MdngCVO23wOeA70EM+C5ArXyB7oKk6H6XB7vPITvyl9G7W0G+LdFQ8F+6aqpqYLYNxC95SGWBBEATigpz5FeZw1Q9x3b8U4Q3w0s4aISEFOAb6VRw8I++PMKnIEeZfM46SLJH7kcGF85swe9NN0vl11LM1w8P0dAx0wciuHrAFTwbVkqsxQ7o7rSdHOrfzxwffQeRJ6HHTE4USGi4BSf5F9Lsktw7jg+hePqZBmeR/HmZ98QWec/WiBhkDlj8zAVeEILM3GRs/zgSwgzwXRNt7SszObb7eIC1BCPtABRn0F/61ohMVQh188hHUWbyDfabgHzXzE/yanL95faaTcS54hidevKzitPhoVnhGMNwqB8/jvb9sM/737zqft+ivBNM28BC0cyZNFHCIpodytCjnvkwndSxfhvhqfiZbruDbLpjvPSwauZVakR6WxmPpKnrQyVV9xBboGpCJ3VzUOOdv8aaHRF9qqWqV53LwpAkMWWRY4L2vchm7ats1SSaiiQvr0SnlGRuiVEx6XLlicxuFhYM1G4+P1bz7nJT4HtUsYoxPxxSSZV+lfOC+lZRn8Zc28tH4ttzlNTlHR8Nz5Yfz400/lqnbNpAaarotWtfIIC4ufjpu7GPeAI3lQidara+EuzWfyEBlJYQN0qAx7bZTwLGfyhr9dPpM3/P3Smbzhr1fO5I0FsDuTNxQAcXrmM3ktZ/JEQaN1pcq1UhWwKy436Eye6gBo68ZkOEFo+Re71zoY5To5StdtdjE99ofGM33/69jr7r+sU9INFXl3LXPVONU1ndln9g4ttFfaPeCPklrVedlQHWrF/6gtjz55a5+L73GhInw+L+GseA0XveXLGIimx8To4C3M9z281a6OWTjrMM5kZC3BAKpBqj4WWEuQTF5TiPB0e17tNppWQ6JPmDyvYbXcql7JjgeG8NpAII/MkaXizNXrzpbDCHX+5mg0ofHJIs2OIxC9hWyxisV9S+PZcULRr7Ml1zWsWZ+z6HNgWrIIWA5xtq9sno8+HyxMOHfoyLumn3A9vx9X0au8ZRu1TV7RUEWBd/YOQ6uip/UEGxixoN2OoNUn0oxsar5JYcLvQZUQFtXCk4/KAbUwfnnaLlz1j1D+zRl6lqiI0hjlD0TAeF6BRfu3rp6nl8PTmA6BlyWJlGg9bQpEbzRLkOjysLWHqlA93VohQOJ3u1gNMfoDrdAImwEXDK/S2s3KDCjgAdC/+xBhqdZc28g9PQ4NCQRHRoKBIvQ8QdOCrSopsikJutG6mXpGSZEEmlvXKge8Sjm9tYcm77RGrVIG8e2gmkDdGQ5GIblCYycbRNqJhYzs/08vZnTOu1DxalkIR8ahf3V5s6lnlpwciWavHIVNulAbTvryFkWDTKOWQ33zg1yC5xDBkYGtAbGSSczrPBBlC4UMp9Jz5dvDK7GZg7QGgzUCb6usWBzoxdyg1JguggiQhza76jvsOi/S/I/KLLT78LXlH6SwbLqVqicAaKqrufv43fG5ZD/xu4wdiariszKQ0MlA091QNZCBRoyMnSkkB9jAdKrBXxuokiBNqTqamIIW/D4rU4gvnCkaeAK1DFvsQ2oLqmK2HV0hQOh3p4z0vvi1vmxakmxY5zx3fCFh4hur5WhWVVRcUaFXUPYDPclhHXKNTMc52FYRmH1byFAukDWhWrhXUgXVsGWyaM1Jb2o8VM+7JhJ9rTTWg9b0Cd6dNICsDo1jN7p554jpNosUnvf8hSL1hoDuNB9Viimi5bqWxbK1ZUmqjn2PIsUUVxZJHmqVYrT7IPKcfJuhR+GNNblAElVDcMccDJDEObzOrnAURwS6hSvMntbknnG31Q7SLIgWWfBw7PjObPwO4UVBlW3g2hVVytuOZaErPIu86PKisL+Nu8iLZQs42s4N8Qgv0SbmM1NyCzqYuyVG2mMmW7IZ0Hkc9F9VuIoU7F/kHRMlbrf9y3392zNOXWJwSCRDBoaiVzS6pMuAl51yglt7ikP5yQ8rRZfGBS3MXfqvjbnPoQlYJK2M33PKHKxN7oUi30KbZ60ImTShYEm2XK3gKUmWbrlGOQOsogkJOanGyxsvQj0eZYH7zDXcs1Nxz0KGavM4a7OTUaJBmaGWYTETBW0D66ZeVndMMRONpN/gj9EeZ4qZnCLmIcqq4JiXmFIIpPwwfFsPmUS32nsIAkkv7eihq7sDbC2pVCfa/xgeYGlIaq/AbH+ZOV8o34TtQuS/eevNf58YjxYzVUTDhdIwMRYMVIHN9bvfjozG8KRRokerwg8kSzNsveIUDhR+yxRdi1x8f/QUgFOL1G2VcMUpKGi58V9oro5JyINanm1cFCPPcBIFmJqr8ZXNDEk0RYBuiGNjOdPkXXkXBMVLDlVQeYMY9qNvEA28bKeZGy98RdHF+BfsL3ahXS9lcdk06BqLJfK8ULpe/KLH0slNrgK0UprGJQ+lk8FMRRUvj8Fubj8YX5xbDrtlnGtYDver8fPfHe5vLvfltlympTIiU+FVvhQueLa0eV7C/wLVr6jzrqu9DPUrOoLpVkOi0OWQAXF8n8EAHcP60Cn6gqxKyuVx2dsS0tcN8SD001SvUDJk1VKdStb7kUMbjMWmiq6mptLGrlVEPgVowAVnMrv56affUM3Rh+4atIVcyCGpjtmNt8G3cENnuQu8IQq6aI8A33nx02ioj6tgsZpsSkjltM4atWNhN/dFpdyaurPwC6bhA8S3RkIiOlUhESTdtg2dRUgoeRqEpEC4IwtJzv7NyMuKrekmQDj1Ia+rgoPzAIoavNJYF3v65LIrB1ZiJugxUs35TXeykh+rLisSO15s+y6ovTA5n1ASbxL/n9sgqV/FfRTgkM0ngZtu/AXKjJ8GOHwadIdUezRRy+fQVPtpxlIwUnIsUXewJB5Zwml93qKEm5okOMQFOqaE422M60lqg9LhFUhyzBLVfddKFOR4gq8PXPTVJgRquC32ZZhPjRzhk/srD0/1TVanYNF5v1FN7oDJm07r/mlxMI01sdvlrvxkSrnLHQh2uRPU3YVxs9yNFwJcif50ModK3p/ua3+PFmh4R3cUOj6Zl/O/NJXSfqFAVZ2Ikg50XjrsMCN9gqGPWWUAQLcY8/HtIxElGcilPh/KAUWfJe2Ams94+UHJOHzHjuXtrpMMLO93JKiwvN5Z85kdQEvN534AiG/nms+tNZ8lMZ/ncs1nTd7dDzOk5rPsWqKhyj2u/FdMoeIKMVc31Zvu+Z2PnPdo3jXHw2iiQeP+tOTKmiMIIxyfo1dFINNcXt3nbXUVVgqc5iosV/XdvZH6Zru2k5b1ZYM5YLHZZXG68W4yxkRxYxJ38AXmY2a+AK6jCw5guZxDlCUJF0io8QXd+qRPsO9LO0/AKiSZgpT1Uqjv/B+LHC5+MA0vtScZdO6xNKTXdND9VRB1AbNUoMjScRl1NLLN8On5yL+Uv0N4t66VdN0FgC1Rq+FgdXvolu7SFVmyL5p7QpYcpg+OxaldhK9nL5yRsS5QCoZr8Efof3XVf0M/pK1xl09xXcUBPFvNgUMjFYVFUqNo/BykWUUyThiu6KVyQUAaJ6EAYo5nVFfDHSz8xd+EEP6A3ZSji+MYtFk3aS4C2S9+5D964Ty/EyHrfF+gLcPOINMU7v8hOHdfcXtp2LLtDZwF6xHrrkHbCYotSI6GizYN3Mbr3pPvs8d9IUGFni8obaBrtAQR8VN1kEc7ytvnr7KV16ntC4Qctu8asPLH0M3ze9hx+XoS4OttFoSQF7rBF/zRYeCzOImmgbz0F4m/CbJpoEPfNpoEcLzt5L3xcDvzFMbPA0pZm4Yzum+2Hw1343WbwvEzPA1DwHngcFZg6nNByt1vw/CJQ0IZ/Okvm1ZXtS0a0xUUNb/YaaSKHrFkKqvo8aslRuWO1kxl5c4VcqUkvqrs80HO66QKQqN3DZ1oGUMurS2WmtlStlUZOObMljNbjt8+v3uzDB6CNOjWvSPSEju+euwMyK4BbsIgyyCndH1yhGvX8UnmldcRvjV43XQyVTZsEaRCKddNporOsyrbU2FWZXtRsOIojcNg6WU9umyW9kmlfWhkrwf0qUaAr9ZsqjxQVVVA1XmRd1g2VSqqaoJNlVl/vRD9xcqmXxMvStdBWnPYWpgVmMC18D3Uo3YA2zfHZ2admZWJWTdxGtRMcjO3qpKgmIBJtVYYs0+1lrszpXLM3NrJredlTYIWTqbnUI47l+eBc066SOJHzvbXXsZ1ZWHPqctz6jJ5OKcuM6Yu77RoUWfzqmoZUk8QkqQua5Yoq6TsxYlTl3lTk3nHHGFZuo1IYUTPJJu5WcHuU5wbVW2Xwe/82slykHlDF2XHYDnufiEEvsQc5FdBxA3JvZUFQ7R0DZWbG+WwPVdSDJODo1EIkee44nlggqno6KosySyZ/9OdXSPudD7JzYwqOZqpmC4yoMc8ulIuyAlo7VE6u8EIpuh+B1HpcxI/QO+oygbFEUiAlw0H48kKdoDbzYxpZyDwQnD0ssxbrLoQVWxVKBdLOwuiMdRCQdSd43khqLJFqS8E2ULgunrT+uUg/PhumzfQxVBlFD01VFhR7/vOycZDq6C8qDG9NBoFmd9ZWuDZDYg6vi9qTB8/fnxR48niFzWcXy+dPmwrit5xenfxg/+29Lnr5gWlbGqWIbOktE1XlxKuPBFYesWFjM67F6642IeEqzX5ECqlxPjdDDTOYz5BaCZItyIB7ipTaPuLEE5SU3ID6dBZvHh07qwRdrqcF5ebjDltEsj33iLrNA4jIBdfL6yIoA+dNZTmIo86i+sUgQybt6ly0JP6jR/HIXTUOREMcBdxkviLjJ0oNX+UNHeapNHju+vxf8cn2XcmLI0Gu36ahC9ZgwgD52DL6osPg/tHFD+G/rL7eMRY6M19oRwMjgmijuQx3n3yo6Wf+MvP3jffTHzvD2y5EAeGgX//tgT8un3zFNowag3Rvb7IvqLzYvvQaq31AS69jWixQrt3yNKjNvjHn3nb2ku+BRFqRdB/v934i/dXCz/K/CRv/AcCRnfT+/dvWXZnsRWnk1zcXtwDat+b7X+3a2e2/+2Ofdn+lzt3ZVlfb9mT7XsdcdC8I9u6IwtkhUaOS82CTmoY1JtprbZys6Lg+9zIB5v3bwWXVx26WVPcOLNMAyWf9O7fAonXRXLbQtv+LboRjmKR92je3sODbqIY7VgpxW2LisXbJz/qMu3VSKXkF6Ra8186Ex3Th5mDffo0nQeWOzpndcc4LHNKOw+a072ZoqsutfeGW7RAqts3uns3bNeFguoIE9P9cVYfhxXu8HV5P6of4nDZXe3/QhAFzwDHgXtY0+HY5MZ1o46T47zG5DcG5YKVAptyEU1TBobDUhZwkG4+rR6ZFcZFMjrLHavCGBZH7hIziwu2rQCX6bqci2Jx4qrQoOQbma6UzsL4vZTuV2ktPNXPv4VpngYFsZ0D0Q95twml8mENnXccU+/JpmJ2xTWdMZVymCuuCK4muwJa853dFa/LAl6Kdqn7ya8vbQM53ILfBt8iL9tWIrOM+m3Q+kCxFcV2XJbsyXaaaq6sapWUPdI0GU3Zl2K3wfp2G71xvmd4GUOPJRRbj0D4X265v8bZKligT/hemhlp4FWa6ZdLbYu02imI4IhyCM0MxGIZ//W//3Mc7wxw/4CjyapoH2YbJ+MdrNhm3jkd7wzyq3jeNCwTzLzzI/EO+iH9kiKBmzwiQZRVoEo9/MHsEUl8ft/UcT0itGlm4jNhs0c0AGSFsTDcbr765K2nd4ZkRVQEUai44aJsGq5kHUDO2Rm6LKX0WF4kAkkW3F0JzS8k8K3qgqx2nMM+2s2/w8czIsVk1G3Ze9JVpXjMUIsE+Z3+N06iB7ioquzyvMuzXBFwBome3YyJJFoVVN5Q29n9WCOaUoIZxWGQ1w1k1REk+zB/Zfa6X4TXDV1iG9B94d1hOUsUbAn08Aez1w0An6N6VLdbdgXZ1s2ezIXyKGtsXH6C2Zg2DWLjUqBd0GnexrNzsJs1krsNw66dm6nin95yCXFoqsnF4B4McPhF3XCAYFSSSwRgAMPApZP2jGRA3Snvm4iTyJuCqxiM3FXwwXK6Ns3i0RzL/fzuNIiFvlJou3i1N8Dmu4ooiTKe3nPZ/IEWvjKAUT76xIyBsM2d9UZ3vaaaJZV3HLxWLUiUovC2aZu7G7WaVDORKFPjHbXR7WiQKJeH5qp03GPM4qZO/2Os4Kqixay+BqxueFPVLIvplie6kV+ebAPqOYXVxyukAnRN9vurX/1k6UVeQZrylpfqaNXMiiTqvGMjwzDQP+mjS4MQ0M5Hpgsjuw6L+ZuuqZkOS82IdretiTNHu23HSOU8ms92zJSaF7licQ2VF+naZCdqsmYjL66bp5hXLKq4y93OexxlwSK5juzwLAuW3SBrnF9+cs4Fy7DVxSEyMXyj4PPHT+2M1WV3hywbbMXgAVMY5ajkLB9fPZeXW5x/QNmn6EGStmaD8th0fqjOsugQAwE8/fGif7y/otlx8K+/wXdDb3dCKEJ3x+we7niFkK1eBLJ0xEQyOo+Y7B+2HjGhh0oaj5jsErz6jpgISvOZkalaGw+uTNtKpqH54AvV+eVdW003ZKmvJCCxGYUlRvvBFzwT/TYDTVmVb9pNhuFowBQq9yLIKnAMo3CPdmmMRR+SribzxoLiKT8hPqQraBI5mMigePYF0uiZvC51ROq/fvKSJH7s10jV3q2LrjvyfytlVVRUxkuKCrc1mKnGmXwJY0R2cdSmWwPnosfN5yqjIKQDKB16pM34W7sXW/kfOliK6QpI6xX4nzd4Czh8OZAwkP/L3Wf+bzTUYziilZYCMB2oSCu0VFRTkW1Sy3XWZVPpspcwnGektkQZAFGzWPIaZ7V1GWqrwhGHnNRnZBKVN21eMyt5ZpKD9KR2kG2b9eGsD7u4vx7kmFgfApeXbEtkqRM968Nz6MMBYS+gaUCTceW1ohunubpuifv8yVltHZuWs9o6tdoSTUfUgMpyLG5WWxeutgTgmLJerSDDu5Zqu2Bf2mRWW8em5ay2Tq22ZMsBpg3QzuSstp652pJN4BqaVcmkkgRNUEwH7z3PamtWW6PVFvohbY33uwiKLWmuVjGajZrEkXigVrmv0ljgvvKTH2Tfu1cz9OT9XeKuuSDQHeDC1rii1fPBcIeL3BqXGosvTtZKs1dO2UqmgX1rHMi8LJGTOMdIp0L11CkWeY8W/pcGZFMBTZcdVG6yHIcwJVcEuIZOq2XsdmgKA/pR1VADGdDjCV1WSReAaUosuVQzMQ8mZisZBAfoqm5UvE3BgYsJTUYRv5kMz0emBEG2ZJWpaN1MzGMT8wT7h5JpKLzSV7l5pu8Y+mISnTbULOsOSSmdiTk5MVvJwIuy6IgS9YdnMjxrmZIkSXRsfEJjJub5ZEq1XJV3BZb60DMZLl2mBJu3dQWwRARnYk4oU7YkCpY4+/ZjyYB+SFtj4FsSdUGyRbTkHbWFppgSVHtHmnS2i+2B2HizfTuhjlNJYCSz9xwZvshIt4gv2MF/M50QU5qXiZcaBsddT9ZKOfOUrWQa2MPgkuG4pqr3LLDZw+Ay3hDAmicXh2bhwHFQ1hWLKqqmrFZOVcyW4BgGufGA55TeleqKGtQHI8zOTMzhxOxwclXbcM1Zpl6CTEm6pZsGzkyeiXlqYp4gDC4brubw/BxemIC+TVduTntQRDNVwxRHZFzPxBxOzHaZ0kXAA3GO8rwEmZI0XnUMA5FtJub5ZEoVLGBbyry19CLslCAKOlDmFcJ5ZUrUXNe28S3eMxnGkAH9kLbGMLjsGLptOSzxiBNVrJusVuOQaeHhvGi6c9h1eX23+5R5rB7vR1m1aEJI2XwZh9P3ZfPzRVR53jRyfQwt+6eD/K72wgzUNB0wDV7jWaqYDmIB2jR6+DTdmbJAgbrtxK0OTdBsUQTSxQ1NyNOlO3CXoPUxLJ1F81mSqOHj2kySWavvy4b7AWwIJJEqr/2JImibsdjnk/BITuO01EA17jM/4TZJvPBTFGPgspXPoWfBwucS/59bP81e48YvX43O6tuF4bd865r7OUgzf8lZ8XrjRU+N9Vezm3TlhSEXpOm2fGHV4O9htOmlugFUa1lcbHniVvj2W+6ay+/75uIofOKCiFv6ay/j1vHSf9055sK1HdnNMkj8RUYAoO8QIN5iEW8R6Hs6tdWPL+jHX3OPATRbESfy3NJ7StEbEKAfbPDLFZq8LaHVzOhQ1you2bLrY/Rhp40uk9FbJkG1TNmtXkl2+CTQpqkmYcS4IWtleCe3ZUCQ7/FgZF3ReZ5g/u0WaX+0cwp0gL3HFXJ+tHwvcPPtFw+BhIsA6NLgYnI5avjfZCGAnHpShozQTibHNFe+B1mc9ryP4wz9AXjS89s2w3/TDy3iELkhVIbVXRF9Mij8zzs4o/gfy3ixXftRdvP/AQAA//8DAFBLAwQUAAYACAAAACEAdcEO7hgCAADwCwAAHAAIAXdvcmQvX3JlbHMvZG9jdW1lbnQueG1sLnJlbHMgogQBKKAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsVs9v0zAYvSPxP1SWkODgOOnYOtDSXWBSD1y2InGrXPtLatU/gu2k63/PR7s2HYwIJEtcekr8HL/v+X3Pim9uH40edeCDcrYkRZaTEVjhpLJ1Sb7O7+g1GYXIreTaWSjJFgK5nb5+dXMPmkdcFFaqCSNksaEkqxibj4wFsQLDQ+YasDhTOW94xKGvWcPFmtfAxnl+xfwpB5k+4xzNZEn8TGL9+baBv+F2VaUEfHKiNWDjCyXYCpm8VnaNpNzXEPe0AXk3m00WYKmy2nWZskxDzTUTyotWcx+YdR0d5+OCCWeMsxQtoUGZRqtKgaQWdQSKamjjnYAQ0ECqbAchIhZoAN+hOOrhe4sYXW6pjzzsaPq1VeutQqm4tuGWrreCSohc6cOHRtnddhaXF5PrSbaKRh+28sVJdOnzYwRvuSbsZTuLi5R+Vs5hud7M/bjIkOhPApLWD3GrMZDH+vvxUPlJyvJgpcUNnwg4IEMSivE50ikjndRO25oleFTb23mEBpuaUoRo0WLzrTeiJFnWo0xFMIOH7Cr1If8l5kdo0JKknpxzfpnSzg0sHyBGlHvS1hNwsLFJlURcC72G3XAPDka8yP9Tun6+LySP/ClO0onAJIh9xBpZvRnnd1gcH7OHe1rg823xbtFkOPVvDX+f9Ff5W7cPyJDLH85HOOntK2lLK2fjnC/1yek5Qoemsmf39OkPAAAA//8DAFBLAwQUAAYACAAAACEACG6ddpQCAAAbCwAAEgAAAHdvcmQvZm9vdG5vdGVzLnhtbKyW23KbMBCG7zvTd2B07whsYjuM7UwTJ53cNukDKEI2TNBhJNnYb98V5tTgZjAuFwJW7Kef1e7C4v7AM2/PtEmlWKLgxkceE1TGqdgu0e+359EcecYSEZNMCrZER2bQ/er7t0UebaS0QlpmPGAIE+WKLlFirYowNjRhnJgbnlItjdzYGyo5lptNShnOpY7x2A/84kppSZkxsOAjEXtiUImjh360WJMcnB0wxDQh2rJDwwguhtziOzzvgsYDQPCG46CLmlyMmmKnqgMKB4FAVYd0O4x05uWmw0jjLmk2jDTpkubDSJ104t0El4oJmNxIzYmFW73FnOiPnRoBWBGbvqdZao/A9KcVhqTiY4Ai8KoJfBJfTJhhLmOWTeKKIpdop0VU+o9qfyc9OvmXp9qDZf2WheXuMDvYzNjKV/eJ3cl9LemOM2GLqGHNMoijFCZJVd0d+FAaTCYVZP9VAPY8q57LVdCz1P7V2tanbWiAfeSXe8ezk/KviYHfYzcdovboI+HvNSslHDK4WXhQaFrBDXo2nwow7gCmlPX8WFSMecnAtKlux0l7llXFOe2K46RNYIOePfCzmBbAxDZOLqKMq7hi50ssSYipE90R2WWibmvckbdipLbXFcJPLXeqoaXX0V6alpi7v5MLWGVBtYvcXCfmNSEKOiWn0ctWSE3eM1AE5eFBhnvFDrgREsWdikt2KOxurz3XY9Cq9Vvl5ZE9KkAYpogmVmoEJpego6B4UIFzGLm5FzDOwqen9Y/5Iyqs8NGyhbU8nCv848W/lsj3Z0E4DR9q05ptyC6zrRlH126ol8arBS5sMKpirGSelUylsKnYFW379bN8/4z6EJQ/3D0H/1X9WRVfvUnrxqz+AAAA//8DAFBLAwQUAAYACAAAACEAf+lncpUCAAAVCwAAEQAAAHdvcmQvZW5kbm90ZXMueG1srJbbcpswEIbvO9N3YHTvCPAxTOxMmjSd3DbtAyhCNpqgw0iysd++K8zBDa4Hk/pC4JX2089qd+Hufi/yYMeM5UouUXQTooBJqlIuN0v0+9fzaIEC64hMSa4kW6IDs+h+9fXLXZEwmUrlmA0AIW1SaLpEmXM6wdjSjAlibwSnRlm1djdUCazWa04ZLpRJcRxGYXmnjaLMWtjvkcgdsajC0X0/WmpIAc4eOME0I8axfcuIroZM8S1edEHxABA8YRx1UeOrUTPsVXVAk0EgUNUhTYeRzjzcbBgp7pLmw0jjLmkxjNRJJ9FNcKWZhMm1MoI4+Gs2WBDzvtUjAGvi+BvPuTsAM5zVGMLl+wBF4NUQxDi9mjDHQqUsH6c1RS3R1sik8h81/l56cvSvLo0Hy/ttC9vdYrZ3uXW1r+kTu6P7k6JbwaQro4YNyyGOStqM66Y7iKE0mMxqyO5SAHYir9cVOupZav9qbU/HY2iBfeRXZyfyo/LLxCjscZoe0Xj0kfD3nrUSARncbjwoNCfBjXo2nxoQdwAzynq+LGrGomJg2la35/CeZVVzjqfiObwNbNSzB34UcwKwqUuzqyhxHVfsfYkjGbFNonsiu07UtMEdxEmM9OZzhfDDqK1uafxztJe2JRb+4+QKVlVQp0VuPyfmNSMaOqWgyctGKkPeclAE5RFAhgflCfgREsVfylu2L+3+rAPfY9Cq/aoKisQdNBAs08QQpwwCk8/PUVSu0+A7SfzcCxjH88fx4/T7N1Ra4Z3lvHVe/bwrfOGlP5coDOfRZDbxC4+mJ7Ym29ydzHi68UOzNV7d4dIGoy7HSuU5wVRJx+W27NmvH8WHZ7TPHqbRQxw9/1ftZ1VceI723q7+AAAA//8DAFBLAwQUAAYACAAAACEAaWdcY8gKAAAIGQAAEAAAAHdvcmQvZm9vdGVyMS54bWy8l1mT4jgSgN83Yv8DwUTsC1PtA9vYzHRP+ABzg7nhZcKHbGx84RvH/PiVbKCqurpnqqtj1xVlZB2fUplSKvP3PwrPbWQgiu3A/9wkPuHNBvD1wLB963Nzs+4/sc1GnKi+obqBDz43ryBu/vHl3//6Pe+aSdSAo/24m4f65+YpScIuhsX6CXhq/Mmz9SiIAzP5pAceFpimrQMsDyIDI3ECr0phFOggjuFUoupnaty84fTifTQjUnM4GAEpTD+pUQKKZwbxwxAa4zD2LYj8AAiukCTeoto/jGIwJNUbEPUhEJTqDYn+GOkbi2M+RiLfkjofI7XfktiPkd5sJ+/tBg9C4MNGM4g8NYGfkYV5anROwycIDtXE1mzXTq6QiTN3jGr75w9IBEc9CF7b+GFCB/MCA7ht404JPjfTyO/exj89xiPRu/X4289jBHDfNy2cjsNAkbhxch8bvUd39XAp0FMP+EmlNSwCLtRj4McnO3x4B++jNNh4ukOyv1NA5rn3fnlIvPOofc+1SbUZnoHvEf9mO8+tJf97IoG/w5oI8RjxHhFez3mXxIM7+HniD6nmhXKJdzqfO4B8A2B08M7L4s5gbwxMfz7diGO/81jdObVVEMd+VizxTh/4tTAvALGRGKcfopB3vWJorJqoJzV+bHREBD8mFP3AXb0XOgqtnzsIchSk4TPN/jna8Nkl5igu+QHW7UC9POTxzwmzOqkh9JSe3h1afhCpmgslgsejAXd4o7IAesONgn6qIiiqemTrBvIxzS8woAphHdUN1Ugdws3I9HmcIQi+WdXCuyhBtZ3bA2u7MGgzlp+bOC5SbZYSH1USMNXUTVBL/dT0RVT9rJKrC+XpZir06EJgXNcQ3cRQWxyqOlwObHRtpFQo1628TNGS1DQJ6p5RDYvLO4jEUQN2a8Ee09WvuuwHiygIzHqq74yEA209qZas+vopiCpVkDTewekOXEfWjZGyk2sIGujI/lmgBf6ZwGPQbOgBNEtsl1BUkmBw/Nfq3WwEcGUJmgn2gTczPF7er27dGNUd3fqnAPUUSRScQcMJbD9G2oL97QRESM6siwANK1ING94slTABvNMTNIse+D7QEyTc52YES9XKXoj8kL+SHSleC4oGUUv4YjkxgZNcs1GDfnm1xptAYRDb6GrsqlocuGkCfoPBh2X7Ty4wky7F0p+oMLnXJUHY7XDsJwZW5baRnLoU+Ymg4dcJ2NYp6ZLtqnv5ZPsGKLpPJE0wNNuhyd8yO74FMt2q6MKJ4uApj9TwybBRZqCDek78Gw1RRa9b7hI/QaPaZeAnqvtUX/AZgEq1avCjF8xJElv/Zp9a6OeGepVIiZZZIAcIM5deLAmCwgsWP+ThM1RE0irtFWbBj3lPgO81qt/hs0zzly78N7cDNz/uZ8bEPyXaaLVUNh1pKgj9//xS8L9xuKPn5nA32jAdhbdc5jDGV7gYDGThvC7Gk6Nc0Gv5lDn0nJTx1XI3C0qsw/opl+vFuT+VZxZzSZXLhFnyFRCP6QNjR3SWcK5EjHJBGubz6Wg8CAduGDHc2DQGzrVYeZG9Mg9la7Pyd4tDh0/N2VA1xsy0N5oWHB9KWCBVwLm7joLotCfdfs92PX1OLo1Z4oh0IfW5UEzX14Mg0JrNaAoVX4NR2+J2Cn6FN/qktOixIe7d8cTJ9B3LtSvgajO/7HO/pKXI8gfJaF3MY8XsjYfrjuRJq42oFnlnefHZDts5xt5yygFy6y2AMKPSyyFbJ7uOk9mOxc2wawUcxXugTy74pbWTGI+F6pcwLJ/yb43FU9hqgBHIWCMFGWuC6vftkasNptnEH7kVUBvMz+dp/5KX/PSUtqTssFiae1nNC9tZ2y0Hl7NwEEsH25uqO/xwJc2InFILYepH2kbDFI5yMRM7TW3isqwl3A7JeJ4wm5FltI62ZJnmhAXnvttfadkWDwKqp4mnUi4ok5OXhkbSg2l8OF1cMZdpN5pcOM0+novd3L4cKiBJHux1pJLnwzQlXCJRpDaOaQuvneeHGV4QrKVRNG8osCmkHSzuC+Qa7yudJe6vZ71t22ECzgRKGQWEXVt5xxNU32sprEqobEvIUszAjKlGjg50ai+0k4ydE5/SL/IGA1E71LNc/J6eK+BQEY7laNpz+R7PC4GEzgdqPA5G5YTcXDV8mR2uNKXtrvEmlud4ySvZalFItJYRsrs/rbaX1BrthmNlWwGjyTrnVdqZFXJRsFdqbUZtZ0KEdkuU02E54DJnBsgWmx4zdjikdpeDqVznO/scD2WexE0uaLNY2nYuRBxWwPHcVxhLFjWwHp2jUsv8ayHvZsmWkwS8H2wkYRwMvKmT0ks7Wq6OpR/ORMoi2fFG4qSo6Gfgslzj1/SEbSrg5RKCSyHnjuLIvWwQYubcbQtHlmaK0Z7GHY9dK6u5ulvFysoovUtno+0BtyoYlpgqGCuJDNbJe3i2WehMBVT3Ax6z2aBdxD0+1HdClIt0O3Ts/LiLGXh2F4sNs7MnfUcdUPHGa/mtnI6zYrxm7NVs1vEGNr9U1n2h5LEKaE+I5YFZMlHsgc2Z0P3Ddi75BNgdJtapVSYMGPv+cZibE7u1M7iNej1P90wbZK4P+hG25fb93ipkYzCS1xVwaY8Xl0JSitwYpxqZltdN6bZM0tvYqnGa7+mBMugczoQjlfIymSws/BAVJk/HPY6mU71XQk/my7y6OEt0BZS37tgagIEwpjJfbVE6qQNF7OEmfWApA2uHIGJCDWBoK2FQZ3xfmPC5suH5Ay+iSrHH69hkyoNhvQ+rfafArZrDkry86lfurLWNVPe2ZOWRe9dFXnvkXgd3WKuzHbbHjnE5uyO7P9uKPXpoS4o+ly5FBfQIe0Zc+ySJSW2tx+Uet5seE2pHcudZR756B4kY70SqNx3OE6I4dMQjRjDs1IkFfqs6W2omjFrroZCAfVLr8NIvOyKhedmQNYJiOE2PE6UoHc8fAnKGM/3Tkp2dfTM/E/NlefEd4A73Y1+X9rm31C96jJ/H2TJb6B6mUhVwUZ5H6bUV79OyDbDZcrAKNYL2+QRTAtpsG9kgFvsxrmPsKC9WBj4eeiG7MjeWgq/iALe43kk+e8QuH1O1+zqvlpMDT4bGBN/l01TE2i0H46HOFxjG54KyynviREEVz0ZIgil1zijkjE9I/z2k/7tzqIvPz3evS2RdZZjwf+PF78DKlb96RBa6eMGElo71K4ssHuvEt4CvPdXztnkDpODqhLPuT7PjepQtZc75vpRCyca5QFmPJVPowlm8gc4p6QGVubYGLyHDRn6xgHrdyHUnCOalEpUwRXnWYVVoNkzbdQGM8kwUxqEQsyqjoBCF9ygUvIebMMrxYdXTrb77y4tYEQalAAX3v1Z/VWyfFFohwpAKRqRvEwmK7JMcwZE/lUh0+u22RL5MJL5OFkjqq2wBFGodAeddGFaiJhgmvoj3X2YIyZcFjO7+QtVJnQxUTS9lI0iqw4uVBPfs4yFBlUg8EV9lEqZriCcVQW6ldRVPawBFi7eeX+co/8REGUGEjIFyx6o3CsYjEIMog8lDY8HLvQbq/+j4v15ODJChE/BqRS9n6lE40em/nOlVIvYPsyZfiP+LVYBvPK8A7Y7q/WpjY49zAjkE3kW5RqPOEgtoBLiBmrfP6+3zRfpVQ2Fu+WYOM4m+/BcAAP//AwBQSwMEFAAGAAgAAAAhAJa1reLxBQAAUBsAABUAAAB3b3JkL3RoZW1lL3RoZW1lMS54bWzsWUtvE0ccv1fqdxjtHfyIHZIIB8WODS0EosRQcRzvjncHz+6sZsYJvlVwrFSpKq16KFJvPVRtkUDqhX6atFQtlfgK/c/ser1jj8GQVKUCH7zz+P3fj52xL166GzN0RISkPGl5tfNVD5HE5wFNwpZ3s987t+EhqXASYMYT0vImRHqXtj/84CLeUhGJCQL6RG7hlhcplW5VKtKHZSzP85QksDfkIsYKpiKsBAIfA9+YVerV6nolxjTxUIJjYHtjOKQ+QX3N0tueMu8y+EqU1As+E4eaNbEoDDYY1fRDTmSHCXSEWcsDOQE/7pO7ykMMSwUbLa9qPl5l+2KlIGJqCW2Jrmc+OV1OEIzqhk6Eg4Kw1mtsXtgt+BsAU4u4brfb6dYKfgaAfR8szXQpYxu9jVp7yrMEyoaLvDvVZrVh40v81xbwm+12u7lp4Q0oGzYW8BvV9cZO3cIbUDZsLurf3ul01i28AWXD9QV878LmesPGG1DEaDJaQOt4FpEpIEPOrjjhGwDfmCbADFUpZVdGn6hluRbjO1z0AGCCixVNkJqkZIh9wHVwPBAUawF4i+DSTrbky4UlLQtJX9BUtbyPUwwVMYO8ePrji6eP0cm9Jyf3fjm5f//k3s8Oqis4CctUz7//4u+Hn6K/Hn/3/MFXbrws43//6bPffv3SDVRl4LOvH/3x5NGzbz7/84cHDviOwIMyvE9jItF1cowOeAyGOQSQgXg9in6EaZliJwklTrCmcaC7KrLQ1yeY5dGxcG1ie/CWgBbgAl4e37EUPozEWFEH8GoUW8A9zlmbC6dNV7WsshfGSegWLsZl3AHGRy7Znbn4dscp5PI0LW1oRCw19xmEHIckIQrpPT4ixEF2m1LLr3vUF1zyoUK3KWpj6nRJnw6sbJoRXaExxGXiUhDibflm7xZqc+Ziv0uObCRUBWYuloRZbryMxwrHTo1xzMrIa1hFLiUPJ8K3HC4VRDokjKNuQKR00dwQE0vdqxh6kTPse2wS20ih6MiFvIY5LyN3+agT4Th16kyTqIz9SI4gRTHa58qpBLcrRM8hDjhZGu5blFjhfnVt36ShpdIsQfTOWOR92+rAMU1e1o4ZhX581u0YGuCzbx/+jxrxDryTXJUw336X4eabboeLgL79PXcXj5N9Amn+vuW+b7nvYstdVs+rNtpZbzXH5emh2PCLl56Qh5SxQzVh5Jo0XVmC0kEPFs3EEBUH8jSCYS7OwoUCmzESXH1CVXQY4RTE1IyEUOasQ4lSLuEaYJadvPUGvBVUttacXgABjdUeD7LltfLFsGBjZqG5fE4FrWkGqwpbu3A6YbUMuKK0mlFtUVphslOaeeTehGpAWF/7a+v1TDRkDGYk0H7PGEzDcuYhkhEOSB4jbfeiITXjtxXcpi95q0vb1GxPIW2VIJXFNZaIm0bvNFGaMphFSdftXDmyxJ6hY9CqWW96yMdpyxvCIQqGcQr8pG5AmIVJy/NVbsori3neYHda1qpLDbZEpEKqXSyjjMps5UQsmelfbza0H87GAEc3Wk2LtY3af6iFeZRDS4ZD4qslK7NpvsfHiojDKDhGAzYWBxj01qkK9gRUwjvD5JqeCKhQswMzu/LzKpj/fSavDszSCOc9SZfo1MIMbsaFDmZWUq+Yzen+hqaYkj8jU8pp/I6ZojMXjq1rgR76cAwQGOkcbXlcqIhDF0oj6vcEHByMLNALQVlolRDTvzZrXcnRrG9lPExBwTlEHdAQCQqdTkWCkH2V2/kKZrW8K+aVkTPK+0yhrkyz54AcEdbX1buu7fdQNO0muSMMbj5o9jx3xiDUhfq2nnyytHnd48FMUEa/qrBS0y+9CjZPp8JrvmqzjrUgrt5c+VWbwuUD6S9o3FT4bHa+7fMDiD5i0xMlgkQ8lx08kC7FbDQAnbPFTJpmlUn4t45RsxAUcuecXS6OM3R2cVyac/bLxb25s/OR5etyHjlcXVks0UrpImNmC/868cEdkL0LF6UxU9LYR+7CVbMz/b8A+GQSDen2PwAAAP//AwBQSwMEFAAGAAgAAAAhAEFxtIs1CQAAjCQAABEAAAB3b3JkL3NldHRpbmdzLnhtbLxaW2/byhF+L9D/YOi5jva+SyHOAbnknqRI2qLOQZ5pibYIi6RA0nZ8iv73DknR8uVTkZwCfbHI/XZmZ+e2M1y//+V7tTu7L9qubOqLBX/HFmdFvW42ZX1zsfjtazh3i7Ouz+tNvmvq4mLxWHSLXz78+U/vH1Zd0fc0rTsjFnW3qtYXi23f71fLZbfeFlXevWv2RU3gddNWeU+v7c2yytvbu/35uqn2eV9elbuyf1wKxsziwKa5WNy19erA4rwq123TNdf9QLJqrq/LdXH4mSnaH1l3Ikmb9V1V1P244rItdiRDU3fbct/N3Ko/yo3A7czk/r9t4r7azfMeOPuB7T407eaJ4kfEGwj2bbMuuo4MVO1mAcv6uLB6w+hp7Xe09mGLIysi52x8ei65/jkG4g0Dsy6+/xwPd+CxJMrnfMrNz/ExT3zKo2K5+WPCPGPQbfrN9qe4iFmvy4E27/Nt3j150cCx+Dmh9BO7x+qoo273I14zQZ/LqzZvp5g8uEy1Xn26qZs2v9qROOQ6Z2T9s1G64S8pcfgZH4vv4/igh8UHyhG/N0119rDaF+2aAoUSDGOL5QBsiuv8btd/za8u+2ZPU+5zEtKKGW7zB3LdX9ty87Fpy9+bus93l/t8TYPzZM7nyWW33+WPx4npkTqj3PY4U4hp/nqbt/m6L9oDQ09EbbObZ22avzW9pwTVUvxMFNtNe7nN90U6Sd19eN+sumHgsI3u7H5VfKf9FZuyp4S5LzdVTs4tmB5lPMwmIZu7/sXcARsm719yGFyBdjjQLl8Q0zsS52F13TR93fTFP9rnb7SnITjOR05vhkfZlq9pi3rz5uUVn5ejM5sXhFOGH57udl/bvBytV4zU43Y+j9v5XN4W3765ySwjxeV0qhDrOq/I3V6cFF+aDaV9YtmWPx4XA8HkMLP94UJ3XfGNZlMQSZJ3fZs0fd9UHx/326Iej4n/YeGDgo46ofN2M5ptePgnqX+eyphX0ik/STqgR4Qx7vXBAq8RFcsAEc5TdgKRysUQ0cw7LIHmkdYQsYwnmJtlwViIxJJZA5HEZGmEESsyvI5XmmPZvIkcliBjVkCEkksa4DpcKBtD7XCpM3/ISa8QxSJsH660CAe/fIVo8gOoAx5JG0M/4JHhXkIkYQprh3wqyTCSCR2wBJnKHF4n047h/QQrBVxHMKliBxFSgoTrCCGiBFpOCE0OBxHDWICWE9ZKHHMikrGFlhOxyiyWLbYswYgndeN1vJQnpPZGBGhtkWpnoa5FRqqDnigynjloU5EpmeCdBmazBCPSyROITg3kJskRFdyppPRi4H6k1DZAjUpFZDBOpVYKZyRprGGYW8SUh7omJAToo9LLIKFGpbc6wkjKPPZ4mSp/QoJUB49pMpEEGAuknJRDKyjOdJxBRCgtMTdJmsOIM4FBv1axkTgfKK8s1o5KmXFQBwOCs7/KmEuxbIGZBOYdzbRXKUSE5TgfaKllCq2glckSqFGtLBd4HW0piUDEyMRBvWmjE2w5bZn1MBq144mBHq8jE801+Ssk5lEMda0TY3FW1pTfONaOF8LidYLV2KuMIL9WGNHMYcTIKILaMVYHCb3KOBYU5uY4w2eWIY/H+zGRSCzUm4msZVg2z7IUWs6kVmDLmWzIfhAJ3Cu8TtDSwNxLu0lwnTgUdnNb9gbxHK5D0cMFlJoQo+BOqRBjMfQDq0jbMBqt0XEKbWqtMTgarbMJ9msbCW1hnNqYxRGWLdGpwkiQMoUR7AQ3MdSOE5QP4E6dFCqD9nGUkgzcqTNc4UzhyAbY35w1ClcbznGJ63hHegt4ncgEgaWOldKYW8KVhD7qgtA4Gl3Q1kHLOeo9NIySaGjO4TqRkJHGiBRWQt+hklzjEzCiCh+f27QI81BvETU5EbRCZJXFXVsU8YjB8zQisXG+jiKTOBjbEdUNOL9FVCcy6DsxVwF7Vcw1ZV+MGHmKxiYJ1EEsufNwp7Gkeh36QSxViPA6iiXJCYTyP+amOZV2ELEiYpjGKqahtWNrqISDCIW9xDSRVBxLHfPYYL3FRuD6IE6ESmGUxN5QjoVIyr2AHh+npDcY23EQTkFPTBiV5JAm4SKKoWwJlyHAfJBwEwL0t4RSPO4+EknnM6Yxw1GHETppoXYSa+z8vekV4lhmMTenRIZlczYkWAcRpXKsA8q9uEdPYs1wx0KIP2GfhHHczxESNPSqhFR6wnKJ5Q7TUN4JGMmUx98pCMnwtxrPhMPcPFcCf8nylP055iaHbhwj1DRBjVJb73EVcPo739AYZdBDvJYOn5oUpqmAp4y33OAT0DsKO2htTzkMVyg+kQHnXp9omUDvJQWkAeZEn1G5DvObpxjBnVFKNsXrpJydqLxTqYyBp1mqOLVAEDEy4C9MqdEGf09MreT4nEutOdEZpU46bIWUOgkOPSSNTYqrjZSOGfydL82Mw5kvDdLgfiENhjuIZEwY7KOEJBn0kIypCGekTDGOc2+mRcA1eaaVOyGBYwJX+JnjKsXcHJWj0D5ZwiJcBWSpOtFVZ5mOcG2ZUW8WoCcGJgXOFEGIFPtOkFbiL7RBce8xNyOVhB4SjM4imCmoiFYpprFCYb0FJ1L8fTQ4c+JrXogtwz16oCMd2zR4qiChfUIqpIDZP2Tq0FUvJ6j78L5aDTf4w+XV9BSauj+rJgqfV1dtmZ99Ge74l8OMq/Y2KesZvyqum7Z4jlzeXc3g+fkEdFW+24U2X49vw6VlWlyPz7sveXtz5Da6R7Vq4eimuP7reh4bLlWL9te2udtP6EOb7z/Vm+IoOlfqQFnW/eeymse7u6vLmarO28dn0F29+ft9O2rnqJSHVb8tqmLQyuf8eAlb1Oe/XU4qXu/ay+FKrPiS7/fTzdrVDb9Y7Mqbbc+Hy7Ce3jZ5ezu+XN2IAyZGTEzY+JKvh53R7MPDcUzMY8/myXlMHsfUPKaOY3oe08cxM4+ZYWz7uC/aXVnfXiyeHofx62a3ax6Kzccj/mZoUsJ4t/l/viYewxxcE7+SZbh0X5fkhJeP1dXxuvvdJPiu7PrLYp+3ed+0M/aXEeNqtWnWnyh+6GlyKqpqnIqmjM31E6wn+F+J45TtfXyeUR46VzaOzhMj4nMbUaee2VhQ6v73IfzmfyP68B8AAAD//wMAUEsDBBQABgAIAAAAIQAfPS7bgwAAAM0AAAATACgAY3VzdG9tWG1sL2l0ZW0xLnhtbCCiJAAooCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsjEEKwyAQAL9SfEA29NCDNIVAj6UEvPTQi9o1CuqKbqD5fS39Qo8zA3M2UtFWLbbDO8XcpJmEZy4SoFmPSbeBCubeHNWkuWNdgZwLFq9kt4SZ4TiOJzDBxEBr1cXv4jf7z0phRMv4UrxHnMRzXubhoW49fMVdpy67E3D5AAAA//8DAFBLAwQUAAYACAAAACEANVhvUuAAAABVAQAAGAAoAGN1c3RvbVhtbC9pdGVtUHJvcHMxLnhtbCCiJAAooCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACckMFqwzAMhu+DvUPQ3XXauXVa4pSCCfQ6NtjVdZTEENvBdsbG2LvPYafuuJP4JKTvR/X5w07FO4ZovBOw3ZRQoNO+M24Q8PrSkgqKmJTr1OQdCnAezs3jQ93FU6eSiskHvCa0RW6YXK9SwBdne35pj5xUB9YSduScXBhjZMufKrkrpdxz9g1FVrt8JgoYU5pPlEY9olVx42d0edj7YFXKGAbq+95olF4vFl2iu7I8UL1kvX2zEzRrnt/tZ+zjPa7RlmD+a7mZ22T8ENQ8fgJtavpHtfLdK5ofAAAA//8DAFBLAwQUAAYACAAAACEAgMLNwzAHAADJPgAAEgAAAHdvcmQvbnVtYmVyaW5nLnhtbOxby27jNhTdF+g/GAa6zEgUKUoyJjOQZbuYYqYomswHyDITC6MXJNlOuir6C9121Z/o//QH+gslqYepRxxJgRMvtIliPo7uPffy8kim33988L3JnsSJGwbXU/BOnk5I4IQbN7i/nn69XV3p00mS2sHG9sKAXE8fSTL9+OH7794fZsHOX5OYDpxQjCCZHSLnerpN02gmSYmzJb6dvPNdJw6T8C5954S+FN7duQ6RDmG8kRQZyPy/KA4dkiQUx7KDvZ1MczjnoRvaJrYPdDIDRJKzteOUPBwxQG8QVTIkvQmkDACiHiqgCQV7Q2GJWdUAQoOAqFUNJHUYUotzeBiS0kTShiHBJpI+DKmRTn4zwcOIBLTzLox9O6Uf43vJt+Nvu+iKAkd26q5dz00fKaaMCxjbDb4NsIjOKhF8uOmNoEl+uCEe3BQo4fV0FwezfP5VOZ+ZPsvm55dyBvG63ZbezpDIQ+olaTE37sJdNn0ROjufBClnTYqJR3kMg2TrRmV18Iei0c5tAbI/RcDe94pxhwh0XGpPlbZFFoYjYBfz89j5Xmb5aUQgd4gmgyhndDGhes/CEp9m8PHGg6gRyAUdi08BoDQAsEM6bhYFhp5jSM5xdTMct+OyKnCyqDAc90gs6FgD68YIAMkm3Wx7oSgFrxKba6f21k7KRGeIpJ9Ragn36AscRfcvWwg/xuEuOqK5L0P7dCyJB6ZOemDlC0pc5MnLjLnZ2hGtlL4z+3QfhLG99qhFdHlMaIZPeATYX5oo7ML/JQ+8ncV6wmrM9AOVVfY6SWPbSX/e+ZPKp080N6k8o2izmFBNFrPGTIGZdymJ5zGxv7EhDCVI2H1me5sWbNmEWNNMPJVYj7/zUvcz2RPv9jEixZjt4zp2N19Yn8f6srGpH3nFiPlK11VtZWU93p51uPSSGTVLI4/ujpa8WqqLeWYDt7GYbmTzqGhc+WXjLopI/Jmk1PoS9pZuG0X/D+Bd2f6TU7R65C7NmqNfYnZxA+Yra6YSVoGI2bO1g3suYiGW2WCpHB3nl1UYpAkb6QZ03obc2dT7fCgfI/H71r0FR2+RLBsy3ema3oI2b73wcNpbpb+3hnrS23YXlIYLc95CN0m60+4Js7+HS7+Gvh20ewTbPIrd++3TLilYq7oE9A4uwbpL8mqgSxviuL6dL4C6P6h3hCA0BkSIT6kl2QsidCrp1N4uIQAGuKS+WtLh/kmH9FrV6JR0+HWSTusdIVUdUha010s6vbdLWKmVhU4u6a+WdEb/pMNGrTQ8kXRSRQYwlJMagW1QvTUCWCyQBg1+/+EaQTV1jICqlFSUgRA0Al4CTMe1aIRW4s+hERDiW2BJvIp1kfimRrATx6Va1YxdukjpZ2InqZm4ttC0NSmfwmcnETvrGuMwW2d/rYRf3cLwPAKuxW4rtiSR7VBji9arnKxDSZ5cDPytaFJQ0XJEK9o8+4hFgquvN1W3yqa1u6Fe2fHVjZlT1E0bLZFpLla5pq1GdL3zPJKzUAvmf3/80zuYTcHHqXk2mDeP/jqsRfPYlofz2MDiKXS3BLQWsHUjhL2DnLeWMVZzFf2GIRa0o7ZULRlBvV+I//39794hxjKvH91D3BKes7AhyE51vjKBhayzs6HogO/Ul8eGoFplRVvKupJvNGdkA8mQK8vLY0MQvGCuK4a2wGdnQ1XU6s52MWwIWlk3MIJIPT8bGGkXWjcEqQ30paWvDOXsbGhYv9C6Iah0uFoibCnnzw3dkC+mbvQU+GyF9xb40FQMKrtz1TgK/HZNOAr8UeCPAn8U+CUbo8AX2RgFvsjGKPBFNkaBL7IxCnyRjVHg9xL4bNPpLfARWFnAUvn9hwv8xWJFHxJMrparMRQEvrnS8IKK/J4x/OvPvjGEiGdOGUIFdVR+rn+zC66WDyn/ukeQf9WOQgNWW7kQrA18EzVoNNVg/uRVUYPF09iZBb+hKGipzc+vBrFe3eKejfprlTFBGkNsUfljnl/+AFmpPv1cDBuCNEYGNHXlFVIDQMx1xuWxIUhjuMLsvJV5fjY0uWd9fANpjMylNVfg+VeKIqu8Wl0eG4I0xkBDUIWv8BAJDb5AL48NQRqbyEQGlnu+QxrChlZ7iLwYNgRpbEDDlHVw/tyAslZ9UHhDNnpKY1Zme0tjVZORbKFc1A6VxivDUlTZOv3u20BguVTUbCesvPvO57W8+z5xqmjAq2+1dqhIU545/yq++p58ua2GUWwVX4AXTc28EMRq+b5aEKuFMd0053jCdjxh+2w1G0/YNkXXeMK2T9KNJ2zZY/d4wvYoQgIuPgLhRC375c5ss+O/6+HfwsuKbiBMU5L7V9EphXUwv1nQAsq/xa+DqgDqsqrlX7m1YhZKrQ2TvzisYxoYGBhq4ARmQUobJldcDecxLVGGirONuRUTncBklaqBqWEoQwPI8GlMrqEKzOya6b8P/wMAAP//AwBQSwMEFAAGAAgAAAAhAEdxAbzSDQAAKYIAAA8AAAB3b3JkL3N0eWxlcy54bWzknVtz27gVgN870//A0VP7kMg32XFmnR3biWtPc/GunM0zREIWNiShklQc768vbqRAHYLiAbFpO32xJVLnI3BuwOENP/38PUujb7QoGc8vJocvDyYRzWOesPzxYvL54ebFq0lUViRPSMpzejF5puXk5zd//ctPT6/L6jmlZSQAefk6iy8mq6pav55Oy3hFM1K+5Guai51LXmSkEl+Lx2lGiq+b9YuYZ2tSsQVLWfU8PTo4OJ0YTDGEwpdLFtO3PN5kNK+U/LSgqSDyvFyxdVnTnobQnniRrAse07IUnc5SzcsIyxvM4QkAZSwueMmX1UvRGdMihRLihwfqU5ZuATMc4AgATmP6Hcd4ZRhTIWlzWILjnDYcllgcv8ZYgDKpkhWKclTrdSplSUVWpFzZRIpr1KzBPWdSR1n8+u4x5wVZpIIkrB4Jw0UKLP+K/st/6iP9rrbLLkzeiFhIePyWLskmrUr5tbgvzFfzTf274XlVRk+vSRkz9iAaKI6SMXHA28u8ZBOxh5KyuiwZ6dy5kh8698RlZW2+YgmbTOURyz/Ezm8kvZgcHdVbrmULWttSkj/W22j+4vPcbom1aSG4FxNSvJhfSsGp6Zj+b3V3vftN/ntiCX+6FgooeFof7EAfn2wqPl8TEdHvnHs+tvZMDVb/bw42BXYQOUFkiLlOVGIvXb7n8VeazCuxQ8L0xs939wXjhUhGF5Pzc7NxTjN2y5KE5tYP8xVL6JcVzT+XNNlu/+VGJRSzIeabXHw+PjtVvpGWybvvMV3L9CT25kRa6qMUSOWvN2x7cCX+rxp2aOzTJb+iRObo6HAXoZqPQhxJidLqbTdzs9N39SvUgY5/1IFOftSBZj/qQKc/6kBnP+pAr37UgRTmzzwQyxMxHKjfw8MA6j6OIxrRHEewoTmOWEJzHKGC5jgiAc1xODqa4/BjNMfhpghOxWOXF1rOfuzw9n7u/jHCj7t/SPDj7h8B/Lj7E74fd39+9+PuT+d+3P3Z24+7P1njuXqqFd2JMMur0VG25LzKeUWjin4fTyO5YKnCNQxPDnq0CNLJABid2cxAPJoWE/V9v4eoIPUfzytZ/0V8GS3Z46ag5eiG0/wbTfmaRiRJBC8gsKDVpnBoxMenC7qkBc1jGtKxw0FTltMo32SLAL65Jo/BWDRPAquvJgZJCo1Di3p6JYOEBXDqjMQFH980ToLlh/esHK8rCYmuNmlKA7E+hnExxRpfGyjM+NJAYcZXBgozvjCwbBZKRYYWSFOGFkhhhhZIb9o/Q+nN0ALpzdAC6c3QxuvtgVWpSvH2rONw+Lm765TLSw2j2zFnjzkRE4Dxw405Zxrdk4I8FmS9iuS56m6s3Wfsca548hw9OMe0/eihKm4OFGrarzxInr9m+Wa8vlu0ULHX8AJFX8MLFH8Nb3wEfhCzaDl/uw1T7sw3i6ozpoc73JykGz3fHR+MpBrvYdsAuGFFGSwMurEBPPijnO1Kc4ZIjNtWjm/YljU+rHazUtDmGWSAVqY8/tqTpRGo2+c1LUTV9nU06YanKX+iSTjivCq49jU75I+USQaF/LtsvSIlU6VUCzF8JlDfwxB9IOvRHbpPCcvD2O3di4ywNAo3wbh9+PA+euBrWYVKxYQBXvGq4lkwpjlR+LcvdPH3MA28FDVy/hyot5eBzh4p2DULMMhoEk8CkcQslOUsyBiqeP+kzwtOiiQM7b6g+rahigYizkm21pOOALEl8uKTyD8BZkOK9xspmDxtFCqoHoLArLOK5WbxO43Hp7qPPApy4ujTplKnJ9VUV0mHw42fJrRw46cIyppieJD+G6CzLdz4zrZwoTp7nZKyZM4rrN68UN2teaH7O774Mzye8mK5ScMpsAYG02ANDKZCnm6yvAzZY8UL2GHFC93fgC6jeAHO2CnePwqWBDOGgoWyhIKFMoOChbKBggU1wPgbeCzY+Lt4LNj4W3k0LNAUwIKF8rOgw3+gi0AWLJSfKVgoP1OwUH6mYKH87PhtRJdLMQkON8RYyFA+ZyHDDTR5RbM1L0jxHAj5LqWPJMAJUk27L/hSPk/Cc32PdwCkPEedBpxsa1woI3+hi2BNk6yQ7QpwRpSkKeeBzq1tBxwlaZ04nJ3vFVOPf4xuwn1KYrriaUILR5/csqJelo9kmNP04JLdoNOe79njqormq+Zsv405NQ9/9EjWBXtLbP8Bu3R+Wj8E0yX2gSZsk9UNhc9anB4PF1Ye3RI+2S+8nUm0JGcDJeExT/dLbmfJLcmzgZLwmK8GSqo4bUn2xcNbUnztdISzPv9pajyH8531eVEj3HnYPkdqJLtc8KzPi1qhEl3GsbxaAK0zLGbc8sOCxy2PiSI3BRNObsrguHIj+gLsV/qNyZEdkzTV8ZqbK3YPd6wm0YMy5y8brs/bty44DX/m605MnPKSRp2c4+EXrlpZxq3HwenGjRicd9yIwQnIjRiUiZziqJTkpgzOTW7E4CTlRqCzFRwRcNkKyuOyFZT3yVaQ4pOtRswC3IjB0wE3Ah2oEIEO1BEzBTcCFahA3CtQIQUdqBCBDlSIQAcqnIDhAhXK4wIVyvsEKqT4BCqkoAMVItCBChHoQIUIdKBCBDpQPef2TnGvQIUUdKBCBDpQIQIdqGq+OCJQoTwuUKG8T6BCik+gQgo6UCECHagQgQ5UiEAHKkSgAxUiUIEKxL0CFVLQgQoR6ECFCHSg6icR/QMVyuMCFcr7BCqk+AQqpKADFSLQgQoR6ECFCHSgQgQ6UCECFahA3CtQIQUdqBCBDlSIQAequlg4IlChPC5QobxPoEKKT6BCCjpQIQIdqBCBDlSIQAcqRKADFSJQgQrEvQIVUtCBChHoQIWIPv80lyhdt9kf4s96Ou/YH37pyjTqV/tJbxt1PBxVt8rNGv4swhXnX6PO5xKPVb0xDMIWKePqFLXjsrrNVbdEoC58frruf8LHpo98J5N5FkJdMwXwk6GS4JzKSZ/L25KgyDvp83RbEsw6T/qyry0JhsGTvqSr4rK+KUUMR0C4L81YwocO8b5sbYlDFfflaEsQargvM1uCUMF9+dgSnEUyOe9Kzwbq6bS5vxQQ+tzRIpy5CX1uCW1Vp2MYGEON5iYMtZ6bMNSMbgLKnk4M3rBuFNrCbpSfqWGYYU3tH6huAtbUkOBlaoDxNzVEeZsaovxMDRMj1tSQgDW1f3J2E7xMDTD+poYob1NDlJ+p4VCGNTUkYE0NCVhTjxyQnRh/U0OUt6khys/UcHKHNTUkYE0NCVhTQ4KXqQHG39QQ5W1qiPIzNaiS0aaGBKypIQFrakjwMjXA+JsaorxNDVF9plZnUVqmRlnYEsdNwixB3IBsCeKSsyXoUS1Z0p7VkkXwrJagrWqb46ol22huwlDruQlDzegmoOzpxOAN60ahLexG+ZkaVy11mdo/UN0ErKlx1ZLT1LhqqdfUuGqp19S4asltaly11GVqXLXUZWr/5OwmeJkaVy31mhpXLfWaGlctuU2Nq5a6TI2rlrpMjauWukw9ckB2YvxNjauWek2Nq5bcpsZVS12mxlVLXabGVUtdpsZVS05T46qlXlPjqqVeU+OqJbepcdVSl6lx1VKXqXHVUpepcdWS09S4aqnX1LhqqdfUuGrpgxBhAV4BNc9IUUXh3hd3S8pVRca/nPBzXtCSp99oEoXt6ntUL6dPrdWxJFst6Cd+XwmdyRekW48rJfoFsQaofniXNKtYSWHZksgs0mU2qwaby7Xqc1GKmrpeyOtgdn56fmD8s3OJtIvJNUnZomgtjdbaqJZEa22Jy+1X3ct6kTLV6D3dbDpmrlMfgq5t191S7V4QodFP0hKg41uHr/eakB6mEbNuGsvl/pQupe5PTpT6VyR/ZHJ9xll9QwvXr3d6/629tlq9Tlqj34Vu9HWp/lvLw5lrzK3l4dS2/QqMV0KDsXnxmMNPzPuFmyfg1NuFd1XreAmxQ5nGAFtn179rubpuv6PdlcxWPW1W2azXwXXCc1rbmHtfC0V7Fqk2j/hwp+z9ZJaC0y1NvhONEvuvaZp+IPrXfO3+qfQYvffwQL1vYmf/Qr860SlfqDHWCZi2G6O/9vuJXmvB3PzhzCdyIOlQt7oTaaymsUlAvltVPR6/257ta6z3JQE58thSUuhaBMwer0YlzTBh3K0CfUvRbv/11n197+idaTgqA5b6bQPiNwv5Aka6vQfPzo2vzlTtoNxWZspjkxl/j2u4nIpQpXiQFneHncuC6fd2bAedZpMZcprvcsDRX7Q+9F+QYY/NrNQ2jd7maxoZEdtHindNpCZk290etvIwVWuwmp0ri+wOVtbanUO6G29KkafUHKUzQbs1oGej/1EVHAzscTMUtfsmL0E4uqV2dfXIHrUc3apfM9Luy8Hs8HxmbhizB6QrXiS0UPNDPeCo38v1C0yT/xDFivogF2ptVkAVFcDFRK7favKgHo68ZJuhyku6Hsi8hJmI9YTejhP/zU9cj6mN+ocMse65rEh8u45klgrbFxb2CKZJfeNXPRR3zHLc7mZCR0SBdjOyqH9ncrb4uuYiz57MDs1tlNZvlIGbn5wfHNVZVfP2R19rAtuTb6ze7+pS74q2mtlRaOf816Hefap16/G/rYi60avI7SrLLC6HcTxN+n91PKv3u7rUu8Y6njHU/6DjDVVha+69q8TtGgoj9dgUDA5NmglFW5FH706Or27+XEXKEac+IqZIqD+Vb/4NAAD//wMAUEsDBBQABgAIAAAAIQCKkpzASwEAAHUDAAAUAAAAd29yZC93ZWJTZXR0aW5ncy54bWyc00tvwjAMAOD7pP2HKndIQQOhisJl2jRpL2mPe0hcGi2JqySs9N/P7RjrxIXu0sZN/cnOY7neW5N8gg8aXc4m45Ql4CQq7bY5e3u9GS1YEqJwShh0kLMGAluvLi+WdVbD5gVipD9DQooLmZU5K2OsMs6DLMGKMMYKHE0W6K2IFPott8J/7KqRRFuJqDfa6NjwaZrO2YHx5yhYFFrCNcqdBRe7fO7BkIgulLoKP1p9jlajV5VHCSFQP9Z8e1Zod2QmVyeQ1dJjwCKOqZlDRR1F6ZO0G1nzC8yGAdMTYC5hP8xYHAxOmX1Hq2HO/Oho1XP+V0wPCCqqcpAy/VlX3uaKKEoRyr4Iw4qaHbnGtmtkZXa3dejFxpBEu57QxiUd3D6p//bVDWHffW9bYCu6EHT8mif3/nDP20gYg/Xz4y0F/M9lWX0BAAD//wMAUEsDBBQABgAIAAAAIQAFcPhIWgMAAKcOAAASAAAAd29yZC9mb250VGFibGUueG1s1JbdbtowFMfvJ+0doty3cVI+AiqtWlqmXawXK9uuTWKItdiObFPgtn2eaRebtJu+DQ/QV9ixAzQtgRK0TmqiQHxi/3P8yznHPj6dstS5IVJRwTuuf4hch/BIxJSPOu6Xfu8gdB2lMY9xKjjpuDOi3NOT9++OJ+2h4Fo5MJ6rNos6bqJ11vY8FSWEYXUoMsLh4VBIhjU05chjWH4fZweRYBnWdEBTqmdegFDDXcjIXVTEcEgjciGiMSNc2/GeJCkoCq4Smqml2mQXtYmQcSZFRJSCObM012OY8pWMX1sTYjSSQomhPoTJLDyyUjDcR/aOpY8C9WoCwZpAIyLTahrhQsODkUUdGlfTaax0aFzQ2c+ZgoCKdZxUUgmWXD0zFmucYJUUFUk1p+oruRkzjFjU/jjiQuJBCkrw1R34cI4VNr8wf/Nnb8nU2s0U3JNFKjiTNscMRvYpI8q5IhPns2CY2w4Z5kIRH/rc4LTjIjObBjpCdVSDK4C7muuZjlGCpSJGLO+IcvMQM5rOllZpde2DjOooWdpvsKTG+/yRoiN4MFYD1HEvEULBZa/n5ha/43bB0gzr5wtLYN5lj9bCcrSyIGOJrI5t+rlOZHVWfeCdXk5ijcgZuJVu4HAOHGqWR35W4aAmVKk3xOF6xgaiHEQdTh+Z4tEEIAG0muUggn8TEMUp5SD8p5ZHEEtLKYjwqWVXEJRdj/nB5VSfbwgLHyi04PKXZymNsFFGg4mYyDIcQzol8UYWR48s0BkykbLGwt/KAho102mP5HA+9S0InOorsC4dzhMnn8gzRCXHfhWEC92XY9KfZWSdWEyGeJzqbf53cUoHkm74jj1b3mxiQ5F79fSuraU3LOdBrflf0vsbbCDMxkltyPC1o0KG47EWbyjBP107H4ROaFQW1Q/3Px7ufznz29/z2z/zu7v57c/yGM9XhxaURFMQw43hE5aGT9UyYDM+KAZP46zb7F30isFjcfjBC8EDQdeqGDxfiYwxx1tXyXy/YFbL102jM+Nso0jC1DX4Bmtp9GJBhC5VSeQF8QpLKSZbcJhV0pyvX1Wsx0HYLKwP5girplLeroqjixmU102BYbaPeViY7WQ1EvttI58Fhq2vK4shEexI4uXAWNyok78AAAD//wMAUEsDBBQABgAIAAAAIQBn9043bgEAAL0CAAARAAgBZG9jUHJvcHMvY29yZS54bWwgogQBKKAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8kltrwyAYhu8H+w/B+1RNj0iasgOlsBUGy9jYnejXVhZNpvb075ekTdpuZZf6Pt/D55vEk53Ogg1Yp3IzRrRDUABG5FKZ5Ri9pdNwhALnuZE8yw2M0R4cmiS3N7EomMgtvNi8AOsVuKA0GcdEMUYr7wuGsRMr0Nx1SsKU4SK3mvvyaJe44OKLLwFHhAywBs8l9xxXwrBojeiolKJVFmub1QIpMGSgwXiHaYfiE+vBand1oE7OSK38voCraBO29M6pFtxut51tt0bL/Sn+mD+/1k8Nlam6EoCSWAomLHCf2+ROc7POghn/XkOMz4KqxIw7Py/7XiiQ9/tkxq1bqSx44lbxGP8FqhkLG1V9sCTqdWumvWiML1YZDzKJSDQIySikUUoJ61NGyGdrbaD4WNphL5BB+Vh2qKZJ3rsPj+kUVb5+SLqVjwxZ7+j7NX8S6uPe/xsHISUhHaa0x/r9S2MjSOqlL3+45AcAAP//AwBQSwMEFAAGAAgAAAAhAEc3gODcAQAA3AMAABAACAFkb2NQcm9wcy9hcHAueG1sIKIEASigAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnFPBbtswDL0P2D8YujdykiYLAkXFkGLoYVsDxG3PmkzbwmRJkNSg2dePshdP2XaaT4+P9NMTSbG7t14XJ/BBWbMj81lJCjDS1sq0O/JUfbrZkCJEYWqhrYEdOUMgd/z9O3bw1oGPCkKBEibsSBej21IaZAe9CDNMG8w01vciYuhbaptGSbi38rUHE+miLNcU3iKYGuobNwmSUXF7iv8rWluZ/IXn6uxQj7MKeqdFBP41/akZnQhW2Sh0pXrgq3KDiSlkB9FC4EtGR8BerK8DX69KRkfI9p3wQkZsH19+mCOfEeyjc1pJEbGz/IuS3gbbxOJxsFskAUbzEoZXOIJ89SqeOUrlIfusTLKC9IjQmxetF64LfJMMThE7SqFhj7fnjdABGP1NsAcQabIHoZLBU9yeQEbri6B+4GwXpPgmAqSe7chJeCVMJGPZGAxYuxA9r1TUqD3FA8zLcqxu+XwoQHBdOASDB8TX7oYTwmODd4v/MDvPzQ4eRquZndzZ5Yw/VPe2d8Jgg+mEsMHfw5Or7H1aj189vCazub+o2B2dkDiT2+VqkW9AlmJHZKHGkU5DmQj2gFfwOh2A/5oW6kvN34m0U8/jY+Xz9azEb1iiC4ebML0i/hMAAP//AwBQSwMEFAAGAAgAAAAhAJXuJyFFAQAAFwMAABMACAFkb2NQcm9wcy9jdXN0b20ueG1sIKIEASigAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtJLdTsMgGIbPTbwHwjmDUqtb03Zx7TzSxMSpiWeE0o2kQAOsuhhvyYvwymR//iQeOU04Id+bh4cXsvGTakEvrJNG5zAaEAiE5qaWep7D29kFGkLgPNM1a40WOVwJB8fF8VF2bU0nrJfCgYDQLocL77sUY8cXQjE3CGMdJo2xivmwtXNsmkZyURm+VEJ7TAk5xXzpvFGo+8DBLS/t/W+RteFrO3c3W3WBV2Q7+Ao0yss6h89VUlZVQhJEp6MSRSSaoFE8OkNkSAid0PJidD59gaBbhykEmqlw9dIK5kUdeL1PG9kKL5UoKKEUEYqiaEZIulkPGf6ayPD+/ANN4m8mxm5N2u7ReVtcSW6NM41/ewX3xtaAkijeiOwCf6Zxste4ZM7fsP6nShJEYhTRf68k2buEB6+XXBzQCf780cU7AAAA//8DAFBLAwQUAAYACAAAACEAdD85esIAAAAoAQAAHgAIAWN1c3RvbVhtbC9fcmVscy9pdGVtMS54bWwucmVscyCiBAEooAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIzPsYrDMAwG4P3g3sFob5zcUMoRp0spdDtKDroaR0lMY8tYamnfvuamK3ToKIn/+1G7vYVFXTGzp2igqWpQGB0NPk4Gfvv9agOKxcbBLhTRwB0Ztt3nR3vExUoJ8ewTq6JENjCLpG+t2c0YLFeUMJbLSDlYKWOedLLubCfUX3W91vm/Ad2TqQ6DgXwYGlD9PeE7No2jd7gjdwkY5UWFdhcWCqew/GQqjaq3eUIx4AXD36qpigm6a/XTf90DAAD//wMAUEsBAi0AFAAGAAgAAAAhAMgzDMeiAQAALggAABMAAAAAAAAAAAAAAAAAAAAAAFtDb250ZW50X1R5cGVzXS54bWxQSwECLQAUAAYACAAAACEAmVV+Bf4AAADhAgAACwAAAAAAAAAAAAAAAADbAwAAX3JlbHMvLnJlbHNQSwECLQAUAAYACAAAACEAkJcpnVYrAACX7AEAEQAAAAAAAAAAAAAAAAAKBwAAd29yZC9kb2N1bWVudC54bWxQSwECLQAUAAYACAAAACEAdcEO7hgCAADwCwAAHAAAAAAAAAAAAAAAAACPMgAAd29yZC9fcmVscy9kb2N1bWVudC54bWwucmVsc1BLAQItABQABgAIAAAAIQAIbp12lAIAABsLAAASAAAAAAAAAAAAAAAAAOk1AAB3b3JkL2Zvb3Rub3Rlcy54bWxQSwECLQAUAAYACAAAACEAf+lncpUCAAAVCwAAEQAAAAAAAAAAAAAAAACtOAAAd29yZC9lbmRub3Rlcy54bWxQSwECLQAUAAYACAAAACEAaWdcY8gKAAAIGQAAEAAAAAAAAAAAAAAAAABxOwAAd29yZC9mb290ZXIxLnhtbFBLAQItABQABgAIAAAAIQCWta3i8QUAAFAbAAAVAAAAAAAAAAAAAAAAAGdGAAB3b3JkL3RoZW1lL3RoZW1lMS54bWxQSwECLQAUAAYACAAAACEAQXG0izUJAACMJAAAEQAAAAAAAAAAAAAAAACLTAAAd29yZC9zZXR0aW5ncy54bWxQSwECLQAUAAYACAAAACEAHz0u24MAAADNAAAAEwAAAAAAAAAAAAAAAADvVQAAY3VzdG9tWG1sL2l0ZW0xLnhtbFBLAQItABQABgAIAAAAIQA1WG9S4AAAAFUBAAAYAAAAAAAAAAAAAAAAAMtWAABjdXN0b21YbWwvaXRlbVByb3BzMS54bWxQSwECLQAUAAYACAAAACEAgMLNwzAHAADJPgAAEgAAAAAAAAAAAAAAAAAJWAAAd29yZC9udW1iZXJpbmcueG1sUEsBAi0AFAAGAAgAAAAhAEdxAbzSDQAAKYIAAA8AAAAAAAAAAAAAAAAAaV8AAHdvcmQvc3R5bGVzLnhtbFBLAQItABQABgAIAAAAIQCKkpzASwEAAHUDAAAUAAAAAAAAAAAAAAAAAGhtAAB3b3JkL3dlYlNldHRpbmdzLnhtbFBLAQItABQABgAIAAAAIQAFcPhIWgMAAKcOAAASAAAAAAAAAAAAAAAAAOVuAAB3b3JkL2ZvbnRUYWJsZS54bWxQSwECLQAUAAYACAAAACEAZ/dON24BAAC9AgAAEQAAAAAAAAAAAAAAAABvcgAAZG9jUHJvcHMvY29yZS54bWxQSwECLQAUAAYACAAAACEARzeA4NwBAADcAwAAEAAAAAAAAAAAAAAAAAAUdQAAZG9jUHJvcHMvYXBwLnhtbFBLAQItABQABgAIAAAAIQCV7ichRQEAABcDAAATAAAAAAAAAAAAAAAAACZ4AABkb2NQcm9wcy9jdXN0b20ueG1sUEsBAi0AFAAGAAgAAAAhAHQ/OXrCAAAAKAEAAB4AAAAAAAAAAAAAAAAApHoAAGN1c3RvbVhtbC9fcmVscy9pdGVtMS54bWwucmVsc1BLBQYAAAAAEwATANIEAACqfAAAAAA=";

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
        link.download = 'Form_ISR_4.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      } catch (err) {
        console.error('Download error:', err);
        const fallback = document.createElement('a');
        fallback.href = 'Form_ISR_4.docx';
        fallback.download = 'Form_ISR_4.docx';
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
