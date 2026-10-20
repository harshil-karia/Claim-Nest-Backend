export const ANNEXURE_E_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annexure E - Bond of Indemnity by Legal Heirs</title>
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
      padding: 14mm 16mm 12mm 16mm;
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
      margin-bottom: 4px;
    }

    .annexure-box {
      display: inline-block;
      border: 1.5px solid #000000;
      padding: 3px 14px;
      font-size: 10.5pt;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      background: #f8fafc;
    }

    .notary-exec-note {
      font-size: 8.5pt;
      font-style: italic;
      color: #1f2937;
      margin: 2px 0 6px 0;
    }

    /* Titles */
    .doc-main-title {
      font-size: 11pt;
      font-weight: bold;
      text-align: center;
      line-height: 1.35;
      margin-bottom: 4px;
      text-transform: uppercase;
    }

    .stamp-paper-note {
      font-size: 8.5pt;
      font-style: italic;
      text-align: center;
      margin-bottom: 3px;
    }

    .transmission-category-note {
      font-size: 8.5pt;
      font-weight: bold;
      text-align: center;
      color: #1e293b;
      margin-bottom: 8px;
    }

    /* Narrative text and oath */
    .oath-statement {
      font-size: 9pt;
      line-height: 1.4;
      text-align: justify;
      margin-bottom: 6px;
    }

    .numbered-clause {
      font-size: 8.8pt;
      line-height: 1.35;
      text-align: justify;
      margin-bottom: 5px;
    }

    .or-divider {
      text-align: center;
      font-weight: bold;
      font-size: 9.5pt;
      margin: 4px 0;
      color: #0f172a;
      letter-spacing: 1px;
    }

    /* Form Fill Line */
    .fill-line {
      display: inline-block;
      border-bottom: 1px solid #000000;
      vertical-align: baseline;
      min-height: 14px;
    }

    /* Tables */
    table.data-table {
      width: 100%;
      border-collapse: collapse;
      border: 1.2px solid #000000;
      font-size: 8.5pt;
      margin: 4px 0 6px 0;
    }

    table.data-table th,
    table.data-table td {
      border: 1px solid #000000;
      padding: 4px 6px;
      vertical-align: middle;
      line-height: 1.25;
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

    /* Witness and Signature Table */
    .witness-clause {
      font-size: 8.8pt;
      line-height: 1.45;
      text-align: justify;
      margin: 8px 0 6px 0;
    }

    table.sig-table {
      width: 100%;
      border-collapse: collapse;
      border: 1.2px solid #000000;
      font-size: 8.8pt;
      margin: 6px 0 8px 0;
    }

    table.sig-table th,
    table.sig-table td {
      border: 1px solid #000000;
      padding: 6px 8px;
      vertical-align: middle;
      line-height: 1.3;
    }

    table.sig-table th {
      background: #f1f5f9;
      font-weight: bold;
      text-align: center;
    }

    table.sig-table td.sig-cell {
      height: 38px;
    }

    /* Notary Section */
    .notary-section {
      border: 1px solid #000000;
      padding: 8px 12px;
      background: #fafafa;
      margin-top: 6px;
      margin-bottom: 6px;
    }

    .notary-title {
      font-size: 9pt;
      font-weight: bold;
      text-align: center;
      margin-bottom: 6px;
    }

    .notary-grid {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: 8.8pt;
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
      margin: 28px auto 4px auto;
    }

    .notary-seal-text {
      font-size: 8.2pt;
      font-weight: bold;
      color: #333333;
    }

    /* Legends Footnotes */
    .legend-notes {
      font-size: 8pt;
      line-height: 1.35;
      color: #374151;
      border-top: 1px solid #e2e8f0;
      padding-top: 4px;
      margin-top: 4px;
    }

    /* Page Footer */
    .page-footer {
      font-size: 8.5pt;
      color: #4b5563;
      text-align: right;
      border-top: 1px solid #cbd5e1;
      padding-top: 3px;
      margin-top: 6px;
    }
  </style>
</head>
<body>

  <!-- Top Action Bar for Quick Printing / DOCX Download -->
  <div class="page-preview-bar">
    <div class="bar-title">
      <span class="badge">ANNEXURE E</span>
      <div>
        <strong>Annexure E: Bond of Indemnity by Legal Heirs</strong>
        <span style="color: #94a3b8; font-size: 11px; margin-left: 6px;">(A4 &bull; 2 Pages &bull; Joint Indemnity for Transmission without Nomination)</span>
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
            <div class="annexure-box">Annexure E</div>
          </td>
        </tr>
      </table>
      <div class="notary-exec-note">
        <strong>Note:</strong> &nbsp;To be executed in the presence of a Public Notary / Gazetted Officer
      </div>

      <!-- Document Title Block -->
      <div class="doc-main-title">
        Bond of Indemnity to be furnished jointly by all Legal Heir(s) including the Claimant(s)
      </div>
      <div class="stamp-paper-note">
        (To be submitted on Non-judicial Stamp Paper of appropriate value)
      </div>
      <div class="transmission-category-note">
        [For Transmission of Securities on death of Sole Securities&rsquo; Holder, where no nomination has been registered]
      </div>

      <!-- Oath Statement -->
      <div class="oath-statement">
        <strong>I/We do hereby solemnly affirm and state on oath as follows:</strong><br>
        That Mr. /Ms. <span class="fill-line" style="min-width: 280px;"></span>* was holding the following securities:
      </div>

      <!-- Table 1: Securities Held -->
      <table class="data-table">
        <thead>
          <tr>
            <th style="width: 7%;">S. No.</th>
            <th style="width: 35%; text-align: left;">Name of the Company</th>
            <th style="width: 18%;">Certificate No.</th>
            <th style="width: 22%;">Distinctive No.</th>
            <th style="width: 18%;">Folio No.</th>
            <th style="width: 16%;">No. of securities</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="col-sno">1)</td>
            <td style="height: 22px;"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">2)</td>
            <td style="height: 22px;"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">3)</td>
            <td style="height: 22px;"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">4)</td>
            <td style="height: 22px;"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <!-- Intestate Clause -->
      <div class="numbered-clause">
        That the aforesaid deceased holder died intestate on <span class="fill-line" style="min-width: 140px;"></span>, without registering any nominee, leaving behind him/her the following persons as the only surviving legal heirs, according to the laws of intestate succession applicable to him/her by which he/she was governed at the time of his/her death.
      </div>

      <!-- Table 2: Intestate Legal Heirs -->
      <table class="data-table">
        <thead>
          <tr>
            <th style="width: 7%;">S. No.</th>
            <th style="width: 33%; text-align: left;">Name of Legal Heir(s) / Claimant(s)</th>
            <th style="width: 32%; text-align: left;">Address and contact details</th>
            <th style="width: 10%;">Age</th>
            <th style="width: 18%; text-align: left;">Relationship with Deceased</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="col-sno">1)</td>
            <td style="height: 24px;"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">2)</td>
            <td style="height: 24px;"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">3)</td>
            <td style="height: 24px;"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">4)</td>
            <td style="height: 24px;"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <!-- OR Divider -->
      <div class="or-divider">OR</div>

      <!-- Testamentary Clause -->
      <div class="numbered-clause">
        That the aforesaid deceased holder died on <span class="fill-line" style="min-width: 140px;"></span>, without registering any nominee, leaving behind him/her the following persons as the only surviving legal heirs, according to the laws of testamentary succession.
      </div>

      <!-- Table 3: Testamentary Legal Heirs -->
      <table class="data-table">
        <thead>
          <tr>
            <th style="width: 7%;">S. No.</th>
            <th style="width: 33%; text-align: left;">Name of Legal Heir(s) / Claimant(s)</th>
            <th style="width: 32%; text-align: left;">Address and contact details</th>
            <th style="width: 10%;">Age</th>
            <th style="width: 18%; text-align: left;">Relationship with Deceased</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="col-sno">1)</td>
            <td style="height: 24px;"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">2)</td>
            <td style="height: 24px;"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td class="col-sno">3)</td>
            <td style="height: 24px;"></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Page 1 Footer -->
    <div class="page-footer">
      Page 1 of 2
    </div>
  </div>

  <!-- ==================== PAGE 2 ==================== -->
  <div class="page page-2">
    <div class="page-content">
      <!-- Approached Undertaking -->
      <div class="numbered-clause" style="margin-top: 0;">
        Therefore, I/We, the Legal Heir(s)/Claimant(s) and deponent(s) herein has/have, approached <span class="fill-line" style="min-width: 250px;"></span> (Name of the Company/RTA) with a request to transmit the aforesaid securities in the name of the undersigned Mr. /Ms. <span class="fill-line" style="min-width: 220px;"></span>#, on my/our behalf, without insisting on production of a Succession Certificate/ Probate of Will / Letter of Administration or any Court order, for which we execute an indemnity as is herein contained and on relying on the information herein given by us, believing the same to be true.
      </div>

      <!-- Consideration Clause -->
      <div class="numbered-clause">
        In consideration therefore of my/our request to transfer/transmit the above said securities to the name of the undersigned Mr. /Ms. <span class="fill-line" style="min-width: 250px;"></span>#,
      </div>

      <!-- Indemnity Agreement -->
      <div class="numbered-clause">
        I/We hereby jointly and severely agree and undertake to indemnify and keep indemnified, saved, defended, harmless, <span class="fill-line" style="min-width: 250px;"></span> [Name of the Company/ Issuer and any RTA] and its successors and assigns for all time hereafter against all losses, costs, claims, actions, demands, risks, charges, expenses, damages, etc., whatsoever which they may suffer and/or incur by reason of transferring the said securities as herein above mentioned, at my/our request to the undersigned Mr./Ms. <span class="fill-line" style="min-width: 220px;"></span>, without insisting on production of a Succession Certificate / Probate of Will / Letter of Administration or any Court order.
      </div>

      <!-- In Witness Whereof -->
      <div class="witness-clause">
        <strong>IN WITNESS WHEREOF</strong> the said 1) Mr. /Ms. <span class="fill-line" style="min-width: 240px;"></span> and 2) Mr. /Ms. <span class="fill-line" style="min-width: 240px;"></span>, have hereunto set their respective hands and seals this day of <span class="fill-line" style="min-width: 140px;"></span>. Signed and delivered by the said legal heir/s.
      </div>

      <!-- Table 4: Signatures Table -->
      <table class="sig-table">
        <thead>
          <tr>
            <th style="width: 8%;">S. No.</th>
            <th style="width: 52%; text-align: left;">Name of the Legal Heirs</th>
            <th style="width: 40%; text-align: left;">Signature of the Legal Heirs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: center; font-weight: bold;">1)</td>
            <td><span class="fill-line" style="width: 90%;"></span></td>
            <td class="sig-cell"></td>
          </tr>
          <tr>
            <td style="text-align: center; font-weight: bold;">2)</td>
            <td><span class="fill-line" style="width: 90%;"></span></td>
            <td class="sig-cell"></td>
          </tr>
          <tr>
            <td style="text-align: center; font-weight: bold;">3)</td>
            <td><span class="fill-line" style="width: 90%;"></span></td>
            <td class="sig-cell"></td>
          </tr>
        </tbody>
      </table>

      <!-- Legend Notes -->
      <div class="legend-notes">
        <strong>(*)</strong> = Name of the deceased security holder &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <strong>(#)</strong> = Name of the claimant/s
      </div>

      <!-- Notary Attestation Block -->
      <div class="notary-section">
        <div class="notary-title">Signed before me</div>
        <div class="notary-grid">
          <div class="notary-left">
            <div><strong>at:</strong> &nbsp;&nbsp; <span class="fill-line" style="min-width: 180px;"></span></div>
            <div style="margin-top: 8px;"><strong>on:</strong> &nbsp;&nbsp; <span class="fill-line" style="min-width: 180px;"></span></div>
          </div>
          <div class="notary-right">
            <div class="notary-sig-line"></div>
            <div class="notary-seal-text">
              Signature of Notary<br>
              Official stamp &amp; seal of the Notary &amp; Regn. No.
            </div>
          </div>
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
        link.download = "Annexure E.DOCX";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      } catch (err) {
        console.error("Download error:", err);
        const fallback = document.createElement("a");
        fallback.href = "Annexure E.DOCX";
        fallback.download = "Annexure E.DOCX";
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
