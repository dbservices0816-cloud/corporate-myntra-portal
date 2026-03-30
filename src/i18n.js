import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      topbar: {
        text: " CALL at"
      },

      navbar: {
        home: "Home",
        company: "Company Registration",
        accounting: "Accounting & Cost Management",
        projects: "Our Projects",
        menu: "Menu"
      },

      sidebar: {
        title: "Company Services India",
        services: "Our Services",
        help: "Need help choosing a service?",
        expert: "Talk to an Expert",
        newCompany: "New Company Registration",
        companyName: "Company Name Availability",
        companyCompliance: "Company Compliance",
        annualFilings: "Annual Filings for Companies, LLP",
        accounting: "Accounting & Cost Management",
        msmeFinance: "MSME Finance",
        msmeRegistration: "MSME Registrations",
        msmeSubsidy: "MSME Schemes / Subsidy",
        gstAssistance: "GST Registration, Assistance",
        gstCompliance: "GST Compliances",
        gstReconciliation: "GST Reconciliation",
        incomeTax: "Income Tax Compliances",
        panApplication: "Pan Application",
        gemPortal: "GeM Portal Assistance"
      },

    home: {
hero_title: "Start and Grow Your Business with Confidence",
hero_subtitle:
"We provide complete business registration, GST, compliance, and financial management services to help your company succeed.",
core_services: "Our Core Services",
learn_more: "Learn More",

company_registration: "New Company Registration",
company_registration_desc:
"Complete assistance in registering your new company with legal compliance.",

company_name: "Company Name Availability",
company_name_desc:
"Check availability of your desired company name and reserve it quickly.",

annual_filings: "Annual Filings & Compliance",
annual_filings_desc:
"Ensure timely annual filings and regulatory compliance.",

gst_assistance: "GST Registration Assistance",
gst_assistance_desc:
"Professional assistance for GST registration and setup.",

gst_compliances: "GST Compliance Services",
gst_compliances_desc:
"Accurate GST return filing and compliance management.",

gst_reconciliation: "GST Reconciliation",
gst_reconciliation_desc:
"Detailed GST reconciliation to avoid mismatches.",

msme_registration: "MSME Registration",
msme_registration_desc:
"Easy MSME registration and certification.",

msme_finance: "MSME Finance Assistance",
msme_finance_desc:
"Financial assistance support for MSME growth.",

gem_onboarding: "GeM Portal Onboarding",
gem_onboarding_desc:
"Complete onboarding assistance for Government e-Marketplace.",

company_compliance: "Company Compliance",
company_compliance_desc:
"Complete compliance management including ROC filings and statutory requirements.",

accounting_management: "Accounting & Cost Management",
accounting_management_desc:
"Professional accounting and cost management services.",

income_tax: "Income Tax Portal Assistance",
income_tax_desc:
"Professional assistance with income tax portal registration, filing, and compliance.",

pan_application: "PAN Application",
pan_application_desc:
"Assistance with new PAN card application and corrections for individuals and businesses."
},


      company: {
        title: "Company Registration",
        subtitle:
          "Start your Private Limited Company with complete legal compliance and expert guidance.",
        benefits_title: "Benefits of Private Limited Company",
        limited_liability: "Limited Liability Protection",
        legal_entity: "Separate Legal Entity",
        fund_raising: "Easy Fund Raising",
        credibility: "Improved Credibility",
        perpetual: "Perpetual Succession",
        tax_benefits: "Tax Benefits",
        documents: "Required Documents",
        pan: "Director PAN Card",
        aadhaar: "Director Aadhaar Card",
        photo: "Passport Size Photo",
        contact: "Mobile Number & Email",
        address: "Registered Office Address Proof",
        bill: "Electricity Bill",
        rent: "Rent Agreement",
        noc: "NOC from Owner",
        process: "Registration Process",
        step: "Step",
        name_approval: "Name Approval",
        dsc_din: "DSC & DIN",
        document_filing: "Document Filing",
        certificate: "Certificate Issued",
        pricing: "Affordable Pricing",
        starting: "Starting at ₹4,999",
        price_desc:
          "Complete Company Registration including Government Fees.",
        apply: "Apply Now",
        consult: "Get Free Consultation",
        name: "Your Name",
        email: "Your Email",
        phone: "Your Phone",
        submit: "Submit",
        form_success: "Form Submitted Successfully!"
      },

      accounting: {
        title: "Accounting & Cost Management Services",
        subtitle:
          "Accurate financial records and cost analysis to help your business grow with confidence.",
        services_title: "Our Accounting Services",
        cost_title: "Cost Management & Analysis",
        why: "Why Choose Us",

        bookkeeping: "Bookkeeping & Ledger Maintenance",
        financial_statement: "Financial Statement Preparation",
        audit_support: "Audit Support",
        management_accounting: "Management Accounting",
        advisory: "Advisory Services",
        budgeting: "Budgeting & Financial Planning",

        cost_sheet: "Cost Sheet Preparation",
        budget_planning: "Budgeting & Planning",
        break_even: "Break-even Analysis",
        inventory: "Inventory Cost Control",
        profitability: "Profitability Analysis",
        mis_reporting: "MIS Reporting",

        accurate_records: "Accurate financial records",
        better_decision: "Better decision making",
        tax_compliance: "Full tax compliance",
        risk_reduction: "Reduced financial risks",

        consult: "Get Free Consultation",
        success: "Request Sent! Our team will contact you soon.",

        name: "Your Name",
        phone: "Your Phone",
        email: "Your Email",

        request: "Request Now",
        whatsapp: "Chat on WhatsApp"
      },

      projects: {
        title: "Our Projects",
        subtitle:
          "Explore our successful projects and innovative digital solutions designed for business growth and compliance management.",
        view: "View Details",

        project1_title: "Company Registration Portal",
        project1_desc: "Online platform for seamless company incorporation services.",

        project2_title: "GST Filing System",
        project2_desc: "Automated GST return filing and compliance tracking system.",

        project3_title: "MSME Registration Platform",
        project3_desc: "Digital solution for MSME registration and certification.",

        project4_title: "Accounting Dashboard",
        project4_desc: "Advanced dashboard for financial tracking and reporting.",

        project5_title: "Tax Consultancy Website",
        project5_desc: "Corporate website for tax planning and advisory services.",

        project6_title: "Business Compliance App",
        project6_desc: "Mobile app for tracking business legal compliance."
      },

      newCompany: {
        title: "New Company Registration",
        subtitle:
          "Start your business journey with a legally recognized identity. Register your company quickly with expert assistance and ensure full compliance with MCA regulations across India.",

        types: "Types of Company Registration",

        private_title: "Private Limited Company",
        private_desc: "Most popular structure for startups",
        private_point1: "Minimum 2 Directors required",
        private_point2: "Limited liability for shareholders",
        private_point3: "Easy to raise funds from investors",
        private_point4: "Separate legal entity from owners",

        opc_title: "One Person Company",
        opc_desc: "Built for solo entrepreneurs",
        opc_point1: "Only 1 Director & 1 Shareholder needed",
        opc_point2: "Limited liability protection",
        opc_point3: "Full control in single hands",
        opc_point4: "Easy conversion to Pvt Ltd later",

        llp_title: "Limited Liability Partnership (LLP)",
        llp_desc: "Blend of partnership and company structure",
        llp_point1: "Minimum 2 Designated Partners",
        llp_point2: "Lower compliance burden than Pvt Ltd",
        llp_point3: "Partners have limited liability",
        llp_point4: "Flexible profit sharing structure",

        public_title: "Public Limited Company",
        public_desc: "For large-scale businesses",
        public_point1: "Minimum 3 Directors required",
        public_point2: "Can raise funds from public",
        public_point3: "Shares can be listed on stock exchange",
        public_point4: "Higher regulatory compliance required",

        benefits_title: "Benefits of Registration",

        benefit1: "Separate Legal Entity",
        benefit2: "Limited Liability Protection",
        benefit3: "Easy Access to Funding",
        benefit4: "Business Credibility",
        benefit5: "Perpetual Succession",
        benefit6: "Tax Benefits",

        documents_title: "Documents Required",

        doc1: "PAN Card of Directors",
        doc2: "Aadhaar Card / ID Proof",
        doc3: "Residential Address Proof",
        doc4: "Passport-size Photographs",
        doc5: "Registered Office Address Proof",
        doc6: "Digital Signature Certificate (DSC)",

        cta_title: "Ready to Register Your Company?",
        cta_btn: "Contact Us",

        popup_title: "Free Consultation",
        popup_desc: "Our expert will guide you step-by-step.",

        name: "Full Name",
        mobile: "Mobile Number",
        email: "Email Address",

        submit: "Get Free Consultation",
        success: "We'll Call You Soon!"
      },

      companyName: {
        title: "Company Name Availability",
        subtitle:
          "Before registering your company, it is important to check whether your desired name is available under MCA. A unique and compliant name ensures faster approval and avoids legal objections.",

        service_title: "Our Service Includes",

        s1: "Availability Check on MCA Portal",
        s2: "Name Guideline Verification",
        s3: "Trademark Conflict Check",
        s4: "2 Name Suggestions Review",
        s5: "Expert Consultation",

        check_title: "Check Your Company Name Now",
        check_desc:
          "Instantly verify whether your proposed name is available and compliant.",
        search: "Contact Us",

        how: "How It Works",

        step1: "Submit Name",
        step1_desc: "Provide your desired name and business activity.",

        step2: "Verification",
        step2_desc: "We check availability, MCA guidelines, and trademarks.",

        step3: "Confirmation",
        step3_desc: "Get confirmation or alternative suggestions.",

        why: "Why Choose Our Service?",
        why_desc:
          "Choosing the right company name is crucial for brand identity and legal approval. Our experts ensure compliance with MCA regulations and avoid trademark conflicts.",

        note:
          "*Company name approval is granted solely by MCA authority and subject to Companies Act, 2013."
      },

      companyCompliance: {
        title: "Company Compliance Services",

        subtitle:
          "Company Compliance refers to the process by which a company follows all laws, regulations, standards, and internal policies applicable to its operations. It ensures that the business operates legally, ethically, and transparently while reducing risks such as penalties, lawsuits, and reputational damage.",

        keyPoints: "Key Points",

        k1: "Ensures adherence to government laws and industry regulations.",
        k2: "Protects the company from legal penalties and financial losses.",
        k3: "Promotes ethical business practices and transparency.",
        k4: "Requires regular monitoring, reporting, and documentation.",

        services: "Our Compliance Services",

        s1: "Annual ROC Filing",
        s2: "Director KYC (DIR-3 KYC)",
        s3: "Board Resolution & Minutes",
        s4: "Share Transfer & Allotment",
        s5: "Company Compliance Management",

        tableTitle: "Main Areas of Company Compliance",

        area: "Compliance Area",
        desc: "Description",
        example: "Example",

        legal: "Legal Compliance",
        legalDesc: "Following all applicable laws and regulations.",
        legalEx: "Companies Act requirements",

        financial: "Financial Compliance",
        financialDesc: "Maintaining accurate financial records and reporting.",
        financialEx: "Audits, tax filings",

        regulatory: "Regulatory Compliance",
        regulatoryDesc: "Meeting industry-specific regulations.",
        regulatoryEx: "SEBI regulations for listed companies",

        governance: "Corporate Governance",
        governanceDesc:
          "Ensuring proper management, accountability, and board oversight.",
        governanceEx: "Board meetings, shareholder rights",

        labor: "Labor Compliance",
        laborDesc: "Following employment and workplace laws.",
        laborEx: "Minimum wages, employee benefits",

        environment: "Environmental Compliance",
        environmentDesc: "Adhering to environmental protection laws.",
        environmentEx: "Pollution control norms",

        data: "Data Protection Compliance",
        dataDesc: "Protecting customer and company data.",
        dataEx: "Data privacy policies"
      },


      annualFilings: {
  title: "Annual Filings for Companies & LLP",

  subtitle:
    "Stay compliant with MCA regulations. We handle your annual return, financial statements, and ROC filings with accuracy and timeliness.",

  aboutTitle: "What are Annual Filings?",

  aboutDesc:
    "Every registered company and LLP in India must file annual returns and financial statements with the Registrar of Companies (ROC) under the Companies Act, 2013.",

  servicesTitle: "Our Annual Filing Services Include",

  aocTitle: "AOC-4 Filing",
  aocDesc:
    "Filing of financial statements including balance sheet and profit & loss account.",

  mgtTitle: "MGT-7 Filing",
  mgtDesc:
    "Filing of annual return containing company details and shareholding pattern.",

  kycTitle: "DIR-3 KYC",
  kycDesc:
    "Annual KYC compliance for company directors to avoid penalties.",

  benefitsTitle: "Why Timely Annual Filing is Important?",

  b1Title: "Avoid Penalties",
  b1Desc: "Late filing attracts heavy government penalties per day.",

  b2Title: "Maintain Compliance",
  b2Desc:
    "Keep your company legally active and compliant with MCA rules.",

  b3Title: "Build Credibility",
  b3Desc:
    "Updated records improve trust with banks and investors.",

  processTitle: "Our Filing Process",

  p1Title: "Document Collection",
  p1Desc:
    "Collect financial statements and required company data.",

  p2Title: "Preparation",
  p2Desc:
    "Prepare financial statements and ROC forms.",

  p3Title: "Filing with ROC",
  p3Desc:
    "Submit forms online with government fees.",

  p4Title: "Confirmation",
  p4Desc:
    "Provide filing acknowledgment and compliance proof.",

  ctaTitle: "Need Help with Annual Filings?",
  ctaDesc:
    "Ensure 100% compliance and avoid penalties with our expert support.",

  ctaBtn: "Get Started Today"
},


msmeFinance: {
  title: "MSME Finance & Loan Assistance",

  subtitle:
    "MSME Finance Assistance helps small and medium businesses access funding through government schemes, bank loans, and NBFC financing.",

  financeTypes: "Types of MSME Finance",

  workingLoan: "Working Capital Loan",
  workingLoanDesc:
    "Maintain smooth daily operations with short-term business funding.",

  termLoan: "Term Loan",
  termLoanDesc:
    "Long-term funding for expansion, infrastructure, and business growth.",

  machineryLoan: "Machinery / Equipment Loan",
  machineryLoanDesc:
    "Finance new machinery and equipment to increase productivity.",

  govtLoan: "Government Scheme Loans",
  govtLoanDesc:
    "Assistance under CGTMSE, Mudra, and other MSME schemes.",

  benefitsTitle: "Benefits of MSME Finance",

  b1: "Lower interest rates under government schemes",
  b2: "Collateral-free loan options available",
  b3: "Flexible repayment tenure",
  b4: "Quick processing & approval support",
  b5: "Professional documentation assistance",

  docsTitle: "Documents Required",

  d1: "Business PAN & GST Certificate",
  d2: "Bank Statements (Last 6–12 Months)",
  d3: "ITR / Financial Statements",
  d4: "Business Registration Proof",
  d5: "KYC of Proprietor / Directors",

  applyTitle: "Apply for MSME Finance",

  applyDesc:
    "Get fast and reliable business funding with expert guidance.",

  name: "Full Name",
  mobile: "Mobile Number",
  email: "Email Address",

  applyBtn: "Apply Now"
},



// --- EN ---
msmeRegistration: {
  title: "MSME / Udyam Registration",

  intro:
    "MSME (Micro, Small & Medium Enterprises) Registration, also known as Udyam Registration, is a government recognition provided to small and medium businesses in India. By registering under MSME, your business becomes eligible for various government benefits, financial support, subsidies, and priority sector advantages.",

  def_title: "MSME Classification Update",

  def_desc:
    "When the government introduced MSME registration in 2006, the classification was based on the investment in plant, machinery, or equipment. Later, the classification was updated to include annual investment and turnover criteria. Additionally, the distinction between the manufacturing and services sectors was removed under the MSME definition. The Budget 2025 brought a revision in the MSME classification, effective from 1 April 2025. Below is a comparison of the previous and revised limits.",

  col_criteria: "Criteria",
  col_micro: "Micro",
  col_small: "Small",
  col_medium: "Medium",

  prev_invest: "Previous Investment Limit",
  prev_invest_micro: "Up to Rs. 1 crore",
  prev_invest_small: "Up to Rs. 10 crore",
  prev_invest_medium: "Up to Rs. 50 crore",

  rev_invest: "Revised Investment Limit",
  rev_invest_micro: "Up to Rs. 2.5 crore",
  rev_invest_small: "Up to Rs. 25 crore",
  rev_invest_medium: "Up to Rs. 125 crore",

  prev_turnover: "Previous Turnover Limit",
  prev_turnover_micro: "Up to Rs. 5 crore",
  prev_turnover_small: "Up to Rs. 50 crore",
  prev_turnover_medium: "Up to Rs. 250 crore",

  rev_turnover: "Revised Turnover Limit",
  rev_turnover_micro: "Up to Rs. 10 crore",
  rev_turnover_small: "Up to Rs. 100 crore",
  rev_turnover_medium: "Up to Rs. 500 crore",

  benefits_title: "Benefits of MSME Registration",

  b1_title: "Easy Bank Loans",
  b1_desc:
    "Get access to collateral-free loans under MSME schemes with lower interest rates.",

  b2_title: "Government Subsidy",
  b2_desc:
    "Avail subsidies on patent registration and industrial promotion.",

  b3_title: "Tax & Compliance Benefits",
  b3_desc:
    "Enjoy tax exemptions and protection against delayed payments.",

  b4_title: "ISO Reimbursement",
  b4_desc:
    "Claim reimbursement for ISO certification expenses.",

  docs_title: "Documents Required",

  doc1: "Aadhaar Card of Proprietor / Partner / Director",
  doc2: "PAN Card of Business or Applicant",
  doc3: "Business Address Proof",
  doc4: "Bank Account Details",
  doc5: "Business Activity Details",

  process_title: "MSME Registration Process",

  step1: "Provide basic business and Aadhaar details.",
  step2: "Verification and classification of enterprise.",
  step3: "Filing of Udyam Registration application.",
  step4: "Generation of Registration Certificate.",

  sidebar_title: "Apply for MSME Registration",
  sidebar_desc: "Get your MSME certificate quickly and hassle-free.",

  name: "Full Name",
  mobile: "Mobile Number",
  email: "Email Address",
 submit: "Get Started"
},



// ---------- EN ----------
gstAssistance: {
  title: "GST Registration Assistance",
  intro:
    "Goods and Services Tax (GST) is a comprehensive indirect tax levied on the supply of goods and services in India. It replaced multiple taxes like VAT, Service Tax, and Excise Duty and simplifies the taxation system.",

  who_title: "Who Needs GST Registration?",
  w1: "Businesses with turnover above prescribed limits",
  w2: "E-commerce sellers",
  w3: "Interstate suppliers",
  w4: "Online service providers",
  w5: "Casual taxable persons",

  services_title: "Our GST Services",
  s1_title: "GST Registration",
  s1_desc: "Complete assistance in new GST registration with fast processing.",
  s2_title: "GST Return Filing",
  s2_desc: "Monthly, quarterly, and annual GST return filing support.",
  s3_title: "GST Amendments",
  s3_desc: "Update business details, address changes, or modifications.",
  s4_title: "GST Cancellation",
  s4_desc: "Assistance in voluntary or compulsory GST cancellation.",

  docs_title: "Documents Required",
  doc1: "PAN Card of Business / Proprietor",
  doc2: "Aadhaar Card",
  doc3: "Business Address Proof",
  doc4: "Bank Account Details",
  doc5: "Photograph of Owner / Directors",

  why_title: "Why Choose Our GST Services?",
  why1: "Expert GST Consultants",
  why2: "Timely Filing & Compliance",
  why3: "Error-free Documentation",
  why4: "End-to-End Support",

  popup_title: "GST Expert Assistance",
  popup_btn: "Get GST Assistance",

  sidebar_title: "Get GST Assistance",
  sidebar_desc:
    "Talk to our GST experts and get complete assistance for registration, returns, and compliance.",
  sidebar_btn: "Talk to an Expert",

  name: "Full Name",
  mobile: "Mobile Number",
  email: "Email Address",
  business: "Business Name"
},


// ---------- EN ----------
gstCompliances: {
  title: "GST Compliance Services",
  intro: "Stay fully compliant with GST regulations. We handle your returns, filings, reconciliations, and notices so you can focus on growing your business.",
  consult_btn: "Get Free Consultation",
  services_title: "What We Cover Under GST Compliance",
  s1: "Monthly & Quarterly GST Returns (GSTR-1, GSTR-3B)",
  s1_desc: "We file your GSTR-1 and GSTR-3B accurately every month and quarter, ensuring zero errors and timely submission.",
  s2: "Annual Return Filing (GSTR-9 & 9C)",
  s2_desc: "We prepare and file your annual GST returns, reconciling all transactions to ensure full year-end compliance.",
  s3: "GST Reconciliation & ITC Matching",
  s3_desc: "We match your purchase data with GSTR-2A/2B to verify every ITC claim and prevent mismatches.",
  s4: "GST Notice Handling & Reply Drafting",
  s4_desc: "We review GST notices, prepare detailed responses, and represent your case before the GST department.",
  s5: "Late Fee & Penalty Management",
  s5_desc: "We track due dates, manage late fees, and help reduce penalties through timely filing and rectifications.",
  s6: "GST Registration Amendments",
  s6_desc: "We update your GST profile with address changes, business modifications, and other amendments as needed.",
  why_title: "Why GST Compliance is Important?",
  why_desc: "Timely GST filing avoids heavy penalties, interest, and legal notices. Proper compliance improves business credibility, enables seamless ITC claims, and ensures smooth operations without government interruptions.",
  process_title: "Our GST Compliance Process",
  step: "Step",
  step1: "Collect Sales & Purchase Data",
  step2: "Reconciliation & ITC Verification",
  step3: "GST Return Preparation",
  step4: "Timely Filing & Confirmation",
  cta_title: "Avoid GST Penalties & Stay Compliant",
  cta_desc: "Let our experts manage your GST compliance professionally and accurately.",
  cta_btn: "Talk to GST Expert",
  sidebar_title: "Get GST Compliance Help",
  sidebar_desc: "Talk to our GST experts and ensure your business remains fully compliant.",
  sidebar_btn: "Talk to an Expert",
  name: "Full Name",
  mobile: "Mobile Number",
  email: "Email Address",
},

//  ---------- EN ----------
gstReconciliation: {
  title: "GST Reconciliation Services",
  intro: "Ensure accurate Input Tax Credit (ITC) claims and avoid GST notices with professional GST reconciliation services.",
  consult_btn: "Get Free Consultation",
  what_title: "What is GST Reconciliation?",
  what_desc: "GST reconciliation is the process of matching your purchase and sales records with GST returns such as GSTR-1, GSTR-3B, and GSTR-2A/2B. Proper reconciliation ensures accurate tax reporting and correct ITC claims.",
  services_title: "Our GST Reconciliation Services Include",
  s1: "GSTR-2A & 2B ITC Matching",
  s1_desc: "We match your purchase data with GSTR-2A and 2B to ensure every ITC claim is valid and verified.",
  s2: "Sales & Purchase Data Reconciliation",
  s2_desc: "We reconcile your books of accounts with filed GST returns to identify any reporting gaps.",
  s3: "Mismatch Identification & Correction",
  s3_desc: "We detect and resolve mismatches between supplier returns and your ITC claims before they trigger notices.",
  s4: "Vendor Follow-ups for ITC Claims",
  s4_desc: "We coordinate with your vendors to ensure they file returns on time so your ITC is not blocked.",
  s5: "Reversal & Reclaim of ITC",
  s5_desc: "We manage ITC reversals as required and help you reclaim eligible credits once conditions are met.",
  s6: "Year-End GST Reconciliation",
  s6_desc: "We perform a complete annual reconciliation to align your GSTR-9 with books and avoid audit issues.",
  why_title: "Why GST Reconciliation is Important?",
  why_desc: "Incorrect reconciliation can lead to ITC mismatch, penalties, and GST department notices. Proper reconciliation ensures tax accuracy, improves compliance score, and protects your business from legal risks.",
  process_title: "Our Reconciliation Process",
  step: "Step",
  step1: "Collect GST Returns & Books Data",
  step2: "Match ITC with GSTR-2A/2B",
  step3: "Identify & Rectify Mismatches",
  step4: "Final Compliance Report Submission",
  cta_title: "Protect Your ITC & Avoid GST Notices",
  cta_desc: "Let our GST experts handle your reconciliation accurately and professionally.",
  cta_btn: "Talk to GST Expert",
  sidebar_title: "Get GST Reconciliation Help",
  sidebar_desc: "Talk to our GST experts and ensure accurate ITC claims and GST compliance.",
  sidebar_btn: "Talk to an Expert",
  name: "Full Name",
  mobile: "Mobile Number",
  email: "Email Address",
},


// ---------- EN ----------
incomeTax: {
  title: "Income Tax Portal Assistance",
  intro: "Expert support for Income Tax filing, compliance, portal login issues, notices, and return corrections.",
  consult_btn: "Get Free Consultation",
  services_title: "Our Income Tax Portal Services",
  s1: "Income Tax Return (ITR) Filing",
  s1_desc: "We prepare and file your ITR accurately based on your income sources, deductions, and applicable tax slabs.",
  s2: "Income Tax Portal Registration",
  s2_desc: "We register you on the income tax e-filing portal and set up your profile for smooth online access.",
  s3: "E-filing & E-verification Support",
  s3_desc: "We guide you through the complete e-filing process and verify your return using Aadhaar OTP or net banking.",
  s4: "Notice Handling & Response Drafting",
  s4_desc: "We analyze tax notices, prepare point-by-point replies, and submit responses within the due deadline.",
  s5: "ITR Correction & Revision Filing",
  s5_desc: "We identify errors in filed returns and submit revised ITRs to correct income, deductions, or tax amounts.",
  s6: "Refund Status & Rectification Assistance",
  s6_desc: "We track your refund status and raise rectification requests if there are discrepancies in processed returns.",
  why_title: "Why Income Tax Compliance is Important?",
  why_desc: "Timely and accurate income tax filing helps avoid penalties, interest, and legal notices. Proper compliance also improves financial credibility and ensures smooth loan approvals and government benefits.",
  process_title: "Our Filing Process",
  step: "Step",
  step1: "Collect Financial Documents",
  step2: "Tax Calculation & Verification",
  step3: "ITR Preparation & Filing",
  step4: "E-Verification & Final Confirmation",
  cta_title: "Need Help With Income Tax Filing?",
  cta_desc: "Our tax experts ensure smooth, accurate, and timely income tax compliance.",
  cta_btn: "Talk to Tax Expert",
  sidebar_title: "Get Income Tax Help",
  sidebar_desc: "Talk to our tax experts and ensure smooth income tax filing and compliance.",
  sidebar_btn: "Talk to an Expert",
  name: "Full Name",
  mobile: "Mobile Number",
  email: "Email Address",
},

// ---------- EN ----------
panApplication: {
  title: "PAN Card Application & Correction",
  intro: "Permanent Account Number (PAN) is a unique identification number issued by the Income Tax Department of India. It is mandatory for financial transactions, income tax filing, bank account opening and compliance purposes.",
  services_title: "Our PAN Services",
  s1: "New PAN Application",
  s1_desc: "We handle the complete application process for new PAN cards for individuals, firms, and companies with zero hassle.",
  s2: "PAN Correction / Update",
  s2_desc: "We correct name, date of birth, address, or signature errors in your existing PAN card quickly and accurately.",
  s3: "Lost PAN Reissue",
  s3_desc: "We help you apply for a duplicate PAN card if your original is lost, damaged, or misplaced.",
  s4: "PAN for NRI",
  s4_desc: "We assist Non-Resident Indians in obtaining their PAN card with the required documentation and process.",
  docs_title: "Documents Required",
  doc1: "Aadhaar Card",
  doc2: "Passport Size Photograph",
  doc3: "Address Proof",
  doc4: "Date of Birth Proof",
  doc5: "Business Registration Proof (For Firms/Companies)",
  process_title: "PAN Application Process",
  step: "Step",
  step1: "Submit required documents & details",
  step2: "Verification of information",
  step3: "Online application filing",
  step4: "PAN allotted & delivered",
  cta_title: "Need Help with PAN Application?",
  cta_desc: "Our experts will handle the complete process quickly and hassle-free.",
  cta_btn: "Contact Us Now",
  sidebar_title: "Apply for PAN Assistance",
  sidebar_desc: "Talk to our experts and get fast PAN application and correction support.",
  sidebar_btn: "Talk to an Expert",
  name: "Full Name",
  mobile: "Mobile Number",
  email: "Email Address",
},

// ---------- EN ----------
about: {
  title: "About CorporateMitra",
  hero_desc: "We simplify business registration and compliance services so entrepreneurs can focus on growth.",

  who_title: "Who We Are",
  who_desc:
    "CompanyMitra is a professional business consulting firm that provides expert assistance in Company Registration, GST Filing, MSME Registration, Tax Compliance and other legal services. Our mission is to make business setup easy, affordable and hassle-free for startups and entrepreneurs across India.",

  mission_title: "Our Mission",
  mission_desc:
    "To empower entrepreneurs by providing transparent, affordable and reliable business registration and compliance services.",

  vision_title: "Our Vision",
  vision_desc:
    "To become India's most trusted platform for business compliance and startup registration services.",

  why_title: "Why Choose Us",
  w1: "Expert Professional Team",
  w2: "Fast & Secure Process",
  w3: "Affordable Pricing",
  w4: "Transparent Documentation",
  w5: "Dedicated Client Support",
  w6: "100% Compliance Assistance",

  cta_title: "Start Your Business Journey With Us",
  cta_desc: "Our experts will guide you through the complete registration and compliance process.",
  cta_btn: "Contact Us Today"
},



// ---------- EN ----------
gemPortal: {
  title: "GeM Portal Registration & Assistance",
  intro:
    "GeM (Government e-Marketplace) Portal is an online platform launched by the Government of India for procurement of goods and services by government departments and PSUs. Registering on GeM enables businesses to directly sell products and services to government buyers.",

  benefits_title: "Benefits of GeM Registration",
  b1_title: "Direct Government Orders",
  b1_desc: "Sell directly to government departments and PSUs.",
  b2_title: "Transparent Procurement",
  b2_desc: "Fair bidding system without middlemen.",
  b3_title: "Wider Market Reach",
  b3_desc: "Access central & state government buyers across India.",
  b4_title: "Secure Online Payments",
  b4_desc: "Timely and secure payments through government system.",

  services_title: "Our GeM Portal Services",
  s1: "New Seller Registration on GeM Portal",
  s2: "Product Listing & Catalog Creation",
  s3: "Bid Participation & Tender Filing",
  s4: "Order Management & Compliance Support",
  s5: "DSC Assistance & Profile Updation",

  docs_title: "Documents Required",
  doc1: "Aadhaar & PAN Card",
  doc2: "GST Registration Certificate",
  doc3: "Business Registration Proof",
  doc4: "Bank Account Details",
  doc5: "Digital Signature Certificate (DSC)",

  sidebar_title: "Get GeM Portal Assistance",
  sidebar_desc:
    "Start selling to government departments today. Our experts will handle complete registration & bidding process.",

  name: "Full Name",
  mobile: "Mobile Number",
  email: "Email Address",
  submit: "Apply Now"
},

// EN
pmegp: {
  heading: "Entrepreneurial Funding Program Overview",
  intro: "This is a credit-linked subsidy scheme designed to establish new micro-enterprises in the non-farm sector. Its primary goal is to create sustainable employment for rural and unemployed youth as well as traditional artisans, helping to prevent occupational migration.",
  keyDetails: "Key Scheme Details",
  keyDetailsSub: "The scheme provides financial assistance for setting up self-employment ventures in both rural and urban areas.",
  th_feature: "Feature",
  th_general: "General Category",
  th_special: "Special Category (SC/ST/Women/Minorities/Ex-Servicemen/Transgender/Aspirational Districts/NER)",
  row1_label: "Owner's Contribution", row1_gen: "10% of project cost", row1_spl: "5% of project cost",
  row2_label: "Urban Subsidy (Margin Money)", row2_gen: "15% of project cost", row2_spl: "25% of project cost",
  row3_label: "Rural Subsidy (Margin Money)", row3_gen: "25% of project cost", row3_spl: "35% of project cost",
  row4_label: "Max Project Cost (Manufacturing)", row4_gen: "Rs. 50 Lakh", row4_spl: "Rs. 50 Lakh",
  row5_label: "Max Project Cost (Service)", row5_gen: "Rs. 20 Lakh", row5_spl: "Rs. 20 Lakh",
  eligibilityHeading: "Eligibility and Up-gradation",
  e1_label: "Eligibility:", e1_text: "Any individual above 18 years of age can apply.",
  e2_label: "Support Services:", e2_text: "The government provides backward and forward linkages, including EDP training, workshops, and exhibitions to ensure unit sustainability.",
  e3_label: "2nd Loan for Up-gradation:", e3_text: "Well-performing existing units can apply for a second loan for expansion or modernization.",
  e3s1_label: "Max Cost:", e3s1_text: "Up to Rs. 1.00 Crore for manufacturing and Rs. 25.00 Lakh for service/trading.",
  e3s2_label: "Subsidy:", e3s2_text: "15% (20% for NER and Hill States).",
  e4_label: "Application Process:", e4_text: "All applications must be submitted online through the PMEGP e-Portal at the KVIC website.",
  contact: "For further information please",
  contactLink: "Contact Us",
  overview: "Overview",
},


// EN ke andar (translation ke andar):
queryForm: {
  title: "Send Us Your Query",
  name: "Your Name",
  email: "Your Email",
  phone: "Your Phone Number",
  message: "Write your query here...",
  submit: "Submit Query",
  submitting: "Submitting...",
  success: "Your query has been submitted successfully!",
  error: "Something went wrong. Please try again.",
  loading: "Submitting your query...",
},


// EN
msecdp: {
  heading: "Micro & Small Enterprises Cluster Development Programme (MSE-CDP)",
  intro: "This is designed to support the sustainability and growth of MSEs by addressing common issues like technology, skills, quality, and market access. It emphasizes the creation and upgrade of infrastructural facilities in new or existing Industrial Areas and the establishment of Common Facility Centres (CFCs) for shared resources such as testing, training, and production processes.",
  summaryTitle: "MSE-CDP Scheme Summary",
  th_feature: "Feature",
  th_details: "Details",
  row1_label: "Common Facility Centres (CFCs)",
  row1_detail: "Provides GOI Assistance of up to 80% of the maximum project cost of Rs. 30 crores.",
  row2_label: "Infrastructure Development (ID)",
  row2_detail: "Covers land, roads, power, and drainage projects. GoI Assistance of up to 70% of the maximum project cost of Rs. 15 crores.",
  row3_label: "Key Objectives",
  row3_detail: "Support growth, improve skills/technology, and promote green & sustainable manufacturing.",
  row4_label: "Eligibility",
  row4_detail: "Existing Entrepreneurs operating as Special Purpose Vehicles (SPVs).",
  row5_label: "Application Portal",
},


// EN
aspire: {
  heading: "A Scheme for Promotion of Innovation, Rural Industry and Entrepreneurship (ASPIRE)",
  intro: "ASPIRE is a Government of India initiative aimed at establishing a network of Livelihood Business Incubators (LBIs), particularly in rural and underserved areas. The scheme focuses on fostering innovation and entrepreneurship in the agro-rural sector by creating scalable micro-enterprises and generating employment through skill development.",
  summaryTitle: "ASPIRE Scheme Summary",
  row1_label: "Primary Objective",
  row1_detail: "To set up Livelihood Business Incubators (LBIs) for entrepreneurship and employment generation in the agro-rural sector.",
  row2_label: "Funding for Plant & Machinery",
  row2_detail: "Up to ₹1 crore for Government agencies and ₹75 lakh for Private agencies.",
  row3_label: "Operational Support",
  row3_detail: "Up to ₹1 crore for both Government and Private agencies for manpower and running incubation programs.",
  row4_label: "Private Sector Requirement",
  row4_detail: "Private organizations must bear 25% of the Capital Expenditure.",
  row5_label: "Eligibility",
  row5_detail: "Government agencies, Training centers, Industry Associations, Academic Institutions, and not-for-profit private institutions with incubation experience.",
  row6_label: "Application Link",
  howTitle: "How to Apply",
  howDesc: "Eligible institutions can apply through the official ASPIRE portal by submitting the required project proposal, financial details, and incubation experience documents.",
},

// EN - i18n.js mein en > translation ke andar add karein
pmVishwakarma: {
  title: "PM Vishwakarma – Enabling Artisans & Craftspeople to Scale-Up their Enterprises",
  description: "PM Vishwakarma is a comprehensive Government of India initiative designed to recognize and empower artisans and craftspeople. The scheme supports workers across 18 traditional trades by providing formal recognition, skill upgradation, modern toolkits, and low-interest credit to improve productivity and market access.",
  schemeTitle: "PM Vishwakarma Scheme: Key Features",
  row1_label: "Primary Goal",
  row1_detail: "To recognize artisans as \"Vishwakarma\" and provide tools & training to enhance their enterprises.",
  row2_label: "Eligible Trades",
  row2_detail: "Covers 18 trades including Carpenter, Boat Maker, Potter, Goldsmith, Mason, Barber, Washerman, Tailor, and others.",
  row3_label: "Skill Training",
  row3_detail: "Basic Training (5–7 days) & Advanced Training (15+ days) with ₹500 daily stipend.",
  row4_label: "Toolkit Support",
  row4_detail: "Incentive up to ₹15,000 through e-vouchers to acquire modern tools.",
  row5_label: "Credit Support",
  row5_detail: "Collateral-free Enterprise Development Loans up to ₹3 lakh (₹1L + ₹2L) at 5% fixed interest.",
  row6_label: "Digital & Market Linkages",
  row6_detail: "₹1 per digital transaction incentive (max 100/month) plus branding & e-commerce support.",
  row7_label: "Recognition",
  row7_detail: "Formal PM Vishwakarma Certificate and ID Card.",
  processTitle: "Application Process",
  processDesc: "Artisans can apply by visiting their nearest Common Service Centres (CSCs) or by submitting an online application through the official PM Vishwakarma portal. Required identification and trade verification documents must be submitted during the process.",
  imgAlt: "PM Vishwakarma Scheme",
},

sriFund: {
  title: "Self Reliant India (SRI) Fund",
  desc1: "This is a strategic initiative by the Government of India designed to provide growth capital to viable MSMEs with a positive growth trajectory.",
  desc2_before: "It operates through a unique",
  desc2_bold: "Mother Fund – Daughter Fund",
  desc2_after: "structure where the Mother Fund provides capital to Daughter Funds (SEBI registered AIFs). These funds then invest directly in MSMEs through equity, quasi-equity, or debt.",
  desc3: "The objective is to help MSMEs grow beyond the MSME category and become national or global companies that may eventually list on stock exchanges.",
  featuresTitle: "Key Features",
  th_feature: "Feature",
  th_details: "Details",
  row1_label: "Target Group",
  row1_detail: "Viable MSMEs with a positive growth trajectory",
  row2_label: "Financial Support",
  row2_detail: "Equity, quasi-equity, or debt instruments",
  row3_label: "Total Contribution",
  row3_detail: "Government contribution of ₹10,000 crore",
  row4_label: "Fund Tenure",
  row4_detail: "15 years",
  row5_label: "Implementing Agency",
  row5_detail: "NSIC Venture Capital Fund Limited (NVCFL)",
  row6_label: "Strategic Goal",
  row6_detail: "Support MSMEs to become global companies",
  nextStep_before: "Interested MSMEs can explore more details through the official NVCFL website or the Ministry of MSME portal. The fund supports businesses contributing to the vision of",
  nextStep_bold: "Aatmanirbhar Bharat",
  nextStep_after: ".",
  imgAlt: "SRI Fund",
},

cgtmse: {
  title: "Credit Guarantee Scheme for Micro & Small Enterprises (CGTMSE)",
  description: "This scheme supports first-generation entrepreneurs by providing credit guarantee for loans that do not require collateral or third-party guarantees. It helps new and existing Micro and Small Enterprises (MSEs) get easier access to credit, including businesses in trading, services, and education sectors.",
  featuresTitle: "Key Features of the Scheme",
  f1_label: "Loan Limit:",
  f1_detail: "Collateral-free loans up to ₹5 crore.",
  f2_label: "Guarantee Coverage:",
  f2_detail: "75% to 90% of the loan amount.",
  f3_label: "Eligibility:",
  f3_detail: "MSEs registered on the Udyam Portal.",
  f4_label: "Hybrid Security:",
  f4_detail: "Banks may take collateral for part of the loan while the remaining unsecured portion (up to ₹5 crore) is covered.",
  f5_label: "Application:",
  f5_detail: "Apply through Banks and NBFCs.",
  tableTitle: "Extent of Guarantee Coverage",
  th_category: "Category",
  th_col1: "Up to ₹5 Lakh",
  th_col2: "₹5 Lakh – ₹50 Lakh",
  th_col3: "₹50 Lakh – ₹5 Crore",
  row1_label: "Micro Enterprises",
  row2_label: "Women Entrepreneurs",
  row3_label: "All Other Categories",
  imgAlt: "CGTMSE",
},


pms: {
  title: "Procurement and Marketing Support (PMS) Scheme",
  desc1: "The Procurement and Marketing Support (PMS) Scheme is an initiative by the Ministry of MSME aimed at improving the market reach and competitiveness of Micro and Small Enterprises (MSEs).",
  desc2: "The scheme promotes awareness of modern marketing practices such as e-commerce, advanced packaging, and the Government e-Marketplace (GeM) portal while providing platforms like trade fairs and exhibitions for MSMEs to showcase their products.",
  tableTitle: "Procurement and Marketing Support (PMS) Scheme Overview",
  th_feature: "Feature",
  th_details: "Details",
  row1_label: "Primary Objective",
  row1_detail: "Promote new market access initiatives and educate MSMEs on packaging, import-export policies, and trade developments.",
  row2_label: "Capacity Building",
  row2_detail: "Supports adoption of modern packaging techniques, bar codes, and e-commerce platforms.",
  row3_label: "Market Access",
  row3_detail: "Facilitates participation in national and international trade fairs, exhibitions, and MSME expos.",
  row4_label: "Key Programs",
  row4_detail: "Includes Vendor Development Programs (VDP) and organizing domestic and international exhibitions.",
  row5_label: "Infrastructure",
  row5_detail: "Focuses on developing retail outlets to promote Geographical Indication (GI) products.",
  row6_label: "Eligibility",
  row6_detail: "Open to Manufacturing and Service Sector MSEs with a valid Udyam Registration (UR) Certificate.",
  imgAlt: "Procurement and Marketing Support Scheme",
  ctaTitle: "Apply for PMS Scheme Assistance",
  ctaDesc: "Our experts can help MSMEs leverage marketing support programs under the PMS Scheme.",
  ctaBtn: "Apply Now",
},



ramp: {
  title: "Raising and Accelerating MSME Performance (RAMP) Scheme",
  desc1: "The RAMP Scheme (Raising and Accelerating MSME Performance) is a World Bank-supported Central Sector Scheme designed to strengthen the MSME ecosystem in India.",
  desc2: "The scheme focuses on improving MSME access to finance, markets, and technology while strengthening coordination between the Central and State governments to scale the impact of existing MSME development programs.",
  tableTitle: "RAMP Scheme: Strategic Overview",
  th_feature: "Feature",
  th_details: "Details",
  row1_label: "Full Form",
  row1_detail: "Raising and Accelerating MSME Performance",
  row2_label: "Partnership",
  row2_detail: "Supported by the World Bank",
  row3_label: "Primary Goal",
  row3_detail: "Enhance outreach of existing Ministry of MSME schemes and improve institutional strength at Central and State levels.",
  row4_label: "Core Pillars",
  row4_detail: "Technology Upgradation, Innovation, Digitization, Market Access, and Credit.",
  row5_label: "Special Focus",
  row5_detail: "Greening initiatives and supporting women-owned micro and small enterprises.",
  row6_label: "Financial Health",
  row6_detail: "Strengthening receivable financing markets and reducing delayed payments to MSMEs.",
  row7_label: "Implementation",
  row7_detail: "Implemented through State agencies to ensure effective Centre–State collaboration.",
  row8_label: "Target Scale",
  row8_detail: "Aims to benefit more than 5.5 lakh MSMEs across India.",
  row9_label: "Timeline",
  row9_detail: "FY 2022–23 to FY 2026–27",
  eligibility_label: "Eligibility:",
  eligibility_detail: "The scheme is applicable to individual MSMEs through their respective State Governments or designated implementing agencies.",
  imgAlt: "RAMP Scheme",
},


kgvy: {
  title: "Khadi Gramodyog Vikas Yojana (KGVY)",
  desc1: "Khadi Gramodyog Vikas Yojana (KGVY) is an umbrella scheme designed to empower rural artisans by increasing their productivity and wages while securing their livelihoods.",
  desc2: "It focuses on improving infrastructure for Khadi production, reviving traditional skills, and modernizing marketing and sales outlets to boost employment and exports.",
  desc3_before: "The scheme is divided into two primary sub-components:",
  desc3_bold1: "Khadi Vikas Yojana,",
  desc3_middle: "which focuses on the Khadi sector's infrastructure and financial incentives, and",
  desc3_bold2: "Gramodyog Vikas Yojana,",
  desc3_after: "which supports the development of village industries through training and toolkit distribution.",
  tableTitle: "Khadi Gramodyog Vikas Yojana (KGVY) Overview",
  th_component: "Component",
  th_features: "Key Features & Assistance",
  row1_label: "Objectives",
  row1_detail: "Increase Khadi production, sales, and employment; modernize sales outlets; and revive traditional rural skills.",
  row2_label: "Khadi Vikas Yojana (Financial)",
  row2_detail: "MMDA: 20–35% subsidy on prime cost depending on fabric type. ISEC: Khadi institutions pay only 4% interest on loans.",
  row3_label: "Infrastructure Support",
  row3_detail: "Workshed Scheme: Up to ₹1.20 lakh for individuals or ₹80,000 per artisan for group worksheds. Up to ₹25 lakh for renovating sales outlets.",
  row4_label: "Gramodyog Vikas Yojana",
  row4_detail: "Training and toolkit/machinery distribution for trades like Agarbatti, Pottery, Beekeeping, Leather Footwear, and Wooden Toys.",
  row5_label: "Service & Agro Industry",
  row5_detail: "Includes training and toolkits for Electricians, Plumbers, and food processing such as Palm Gur, Spices, and Village Oil.",
  row6_label: "Eligibility",
  row6_detail: "Khadi artisans and KIs registered with KVIC/KVIB; aged 18–55; one person per family. Preference given to SC/ST, Women, and BPL categories.",
  apply_label: "How to Apply:",
  apply_desc: ": Interested artisans and institutions can contact us at CorporateMitraPortal.com",
  imgAlt: "Khadi Gramodyog Vikas Yojana",
},


msmeChampions: {
  title: "MSME Champions Scheme",
  desc1: "The MSME Champions Scheme is a holistic initiative designed to modernize MSME processes, reduce wastage, and enhance their business competitiveness in both national and global markets.",
  desc2_before: "The scheme integrates support through three major pillars:",
  desc2_bold1: "MSME Sustainable (ZED)",
  desc2_bold2: "MSME Competitive (Lean)",
  desc2_and: "and",
  desc2_bold3: "MSME Innovative",
  tableTitle: "MSME Champions Scheme: Pillars and Benefits",
  th_pillar: "Pillar",
  th_focus: "Focus & Objectives",
  th_support: "Key Financial Support & Incentives",
  row1_label: "MSME Sustainable (ZED)",
  row1_focus: "Promotes Zero Defect Zero Effect manufacturing to improve quality and productivity while minimizing environmental impact.",
  row1_support: "80%–60%–50% subsidy on certification for Micro, Small, and Medium enterprises; 100% subsidy for women-owned MSMEs.",
  row2_label: "MSME Competitive (Lean)",
  row2_focus: "Reduces rejection rates and waste while optimizing space, energy, and natural resources.",
  row2_support: "Government contributes up to ₹1,08,000 (Intermediate) or ₹2,16,000 (Advanced) towards implementation costs. Basic level training is free.",
  row3_label: "MSME Innovative",
  row3_focus: "Supports the value chain from incubation and design to Intellectual Property Rights (IPR) protection.",
  row3_support: "Up to ₹15 lakh per idea for incubation. Government contributes 60–75% (up to ₹40 lakh) for design projects and reimburses patents and trademarks.",
  eligibility_label: "Eligibility:",
  eligibility_detail: "All MSMEs with a valid Udyam Registration are eligible to apply.",
  portals_label: "Application Portals:",
  imgAlt: "MSME Champions Scheme",
},



footer: {
  desc: "We provide expert assistance in Company Registration, Accounting & Cost Management, GST, MSME, and other business compliance services across India.",
  quickLinks: "Quick Links",
  home: "Home",
  about: "About Us",
  services: "Services",
  contact: "Contact",
  ourServices: "Our Services",
  s1: "Company Registration",
  s2: "GST Assistance",
  s3: "MSME Registration",
  s4: "Accounting & Cost Management",
  s5: "PAN Application",
  followUs: "Follow Us",
  rights: "All Rights Reserved.",
},


msmeSubsidy: {
  title: "MSME Schemes / Subsidy",
  card1: "Entrepreneurial Funding Program Overview",
  card2: "Micro & Small Enterprises Cluster Development Programme (MSE-CDP)",
  card3: "A Scheme for Promotion of Innovation, Rural Industry and Entrepreneurship (ASPIRE)",
  card4: "PM Vishwakarma – Enabling Artisans & Craftspeople to scale-up their Enterprises",
  card5: "Self Reliant India (SRI) Fund",
  card6: "Credit Guarantee Scheme for Micro & Small Enterprises (CGTMSE)",
  card7: "Procurement and Marketing Support (PMS) Scheme",
  card8: "International Cooperation (IC) Scheme",
  card9: "Khadi Gramodyog Vikas Yojana (KGVY)",
  card10: "MSME Champions Scheme",
  card11: "Raising and Accelerating MSME Performance (RAMP) Scheme",
},
    }
  },

  hi: {
    translation: {
      topbar: {
        text: " कॉल करें"
      },

      navbar: {
        home: "होम",
        company: "कंपनी रजिस्ट्रेशन",
        accounting: "अकाउंटिंग और कॉस्ट मैनेजमेंट",
        projects: "हमारे प्रोजेक्ट",
        menu: "मेनू"
      },

      sidebar: {
        title: "कंपनी सर्विसेज इंडिया",
        services: "हमारी सेवाएँ",
        help: "सेवा चुनने में मदद चाहिए?",
        expert: "एक्सपर्ट से बात करें",
        newCompany: "नई कंपनी रजिस्ट्रेशन",
        companyName: "कंपनी नाम उपलब्धता",
        companyCompliance: "कंपनी अनुपालन",
        annualFilings: "कंपनी और LLP के लिए वार्षिक फाइलिंग",
        accounting: "अकाउंटिंग और कॉस्ट मैनेजमेंट",
        msmeFinance: "MSME फाइनेंस",
        msmeRegistration: "MSME रजिस्ट्रेशन",
        msmeSubsidy: "MSME योजनाएँ / सब्सिडी",
        gstAssistance: "GST रजिस्ट्रेशन और सहायता",
        gstCompliance: "GST अनुपालन",
        gstReconciliation: "GST मिलान",
        incomeTax: "इनकम टैक्स अनुपालन",
        panApplication: "पैन आवेदन",
        gemPortal: "GeM पोर्टल सहायता"
      },

  home: {
hero_title: "आत्मविश्वास के साथ अपना व्यवसाय शुरू करें और बढ़ाएं",
hero_subtitle:
"हम आपके व्यवसाय को सफल बनाने के लिए कंपनी रजिस्ट्रेशन, GST, अनुपालन और वित्तीय प्रबंधन सेवाएं प्रदान करते हैं।",
core_services: "हमारी मुख्य सेवाएँ",
learn_more: "और जानें",

company_registration: "नई कंपनी रजिस्ट्रेशन",
company_registration_desc:
"कानूनी अनुपालन के साथ आपकी नई कंपनी के पंजीकरण में पूरी सहायता।",

company_name: "कंपनी नाम उपलब्धता",
company_name_desc:
"अपने मनचाहे कंपनी नाम की उपलब्धता जांचें और जल्दी आरक्षित करें।",

annual_filings: "वार्षिक फाइलिंग और अनुपालन",
annual_filings_desc:
"समय पर वार्षिक फाइलिंग और नियामकीय अनुपालन सुनिश्चित करें।",

gst_assistance: "GST रजिस्ट्रेशन सहायता",
gst_assistance_desc:
"GST रजिस्ट्रेशन और सेटअप के लिए पेशेवर सहायता।",

gst_compliances: "GST अनुपालन सेवाएँ",
gst_compliances_desc:
"सटीक GST रिटर्न फाइलिंग और अनुपालन प्रबंधन।",

gst_reconciliation: "GST मिलान",
gst_reconciliation_desc:
"मिसमैच से बचने के लिए विस्तृत GST मिलान।",

msme_registration: "MSME रजिस्ट्रेशन",
msme_registration_desc:
"आसान MSME पंजीकरण और प्रमाणन।",

msme_finance: "MSME वित्त सहायता",
msme_finance_desc:
"MSME विकास के लिए वित्तीय सहायता समर्थन।",

gem_onboarding: "GeM पोर्टल ऑनबोर्डिंग",
gem_onboarding_desc:
"सरकारी ई-मार्केटप्लेस के लिए पूर्ण ऑनबोर्डिंग सहायता।",

company_compliance: "कंपनी अनुपालन",
company_compliance_desc:
"ROC फाइलिंग और वैधानिक आवश्यकताओं सहित पूर्ण अनुपालन प्रबंधन।",

accounting_management: "अकाउंटिंग और कॉस्ट मैनेजमेंट",
accounting_management_desc:
"पेशेवर अकाउंटिंग और लागत प्रबंधन सेवाएं।",

income_tax: "इनकम टैक्स पोर्टल सहायता",
income_tax_desc:
"इनकम टैक्स पोर्टल पर रजिस्ट्रेशन, फाइलिंग और अनुपालन में पेशेवर सहायता।",

pan_application: "PAN आवेदन",
pan_application_desc:
"व्यक्तिगत या व्यवसाय के लिए नए PAN कार्ड आवेदन और सुधार में सहायता।"
},


      company: {
        title: "कंपनी रजिस्ट्रेशन",
        subtitle:
          "पूरी कानूनी प्रक्रिया और विशेषज्ञ मार्गदर्शन के साथ अपनी प्राइवेट लिमिटेड कंपनी शुरू करें।",
        benefits_title: "प्राइवेट लिमिटेड कंपनी के लाभ",
        limited_liability: "सीमित देयता सुरक्षा",
        legal_entity: "अलग कानूनी इकाई",
        fund_raising: "आसानी से फंड जुटाना",
        credibility: "बेहतर विश्वसनीयता",
        perpetual: "स्थायी उत्तराधिकार",
        tax_benefits: "कर लाभ",
        documents: "आवश्यक दस्तावेज",
        pan: "डायरेक्टर का पैन कार्ड",
        aadhaar: "डायरेक्टर का आधार कार्ड",
        photo: "पासपोर्ट साइज फोटो",
        contact: "मोबाइल नंबर और ईमेल",
        address: "रजिस्टर्ड ऑफिस का एड्रेस प्रूफ",
        bill: "बिजली का बिल",
        rent: "रेंट एग्रीमेंट",
        noc: "मालिक से NOC",
        process: "रजिस्ट्रेशन प्रक्रिया",
        step: "स्टेप",
        name_approval: "नाम की मंजूरी",
        dsc_din: "DSC और DIN",
        document_filing: "दस्तावेज़ फाइलिंग",
        certificate: "सर्टिफिकेट जारी",
        pricing: "सस्ती कीमत",
        starting: "₹4,999 से शुरू",
        price_desc: "सरकारी फीस सहित पूरी कंपनी रजिस्ट्रेशन सेवा।",
        apply: "अभी आवेदन करें",
        consult: "फ्री कंसल्टेशन प्राप्त करें",
        name: "आपका नाम",
        email: "आपका ईमेल",
        phone: "आपका फोन नंबर",
        submit: "सबमिट करें",
        form_success: "फॉर्म सफलतापूर्वक जमा हो गया!"
      },

      accounting: {
        title: "अकाउंटिंग और कॉस्ट मैनेजमेंट सेवाएँ",
        subtitle:
          "सटीक वित्तीय रिकॉर्ड और लागत विश्लेषण से अपने व्यवसाय को आत्मविश्वास के साथ बढ़ाएं।",
        services_title: "हमारी अकाउंटिंग सेवाएँ",
        cost_title: "कॉस्ट मैनेजमेंट और विश्लेषण",
        why: "हमें क्यों चुनें",

        bookkeeping: "बुककीपिंग और लेजर मेंटेनेंस",
        financial_statement: "वित्तीय स्टेटमेंट तैयार करना",
        audit_support: "ऑडिट सहायता",
        management_accounting: "मैनेजमेंट अकाउंटिंग",
        advisory: "एडवाइजरी सेवाएँ",
        budgeting: "बजट और वित्तीय योजना",

        cost_sheet: "कॉस्ट शीट तैयारी",
        budget_planning: "बजट और योजना",
        break_even: "ब्रेक-ईवन विश्लेषण",
        inventory: "इन्वेंटरी लागत नियंत्रण",
        profitability: "लाभप्रदता विश्लेषण",
        mis_reporting: "MIS रिपोर्टिंग",

        accurate_records: "सटीक वित्तीय रिकॉर्ड",
        better_decision: "बेहतर निर्णय लेना",
        tax_compliance: "पूर्ण टैक्स अनुपालन",
        risk_reduction: "वित्तीय जोखिम में कमी",

        consult: "फ्री कंसल्टेशन प्राप्त करें",
        success: "रिक्वेस्ट भेज दी गई है! हमारी टीम जल्द संपर्क करेगी।",

        name: "आपका नाम",
        phone: "आपका फोन नंबर",
        email: "आपका ईमेल",

        request: "अभी रिक्वेस्ट करें",
        whatsapp: "व्हाट्सएप पर चैट करें"
      },

      projects: {
        title: "हमारे प्रोजेक्ट",
        subtitle:
          "व्यवसाय की वृद्धि और अनुपालन प्रबंधन के लिए बनाए गए हमारे सफल प्रोजेक्ट और डिजिटल समाधान देखें।",
        view: "विवरण देखें",

        project1_title: "कंपनी रजिस्ट्रेशन पोर्टल",
        project1_desc: "कंपनी रजिस्ट्रेशन सेवाओं के लिए ऑनलाइन प्लेटफॉर्म।",

        project2_title: "GST फाइलिंग सिस्टम",
        project2_desc: "स्वचालित GST रिटर्न फाइलिंग और अनुपालन ट्रैकिंग सिस्टम।",

        project3_title: "MSME रजिस्ट्रेशन प्लेटफॉर्म",
        project3_desc: "MSME पंजीकरण और प्रमाणन के लिए डिजिटल समाधान।",

        project4_title: "अकाउंटिंग डैशबोर्ड",
        project4_desc: "वित्तीय ट्रैकिंग और रिपोर्टिंग के लिए उन्नत डैशबोर्ड।",

        project5_title: "टैक्स कंसल्टेंसी वेबसाइट",
        project5_desc: "टैक्स प्लानिंग और सलाहकार सेवाओं के लिए कॉर्पोरेट वेबसाइट।",

        project6_title: "बिज़नेस कम्प्लायंस ऐप",
        project6_desc: "व्यवसायिक कानूनी अनुपालन ट्रैक करने के लिए मोबाइल ऐप।"
      },

      newCompany: {
        title: "नई कंपनी रजिस्ट्रेशन",
        subtitle:
          "कानूनी रूप से मान्यता प्राप्त पहचान के साथ अपना व्यवसाय शुरू करें। विशेषज्ञ सहायता के साथ अपनी कंपनी जल्दी रजिस्टर करें और पूरे भारत में MCA नियमों के अनुसार पूर्ण अनुपालन सुनिश्चित करें।",

        types: "कंपनी रजिस्ट्रेशन के प्रकार",

        private_title: "प्राइवेट लिमिटेड कंपनी",
        private_desc: "स्टार्टअप के लिए सबसे लोकप्रिय संरचना",
        private_point1: "न्यूनतम 2 डायरेक्टर आवश्यक",
        private_point2: "शेयरधारकों को सीमित देयता",
        private_point3: "निवेशकों से फंड जुटाना आसान",
        private_point4: "मालिकों से अलग कानूनी इकाई",

        opc_title: "वन पर्सन कंपनी",
        opc_desc: "एकल उद्यमियों के लिए बनाई गई",
        opc_point1: "केवल 1 डायरेक्टर और 1 शेयरधारक की जरूरत",
        opc_point2: "सीमित देयता सुरक्षा",
        opc_point3: "एक ही व्यक्ति का पूरा नियंत्रण",
        opc_point4: "बाद में प्राइवेट लिमिटेड में आसान रूपांतरण",

        llp_title: "लिमिटेड लाइबिलिटी पार्टनरशिप (LLP)",
        llp_desc: "पार्टनरशिप और कंपनी संरचना का मिश्रण",
        llp_point1: "न्यूनतम 2 नामित पार्टनर आवश्यक",
        llp_point2: "प्राइवेट लिमिटेड से कम अनुपालन बोझ",
        llp_point3: "पार्टनरों को सीमित देयता",
        llp_point4: "लाभ वितरण में लचीलापन",

        public_title: "पब्लिक लिमिटेड कंपनी",
        public_desc: "बड़े पैमाने के व्यवसायों के लिए",
        public_point1: "न्यूनतम 3 डायरेक्टर आवश्यक",
        public_point2: "जनता से फंड जुटाया जा सकता है",
        public_point3: "शेयर स्टॉक एक्सचेंज पर सूचीबद्ध हो सकते हैं",
        public_point4: "उच्च नियामकीय अनुपालन आवश्यक",

        benefits_title: "रजिस्ट्रेशन के लाभ",

        benefit1: "अलग कानूनी इकाई",
        benefit2: "सीमित देयता सुरक्षा",
        benefit3: "फंडिंग तक आसान पहुंच",
        benefit4: "व्यवसाय की विश्वसनीयता",
        benefit5: "स्थायी उत्तराधिकार",
        benefit6: "कर लाभ",

        documents_title: "आवश्यक दस्तावेज",

        doc1: "डायरेक्टर का पैन कार्ड",
        doc2: "आधार कार्ड / पहचान प्रमाण",
        doc3: "निवास प्रमाण",
        doc4: "पासपोर्ट साइज फोटो",
        doc5: "रजिस्टर्ड ऑफिस एड्रेस प्रूफ",
        doc6: "डिजिटल सिग्नेचर सर्टिफिकेट (DSC)",

        cta_title: "क्या आप अपनी कंपनी रजिस्टर करने के लिए तैयार हैं?",
        cta_btn: "अभी रजिस्ट्रेशन शुरू करें",

        popup_title: "फ्री कंसल्टेशन",
        popup_desc: "हमारे एक्सपर्ट आपको स्टेप-बाय-स्टेप मार्गदर्शन देंगे।",

        name: "पूरा नाम",
        mobile: "मोबाइल नंबर",
        email: "ईमेल पता",

        submit: "फ्री कंसल्टेशन प्राप्त करें",
        success: "हम जल्द ही आपको कॉल करेंगे!"
      },

      companyName: {
        title: "कंपनी नाम उपलब्धता",
        subtitle:
          "कंपनी रजिस्ट्रेशन से पहले यह जांचना जरूरी है कि आपका चुना हुआ नाम MCA के अंतर्गत उपलब्ध है या नहीं। एक यूनिक और नियमों के अनुसार नाम होने से जल्दी मंजूरी मिलती है और कानूनी आपत्तियों से बचाव होता है।",

        service_title: "हमारी सेवा में शामिल है",

        s1: "MCA पोर्टल पर नाम उपलब्धता जांच",
        s2: "नाम गाइडलाइन सत्यापन",
        s3: "ट्रेडमार्क टकराव जांच",
        s4: "2 नाम सुझावों की समीक्षा",
        s5: "एक्सपर्ट कंसल्टेशन",

        check_title: "अपना कंपनी नाम अभी जांचें",
        check_desc:
          "तुरंत जांचें कि आपका प्रस्तावित नाम उपलब्ध और नियमों के अनुसार है या नहीं।",
        search: "संपर्क करें",

        how: "यह कैसे काम करता है",

        step1: "नाम सबमिट करें",
        step1_desc: "अपना इच्छित नाम और बिजनेस गतिविधि बताएं।",

        step2: "सत्यापन",
        step2_desc: "हम MCA नियम और ट्रेडमार्क के अनुसार जांच करते हैं।",

        step3: "पुष्टि",
        step3_desc: "आपको पुष्टि या वैकल्पिक सुझाव दिए जाएंगे।",

        why: "हमारी सेवा क्यों चुनें?",
        why_desc:
          "सही कंपनी नाम चुनना ब्रांड पहचान और कानूनी स्वीकृति के लिए महत्वपूर्ण है। हमारे विशेषज्ञ MCA नियमों का पालन सुनिश्चित करते हैं और ट्रेडमार्क टकराव से बचाते हैं।",

        note:
          "*कंपनी नाम की अंतिम मंजूरी केवल MCA प्राधिकरण द्वारा दी जाती है।"
      },

      companyCompliance: {
        title: "कंपनी कंप्लायंस सेवाएँ",

        subtitle:
          "कंपनी कंप्लायंस वह प्रक्रिया है जिसके द्वारा कोई कंपनी अपने संचालन से संबंधित सभी कानूनों, नियमों, मानकों और आंतरिक नीतियों का पालन करती है। यह सुनिश्चित करता है कि व्यवसाय कानूनी, नैतिक और पारदर्शी तरीके से संचालित हो और जुर्माने, मुकदमों तथा प्रतिष्ठा को नुकसान जैसे जोखिम कम हों।",

        keyPoints: "मुख्य बिंदु",

        k1: "सरकारी कानूनों और उद्योग नियमों का पालन सुनिश्चित करता है।",
        k2: "कंपनी को कानूनी दंड और वित्तीय नुकसान से बचाता है।",
        k3: "नैतिक व्यापार प्रथाओं और पारदर्शिता को बढ़ावा देता है।",
        k4: "नियमित निगरानी, रिपोर्टिंग और दस्तावेज़ीकरण की आवश्यकता होती है।",

        services: "हमारी कंप्लायंस सेवाएँ",

        s1: "वार्षिक ROC फाइलिंग",
        s2: "डायरेक्टर KYC (DIR-3 KYC)",
        s3: "बोर्ड रेजोल्यूशन और मिनट्स",
        s4: "शेयर ट्रांसफर और अलॉटमेंट",
        s5: "कंपनी कंप्लायंस मैनेजमेंट",

        tableTitle: "कंपनी कंप्लायंस के मुख्य क्षेत्र",

        area: "कंप्लायंस क्षेत्र",
        desc: "विवरण",
        example: "उदाहरण",

        legal: "कानूनी कंप्लायंस",
        legalDesc: "सभी लागू कानूनों और नियमों का पालन करना।",
        legalEx: "कंपनी अधिनियम की आवश्यकताएँ",

        financial: "वित्तीय कंप्लायंस",
        financialDesc: "सटीक वित्तीय रिकॉर्ड और रिपोर्टिंग बनाए रखना।",
        financialEx: "ऑडिट, टैक्स फाइलिंग",

        regulatory: "नियामकीय कंप्लायंस",
        regulatoryDesc: "उद्योग से संबंधित नियमों का पालन करना।",
        regulatoryEx: "लिस्टेड कंपनियों के लिए SEBI नियम",

        governance: "कॉर्पोरेट गवर्नेंस",
        governanceDesc:
          "उचित प्रबंधन, जवाबदेही और बोर्ड निगरानी सुनिश्चित करना।",
        governanceEx: "बोर्ड मीटिंग, शेयरधारकों के अधिकार",

        labor: "लेबर कंप्लायंस",
        laborDesc: "रोजगार और कार्यस्थल से संबंधित कानूनों का पालन करना।",
        laborEx: "न्यूनतम वेतन, कर्मचारी लाभ",

        environment: "पर्यावरण कंप्लायंस",
        environmentDesc: "पर्यावरण संरक्षण कानूनों का पालन करना।",
        environmentEx: "प्रदूषण नियंत्रण नियम",

        data: "डेटा प्रोटेक्शन कंप्लायंस",
        dataDesc: "ग्राहक और कंपनी डेटा की सुरक्षा करना।",
        dataEx: "डेटा गोपनीयता नीतियाँ"
      },

      annualFilings: {
  title: "कंपनियों और LLP के लिए वार्षिक फाइलिंग",

  subtitle:
    "MCA नियमों के अनुसार अपनी कंपनी को अनुपालन में रखें। हम आपकी वार्षिक रिटर्न, वित्तीय स्टेटमेंट और ROC फाइलिंग को सही और समय पर पूरा करते हैं।",

  aboutTitle: "वार्षिक फाइलिंग क्या है?",

  aboutDesc:
    "भारत में प्रत्येक पंजीकृत कंपनी और LLP को कंपनी अधिनियम 2013 के तहत रजिस्ट्रार ऑफ कंपनीज़ (ROC) के साथ वार्षिक रिटर्न और वित्तीय स्टेटमेंट फाइल करना अनिवार्य होता है।",

  servicesTitle: "हमारी वार्षिक फाइलिंग सेवाएँ",

  aocTitle: "AOC-4 फाइलिंग",
  aocDesc:
    "बैलेंस शीट और प्रॉफिट & लॉस अकाउंट सहित वित्तीय स्टेटमेंट की फाइलिंग।",

  mgtTitle: "MGT-7 फाइलिंग",
  mgtDesc:
    "कंपनी विवरण और शेयरहोल्डिंग पैटर्न सहित वार्षिक रिटर्न की फाइलिंग।",

  kycTitle: "DIR-3 KYC",
  kycDesc:
    "डायरेक्टर के लिए वार्षिक KYC अनुपालन ताकि पेनल्टी से बचा जा सके।",

  benefitsTitle: "समय पर वार्षिक फाइलिंग क्यों महत्वपूर्ण है?",

  b1Title: "पेनल्टी से बचें",
  b1Desc:
    "देर से फाइलिंग करने पर सरकार द्वारा प्रतिदिन भारी जुर्माना लगाया जाता है।",

  b2Title: "अनुपालन बनाए रखें",
  b2Desc:
    "अपनी कंपनी को MCA नियमों के अनुसार कानूनी रूप से सक्रिय रखें।",

  b3Title: "विश्वसनीयता बढ़ाएँ",
  b3Desc:
    "अपडेटेड रिकॉर्ड बैंक और निवेशकों के साथ विश्वास बढ़ाते हैं।",

  processTitle: "हमारी फाइलिंग प्रक्रिया",

  p1Title: "दस्तावेज़ संग्रह",
  p1Desc:
    "वित्तीय स्टेटमेंट और आवश्यक कंपनी डेटा एकत्र करना।",

  p2Title: "तैयारी",
  p2Desc:
    "वित्तीय स्टेटमेंट और ROC फॉर्म तैयार करना।",

  p3Title: "ROC में फाइलिंग",
  p3Desc:
    "सरकारी फीस के साथ ऑनलाइन फॉर्म जमा करना।",

  p4Title: "पुष्टि",
  p4Desc:
    "फाइलिंग की रसीद और अनुपालन प्रमाण प्रदान करना।",

  ctaTitle: "वार्षिक फाइलिंग में मदद चाहिए?",

  ctaDesc:
    "हमारी विशेषज्ञ टीम के साथ 100% अनुपालन सुनिश्चित करें और पेनल्टी से बचें।",

  ctaBtn: "आज ही शुरू करें"
},


msmeFinance: {
  title: "MSME फाइनेंस और लोन सहायता",

  subtitle:
    "MSME फाइनेंस सहायता छोटे और मध्यम व्यवसायों को सरकारी योजनाओं, बैंक लोन और NBFC फाइनेंसिंग के माध्यम से फंड प्राप्त करने में मदद करती है।",

  financeTypes: "MSME फाइनेंस के प्रकार",

  workingLoan: "वर्किंग कैपिटल लोन",
  workingLoanDesc:
    "छोटे समय के बिजनेस फंडिंग के साथ दैनिक संचालन को सुचारु बनाए रखें।",

  termLoan: "टर्म लोन",
  termLoanDesc:
    "व्यवसाय विस्तार, इंफ्रास्ट्रक्चर और विकास के लिए दीर्घकालिक फंडिंग।",

  machineryLoan: "मशीनरी / उपकरण लोन",
  machineryLoanDesc:
    "उत्पादन बढ़ाने के लिए नई मशीनरी और उपकरण खरीदने हेतु फाइनेंस।",

  govtLoan: "सरकारी योजना लोन",
  govtLoanDesc:
    "CGTMSE, मुद्रा और अन्य MSME योजनाओं के तहत सहायता।",

  benefitsTitle: "MSME फाइनेंस के लाभ",

  b1: "सरकारी योजनाओं के तहत कम ब्याज दर",
  b2: "बिना गारंटी के लोन विकल्प उपलब्ध",
  b3: "लचीली पुनर्भुगतान अवधि",
  b4: "तेज़ प्रोसेसिंग और स्वीकृति सहायता",
  b5: "पेशेवर दस्तावेज़ सहायता",

  docsTitle: "आवश्यक दस्तावेज",

  d1: "बिजनेस PAN और GST सर्टिफिकेट",
  d2: "बैंक स्टेटमेंट (पिछले 6–12 महीने)",
  d3: "ITR / वित्तीय स्टेटमेंट",
  d4: "बिजनेस रजिस्ट्रेशन प्रूफ",
  d5: "प्रोप्राइटर / डायरेक्टर का KYC",

  applyTitle: "MSME फाइनेंस के लिए आवेदन करें",

  applyDesc:
    "विशेषज्ञ मार्गदर्शन के साथ तेज़ और भरोसेमंद बिजनेस फंडिंग प्राप्त करें।",

  name: "पूरा नाम",
  mobile: "मोबाइल नंबर",
  email: "ईमेल पता",

  applyBtn: "अभी आवेदन करें"
},


// --- HI ---
msmeRegistration: {
title: "MSME / उद्यम रजिस्ट्रेशन",

intro:
"MSME (सूक्ष्म, लघु और मध्यम उद्यम) रजिस्ट्रेशन, जिसे उद्यम रजिस्ट्रेशन भी कहा जाता है, भारत में छोटे और मध्यम व्यवसायों को दी जाने वाली सरकारी मान्यता है। MSME के तहत रजिस्ट्रेशन करने से आपका व्यवसाय विभिन्न सरकारी लाभ, वित्तीय सहायता, सब्सिडी और प्राथमिकता क्षेत्र के लाभों के लिए पात्र बन जाता है।",

def_title: "MSME वर्गीकरण अपडेट",

def_desc:
"जब सरकार ने 2006 में MSME रजिस्ट्रेशन शुरू किया था, तब वर्गीकरण संयंत्र, मशीनरी या उपकरण में निवेश के आधार पर किया जाता था। बाद में इस वर्गीकरण को वार्षिक निवेश और टर्नओवर के आधार पर अपडेट किया गया। साथ ही MSME की परिभाषा के तहत विनिर्माण और सेवा क्षेत्रों के बीच का अंतर भी हटा दिया गया। बजट 2025 में MSME वर्गीकरण की सीमा में संशोधन किया गया, जो 1 अप्रैल 2025 से लागू हुआ। नीचे पहले और संशोधित सीमा की तुलना दी गई है।",

col_criteria: "मापदंड",
col_micro: "सूक्ष्म",
col_small: "लघु",
col_medium: "मध्यम",

prev_invest: "पिछली निवेश सीमा",
prev_invest_micro: "रु. 1 करोड़ तक",
prev_invest_small: "रु. 10 करोड़ तक",
prev_invest_medium: "रु. 50 करोड़ तक",

rev_invest: "संशोधित निवेश सीमा",
rev_invest_micro: "रु. 2.5 करोड़ तक",
rev_invest_small: "रु. 25 करोड़ तक",
rev_invest_medium: "रु. 125 करोड़ तक",

prev_turnover: "पिछली टर्नओवर सीमा",
prev_turnover_micro: "रु. 5 करोड़ तक",
prev_turnover_small: "रु. 50 करोड़ तक",
prev_turnover_medium: "रु. 250 करोड़ तक",

rev_turnover: "संशोधित टर्नओवर सीमा",
rev_turnover_micro: "रु. 10 करोड़ तक",
rev_turnover_small: "रु. 100 करोड़ तक",
rev_turnover_medium: "रु. 500 करोड़ तक",

benefits_title: "MSME रजिस्ट्रेशन के लाभ",

b1_title: "आसान बैंक लोन",
b1_desc: "MSME योजनाओं के तहत कम ब्याज दर पर बिना गारंटी के लोन प्राप्त करें।",

b2_title: "सरकारी सब्सिडी",
b2_desc: "पेटेंट रजिस्ट्रेशन और औद्योगिक प्रोत्साहन पर सब्सिडी प्राप्त करें।",

b3_title: "टैक्स और कंप्लायंस लाभ",
b3_desc: "टैक्स छूट और भुगतान में देरी के विरुद्ध सुरक्षा का लाभ प्राप्त करें।",

b4_title: "ISO प्रतिपूर्ति",
b4_desc: "ISO प्रमाणन पर होने वाले खर्च की प्रतिपूर्ति प्राप्त करें।",

docs_title: "आवश्यक दस्तावेज",

doc1: "प्रोपराइटर / पार्टनर / डायरेक्टर का आधार कार्ड",
doc2: "व्यवसाय या आवेदक का पैन कार्ड",
doc3: "व्यवसाय का एड्रेस प्रूफ",
doc4: "बैंक खाता विवरण",
doc5: "व्यवसाय की गतिविधि का विवरण",

process_title: "MSME रजिस्ट्रेशन प्रक्रिया",

step1: "बुनियादी व्यवसाय और आधार विवरण प्रदान करें।",
step2: "उद्यम का सत्यापन और वर्गीकरण किया जाएगा।",
step3: "उद्यम रजिस्ट्रेशन आवेदन दाखिल किया जाएगा।",
step4: "रजिस्ट्रेशन प्रमाणपत्र जारी किया जाएगा।",

sidebar_title: "MSME रजिस्ट्रेशन के लिए आवेदन करें",
sidebar_desc: "अपना MSME सर्टिफिकेट जल्दी और आसानी से प्राप्त करें।",

name: "पूरा नाम",
mobile: "मोबाइल नंबर",
email: "ईमेल पता",
submit: "शुरू करें"
},



// ---------- HI ----------
gstAssistance: {
  title: "GST रजिस्ट्रेशन सहायता",
  intro:
    "वस्तु और सेवा कर (GST) भारत में वस्तुओं और सेवाओं की आपूर्ति पर लगाया जाने वाला एक व्यापक अप्रत्यक्ष कर है। इसने VAT, सेवा कर और उत्पाद शुल्क जैसे कई करों की जगह ली और कराधान प्रणाली को सरल बनाया।",

  who_title: "GST रजिस्ट्रेशन किसे चाहिए?",
  w1: "निर्धारित सीमा से अधिक टर्नओवर वाले व्यवसाय",
  w2: "ई-कॉमर्स विक्रेता",
  w3: "अंतरराज्यीय आपूर्तिकर्ता",
  w4: "ऑनलाइन सेवा प्रदाता",
  w5: "आकस्मिक कर योग्य व्यक्ति",

  services_title: "हमारी GST सेवाएँ",
  s1_title: "GST रजिस्ट्रेशन",
  s1_desc: "नई GST रजिस्ट्रेशन में तेज़ प्रोसेसिंग के साथ पूरी सहायता।",
  s2_title: "GST रिटर्न फाइलिंग",
  s2_desc: "मासिक, त्रैमासिक और वार्षिक GST रिटर्न फाइलिंग सहायता।",
  s3_title: "GST संशोधन",
  s3_desc: "व्यवसाय विवरण, पता परिवर्तन या अन्य संशोधन अपडेट करें।",
  s4_title: "GST रद्दीकरण",
  s4_desc: "स्वैच्छिक या अनिवार्य GST रद्दीकरण में सहायता।",

  docs_title: "आवश्यक दस्तावेज",
  doc1: "व्यवसाय / प्रोपराइटर का पैन कार्ड",
  doc2: "आधार कार्ड",
  doc3: "व्यवसाय का एड्रेस प्रूफ",
  doc4: "बैंक खाता विवरण",
  doc5: "मालिक / डायरेक्टर की फोटो",

  why_title: "हमारी GST सेवाएँ क्यों चुनें?",
  why1: "विशेषज्ञ GST सलाहकार",
  why2: "समय पर फाइलिंग और अनुपालन",
  why3: "त्रुटि-मुक्त दस्तावेज़ीकरण",
  why4: "पूर्ण सहायता",

  popup_title: "GST विशेषज्ञ सहायता",
  popup_btn: "GST सहायता प्राप्त करें",

  sidebar_title: "GST सहायता प्राप्त करें",
  sidebar_desc:
    "हमारे GST विशेषज्ञों से बात करें और रजिस्ट्रेशन, रिटर्न और अनुपालन के लिए पूरी सहायता लें।",
  sidebar_btn: "एक्सपर्ट से बात करें",

  name: "पूरा नाम",
  mobile: "मोबाइल नंबर",
  email: "ईमेल पता",
  business: "व्यवसाय का नाम"
},


// ---------- HI ----------
gstCompliances: {
  title: "GST अनुपालन सेवाएँ",
  intro: "GST नियमों का पूरी तरह पालन करें। हम आपके रिटर्न, फाइलिंग, रिकॉन्सिलिएशन और नोटिस संभालते हैं ताकि आप अपने व्यवसाय को बढ़ाने पर ध्यान दे सकें।",
  consult_btn: "फ्री कंसल्टेशन प्राप्त करें",
  services_title: "GST अनुपालन में हम क्या कवर करते हैं",
  s1: "मासिक और त्रैमासिक GST रिटर्न (GSTR-1, GSTR-3B)",
  s1_desc: "हम हर महीने और तिमाही आपका GSTR-1 और GSTR-3B सटीकता से दाखिल करते हैं — कोई त्रुटि नहीं, समय पर जमा।",
  s2: "वार्षिक रिटर्न फाइलिंग (GSTR-9 और 9C)",
  s2_desc: "हम आपकी वार्षिक GST रिटर्न तैयार करते और दाखिल करते हैं, सभी लेनदेन का मिलान कर पूर्ण वर्ष-अंत अनुपालन सुनिश्चित करते हैं।",
  s3: "GST रिकॉन्सिलिएशन और ITC मिलान",
  s3_desc: "हम मिसमैच रोकने और हर ITC दावे को सत्यापित करने के लिए आपके खरीद डेटा को GSTR-2A/2B से मिलाते हैं।",
  s4: "GST नोटिस हैंडलिंग और जवाब तैयार करना",
  s4_desc: "हम GST नोटिस की समीक्षा करते हैं, विस्तृत जवाब तैयार करते हैं और GST विभाग के समक्ष आपका पक्ष रखते हैं।",
  s5: "लेट फीस और पेनल्टी प्रबंधन",
  s5_desc: "हम देय तारीखों पर नज़र रखते हैं, लेट फीस प्रबंधित करते हैं और समय पर फाइलिंग से जुर्माना कम करने में मदद करते हैं।",
  s6: "GST रजिस्ट्रेशन संशोधन",
  s6_desc: "हम जरूरत के अनुसार पते में बदलाव, व्यवसाय संशोधन और अन्य अपडेट के साथ आपकी GST प्रोफाइल अपडेट करते हैं।",
  why_title: "GST अनुपालन क्यों जरूरी है?",
  why_desc: "समय पर GST फाइलिंग से भारी जुर्माना, ब्याज और कानूनी नोटिस से बचा जा सकता है। उचित अनुपालन व्यवसाय की विश्वसनीयता बढ़ाता है, ITC दावों को सुगम बनाता है और सरकारी बाधाओं के बिना सुचारू संचालन सुनिश्चित करता है।",
  process_title: "हमारी GST अनुपालन प्रक्रिया",
  step: "स्टेप",
  step1: "बिक्री और खरीद डेटा एकत्र करें",
  step2: "रिकॉन्सिलिएशन और ITC सत्यापन",
  step3: "GST रिटर्न तैयार करना",
  step4: "समय पर फाइलिंग और पुष्टि",
  cta_title: "GST पेनल्टी से बचें और अनुपालन में रहें",
  cta_desc: "हमारे विशेषज्ञों को अपना GST अनुपालन पेशेवर और सटीक तरीके से संभालने दें।",
  cta_btn: "GST एक्सपर्ट से बात करें",
  sidebar_title: "GST अनुपालन सहायता प्राप्त करें",
  sidebar_desc: "हमारे GST विशेषज्ञों से बात करें और सुनिश्चित करें कि आपका व्यवसाय पूरी तरह अनुपालन में रहे।",
  sidebar_btn: "एक्सपर्ट से बात करें",
  name: "पूरा नाम",
  mobile: "मोबाइल नंबर",
  email: "ईमेल पता",
},


// ---------- HI ----------
gstReconciliation: {
  title: "GST रिकॉन्सिलिएशन सेवाएँ",
  intro: "पेशेवर GST रिकॉन्सिलिएशन सेवाओं के साथ सटीक इनपुट टैक्स क्रेडिट (ITC) दावे सुनिश्चित करें और GST नोटिस से बचें।",
  consult_btn: "फ्री कंसल्टेशन प्राप्त करें",
  what_title: "GST रिकॉन्सिलिएशन क्या है?",
  what_desc: "GST रिकॉन्सिलिएशन आपके खरीद और बिक्री रिकॉर्ड को GSTR-1, GSTR-3B और GSTR-2A/2B जैसे GST रिटर्न से मिलाने की प्रक्रिया है। उचित रिकॉन्सिलिएशन सटीक टैक्स रिपोर्टिंग और सही ITC दावे सुनिश्चित करता है।",
  services_title: "हमारी GST रिकॉन्सिलिएशन सेवाओं में शामिल है",
  s1: "GSTR-2A और 2B ITC मिलान",
  s1_desc: "हम आपके खरीद डेटा को GSTR-2A और 2B से मिलाते हैं ताकि हर ITC दावा वैध और सत्यापित हो।",
  s2: "बिक्री और खरीद डेटा रिकॉन्सिलिएशन",
  s2_desc: "हम किसी भी रिपोर्टिंग अंतर की पहचान के लिए आपके खातों की पुस्तकों को दाखिल GST रिटर्न से मिलाते हैं।",
  s3: "मिसमैच की पहचान और सुधार",
  s3_desc: "हम सप्लायर रिटर्न और आपके ITC दावों के बीच मिसमैच का पता लगाते और नोटिस से पहले हल करते हैं।",
  s4: "ITC दावों के लिए वेंडर फॉलो-अप",
  s4_desc: "हम आपके वेंडर के साथ समन्वय करते हैं ताकि वे समय पर रिटर्न दाखिल करें और आपका ITC न रुके।",
  s5: "ITC का रिवर्सल और पुनः दावा",
  s5_desc: "हम आवश्यकतानुसार ITC रिवर्सल प्रबंधित करते हैं और शर्तें पूरी होने पर पात्र क्रेडिट वापस दिलाने में मदद करते हैं।",
  s6: "वर्ष-अंत GST रिकॉन्सिलिएशन",
  s6_desc: "हम आपके GSTR-9 को पुस्तकों के साथ संरेखित करने और ऑडिट समस्याओं से बचने के लिए पूर्ण वार्षिक रिकॉन्सिलिएशन करते हैं।",
  why_title: "GST रिकॉन्सिलिएशन क्यों जरूरी है?",
  why_desc: "गलत रिकॉन्सिलिएशन से ITC मिसमैच, जुर्माना और GST विभाग के नोटिस आ सकते हैं। उचित रिकॉन्सिलिएशन टैक्स सटीकता सुनिश्चित करता है, अनुपालन स्कोर सुधारता है और आपके व्यवसाय को कानूनी जोखिमों से बचाता है।",
  process_title: "हमारी रिकॉन्सिलिएशन प्रक्रिया",
  step: "स्टेप",
  step1: "GST रिटर्न और बुक्स डेटा एकत्र करें",
  step2: "GSTR-2A/2B के साथ ITC मिलान करें",
  step3: "मिसमैच की पहचान और सुधार करें",
  step4: "अंतिम अनुपालन रिपोर्ट जमा करें",
  cta_title: "अपना ITC बचाएं और GST नोटिस से बचें",
  cta_desc: "हमारे GST विशेषज्ञों को आपका रिकॉन्सिलिएशन सटीक और पेशेवर तरीके से संभालने दें।",
  cta_btn: "GST एक्सपर्ट से बात करें",
  sidebar_title: "GST रिकॉन्सिलिएशन सहायता प्राप्त करें",
  sidebar_desc: "हमारे GST विशेषज्ञों से बात करें और सटीक ITC दावे व GST अनुपालन सुनिश्चित करें।",
  sidebar_btn: "एक्सपर्ट से बात करें",
  name: "पूरा नाम",
  mobile: "मोबाइल नंबर",
  email: "ईमेल पता",
},


// ---------- HI ----------
incomeTax: {
  title: "इनकम टैक्स पोर्टल सहायता",
  intro: "इनकम टैक्स फाइलिंग, अनुपालन, पोर्टल लॉगिन समस्याओं, नोटिस और रिटर्न सुधार के लिए विशेषज्ञ सहायता।",
  consult_btn: "फ्री कंसल्टेशन प्राप्त करें",
  services_title: "हमारी इनकम टैक्स पोर्टल सेवाएँ",
  s1: "इनकम टैक्स रिटर्न (ITR) फाइलिंग",
  s1_desc: "हम आपकी आय के स्रोतों, कटौतियों और लागू टैक्स स्लैब के आधार पर आपकी ITR सटीकता से तैयार कर दाखिल करते हैं।",
  s2: "इनकम टैक्स पोर्टल रजिस्ट्रेशन",
  s2_desc: "हम आपको इनकम टैक्स ई-फाइलिंग पोर्टल पर रजिस्टर करते हैं और सुचारू ऑनलाइन एक्सेस के लिए आपकी प्रोफाइल सेट करते हैं।",
  s3: "ई-फाइलिंग और ई-वेरिफिकेशन सहायता",
  s3_desc: "हम पूरी ई-फाइलिंग प्रक्रिया में मार्गदर्शन करते हैं और आधार OTP या नेट बैंकिंग से आपकी रिटर्न सत्यापित करते हैं।",
  s4: "नोटिस हैंडलिंग और जवाब तैयार करना",
  s4_desc: "हम टैक्स नोटिस का विश्लेषण करते हैं, बिंदुवार जवाब तैयार करते हैं और निर्धारित समय सीमा के भीतर जमा करते हैं।",
  s5: "ITR सुधार और संशोधित फाइलिंग",
  s5_desc: "हम दाखिल रिटर्न में त्रुटियाँ पहचानते हैं और आय, कटौतियों या टैक्स राशि को ठीक करने के लिए संशोधित ITR जमा करते हैं।",
  s6: "रिफंड स्टेटस और सुधार सहायता",
  s6_desc: "हम आपके रिफंड की स्थिति ट्रैक करते हैं और प्रोसेस किए गए रिटर्न में विसंगतियाँ होने पर सुधार अनुरोध दर्ज करते हैं।",
  why_title: "इनकम टैक्स अनुपालन क्यों जरूरी है?",
  why_desc: "समय पर और सटीक इनकम टैक्स फाइलिंग से जुर्माना, ब्याज और कानूनी नोटिस से बचा जा सकता है। उचित अनुपालन वित्तीय विश्वसनीयता भी बढ़ाता है और लोन अनुमोदन व सरकारी लाभ सुनिश्चित करता है।",
  process_title: "हमारी फाइलिंग प्रक्रिया",
  step: "स्टेप",
  step1: "वित्तीय दस्तावेज एकत्र करें",
  step2: "टैक्स गणना और सत्यापन",
  step3: "ITR तैयार करना और फाइल करना",
  step4: "ई-वेरिफिकेशन और अंतिम पुष्टि",
  cta_title: "इनकम टैक्स फाइलिंग में मदद चाहिए?",
  cta_desc: "हमारे टैक्स विशेषज्ञ सुचारू, सटीक और समय पर इनकम टैक्स अनुपालन सुनिश्चित करते हैं।",
  cta_btn: "टैक्स एक्सपर्ट से बात करें",
  sidebar_title: "इनकम टैक्स सहायता प्राप्त करें",
  sidebar_desc: "हमारे टैक्स विशेषज्ञों से बात करें और सुचारू इनकम टैक्स फाइलिंग व अनुपालन सुनिश्चित करें।",
  sidebar_btn: "एक्सपर्ट से बात करें",
  name: "पूरा नाम",
  mobile: "मोबाइल नंबर",
  email: "ईमेल पता",
},

// ---------- HI ----------
panApplication: {
  title: "PAN कार्ड आवेदन और सुधार",
  intro: "परमानेंट अकाउंट नंबर (PAN) भारत के आयकर विभाग द्वारा जारी किया गया एक अद्वितीय पहचान नंबर है। यह वित्तीय लेनदेन, इनकम टैक्स फाइलिंग, बैंक खाता खोलने और अनुपालन उद्देश्यों के लिए अनिवार्य है।",
  services_title: "हमारी PAN सेवाएँ",
  s1: "नया PAN आवेदन",
  s1_desc: "हम व्यक्तियों, फर्मों और कंपनियों के लिए बिना किसी परेशानी के नए PAN कार्ड की पूरी आवेदन प्रक्रिया संभालते हैं।",
  s2: "PAN सुधार / अपडेट",
  s2_desc: "हम आपके मौजूदा PAN कार्ड में नाम, जन्म तिथि, पता या हस्ताक्षर की त्रुटियों को जल्दी और सटीकता से सुधारते हैं।",
  s3: "खोए हुए PAN का पुनः जारी करना",
  s3_desc: "अगर आपका PAN कार्ड खो गया, क्षतिग्रस्त या गुम हो गया है तो हम डुप्लीकेट PAN कार्ड के लिए आवेदन में मदद करते हैं।",
  s4: "NRI के लिए PAN",
  s4_desc: "हम अनिवासी भारतीयों को आवश्यक दस्तावेजों और प्रक्रिया के साथ PAN कार्ड प्राप्त करने में सहायता करते हैं।",
  docs_title: "आवश्यक दस्तावेज",
  doc1: "आधार कार्ड",
  doc2: "पासपोर्ट साइज फोटो",
  doc3: "एड्रेस प्रूफ",
  doc4: "जन्म तिथि प्रमाण",
  doc5: "व्यवसाय रजिस्ट्रेशन प्रमाण (फर्म / कंपनियों के लिए)",
  process_title: "PAN आवेदन प्रक्रिया",
  step: "स्टेप",
  step1: "आवश्यक दस्तावेज और विवरण जमा करें",
  step2: "जानकारी का सत्यापन",
  step3: "ऑनलाइन आवेदन फाइलिंग",
  step4: "PAN आवंटित और डिलीवर किया गया",
  cta_title: "PAN आवेदन में मदद चाहिए?",
  cta_desc: "हमारे विशेषज्ञ पूरी प्रक्रिया जल्दी और आसानी से संभालेंगे।",
  cta_btn: "अभी संपर्क करें",
  sidebar_title: "PAN सहायता के लिए आवेदन करें",
  sidebar_desc: "हमारे विशेषज्ञों से बात करें और तेज़ PAN आवेदन और सुधार सहायता प्राप्त करें।",
  sidebar_btn: "एक्सपर्ट से बात करें",
  name: "पूरा नाम",
  mobile: "मोबाइल नंबर",
  email: "ईमेल पता",
},

// ---------- HI ----------
about: {
  title: "CorporateMitra के बारे में",
  hero_desc: "हम व्यवसाय रजिस्ट्रेशन और अनुपालन सेवाओं को सरल बनाते हैं ताकि उद्यमी विकास पर ध्यान दे सकें।",

  who_title: "हम कौन हैं",
  who_desc:
    "CompanyMitra एक पेशेवर व्यवसाय परामर्श फर्म है जो कंपनी रजिस्ट्रेशन, GST फाइलिंग, MSME रजिस्ट्रेशन, टैक्स अनुपालन और अन्य कानूनी सेवाओं में विशेषज्ञ सहायता प्रदान करती है। हमारा मिशन पूरे भारत में स्टार्टअप और उद्यमियों के लिए व्यवसाय स्थापित करना आसान, किफायती और झंझट-मुक्त बनाना है।",

  mission_title: "हमारा मिशन",
  mission_desc:
    "उद्यमियों को पारदर्शी, किफायती और विश्वसनीय व्यवसाय रजिस्ट्रेशन और अनुपालन सेवाएं प्रदान करके सशक्त बनाना।",

  vision_title: "हमारा विजन",
  vision_desc:
    "व्यवसाय अनुपालन और स्टार्टअप रजिस्ट्रेशन सेवाओं के लिए भारत का सबसे विश्वसनीय प्लेटफॉर्म बनना।",

  why_title: "हमें क्यों चुनें",
  w1: "विशेषज्ञ पेशेवर टीम",
  w2: "तेज़ और सुरक्षित प्रक्रिया",
  w3: "किफायती मूल्य",
  w4: "पारदर्शी दस्तावेज़ीकरण",
  w5: "समर्पित क्लाइंट सपोर्ट",
  w6: "100% अनुपालन सहायता",

  cta_title: "हमारे साथ अपनी व्यवसाय यात्रा शुरू करें",
  cta_desc: "हमारे विशेषज्ञ आपको पूरी रजिस्ट्रेशन और अनुपालन प्रक्रिया में मार्गदर्शन देंगे।",
  cta_btn: "आज ही संपर्क करें"
},



// ---------- HI ----------
gemPortal: {
  title: "GeM पोर्टल रजिस्ट्रेशन और सहायता",
  intro:
    "GeM (गवर्नमेंट ई-मार्केटप्लेस) पोर्टल भारत सरकार द्वारा सरकारी विभागों और PSU द्वारा वस्तुओं और सेवाओं की खरीद के लिए शुरू किया गया एक ऑनलाइन प्लेटफॉर्म है। GeM पर रजिस्ट्रेशन से व्यवसाय सरकारी खरीदारों को सीधे उत्पाद और सेवाएं बेच सकते हैं।",

  benefits_title: "GeM रजिस्ट्रेशन के लाभ",
  b1_title: "सीधे सरकारी ऑर्डर",
  b1_desc: "सरकारी विभागों और PSU को सीधे बेचें।",
  b2_title: "पारदर्शी खरीद",
  b2_desc: "बिचौलियों के बिना निष्पक्ष बोली प्रणाली।",
  b3_title: "व्यापक बाजार पहुंच",
  b3_desc: "पूरे भारत में केंद्र और राज्य सरकार के खरीदारों तक पहुंचें।",
  b4_title: "सुरक्षित ऑनलाइन भुगतान",
  b4_desc: "सरकारी प्रणाली के माध्यम से समय पर और सुरक्षित भुगतान।",

  services_title: "हमारी GeM पोर्टल सेवाएँ",
  s1: "GeM पोर्टल पर नया विक्रेता रजिस्ट्रेशन",
  s2: "प्रोडक्ट लिस्टिंग और कैटलॉग निर्माण",
  s3: "बिड भागीदारी और टेंडर फाइलिंग",
  s4: "ऑर्डर प्रबंधन और अनुपालन सहायता",
  s5: "DSC सहायता और प्रोफाइल अपडेशन",

  docs_title: "आवश्यक दस्तावेज",
  doc1: "आधार और पैन कार्ड",
  doc2: "GST रजिस्ट्रेशन सर्टिफिकेट",
  doc3: "व्यवसाय रजिस्ट्रेशन प्रमाण",
  doc4: "बैंक खाता विवरण",
  doc5: "डिजिटल सिग्नेचर सर्टिफिकेट (DSC)",

  sidebar_title: "GeM पोर्टल सहायता प्राप्त करें",
  sidebar_desc:
    "आज ही सरकारी विभागों को बेचना शुरू करें। हमारे विशेषज्ञ पूरी रजिस्ट्रेशन और बिडिंग प्रक्रिया संभालेंगे।",

  name: "पूरा नाम",
  mobile: "मोबाइल नंबर",
  email: "ईमेल पता",
  submit: "अभी आवेदन करें"
},



// HI ke andar (translation ke andar):
queryForm: {
  title: "अपना सवाल भेजें",
  name: "आपका नाम",
  email: "आपकी ईमेल",
  phone: "आपका फ़ोन नंबर",
  message: "अपना सवाल यहाँ लिखें...",
  submit: "सवाल भेजें",
  submitting: "भेजा जा रहा है...",
  success: "आपका सवाल सफलतापूर्वक भेज दिया गया!",
  error: "कुछ गलत हुआ। कृपया दोबारा कोशिश करें।",
  loading: "आपका सवाल भेजा जा रहा है...",
},


// HI
pmegp: {
  heading: "उद्यमिता वित्त पोषण कार्यक्रम अवलोकन",
  intro: "यह एक ऋण-आधारित सब्सिडी योजना है जो गैर-कृषि क्षेत्र में नए सूक्ष्म उद्यम स्थापित करने के लिए बनाई गई है। इसका मुख्य उद्देश्य ग्रामीण और बेरोजगार युवाओं तथा पारंपरिक कारीगरों के लिए टिकाऊ रोजगार सृजित करना है।",
  keyDetails: "योजना की मुख्य विशेषताएं",
  keyDetailsSub: "यह योजना ग्रामीण और शहरी दोनों क्षेत्रों में स्वरोजगार उद्यम स्थापित करने के लिए वित्तीय सहायता प्रदान करती है।",
  th_feature: "विशेषता",
  th_general: "सामान्य श्रेणी",
  th_special: "विशेष श्रेणी (SC/ST/महिला/अल्पसंख्यक/भूतपूर्व सैनिक/ट्रांसजेंडर/आकांक्षी जिले/NER)",
  row1_label: "मालिक का योगदान", row1_gen: "परियोजना लागत का 10%", row1_spl: "परियोजना लागत का 5%",
  row2_label: "शहरी सब्सिडी (मार्जिन मनी)", row2_gen: "परियोजना लागत का 15%", row2_spl: "परियोजना लागत का 25%",
  row3_label: "ग्रामीण सब्सिडी (मार्जिन मनी)", row3_gen: "परियोजना लागत का 25%", row3_spl: "परियोजना लागत का 35%",
  row4_label: "अधिकतम परियोजना लागत (विनिर्माण)", row4_gen: "₹50 लाख", row4_spl: "₹50 लाख",
  row5_label: "अधिकतम परियोजना लागत (सेवा)", row5_gen: "₹20 लाख", row5_spl: "₹20 लाख",
  eligibilityHeading: "पात्रता और उन्नयन",
  e1_label: "पात्रता:", e1_text: "18 वर्ष से अधिक आयु का कोई भी व्यक्ति आवेदन कर सकता है।",
  e2_label: "सहायता सेवाएं:", e2_text: "सरकार EDP प्रशिक्षण, कार्यशालाओं और प्रदर्शनियों सहित पिछड़े और अग्रिम संपर्क प्रदान करती है।",
  e3_label: "उन्नयन के लिए दूसरा ऋण:", e3_text: "अच्छा प्रदर्शन करने वाली इकाइयाँ विस्तार या आधुनिकीकरण के लिए दूसरे ऋण के लिए आवेदन कर सकती हैं।",
  e3s1_label: "अधिकतम लागत:", e3s1_text: "विनिर्माण के लिए ₹1.00 करोड़ और सेवा/व्यापार के लिए ₹25.00 लाख तक।",
  e3s2_label: "सब्सिडी:", e3s2_text: "15% (NER और पहाड़ी राज्यों के लिए 20%)।",
  e4_label: "आवेदन प्रक्रिया:", e4_text: "सभी आवेदन KVIC वेबसाइट पर PMEGP ई-पोर्टल के माध्यम से ऑनलाइन जमा किए जाने चाहिए।",
  contact: "अधिक जानकारी के लिए कृपया",
  contactLink: "संपर्क करें",
  overview: "अवलोकन",
},



// HI
msecdp: {
  heading: "सूक्ष्म और लघु उद्यम क्लस्टर विकास कार्यक्रम (MSE-CDP)",
  intro: "यह MSE की स्थिरता और विकास को समर्थन देने के लिए बनाया गया है, जो प्रौद्योगिकी, कौशल, गुणवत्ता और बाजार पहुंच जैसी सामान्य समस्याओं का समाधान करता है। यह नए या मौजूदा औद्योगिक क्षेत्रों में बुनियादी ढांचे के निर्माण और उन्नयन तथा परीक्षण, प्रशिक्षण और उत्पादन जैसी साझा सुविधाओं के लिए Common Facility Centres (CFCs) की स्थापना पर जोर देता है।",
  summaryTitle: "MSE-CDP योजना सारांश",
  th_feature: "विशेषता",
  th_details: "विवरण",
  row1_label: "Common Facility Centres (CFCs)",
  row1_detail: "₹30 करोड़ की अधिकतम परियोजना लागत का 80% तक GOI सहायता प्रदान करता है।",
  row2_label: "इंफ्रास्ट्रक्चर विकास (ID)",
  row2_detail: "भूमि, सड़क, बिजली और जल निकासी परियोजनाओं को शामिल करता है। ₹15 करोड़ की अधिकतम परियोजना लागत का 70% तक GoI सहायता।",
  row3_label: "मुख्य उद्देश्य",
  row3_detail: "विकास को समर्थन देना, कौशल/प्रौद्योगिकी में सुधार करना और हरित एवं टिकाऊ विनिर्माण को बढ़ावा देना।",
  row4_label: "पात्रता",
  row4_detail: "Special Purpose Vehicles (SPVs) के रूप में कार्यरत मौजूदा उद्यमी।",
  row5_label: "आवेदन पोर्टल",
},


// HI
aspire: {
  heading: "नवाचार, ग्रामीण उद्योग और उद्यमिता संवर्धन योजना (ASPIRE)",
  intro: "ASPIRE भारत सरकार की एक पहल है जिसका उद्देश्य विशेष रूप से ग्रामीण और वंचित क्षेत्रों में Livelihood Business Incubators (LBIs) का नेटवर्क स्थापित करना है। यह योजना कृषि-ग्रामीण क्षेत्र में नवाचार और उद्यमिता को बढ़ावा देने, स्केलेबल सूक्ष्म उद्यम बनाने और कौशल विकास के माध्यम से रोजगार सृजन पर केंद्रित है।",
  summaryTitle: "ASPIRE योजना सारांश",
  row1_label: "मुख्य उद्देश्य",
  row1_detail: "कृषि-ग्रामीण क्षेत्र में उद्यमिता और रोजगार सृजन के लिए Livelihood Business Incubators (LBIs) स्थापित करना।",
  row2_label: "प्लांट और मशीनरी के लिए फंडिंग",
  row2_detail: "सरकारी एजेंसियों के लिए ₹1 करोड़ तक और निजी एजेंसियों के लिए ₹75 लाख तक।",
  row3_label: "परिचालन सहायता",
  row3_detail: "सरकारी और निजी दोनों एजेंसियों के लिए जनशक्ति और इनक्यूबेशन प्रोग्राम चलाने हेतु ₹1 करोड़ तक।",
  row4_label: "निजी क्षेत्र की आवश्यकता",
  row4_detail: "निजी संगठनों को पूंजीगत व्यय का 25% स्वयं वहन करना होगा।",
  row5_label: "पात्रता",
  row5_detail: "सरकारी एजेंसियां, प्रशिक्षण केंद्र, उद्योग संघ, शैक्षणिक संस्थान और इनक्यूबेशन अनुभव वाले गैर-लाभकारी निजी संस्थान।",
  row6_label: "आवेदन लिंक",
  howTitle: "आवेदन कैसे करें",
  howDesc: "पात्र संस्थान आधिकारिक ASPIRE पोर्टल के माध्यम से आवश्यक प्रोजेक्ट प्रपोजल, वित्तीय विवरण और इनक्यूबेशन अनुभव दस्तावेज जमा करके आवेदन कर सकते हैं।",
},



// HI - i18n.js mein hi > translation ke andar add karein
pmVishwakarma: {
  title: "पीएम विश्वकर्मा – कारीगरों और शिल्पकारों को अपने उद्यम बढ़ाने में सक्षम बनाना",
  description: "पीएम विश्वकर्मा भारत सरकार की एक व्यापक पहल है जो कारीगरों और शिल्पकारों को पहचान देने और सशक्त बनाने के लिए बनाई गई है। यह योजना 18 पारंपरिक व्यवसायों के कामगारों को औपचारिक पहचान, कौशल उन्नयन, आधुनिक उपकरण किट और उत्पादकता व बाज़ार पहुँच सुधारने के लिए कम ब्याज पर ऋण प्रदान करती है।",
  schemeTitle: "पीएम विश्वकर्मा योजना: मुख्य विशेषताएँ",
  row1_label: "मुख्य उद्देश्य",
  row1_detail: "कारीगरों को \"विश्वकर्मा\" के रूप में मान्यता देना और उनके उद्यमों को बढ़ाने हेतु उपकरण एवं प्रशिक्षण प्रदान करना।",
  row2_label: "पात्र व्यवसाय",
  row2_detail: "18 व्यवसायों को कवर करती है जिनमें बढ़ई, नाव निर्माता, कुम्हार, सुनार, राजमिस्त्री, नाई, धोबी, दर्जी और अन्य शामिल हैं।",
  row3_label: "कौशल प्रशिक्षण",
  row3_detail: "बुनियादी प्रशिक्षण (5–7 दिन) और उन्नत प्रशिक्षण (15+ दिन) के साथ ₹500 प्रतिदिन वजीफा।",
  row4_label: "उपकरण किट सहायता",
  row4_detail: "आधुनिक उपकरण खरीदने के लिए ई-वाउचर के माध्यम से ₹15,000 तक की सहायता।",
  row5_label: "ऋण सहायता",
  row5_detail: "5% निश्चित ब्याज दर पर ₹3 लाख तक (₹1L + ₹2L) का बिना ज़मानत उद्यम विकास ऋण।",
  row6_label: "डिजिटल एवं बाज़ार लिंकेज",
  row6_detail: "प्रति डिजिटल लेनदेन ₹1 प्रोत्साहन (अधिकतम 100/माह) और ब्रांडिंग व ई-कॉमर्स सहायता।",
  row7_label: "मान्यता",
  row7_detail: "औपचारिक पीएम विश्वकर्मा प्रमाण पत्र और पहचान पत्र।",
  processTitle: "आवेदन प्रक्रिया",
  processDesc: "कारीगर अपने नज़दीकी सामान्य सेवा केंद्रों (CSC) पर जाकर या आधिकारिक पीएम विश्वकर्मा पोर्टल के माध्यम से ऑनलाइन आवेदन करके इस योजना का लाभ उठा सकते हैं। आवेदन प्रक्रिया के दौरान आवश्यक पहचान और व्यवसाय सत्यापन दस्तावेज़ जमा करने होंगे।",
  imgAlt: "पीएम विश्वकर्मा योजना",
},


sriFund: {
  title: "आत्मनिर्भर भारत (SRI) फंड",
  desc1: "यह भारत सरकार की एक रणनीतिक पहल है जो सकारात्मक विकास की दिशा में आगे बढ़ रहे व्यवहार्य MSMEs को विकास पूंजी प्रदान करने के लिए बनाई गई है।",
  desc2_before: "यह एक अनूठी",
  desc2_bold: "मदर फंड – डॉटर फंड",
  desc2_after: "संरचना के माध्यम से काम करती है जहाँ मदर फंड, डॉटर फंड्स (SEBI पंजीकृत AIFs) को पूंजी प्रदान करता है। ये फंड्स फिर इक्विटी, क्वासी-इक्विटी या ऋण के माध्यम से सीधे MSMEs में निवेश करते हैं।",
  desc3: "इसका उद्देश्य MSMEs को MSME श्रेणी से आगे बढ़कर राष्ट्रीय या वैश्विक कंपनियाँ बनने में मदद करना है जो अंततः स्टॉक एक्सचेंज पर सूचीबद्ध हो सकें।",
  featuresTitle: "मुख्य विशेषताएँ",
  th_feature: "विशेषता",
  th_details: "विवरण",
  row1_label: "लक्षित समूह",
  row1_detail: "सकारात्मक विकास की दिशा में आगे बढ़ रहे व्यवहार्य MSME",
  row2_label: "वित्तीय सहायता",
  row2_detail: "इक्विटी, क्वासी-इक्विटी या ऋण साधन",
  row3_label: "कुल योगदान",
  row3_detail: "सरकार का ₹10,000 करोड़ का योगदान",
  row4_label: "फंड अवधि",
  row4_detail: "15 वर्ष",
  row5_label: "कार्यान्वयन एजेंसी",
  row5_detail: "NSIC वेंचर कैपिटल फंड लिमिटेड (NVCFL)",
  row6_label: "रणनीतिक लक्ष्य",
  row6_detail: "MSMEs को वैश्विक कंपनियाँ बनने में सहायता करना",
  nextStep_before: "इच्छुक MSMEs आधिकारिक NVCFL वेबसाइट या MSME मंत्रालय पोर्टल के माध्यम से अधिक जानकारी प्राप्त कर सकते हैं। यह फंड",
  nextStep_bold: "आत्मनिर्भर भारत",
  nextStep_after: " के विज़न में योगदान देने वाले व्यवसायों को समर्थन देता है।",
  imgAlt: "SRI फंड",
},

cgtmse: {
  title: "सूक्ष्म और लघु उद्यमों के लिए क्रेडिट गारंटी योजना (CGTMSE)",
  description: "यह योजना पहली पीढ़ी के उद्यमियों को उन ऋणों के लिए क्रेडिट गारंटी प्रदान करके सहायता करती है जिनके लिए किसी गारंटी या तीसरे पक्ष की ज़मानत की आवश्यकता नहीं होती। यह नए और मौजूदा सूक्ष्म और लघु उद्यमों (MSEs) को व्यापार, सेवा और शिक्षा क्षेत्रों सहित आसानी से ऋण प्राप्त करने में मदद करती है।",
  featuresTitle: "योजना की मुख्य विशेषताएँ",
  f1_label: "ऋण सीमा:",
  f1_detail: "₹5 करोड़ तक बिना गारंटी के ऋण।",
  f2_label: "गारंटी कवरेज:",
  f2_detail: "ऋण राशि का 75% से 90%।",
  f3_label: "पात्रता:",
  f3_detail: "उद्यम पोर्टल पर पंजीकृत MSEs।",
  f4_label: "हाइब्रिड सिक्योरिटी:",
  f4_detail: "बैंक ऋण के एक हिस्से के लिए गारंटी ले सकते हैं जबकि शेष असुरक्षित हिस्से (₹5 करोड़ तक) को कवर किया जाता है।",
  f5_label: "आवेदन:",
  f5_detail: "बैंकों और NBFCs के माध्यम से आवेदन करें।",
  tableTitle: "गारंटी कवरेज की सीमा",
  th_category: "श्रेणी",
  th_col1: "₹5 लाख तक",
  th_col2: "₹5 लाख – ₹50 लाख",
  th_col3: "₹50 लाख – ₹5 करोड़",
  row1_label: "सूक्ष्म उद्यम",
  row2_label: "महिला उद्यमी",
  row3_label: "अन्य सभी श्रेणियाँ",
  imgAlt: "CGTMSE",
},



pms: {
  title: "खरीद और विपणन सहायता (PMS) योजना",
  desc1: "खरीद और विपणन सहायता (PMS) योजना MSME मंत्रालय की एक पहल है जिसका उद्देश्य सूक्ष्म और लघु उद्यमों (MSEs) की बाज़ार पहुँच और प्रतिस्पर्धात्मकता में सुधार करना है।",
  desc2: "यह योजना ई-कॉमर्स, उन्नत पैकेजिंग और गवर्नमेंट ई-मार्केटप्लेस (GeM) पोर्टल जैसी आधुनिक मार्केटिंग प्रथाओं के बारे में जागरूकता बढ़ाती है और MSMEs को अपने उत्पाद प्रदर्शित करने के लिए व्यापार मेलों और प्रदर्शनियों जैसे मंच प्रदान करती है।",
  tableTitle: "खरीद और विपणन सहायता (PMS) योजना अवलोकन",
  th_feature: "विशेषता",
  th_details: "विवरण",
  row1_label: "मुख्य उद्देश्य",
  row1_detail: "नई बाज़ार पहुँच पहलों को बढ़ावा देना और MSMEs को पैकेजिंग, आयात-निर्यात नीतियों और व्यापार विकास के बारे में शिक्षित करना।",
  row2_label: "क्षमता निर्माण",
  row2_detail: "आधुनिक पैकेजिंग तकनीकों, बार कोड और ई-कॉमर्स प्लेटफार्मों को अपनाने में सहायता करता है।",
  row3_label: "बाज़ार पहुँच",
  row3_detail: "राष्ट्रीय और अंतरराष्ट्रीय व्यापार मेलों, प्रदर्शनियों और MSME एक्सपो में भागीदारी को सुगम बनाता है।",
  row4_label: "प्रमुख कार्यक्रम",
  row4_detail: "वेंडर डेवलपमेंट प्रोग्राम (VDP) और घरेलू व अंतरराष्ट्रीय प्रदर्शनियों के आयोजन शामिल हैं।",
  row5_label: "इंफ्रास्ट्रक्चर",
  row5_detail: "भौगोलिक संकेत (GI) उत्पादों को बढ़ावा देने के लिए खुदरा आउटलेट विकसित करने पर ध्यान केंद्रित करता है।",
  row6_label: "पात्रता",
  row6_detail: "वैध उद्यम रजिस्ट्रेशन (UR) प्रमाणपत्र के साथ विनिर्माण और सेवा क्षेत्र के MSEs के लिए खुला है।",
  imgAlt: "खरीद और विपणन सहायता योजना",
  ctaTitle: "PMS योजना सहायता के लिए आवेदन करें",
  ctaDesc: "हमारे विशेषज्ञ MSMEs को PMS योजना के तहत मार्केटिंग सहायता कार्यक्रमों का लाभ उठाने में मदद कर सकते हैं।",
  ctaBtn: "अभी आवेदन करें",
},


ramp: {
  title: "MSME प्रदर्शन उन्नयन और त्वरण (RAMP) योजना",
  desc1: "RAMP योजना (Raising and Accelerating MSME Performance) एक विश्व बैंक समर्थित केंद्रीय क्षेत्र योजना है जो भारत में MSME पारिस्थितिकी तंत्र को मजबूत करने के लिए बनाई गई है।",
  desc2: "यह योजना MSMEs की वित्त, बाज़ार और प्रौद्योगिकी तक पहुँच सुधारने पर केंद्रित है और साथ ही मौजूदा MSME विकास कार्यक्रमों के प्रभाव को बढ़ाने के लिए केंद्र और राज्य सरकारों के बीच समन्वय को मजबूत करती है।",
  tableTitle: "RAMP योजना: रणनीतिक अवलोकन",
  th_feature: "विशेषता",
  th_details: "विवरण",
  row1_label: "पूरा नाम",
  row1_detail: "Raising and Accelerating MSME Performance",
  row2_label: "साझेदारी",
  row2_detail: "विश्व बैंक द्वारा समर्थित",
  row3_label: "मुख्य उद्देश्य",
  row3_detail: "MSME मंत्रालय की मौजूदा योजनाओं की पहुँच बढ़ाना और केंद्र व राज्य स्तर पर संस्थागत क्षमता में सुधार करना।",
  row4_label: "मुख्य स्तंभ",
  row4_detail: "प्रौद्योगिकी उन्नयन, नवाचार, डिजिटलीकरण, बाज़ार पहुँच और ऋण।",
  row5_label: "विशेष ध्यान",
  row5_detail: "हरित पहल और महिला स्वामित्व वाले सूक्ष्म और लघु उद्यमों को सहायता।",
  row6_label: "वित्तीय स्वास्थ्य",
  row6_detail: "प्राप्य वित्तपोषण बाजारों को मजबूत करना और MSMEs को देर से भुगतान की समस्या कम करना।",
  row7_label: "कार्यान्वयन",
  row7_detail: "प्रभावी केंद्र-राज्य सहयोग सुनिश्चित करने के लिए राज्य एजेंसियों के माध्यम से लागू किया गया।",
  row8_label: "लक्षित दायरा",
  row8_detail: "पूरे भारत में 5.5 लाख से अधिक MSMEs को लाभान्वित करने का लक्ष्य।",
  row9_label: "समयसीमा",
  row9_detail: "वित्त वर्ष 2022–23 से वित्त वर्ष 2026–27",
  eligibility_label: "पात्रता:",
  eligibility_detail: "यह योजना अपने-अपने राज्य सरकारों या नामित कार्यान्वयन एजेंसियों के माध्यम से व्यक्तिगत MSMEs पर लागू होती है।",
  imgAlt: "RAMP योजना",
},

kgvy: {
  title: "खादी ग्रामोद्योग विकास योजना (KGVY)",
  desc1: "खादी ग्रामोद्योग विकास योजना (KGVY) एक व्यापक योजना है जो ग्रामीण कारीगरों को उनकी उत्पादकता और मजदूरी बढ़ाकर तथा उनकी आजीविका सुरक्षित करके सशक्त बनाने के लिए बनाई गई है।",
  desc2: "यह खादी उत्पादन के लिए बुनियादी ढाँचे में सुधार, पारंपरिक कौशल को पुनर्जीवित करने और रोजगार व निर्यात को बढ़ावा देने के लिए विपणन और बिक्री केंद्रों के आधुनिकीकरण पर केंद्रित है।",
  desc3_before: "इस योजना को दो प्रमुख उप-घटकों में विभाजित किया गया है:",
  desc3_bold1: "खादी विकास योजना,",
  desc3_middle: "जो खादी क्षेत्र के बुनियादी ढाँचे और वित्तीय प्रोत्साहनों पर केंद्रित है, और",
  desc3_bold2: "ग्रामोद्योग विकास योजना,",
  desc3_after: "जो प्रशिक्षण और टूलकिट वितरण के माध्यम से ग्रामीण उद्योगों के विकास को समर्थन देती है।",
  tableTitle: "खादी ग्रामोद्योग विकास योजना (KGVY) अवलोकन",
  th_component: "घटक",
  th_features: "मुख्य विशेषताएँ और सहायता",
  row1_label: "उद्देश्य",
  row1_detail: "खादी उत्पादन, बिक्री और रोजगार में वृद्धि; बिक्री केंद्रों का आधुनिकीकरण; और पारंपरिक ग्रामीण कौशल को पुनर्जीवित करना।",
  row2_label: "खादी विकास योजना (वित्तीय)",
  row2_detail: "MMDA: कपड़े के प्रकार के आधार पर मूल लागत पर 20–35% सब्सिडी। ISEC: खादी संस्थान ऋण पर केवल 4% ब्याज देते हैं।",
  row3_label: "बुनियादी ढाँचा सहायता",
  row3_detail: "वर्कशेड योजना: व्यक्तिगत के लिए ₹1.20 लाख तक या समूह वर्कशेड के लिए प्रति कारीगर ₹80,000। बिक्री केंद्रों के नवीनीकरण के लिए ₹25 लाख तक।",
  row4_label: "ग्रामोद्योग विकास योजना",
  row4_detail: "अगरबत्ती, मिट्टी के बर्तन, मधुमक्खी पालन, चमड़े के जूते और लकड़ी के खिलौने जैसे व्यवसायों के लिए प्रशिक्षण और टूलकिट/मशीनरी वितरण।",
  row5_label: "सेवा और कृषि उद्योग",
  row5_detail: "इलेक्ट्रीशियन, प्लंबर और पाम गुड़, मसाले तथा ग्रामीण तेल जैसे खाद्य प्रसंस्करण के लिए प्रशिक्षण और टूलकिट शामिल हैं।",
  row6_label: "पात्रता",
  row6_detail: "KVIC/KVIB के साथ पंजीकृत खादी कारीगर और KIs; आयु 18–55 वर्ष; प्रति परिवार एक व्यक्ति। SC/ST, महिलाएँ और BPL श्रेणियों को प्राथमिकता।",
  apply_label: "आवेदन कैसे करें:",
  apply_desc: "इच्छुक कारीगर और संस्थान आधिकारिक पोर्टल के माध्यम से ऑनलाइन आवेदन कर सकते हैं:",
  imgAlt: "खादी ग्रामोद्योग विकास योजना",
},

msmeChampions: {
  title: "MSME चैंपियंस योजना",
  desc1: "MSME चैंपियंस योजना एक समग्र पहल है जो MSME प्रक्रियाओं को आधुनिक बनाने, बर्बादी कम करने और राष्ट्रीय व वैश्विक बाज़ारों में उनकी व्यावसायिक प्रतिस्पर्धात्मकता बढ़ाने के लिए बनाई गई है।",
  desc2_before: "यह योजना तीन प्रमुख स्तंभों के माध्यम से सहायता प्रदान करती है:",
  desc2_bold1: "MSME सस्टेनेबल (ZED)",
  desc2_bold2: "MSME कॉम्पिटिटिव (Lean)",
  desc2_and: "और",
  desc2_bold3: "MSME इनोवेटिव",
  tableTitle: "MSME चैंपियंस योजना: स्तंभ और लाभ",
  th_pillar: "स्तंभ",
  th_focus: "ध्यान केंद्र और उद्देश्य",
  th_support: "मुख्य वित्तीय सहायता और प्रोत्साहन",
  row1_label: "MSME सस्टेनेबल (ZED)",
  row1_focus: "गुणवत्ता और उत्पादकता में सुधार करते हुए पर्यावरणीय प्रभाव को कम करने के लिए Zero Defect Zero Effect विनिर्माण को बढ़ावा देता है।",
  row1_support: "सूक्ष्म, लघु और मध्यम उद्यमों के लिए प्रमाणन पर 80%–60%–50% सब्सिडी; महिला स्वामित्व वाले MSMEs के लिए 100% सब्सिडी।",
  row2_label: "MSME कॉम्पिटिटिव (Lean)",
  row2_focus: "स्थान, ऊर्जा और प्राकृतिक संसाधनों का अनुकूलन करते हुए अस्वीकृति दर और बर्बादी को कम करता है।",
  row2_support: "सरकार कार्यान्वयन लागत के लिए ₹1,08,000 (इंटरमीडिएट) या ₹2,16,000 (एडवांस्ड) तक योगदान देती है। बेसिक स्तर का प्रशिक्षण निःशुल्क है।",
  row3_label: "MSME इनोवेटिव",
  row3_focus: "इनक्यूबेशन और डिज़ाइन से लेकर बौद्धिक संपदा अधिकार (IPR) सुरक्षा तक मूल्य श्रृंखला को समर्थन देता है।",
  row3_support: "इनक्यूबेशन के लिए प्रति विचार ₹15 लाख तक। डिज़ाइन परियोजनाओं के लिए सरकार 60–75% (₹40 लाख तक) योगदान देती है और पेटेंट व ट्रेडमार्क की प्रतिपूर्ति करती है।",
  eligibility_label: "पात्रता:",
  eligibility_detail: "वैध उद्यम रजिस्ट्रेशन वाले सभी MSMEs आवेदन के लिए पात्र हैं।",
  portals_label: "आवेदन पोर्टल:",
  imgAlt: "MSME चैंपियंस योजना",
},

footer: {
  desc: "हम पूरे भारत में कंपनी रजिस्ट्रेशन, अकाउंटिंग और कॉस्ट मैनेजमेंट, GST, MSME और अन्य व्यवसाय अनुपालन सेवाओं में विशेषज्ञ सहायता प्रदान करते हैं।",
  quickLinks: "त्वरित लिंक",
  home: "होम",
  about: "हमारे बारे में",
  services: "सेवाएँ",
  contact: "संपर्क करें",
  ourServices: "हमारी सेवाएँ",
  s1: "कंपनी रजिस्ट्रेशन",
  s2: "GST सहायता",
  s3: "MSME रजिस्ट्रेशन",
  s4: "अकाउंटिंग और कॉस्ट मैनेजमेंट",
  s5: "PAN आवेदन",
  followUs: "हमें फॉलो करें",
  rights: "सर्वाधिकार सुरक्षित।",
},

msmeSubsidy: {
  title: "MSME योजनाएँ / सब्सिडी",
  card1: "उद्यमिता वित्त पोषण कार्यक्रम अवलोकन",
  card2: "सूक्ष्म और लघु उद्यम क्लस्टर विकास कार्यक्रम (MSE-CDP)",
  card3: "नवाचार, ग्रामीण उद्योग और उद्यमिता संवर्धन योजना (ASPIRE)",
  card4: "पीएम विश्वकर्मा – कारीगरों और शिल्पकारों को उनके उद्यम बढ़ाने में सक्षम बनाना",
  card5: "आत्मनिर्भर भारत (SRI) फंड",
  card6: "सूक्ष्म और लघु उद्यमों के लिए क्रेडिट गारंटी योजना (CGTMSE)",
  card7: "खरीद और विपणन सहायता (PMS) योजना",
  card8: "अंतरराष्ट्रीय सहयोग (IC) योजना",
  card9: "खादी ग्रामोद्योग विकास योजना (KGVY)",
  card10: "MSME चैंपियंस योजना",
  card11: "MSME प्रदर्शन उन्नयन और त्वरण (RAMP) योजना",
},



    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;