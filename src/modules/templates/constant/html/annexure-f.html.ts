export const ANNEXURE_F_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Annexure F - No-Objection Certificate from Legal Heir(s)</title>
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

    /* Print Setup - Strict 2-Page A4 */
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
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
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

    /* A4 Page Container: 210mm x 297mm */
    .page {
      width: 210mm;
      height: 297mm;
      min-height: 297mm;
      max-height: 297mm;
      margin: 54px auto 20px auto;
      background: #ffffff;
      padding: 12mm 16mm 10mm 16mm;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }

    .page-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Header Badge Table */
    .header-top-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
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
      text-align: right;
      line-height: 1.3;
    }

    .stamp-paper-note {
      font-size: 8.5pt;
      font-style: italic;
      text-align: center;
      margin: 2px 0 4px 0;
      color: #334155;
    }

    /* Document Titles */
    .doc-main-title {
      font-size: 11pt;
      font-weight: bold;
      text-align: center;
      line-height: 1.35;
      margin-bottom: 2px;
      text-transform: uppercase;
      letter-spacing: 0.2px;
    }

    .doc-sub-title {
      font-size: 8.5pt;
      text-align: center;
      color: #1e293b;
      margin-bottom: 6px;
      line-height: 1.3;
      padding: 0 8px;
    }

    .section-heading {
      font-size: 9.8pt;
      font-weight: bold;
      text-align: center;
      margin: 4px 0 6px 0;
      letter-spacing: 0.5px;
      text-decoration: underline;
    }

    /* Clauses and Narrative */
    .opening-clause {
      font-size: 9pt;
      line-height: 1.35;
      text-align: justify;
      margin-bottom: 5px;
    }

    .numbered-clause {
      font-size: 8.8pt;
      line-height: 1.3;
      text-align: justify;
      margin: 4px 0 3px 0;
    }

    /* Form Fill Underline */
    .fill-line {
      display: inline-block;
      border-bottom: 1px solid #000000;
      vertical-align: baseline;
      min-height: 14px;
    }

    /* Data Tables */
    table.data-table {
      width: 100%;
      border-collapse: collapse;
      border: 1.2px solid #000000;
      font-size: 8.5pt;
      margin: 2px auto 4px auto;
    }

    table.data-table th,
    table.data-table td {
      border: 1px solid #000000;
      padding: 3px 6px;
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

    /* Signature Table */
    table.sig-table {
      width: 100%;
      border-collapse: collapse;
      border: 1.2px solid #000000;
      font-size: 8.8pt;
      margin: 4px 0 8px 0;
    }

    table.sig-table th,
    table.sig-table td {
      border: 1px solid #000000;
      padding: 5px 8px;
      vertical-align: middle;
      line-height: 1.3;
    }

    table.sig-table th {
      background: #f1f5f9;
      font-weight: bold;
      text-align: center;
    }

    table.sig-table td.sig-cell {
      height: 32px;
    }

    /* Verification Box */
    .verification-box {
      border: 1.2px solid #000000;
      padding: 8px 12px;
      background: #fafafa;
      margin: 6px 0;
      font-size: 8.8pt;
      line-height: 1.35;
    }

    .verification-title {
      font-size: 9.5pt;
      font-weight: bold;
      text-align: center;
      margin-bottom: 5px;
      text-decoration: underline;
      letter-spacing: 0.5px;
    }

    /* Notary Section */
    .notary-section {
      border: 1px solid #000000;
      padding: 6px 12px;
      background: #ffffff;
      margin-top: 4px;
      margin-bottom: 4px;
    }

    .notary-title {
      font-size: 8.8pt;
      font-weight: bold;
      text-align: center;
      margin-bottom: 4px;
    }

    .notary-grid {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      font-size: 8.5pt;
      line-height: 1.5;
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
      margin: 24px auto 3px auto;
    }

    .notary-seal-text {
      font-size: 8pt;
      font-weight: bold;
      color: #333333;
    }

    /* Page Footer */
    .page-footer {
      font-size: 8.5pt;
      color: #4b5563;
      text-align: right;
      border-top: 1px solid #cbd5e1;
      padding-top: 3px;
      margin-top: 4px;
    }
  </style>
</head>
<body>

  <!-- Top Action Bar for Quick Printing / DOCX Download -->
  <div class="page-preview-bar">
    <div class="bar-title">
      <span class="badge">ANNEXURE F</span>
      <div>
        <strong>Annexure F: No-Objection Certificate from Legal Heir(s)</strong>
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
        Download Clean DOCX
      </button>
    </div>
  </div>

  <!-- ==================== PAGE 1 ==================== -->
  <div class="page page-1">
    <div class="page-content">
      <div>
        <!-- Top Header Row -->
        <div class="header-top-row">
          <div class="annexure-box">Annexure F</div>
          <div class="notary-exec-note">
            Note: To be executed in the presence of a<br/>Public Notary / Gazetted Officer
          </div>
        </div>

        <div class="stamp-paper-note">
          [To be submitted on non-judicial stamp paper of appropriate value]
        </div>

        <!-- Document Titles -->
        <div class="doc-main-title">
          No-Objection Certificate from the Legal Heir(s)
        </div>
        <div class="doc-sub-title">
          Format of NOC from other Legal Heir(s) for Transmission of Securities in favour of the Claimant(s) wherein the Sole Holder is deceased and NO NOMINATION has been registered
        </div>

        <!-- Section Heading -->
        <div class="section-heading">DECLARATION</div>

        <!-- Opening Clause -->
        <div class="opening-clause">
          I / We, the legal heir(s) of late Mr. / Ms. <span class="fill-line" style="min-width: 280px;"></span> (name of the deceased holder) declare as follows &ndash;
        </div>

        <!-- Clause 1: Securities Held -->
        <div class="numbered-clause">
          <strong>1.</strong> That the above named deceased holder was holding the following securities in his / her name as single holder:
        </div>

        <!-- Table 1: Securities -->
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 8%;">S. No.</th>
              <th style="width: 48%; text-align: left;">Name of the Company</th>
              <th style="width: 22%;">Folio No.</th>
              <th style="width: 22%;">No. of securities held</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="col-sno">1)</td>
              <td style="height: 22px;"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="col-sno">2)</td>
              <td style="height: 22px;"></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="col-sno">3)</td>
              <td style="height: 22px;"></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <!-- Clause 2: Intestate -->
        <div class="numbered-clause" style="margin-top: 5px;">
          <strong>2.</strong> That the deceased had died intestate on <span class="fill-line" style="min-width: 170px;"></span> and without registering any nominee.
        </div>

        <!-- Clause 3: Claimants -->
        <div class="numbered-clause" style="margin-top: 5px;">
          <strong>3.</strong> That the following Claimant(s) has/have applied for the transmission of the aforesaid securities:
        </div>

        <!-- Table 2: Claimants -->
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 8%;">S. No.</th>
              <th style="width: 32%; text-align: left;">Name of the Claimant(s)</th>
              <th style="width: 36%; text-align: left;">Address and contact details</th>
              <th style="width: 9%;">Age</th>
              <th style="width: 15%;">Relationship with deceased</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="col-sno">1)</td>
              <td style="height: 22px;"></td>
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
            </tr>
            <tr>
              <td class="col-sno">3)</td>
              <td style="height: 22px;"></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <!-- Clause 4: Legal Heirs (Non-Claimants) -->
        <div class="numbered-clause" style="margin-top: 5px;">
          <strong>4.</strong> That I / We are the legal heir(s) of the deceased holder, apart from the Claimant(s) who has/ have applied for transmission of the aforesaid securities and our details are as follows:
        </div>

        <!-- Table 3: Legal Heirs -->
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 8%;">S. No.</th>
              <th style="width: 32%; text-align: left;">Name of the Legal Heir(s)</th>
              <th style="width: 36%; text-align: left;">Address and contact details</th>
              <th style="width: 9%;">Age</th>
              <th style="width: 15%;">Relationship with deceased</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="col-sno">1)</td>
              <td style="height: 22px;"></td>
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
            </tr>
            <tr>
              <td class="col-sno">3)</td>
              <td style="height: 22px;"></td>
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
  </div>

  <!-- ==================== PAGE 2 ==================== -->
  <div class="page page-2">
    <div class="page-content">
      <div>
        <!-- Clause 5: Relinquishment & Renunciation -->
        <div class="numbered-clause" style="font-size: 9pt; line-height: 1.4; margin-bottom: 8px;">
          <strong>5.</strong> I / we hereby declare that, I / we do not desire to make any claim in respect of the title to the aforesaid securities held by the deceased and I / we hereby wilfully <strong>relinquish &amp; renounce</strong> all my /our rights in respect of the aforesaid securities and shall have no legal claim upon said securities in future.
        </div>

        <!-- Clause 6: No Objection -->
        <div class="numbered-clause" style="font-size: 9pt; line-height: 1.4; margin-bottom: 8px;">
          <strong>6.</strong> Accordingly, I / we declare that I / we have <strong>NO OBJECTION WHATSOEVER</strong> in <span class="fill-line" style="min-width: 250px;"></span> (Name of the Company) transmitting the aforesaid securities in favour of the Claimant(s) Mr. / Ms. <span class="fill-line" style="min-width: 250px;"></span>.
        </div>

        <!-- Clause 7: Truth Statement -->
        <div class="numbered-clause" style="font-size: 9pt; line-height: 1.4; margin-bottom: 12px;">
          <strong>7.</strong> I / we hereby state that whatever is stated herein above are true to the best of my/our knowledge and nothing has been concealed therein.
        </div>

        <!-- Signatures of Non-Claimants -->
        <div style="font-size: 9.2pt; font-weight: bold; margin-bottom: 6px; color: #0f172a;">
          Name(s) and Signature(s) of Legal Heir(s) who are Non &ndash; Claimant(s):
        </div>

        <table class="sig-table">
          <thead>
            <tr>
              <th style="width: 8%;">S. No.</th>
              <th style="width: 42%; text-align: left;">Name of Legal Heir(s)</th>
              <th style="width: 32%;">Signature</th>
              <th style="width: 18%;">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center; font-weight: bold;">1)</td>
              <td class="sig-cell"></td>
              <td class="sig-cell"></td>
              <td class="sig-cell"></td>
            </tr>
            <tr>
              <td style="text-align: center; font-weight: bold;">2)</td>
              <td class="sig-cell"></td>
              <td class="sig-cell"></td>
              <td class="sig-cell"></td>
            </tr>
            <tr>
              <td style="text-align: center; font-weight: bold;">3)</td>
              <td class="sig-cell"></td>
              <td class="sig-cell"></td>
              <td class="sig-cell"></td>
            </tr>
          </tbody>
        </table>

        <!-- Verification Box -->
        <div class="verification-box">
          <div class="verification-title">VERIFICATION</div>
          <p style="margin-bottom: 8px; text-align: justify;">
            We hereby solemnly affirm and state that what is stated herein above is true to our knowledge and nothing has been concealed therein and that we are competent to contract and entitled to rights and benefits of the above mentioned securities.
          </p>
          <div style="margin-bottom: 10px;">
            <strong>Solemnly affirmed at:</strong> <span class="fill-line" style="min-width: 220px;"></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>Date:</strong> <span class="fill-line" style="min-width: 150px;"></span>
          </div>
          <div style="font-weight: bold; margin-bottom: 6px;">Deponent(s):</div>
          <table style="width: 100%; border: none; font-size: 8.8pt;">
            <tr>
              <td style="width: 33.3%; border: none; vertical-align: top; padding: 2px 4px;">
                <strong>(1) Name:</strong> <span class="fill-line" style="width: 85%;"></span><br/>
                <div style="margin-top: 14px;"><strong>Signature:</strong> <span class="fill-line" style="width: 75%;"></span></div>
              </td>
              <td style="width: 33.3%; border: none; vertical-align: top; padding: 2px 4px;">
                <strong>(2) Name:</strong> <span class="fill-line" style="width: 85%;"></span><br/>
                <div style="margin-top: 14px;"><strong>Signature:</strong> <span class="fill-line" style="width: 75%;"></span></div>
              </td>
              <td style="width: 33.3%; border: none; vertical-align: top; padding: 2px 4px;">
                <strong>(3) Name:</strong> <span class="fill-line" style="width: 85%;"></span><br/>
                <div style="margin-top: 14px;"><strong>Signature:</strong> <span class="fill-line" style="width: 75%;"></span></div>
              </td>
            </tr>
          </table>
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
              <div class="notary-seal-text">Signature of Public Notary / Gazetted Officer with Official Seal &amp; Regn. No.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Page 2 Footer -->
      <div class="page-footer">
        Page 2 of 2
      </div>
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
        link.download = "Annexure F - CLAIMENT 2.DOCX";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      } catch (err) {
        console.error("Download error:", err);
        const fallback = document.createElement("a");
        fallback.href = "Annexure F - CLAIMENT 2.DOCX";
        fallback.download = "Annexure F - CLAIMENT 2.DOCX";
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
