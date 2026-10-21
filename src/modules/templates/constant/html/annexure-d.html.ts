export const ANNEXURE_D_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annexure D - Individual Affidavit by Legal Heir</title>
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
      line-height: 1.4;
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
      }
    }

    /* Action Bar */
    .page-preview-bar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 48px;
      background: #1e293b;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      z-index: 1000;
      box-shadow: 0 2px 8px rgba(0,0,0,0.25);
    }

    .bar-title {
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .bar-title .badge {
      background: #0284c7;
      color: #ffffff;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.5px;
    }

    .bar-actions {
      display: flex;
      gap: 10px;
    }

    .btn-pdf, .btn-docx {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: background 0.15s ease;
    }

    .btn-pdf {
      background: #2563eb;
      color: #ffffff;
    }
    .btn-pdf:hover {
      background: #1d4ed8;
    }

    .btn-docx {
      background: #0d9488;
      color: #ffffff;
    }
    .btn-docx:hover {
      background: #0f766e;
    }

    /* A4 Page Container */
    .page {
      width: 210mm;
      min-height: 297mm;
      margin: 54px auto 20px auto;
      background: #ffffff;
      padding: 16mm 18mm 14mm 18mm;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .page-content {
      flex: 1;
    }

    /* Header Badge Table */
    .header-badge-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 8px;
    }

    .annexure-box {
      display: inline-block;
      border: 1.5px solid #000000;
      padding: 4px 16px;
      font-size: 11pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      background: #f8fafc;
    }

    /* Titles */
    .doc-main-title {
      font-size: 11pt;
      font-weight: bold;
      text-align: center;
      line-height: 1.35;
      margin-bottom: 5px;
      text-transform: uppercase;
    }

    .doc-sub-title {
      font-size: 9.5pt;
      font-weight: bold;
      text-align: center;
      line-height: 1.35;
      margin-bottom: 4px;
    }

    .doc-notice-italic {
      font-size: 8.5pt;
      font-style: italic;
      text-align: center;
      line-height: 1.3;
      color: #1f2937;
      margin-bottom: 3px;
    }

    .stamp-paper-note {
      font-size: 9pt;
      font-weight: bold;
      font-style: italic;
      text-align: center;
      margin: 6px 0 14px 0;
      padding: 4px;
      background-color: #f1f5f9;
      border: 1px dashed #475569;
      border-radius: 3px;
    }

    /* Narrative text and oath */
    .oath-statement {
      font-size: 9.8pt;
      line-height: 1.5;
      text-align: justify;
      margin-bottom: 12px;
    }

    .numbered-clause {
      font-size: 9.5pt;
      line-height: 1.45;
      text-align: justify;
      margin-bottom: 8px;
    }

    .or-divider {
      text-align: center;
      font-weight: bold;
      font-size: 10pt;
      margin: 8px 0;
      color: #0f172a;
      letter-spacing: 1px;
    }

    /* Form Fill Line */
    .fill-line {
      display: inline-block;
      border-bottom: 1px solid #000000;
      vertical-align: baseline;
      min-height: 15px;
    }

    /* Tables */
    table.data-table {
      width: 100%;
      border-collapse: collapse;
      border: 1.2px solid #000000;
      font-size: 9.2pt;
      margin: 8px 0 12px 0;
    }

    table.data-table th,
    table.data-table td {
      border: 1px solid #000000;
      padding: 6px 8px;
      vertical-align: middle;
      line-height: 1.3;
    }

    table.data-table th {
      background: #f1f5f9;
      font-weight: bold;
      text-align: center;
    }

    table.data-table td.col-sno {
      width: 6%;
      text-align: center;
      font-weight: bold;
    }

    /* Minor Section */
    .minor-clause {
      font-size: 9.5pt;
      line-height: 1.5;
      text-align: justify;
      margin-top: 10px;
      margin-bottom: 14px;
    }

    /* Deponent Signature Row */
    .deponent-sig-row {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;
      font-size: 9.5pt;
      margin: 12px 0 16px 0;
    }

    /* Verification Box */
    .verification-section {
      margin-top: 8px;
      border-top: 1.2px solid #000000;
      padding-top: 8px;
    }

    .verification-heading {
      text-align: center;
      font-size: 10.5pt;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
      text-transform: uppercase;
    }

    .verification-body {
      font-size: 9.3pt;
      line-height: 1.45;
      text-align: justify;
      margin-bottom: 12px;
    }

    .affirmation-split-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 9.3pt;
      margin-bottom: 16px;
    }

    /* Notary Section */
    .notary-section {
      border: 1px solid #000000;
      padding: 10px 14px;
      background: #fafafa;
      margin-top: 8px;
      margin-bottom: 10px;
    }

    .notary-title {
      font-size: 9.5pt;
      font-weight: bold;
      text-align: center;
      margin-bottom: 8px;
    }

    .notary-grid {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: 9pt;
      line-height: 1.6;
    }

    .notary-left {
      width: 50%;
    }

    .notary-right {
      width: 50%;
      text-align: center;
    }

    .notary-sig-line {
      border-top: 1px solid #000000;
      width: 85%;
      margin: 32px auto 4px auto;
    }

    .notary-seal-text {
      font-size: 8.5pt;
      font-weight: bold;
      color: #333333;
    }

    /* Legends Footnotes */
    .legend-notes {
      font-size: 8pt;
      line-height: 1.35;
      color: #374151;
      border-top: 1px solid #e2e8f0;
      padding-top: 5px;
      margin-top: 6px;
    }

    /* Page Footer */
    .page-footer {
      font-size: 8.5pt;
      color: #4b5563;
      text-align: right;
      border-top: 1px solid #cbd5e1;
      padding-top: 4px;
      margin-top: 8px;
    }
  </style>
</head>
<body>

  <!-- Top Action Bar for Quick Printing / DOCX Download -->
  <div class="page-preview-bar">
    <div class="bar-title">
      <span class="badge">ANNEXURE D</span>
      <div>
        <strong>Annexure D: Individual Affidavit by Legal Heir</strong>
        <span style="color: #94a3b8; font-size: 11px; margin-left: 6px;">(A4 &bull; 2 Pages &bull; Transmission where NO NOMINATION registered)</span>
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
      <!-- Header Badge Table -->
      <table class="header-badge-table">
        <tr>
          <td>
            <div class="annexure-box">Annexure D</div>
          </td>
        </tr>
      </table>

      <!-- Document Title Block -->
      <div class="doc-main-title">
        Individual Affidavits to be given by ALL the Legal Heirs OR Legal Heirs named in Succession Certificate* / Probate of Will* / Will* / Letter of Administration* / Legal Heirship Certificate*(or its equivalent certificate)* / Court Decree*
      </div>
      <div class="doc-sub-title">
        (For Transmission of securities on death of Sole Holder where NO NOMINATION has been registered)
      </div>
      <div class="doc-notice-italic">
        Each Deponent (legal heir) shall sign separate Affidavits.
      </div>
      <div class="stamp-paper-note">
        (To be executed on a non-judicial stamp paper of appropriate value and Notarized)
      </div>

      <!-- Deponent Oath -->
      <div class="oath-statement">
        I, <span class="fill-line" style="min-width: 260px;"></span># Son / Daughter / Wife of <span class="fill-line" style="min-width: 240px;"></span> residing at <span class="fill-line" style="width: 100%; margin-top: 4px;"></span> do hereby solemnly affirm and state on oath as follows.
      </div>

      <!-- Clause 1: Deceased holder info -->
      <div class="numbered-clause">
        That Mr. /Mrs. <span class="fill-line" style="min-width: 250px;"></span>@ (&ldquo;the deceased holder&rdquo;) held the following securities in his / her name as single holder:
      </div>

      <!-- Table 1: Securities Held -->
      <table class="data-table">
        <thead>
          <tr>
            <th style="width: 8%;">S. No.</th>
            <th style="width: 48%; text-align: left;">Company Name</th>
            <th style="width: 22%;">Folio No.</th>
            <th style="width: 22%;">No. of securities held</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="col-sno">1)</td>
            <td style="height: 28px;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">2)</td>
            <td style="height: 28px;"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">3)</td>
            <td style="height: 28px;"></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <!-- Clause 2: Intestate Succession vs Legatees under Will -->
      <div class="numbered-clause">
        That the aforesaid deceased holder died intestate leaving behind him/her, the following persons as the only surviving heirs as per the Succession Certificate/ Legal Heirship Certificate (or its equivalent certificate)/Court Decree dated <span class="fill-line" style="min-width: 140px;"></span> / according to the Law of Intestate Succession by which he/she was governed at the time of his/her death and without registering any nominee. *
      </div>

      <div class="or-divider">OR</div>

      <div class="numbered-clause">
        That the aforesaid deceased holder died leaving behind the following persons as the legatees as per the Will/ Probated Will/ Letter of Administration dated <span class="fill-line" style="min-width: 140px;"></span> and without registering any nominee. *
      </div>

      <!-- Clause 3: Document Attached -->
      <div class="numbered-clause" style="margin-top: 10px;">
        A copy of the Succession Certificate* / Probate of Will* / Will* / Letter of Administration* / Legal Heirship Certificate*(or its equivalent certificate)* / Court Decree* is attached herewith.
      </div>
    </div>

    <!-- Page 1 Footer -->
    <div class="page-footer">
      Page 1 of 2
    </div>
  </div>

  <!-- ==================== PAGE 2 ==================== -->
  <div class="page page-2">
    <div class="page-content">
      <!-- Table 2: Legal Heirs / Legatees details -->
      <table class="data-table" style="margin-top: 0;">
        <thead>
          <tr>
            <th style="width: 7%;">S. No.</th>
            <th style="width: 33%; text-align: left;">Name of the Legal Heir(s)</th>
            <th style="width: 32%; text-align: left;">Address and contact details</th>
            <th style="width: 10%;">Age</th>
            <th style="width: 18%; text-align: left;">Relation with Deceased</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="col-sno">1)</td>
            <td style="height: 38px;"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">2)</td>
            <td style="height: 38px;"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">3)</td>
            <td style="height: 38px;"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <!-- Minor Representation Clause -->
      <div class="minor-clause">
        That among the aforesaid legal heirs, Master/ Kum. <span class="fill-line" style="min-width: 250px;"></span> aged <span class="fill-line" style="min-width: 45px;"></span> years is a minor and is being represented by Mr./Ms. <span class="fill-line" style="min-width: 220px;"></span>$ being his / her father / mother / legal guardian.
      </div>

      <!-- Deponent Signature -->
      <div class="deponent-sig-row">
        <span><strong>Signature of the Deponent:</strong> &nbsp;&nbsp; <span class="fill-line" style="min-width: 250px;"></span></span>
      </div>

      <!-- Verification Section -->
      <div class="verification-section">
        <div class="verification-heading">VERIFICATION</div>
        <div class="verification-body">
          I hereby solemnly affirm and state that what is stated herein above is true and correct and nothing has been concealed therein and that I am competent to contract and entitled to rights and benefits of the abovementioned securities of the deceased.
        </div>
        <div class="affirmation-split-row">
          <div>
            <strong>Solemnly affirmed at:</strong> &nbsp; <span class="fill-line" style="min-width: 180px;"></span>
          </div>
          <div>
            <strong>Signature of the Deponent:</strong> &nbsp; <span class="fill-line" style="min-width: 180px;"></span>
          </div>
        </div>
      </div>

      <!-- Notary Attestation Block -->
      <div class="notary-section">
        <div class="notary-title">Signed before me</div>
        <div class="notary-grid">
          <div class="notary-left">
            <div><strong>Place:</strong> &nbsp;&nbsp; <span class="fill-line" style="min-width: 180px;"></span></div>
            <div style="margin-top: 8px;"><strong>Date :</strong> &nbsp;&nbsp; <span class="fill-line" style="min-width: 180px;"></span></div>
          </div>
          <div class="notary-right">
            <div class="notary-sig-line"></div>
            <div class="notary-seal-text">Signature of Notary with Official Seal of Notary &amp; Regn. No.</div>
          </div>
        </div>
      </div>

      <!-- Footnote / Legend Notes -->
      <div class="legend-notes">
        <div>* strikeout whichever is not applicable</div>
        <div style="margin-top: 2px;">
          <strong>#</strong> = Name of the legal heir &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <strong>@</strong> = Name of the deceased security holder &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <strong>$</strong> = Name of the Guardian
        </div>
      </div>
    </div>

    <!-- Page 2 Footer -->
    <div class="page-footer">
      Page 2 of 2
    </div>
  </div>

  <!-- Embedded DOCX and Action Script -->
  <script>
    const DOCX_BASE64 = "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";

    function downloadDocx() {
      try {
        const byteCharacters = atob(DOCX_BASE64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "Annexure D - CLAIMENT 1.DOCX";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      } catch (err) {
        console.error("Download error:", err);
        const fallback = document.createElement("a");
        fallback.href = "Annexure D - CLAIMENT 1.DOCX";
        fallback.download = "Annexure D - CLAIMENT 1.DOCX";
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
