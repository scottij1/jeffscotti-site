export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  role: string;
  rolePositions: string[];
  processVision: string;
  images: ProjectImage[];
  liveUrl?: string;
  hidden?: boolean;
}

export const projects: Project[] = [
  {
    id: "project-automated-cfe-bill",
    title: "Automated CFE Bill Processing",
    subtitle: "Streamlined Utility Bill Processing System with Mobile and Desktop Support",
    description: [
      "A comprehensive system designed to automate the processing of CFE (Comisión Federal de Electricidad) utility bills. The application features both desktop and mobile interfaces, allowing users to upload, process, and verify utility bill information through various methods including direct API integration and manual uploads with OCR processing. The system includes contextual help, glossary references, and multiple operational modes to accommodate different user workflows.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Mobile-First Design",
      "Responsive UI",
      "OCR Integration",
      "API Integration",
      "Progressive Web App",
    ],
    role: "Lead UX Designer & Frontend Engineer — Designed and implemented a dual-interface system that works seamlessly across desktop and mobile devices. Created an intuitive workflow that guides users through the bill processing journey with contextual help and clear status indicators. Developed a responsive UI that adapts to different screen sizes while maintaining functionality and usability. Integrated with backend OCR services and customer information systems to automate data extraction and verification.",
    rolePositions: ["Lead UX Designer", "Lead Frontend Engineer"],
    processVision:
      "My approach followed an iterative delivery model that evolved into a stand-alone UI while ensuring a seamless user experience. Instead of waiting for a full overhaul, I focused on continuous enhancements that improved usability over time. By incorporating responsive design, the system adapted across desktop and mobile devices, allowing users to navigate workflows effortlessly. A dual-interface system ensured both experienced and new users could choose between power mode for flexibility and guided mode for structured step-by-step assistance.\n\nThe UI integrated status indicators and contextual help to guide users through the bill processing journey, ensuring clarity at every step. Automating data extraction and verification through OCR services and backend integrations streamlined the workflow, reducing errors and manual effort. Over time, the system transitioned from its checklist-based integration to a fully independent UI with intuitive navigation, live support access, and a cleaner, distraction-free experience. This progressive approach minimized risk, allowed adaptability based on user feedback, and built stakeholder confidence while continuously refining the experience.",
    images: [
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/1-enter-rpu-form.webp",
        alt: "Desktop RPU Form Entry",
        caption: "Initial form for entering RPU (customer) information",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/2-fetching-customer-info-loading.webp",
        alt: "Desktop Loading State",
        caption: "Loading state while fetching customer information",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/3-fetching-user-info-async-timeout.webp",
        alt: "Desktop Async Timeout",
        caption: "Asynchronous timeout handling for long-running operations",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/4-confirm-customer-info.webp",
        alt: "Desktop Customer Info Confirmation",
        caption: "Confirmation screen for customer information",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/5-submission-successful.webp",
        alt: "Desktop Submission Success",
        caption: "Successful submission confirmation screen",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/6-manual-cfe-upload.webp",
        alt: "Desktop Manual CFE Upload",
        caption: "Manual CFE bill upload interface",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/7-manual-cfe-upload-progress.webp",
        alt: "Desktop Upload Progress",
        caption: "Progress indicator for bill upload process",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/8-confirm-populated-info.webp",
        alt: "Desktop Populated Info Confirmation",
        caption: "Confirmation of automatically populated information from OCR",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/9-confirm-populated-info-ocr-error.webp",
        alt: "Desktop OCR Error Handling",
        caption: "Error handling for OCR processing issues",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/10-help-inline-sidebar.webp",
        alt: "Desktop Inline Help Sidebar",
        caption: "Contextual help sidebar for user assistance",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/11-help-glossary.webp",
        alt: "Desktop Help Glossary",
        caption: "Glossary of terms to assist users",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/12-switch-mode-buttom.webp",
        alt: "Desktop Mode Switch Button",
        caption: "Button for switching between operational modes",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/13-switch-mode-confirm-dialog.webp",
        alt: "Desktop Mode Switch Confirmation",
        caption: "Confirmation dialog for switching operational modes",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/14-checklist-mode-toggle.webp",
        alt: "Desktop Checklist Mode Toggle",
        caption: "Toggle for enabling checklist mode",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/15-checklist-mode-toggle-dialog.webp",
        alt: "Desktop Checklist Mode Dialog",
        caption: "Dialog for configuring checklist mode options",
      },
      {
        src: "/images/portfolio/bright/automated_cfe_bill/desktop/16-guided-mode-ops-platform-integration.webp",
        alt: "Desktop Ops Platform Integration",
        caption: "Integration with operations platform in guided mode",
      },
    ],
  },
  {
    id: "project-async-wizard",
    title: "Async Wizard UX Flow",
    subtitle: "User Experience Design for Multi-step Solar Installation Process",
    description: [
      "A comprehensive UX flow design for an asynchronous wizard interface that guides users through the solar installation process. The wizard breaks down a complex process into manageable steps, allowing users to complete each stage at their own pace. The design includes various stages such as welcome screens, CFE bill upload, proposal review, identity verification, credit checks, property documentation, technical visits, project design, payment setup, customer approval, and tax situation verification.",
    ],
    technologies: [
      "Figma",
      "UX Design",
      "UI Design",
      "User Flow Mapping",
      "Wireframing",
      "Prototyping",
    ],
    role: "Lead UX Designer — Created an intuitive step-by-step wizard interface that simplifies the complex solar installation process. Designed a user-friendly flow that allows customers to complete steps asynchronously, improving conversion rates and reducing drop-offs. Focused on clear visual cues, progress indicators, and contextual help to guide users through each stage of the process. Collaborated with stakeholders to ensure the design met both user needs and business requirements.",
    rolePositions: ["Lead UX Designer"],
    processVision:
      "Created an intuitive step-by-step wizard interface that simplifies the complex solar installation process. Designed a user-friendly flow that allows customers to complete steps asynchronously, improving conversion rates and reducing drop-offs. Focused on clear visual cues, progress indicators, and contextual help to guide users through each stage of the process. Collaborated with stakeholders to ensure the design met both user needs and business requirements.",
    hidden: false,
    images: [
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/1-wrapper-ui-min.webp",
        alt: "Async Wizard UI Wrapper",
        caption: "Main wrapper UI design for the asynchronous wizard interface",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/2-welcome-welcome-back-flow-min.webp",
        alt: "Welcome and Welcome Back Flow",
        caption: "User flow for new and returning users",
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/3-cfe-bill-flow-min.webp",
        alt: "CFE Bill Flow",
        caption: "Process for uploading and analyzing electricity bills",
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/4-propsal-min.webp",
        alt: "Proposal Review",
        caption: "Solar installation proposal review and customization",
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/5-id-check-min.webp",
        alt: "ID Verification",
        caption: "Identity verification process flow",
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/6-credit-check-min.webp",
        alt: "Credit Check",
        caption: "Credit verification and financing options",
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/7-property-docs-min.webp",
        alt: "Property Documentation",
        caption: "Property documentation upload and verification",
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/8-technical-visit-min.webp",
        alt: "Technical Visit",
        caption: "Technical site visit scheduling and preparation",
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/9-project-design-min.webp",
        alt: "Project Design",
        caption: "Solar installation project design and customization",
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/10-domicillacion-min.webp",
        alt: "Payment Setup",
        caption: "Payment method setup and recurring payment configuration",
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/11-customer-approval-min.webp",
        alt: "Customer Approval",
        caption: "Final customer review and approval process",
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/12-tax-situation-min.webp",
        alt: "Tax Situation",
        caption: "Tax information verification and documentation",
      },
    ],
  },
  {
    id: "project-biocom-mbc",
    title: "Biocom Member Benefits Center",
    subtitle: "Interactive Dashboard for Member Benefits Tracking",
    description: [
      "A comprehensive dashboard designed for Biocom members to track and visualize their membership benefits. The platform provides detailed insights into purchasing savings, event attendance, committee memberships, and additional benefits, allowing members to maximize the value of their membership.",
    ],
    technologies: ["JavaScript", "HTML5", "CSS", "Chart.js"],
    role: "Lead Frontend Engineer & UI/UX Designer — Developed an intuitive, data-driven dashboard that transforms complex membership data into actionable insights. Created interactive visualizations for purchasing savings and event attendance metrics. Designed a responsive interface that works seamlessly across devices, with special attention to data export and printing functionality. Implemented user-friendly filtering and sorting options to help members quickly find relevant information.",
    rolePositions: ["Lead Frontend Engineer", "Lead UI/UX Designer", "Architect"],
    processVision:
      "Developed an intuitive, data-driven dashboard as a proof-of-concept prototype for Phase 1 of a multi-phased project. The existing system was tightly coupled within a WordPress site, relying on outdated Salesforce APIs that passed data through a PHP-based middleware layer before being processed by an aging jQuery front end. My role was to refactor and redesign the front end to create a modern, polished, and scalable interface while improving maintainability.\n\nTo meet tight timelines and business goals, I hired a backend engineer to refactor the Salesforce APIs and made the strategic decision to bypass the PHP layer entirely, integrating directly with Salesforce APIs to fetch data. In the process, I applied separation of concerns, modular patterns, and a rudimentary MVC approach to streamline development and deliver a functional prototype.\n\nThe redesigned dashboard featured interactive visualizations for purchasing savings and event attendance metrics, user-friendly filtering and sorting, and a responsive design that worked seamlessly across devices, particularly optimizing data export and printing functionality. Originally planned as an interim solution before transitioning to a standalone React app, the prototype was so well received by leadership and end users that Biocom leadership opted to continue using this version as the final product.",
    liveUrl: "https://www.biocom.org/member-benefits-center/?id=001A000000D8SMTIA3",
    images: [
      {
        src: "/images/portfolio/biocom/member_benefits_center/1-overview.webp",
        alt: "Member Benefits Dashboard Overview",
        caption: "Main dashboard view showing key membership benefits metrics",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/4-purchasing-savings.webp",
        alt: "Purchasing Savings Section",
        caption: "Detailed breakdown of purchasing savings with interactive chart",
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/6-purchasing-savings-chart-options-dropdown.webp",
        alt: "Chart Options Dropdown",
        caption: "Customizable chart options for different data visualizations",
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/7-events-attended.webp",
        alt: "Events Attended Section",
        caption: "Events attendance tracking with filterable list",
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/8-purchasing-savings-export-chart-modal.webp",
        alt: "Export Chart Modal",
        caption: "Modal for exporting chart data in various formats",
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/9-events-attended-view-attendees-modal.webp",
        alt: "View Attendees Modal",
        caption: "Detailed view of event attendees from your organization",
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/10-committee-memberships.webp",
        alt: "Committee Memberships Section",
        caption: "Overview of committee memberships and participation",
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/11-additional-benefits.webp",
        alt: "Additional Benefits Section",
        caption: "Summary of additional membership benefits and resources",
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/2-export-data-modal.webp",
        alt: "Export Data Modal",
        caption: "Modal for exporting membership data in various formats",
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/3-print-data-modal.webp",
        alt: "Print Data Modal",
        caption: "Print-friendly view of membership data",
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/5-purchasing-savings-export-data-modal.webp",
        alt: "Purchasing Savings Export Modal",
        caption: "Specialized export options for purchasing savings data",
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/12-collapsed-menu.webp",
        alt: "Collapsed Menu View",
        caption: "Responsive design with collapsed navigation menu for mobile devices",
      },
    ],
  },
  {
    id: "project-biocom-site",
    title: "Biocom Corporate Website",
    subtitle: "Headless WordPress with React/Next.js Frontend",
    description: [
      "A comprehensive redesign and architectural overhaul of Biocom's corporate website, implementing a headless WordPress instance with a React/Next.js front end. This project consolidated multiple company websites and properties under the primary domain, concentrating web traffic and streamlining content management while providing an enhanced user experience.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "WordPress",
      "PHP",
      "REST API",
      "Salesforce Integration",
      "Stripe Integration",
    ],
    role: "Lead Frontend Engineer & Project Manager — Led the development team and provided direction on front-end application architecture while coordinating with back-end engineers to optimize microservices. Championed the design and modernization of user interfaces across proprietary systems and applications, enriching user experience and driving member engagement by incorporating new features to improve community sites. Liaised with key internal stakeholders to gather project requirements and provide status updates, translating highly technical concepts into layman's terms to facilitate effective communication.",
    rolePositions: [
      "Lead Frontend Engineer",
      "Lead Architect",
      "Senior UI/UX Designer",
      "Project Manager",
    ],
    processVision:
      "Developed and executed a strategy to unify Biocom's scattered web presence under a single, scalable architecture, ensuring that all sub-sites could be dynamically managed within a centralized CMS. Designed and implemented a headless WordPress instance with a React/Next.js front end, allowing new microsites to be effortlessly spun up or retired while maintaining a cohesive brand and user experience.\n\nLed Architecture, Design, and Engineering, while also shaping Information Architecture, playing a key role in structuring the site map and navigation to optimize discoverability, usability, and marketing impact. Engineered a modular content system that streamlined governance, improved SEO, and concentrated web traffic under the primary domain—reinforcing Biocom's digital presence.\n\nAdditionally, architected and implemented a location-based content system that tailored site content based on the user's detected location (with permission). This ensured visitors received region-specific information relevant to their nearest Biocom satellite location, enhancing engagement and making the site more actionable for members and prospects.\n\nFurther expanded functionality by developing a full-stack event management platform with custom plugins for event registration and membership management, integrating Salesforce and Stripe POS systems. Designed a <a href=\"javascript:void(0)\" onclick=\"window.openProjectView('project-biocom-mbc')\">custom dashboard</a> for Sales and Membership teams, surfacing data visualizations and KPIs to measure engagement, ROI, and retention—empowering strategic membership growth efforts.",
    liveUrl: "https://www.biocom.org",
    images: [
      {
        src: "/images/portfolio/biocom/biocom.org/1-homepage.webp",
        alt: "Biocom Homepage",
        caption: "Redesigned Biocom homepage with modern UI and improved navigation",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/portfolio/biocom/biocom.org/2-events-directory.webp",
        alt: "Events Directory",
        caption: "Comprehensive events directory with filtering options",
      },
      {
        src: "/images/portfolio/biocom/biocom.org/3-biocom-event.webp",
        alt: "Individual Event Page",
        caption: "Detailed event page with registration options",
      },
      {
        src: "/images/portfolio/biocom/biocom.org/4-biocom-committee.webp",
        alt: "Committee Page",
        caption: "Committee information and membership details",
      },
      {
        src: "/images/portfolio/biocom/biocom.org/5-member-directory.webp",
        alt: "Member Directory",
        caption: "Searchable member directory with filtering capabilities",
      },
      {
        src: "/images/portfolio/biocom/biocom.org/6-member-landing-page.webp",
        alt: "Member Landing Page",
        caption: "Personalized member landing page with relevant information",
      },
      {
        src: "/images/portfolio/biocom/biocom.org/7-event-registration-address-capture.webp",
        alt: "Event Registration - Address Capture",
        caption: "Streamlined event registration process - address capture step",
      },
      {
        src: "/images/portfolio/biocom/biocom.org/8-event-registration-enter-email.webp",
        alt: "Event Registration - Email Entry",
        caption: "Event registration email verification step",
      },
      {
        src: "/images/portfolio/biocom/biocom.org/9-event-registration-payment.webp",
        alt: "Event Registration - Payment",
        caption: "Secure payment processing for event registration",
      },
      {
        src: "/images/portfolio/biocom/biocom.org/12-custom-upload-page.webp",
        alt: "Custom Upload Interface",
        caption: "Custom file upload interface for member submissions",
      },
      {
        src: "/images/portfolio/biocom/biocom.org/13-custom-upload-page-done.webp",
        alt: "Upload Confirmation",
        caption: "Confirmation screen after successful file upload",
      },
    ],
  },
  {
    id: "project-modalis",
    title: "Modalis",
    subtitle: "Media Asset Management and Distribution System",
    description: [
      "Modalis is a powerful media asset management and distribution platform tailored for media companies to efficiently organize, tag, and deliver digital content. It offers robust metadata management, workflow automation, and seamless multi-platform distribution.",
    ],
    technologies: ["Angular", "Firebase", "Node.js", "TypeScript", "HTML5", "SCSS"],
    role: "Lead Frontend Engineer & Lead UI/UX Designer — Spearheaded the development of a highly interactive and scalable UI in Angular, ensuring fluid navigation and efficient media handling. Crafted an intuitive user experience that streamlined metadata tagging, bulk asset operations, and workflow automation. Focused on performance optimizations, ensuring smooth handling of large media libraries. Led the UX strategy, refining interactions, accessibility, and visual consistency for an enhanced user experience.",
    rolePositions: ["Lead Frontend Engineer", "Lead UI/UX Designer"],
    processVision:
      "Spearheaded the development of a highly interactive and scalable UI in Angular, ensuring fluid navigation and efficient media handling. Crafted an intuitive user experience that streamlined metadata tagging, bulk asset operations, and workflow automation. Focused on performance optimizations, ensuring smooth handling of large media libraries. Led the UX strategy, refining interactions, accessibility, and visual consistency for an enhanced user experience.",
    images: [
      {
        src: "/images/portfolio/modalis/1-large-media-cards.webp",
        alt: "Modalis Media Cards",
        caption: "Large media card view showing content thumbnails with metadata",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/portfolio/modalis/1-large-media-cards-hover1.webp",
        alt: "Modalis Media Cards Hover State",
        caption: "Hover state showing quick actions for media items",
      },
      {
        src: "/images/portfolio/modalis/1-large-media-cards-hover2.webp",
        alt: "Modalis Media Cards Hover State Alternative",
        caption: "Alternative hover state with expanded metadata",
      },
      {
        src: "/images/portfolio/modalis/1-large-media-cards-selected1.webp",
        alt: "Modalis Media Cards Selected State",
        caption: "Selected state for media items showing batch actions",
      },
      {
        src: "/images/portfolio/modalis/1-large-media-cards-selected2.webp",
        alt: "Modalis Media Cards Multiple Selection",
        caption: "Multiple selection state with batch action toolbar",
      },
      {
        src: "/images/portfolio/modalis/2-header-tooltip-admin.webp",
        alt: "Modalis Header Admin Tooltip",
        caption: "Admin section tooltip in the header navigation",
      },
      {
        src: "/images/portfolio/modalis/2-header-tooltip-jobs.webp",
        alt: "Modalis Header Jobs Tooltip",
        caption: "Jobs section tooltip showing processing status",
      },
      {
        src: "/images/portfolio/modalis/2-header-tooltip-closemeun.webp",
        alt: "Modalis Header Close Menu",
        caption: "Close menu interaction in the header",
      },
      {
        src: "/images/portfolio/modalis/2-header-user-menu.webp",
        alt: "Modalis User Menu",
        caption: "User menu dropdown with account options",
      },
      {
        src: "/images/portfolio/modalis/3-medium-media-cards.webp",
        alt: "Modalis Medium Media Cards",
        caption: "Medium-sized media card view for compact browsing",
      },
      {
        src: "/images/portfolio/modalis/4-small-media-cards.webp",
        alt: "Modalis Small Media Cards",
        caption: "Small media card view for high-density content browsing",
      },
      {
        src: "/images/portfolio/modalis/5-list-media.webp",
        alt: "Modalis List Media View",
        caption: "List view showing detailed metadata in tabular format",
      },
      {
        src: "/images/portfolio/modalis/5-list-media-embed.webp",
        alt: "Modalis List Media Embed",
        caption: "Embed dialog for sharing media content",
      },
      {
        src: "/images/portfolio/modalis/5-list-media-menu.webp",
        alt: "Modalis List Media Menu",
        caption: "Context menu for list view items",
      },
      {
        src: "/images/portfolio/modalis/5-list-media-quick-edit.webp",
        alt: "Modalis List Media Quick Edit",
        caption: "Quick edit panel for updating metadata",
      },
      {
        src: "/images/portfolio/modalis/5-list-media-selected.webp",
        alt: "Modalis List Media Selected",
        caption: "Selected state in list view with action toolbar",
      },
      {
        src: "/images/portfolio/modalis/5-list-media-upload.webp",
        alt: "Modalis List Media Upload",
        caption: "Upload button in list view",
      },
      {
        src: "/images/portfolio/modalis/5-list-media-upload-open.webp",
        alt: "Modalis List Media Upload Open",
        caption: "Open upload dialog showing upload options",
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-embed.webp",
        alt: "Modalis Sidebar Embed",
        caption: "Sidebar embed panel for content sharing",
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-jobs.webp",
        alt: "Modalis Sidebar Jobs",
        caption: "Jobs sidebar showing processing tasks",
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-notifications.webp",
        alt: "Modalis Sidebar Notifications",
        caption: "Notifications panel in sidebar",
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-notifications-menu.webp",
        alt: "Modalis Sidebar Notifications Menu",
        caption: "Notifications menu with filtering options",
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-notifications-select1.webp",
        alt: "Modalis Sidebar Notifications Selection",
        caption: "Selected notification with action options",
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-notifications-select2.webp",
        alt: "Modalis Sidebar Notifications Multiple Selection",
        caption: "Multiple notification selection",
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-notifications-batch-edit.webp",
        alt: "Modalis Sidebar Notifications Batch Edit",
        caption: "Batch editing notifications",
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-quick-edit.webp",
        alt: "Modalis Sidebar Quick Edit",
        caption: "Quick edit panel in sidebar",
      },
    ],
  },
  {
    id: "project-transcript-editor",
    title: "Closed Caption Transcript Editor",
    subtitle: "AI-Powered Web-Based Tool for Editing Video Transcripts and Captions",
    description: [
      "A sophisticated web-based platform that automates video transcription and caption editing. Videos are first processed through a proprietary cloud-based transcoding service, then transcribed using Azure Speech-to-Text. The transcriptions are stored in Firebase, where an AI-powered analysis tool detects potential errors, highlights them, and suggests corrections, allowing users to refine captions with a single click.",
    ],
    technologies: [
      "Angular",
      "Azure",
      "Firebase",
      "Node.js",
      "TypeScript",
      "HTML5 Video",
      "WebVTT",
      "SCSS",
    ],
    role: "Lead Frontend Engineer & Lead UI/UX Designer — Engineered a timeline-based transcript editor in Angular, enabling seamless AI-assisted transcription review and real-time editing. Integrated Azure transcription services with Firebase to provide users with an efficient, AI-enhanced workflow. Designed a clean, intuitive UI that prioritized accessibility and streamlined error correction. Led user research and iterative UX improvements, refining the interaction design to make transcript editing faster and more user-friendly.",
    rolePositions: ["Lead Frontend Engineer", "Lead UI/UX Designer"],
    processVision:
      "Engineered a timeline-based transcript editor in Angular, enabling seamless AI-assisted transcription review and real-time editing. Integrated Azure transcription services with Firebase to provide users with an efficient, AI-enhanced workflow. Designed a clean, intuitive UI that prioritized accessibility and streamlined error correction. Led user research and iterative UX improvements, refining the interaction design to make transcript editing faster and more user-friendly.",
    images: [
      {
        src: "/images/portfolio/transcript_edit/1-transcript-edit-all.webp",
        alt: "Transcript Editor Full Interface",
        caption: "Complete interface showing transcript editing capabilities",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/portfolio/transcript_edit/1a-transcript-edit-notes-closed.webp",
        alt: "Transcript Editor with Notes Closed",
        caption: "Interface with notes panel closed for more editing space",
      },
      {
        src: "/images/portfolio/transcript_edit/1c-transcript-edit-colorpicker.webp",
        alt: "Transcript Editor Color Picker",
        caption: "Color picker for customizing transcript highlights",
      },
      {
        src: "/images/portfolio/transcript_edit/1d-colorpicker-hover.webp",
        alt: "Transcript Editor Color Picker Hover",
        caption: "Color picker hover state showing color selection",
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-2.webp",
        alt: "Transcript Editor Hover State 1",
        caption: "Interactive hover state showing editing options",
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-3.webp",
        alt: "Transcript Editor Hover State 2",
        caption: "Additional hover state interactions",
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-4.webp",
        alt: "Transcript Editor Hover State 3",
        caption: "Hover state showing text selection options",
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-5.webp",
        alt: "Transcript Editor Hover State 4",
        caption: "Hover state with contextual editing tools",
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-6.webp",
        alt: "Transcript Editor Hover State 5",
        caption: "Advanced editing options on hover",
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-7.webp",
        alt: "Transcript Editor Hover State 6",
        caption: "Final hover state interaction",
      },
    ],
  },
  {
    id: "project-quiz-creator",
    title: "Video Quiz Creator",
    subtitle: "Interactive Tool for Creating Video-Based Quizzes and Assessments",
    description: [
      "An innovative learning tool that allows educators to embed interactive quizzes directly into video content. Questions can be placed at precise timestamps, tracking student engagement and generating insightful performance analytics. The system is powered by Azure for backend processing and storage, ensuring scalability and reliability.",
    ],
    technologies: ["Angular", "Azure", "Node.js", "TypeScript", "Video.js", "SCSS"],
    role: "Lead Frontend Engineer & Lead UI/UX Designer — Led the development of a dynamic, engaging quiz-building interface in Angular, making it effortless for instructors to create and embed interactive assessments. Built an instructor-focused analytics dashboard, providing rich insights into student performance. Focused on UX refinement, designing an intuitive workflow that simplified quiz configuration and improved student engagement. Ensured a smooth integration with Azure services, optimizing data flow and real-time response tracking.",
    rolePositions: ["Lead Frontend Engineer", "Lead UI/UX Designer"],
    processVision:
      "Led the development of a dynamic, engaging quiz-building interface in Angular, making it effortless for instructors to create and embed interactive assessments. Built an instructor-focused analytics dashboard, providing rich insights into student performance. Focused on UX refinement, designing an intuitive workflow that simplified quiz configuration and improved student engagement. Ensured a smooth integration with Azure services, optimizing data flow and real-time response tracking.",
    images: [
      {
        src: "/images/portfolio/quiz_creator/1-standard-no-quizzes.webp",
        alt: "Quiz Creator Empty State",
        caption: "Initial view with no quizzes created",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/portfolio/quiz_creator/2-create-quiz-modal.webp",
        alt: "Create Quiz Modal",
        caption: "Modal for creating a new quiz",
      },
      {
        src: "/images/portfolio/quiz_creator/3-select-question-type.webp",
        alt: "Select Question Type",
        caption: "Interface for selecting question type",
      },
      {
        src: "/images/portfolio/quiz_creator/3a-time-set-timeline.webp",
        alt: "Timeline for Setting Question Time",
        caption: "Timeline interface for setting when questions appear",
      },
      {
        src: "/images/portfolio/quiz_creator/4-select-question-drop-options.webp",
        alt: "Question Type Dropdown",
        caption: "Dropdown menu for selecting question types",
      },
      {
        src: "/images/portfolio/quiz_creator/5-multi-choice-selected.webp",
        alt: "Multiple Choice Selected",
        caption: "Multiple choice question type selected",
      },
      {
        src: "/images/portfolio/quiz_creator/7-config-mulit-choice.webp",
        alt: "Configure Multiple Choice Question",
        caption: "Interface for configuring multiple choice questions",
      },
      {
        src: "/images/portfolio/quiz_creator/9-config-multi-choice-response.webp",
        alt: "Configure Response Options",
        caption: "Setting up response options for multiple choice questions",
      },
      {
        src: "/images/portfolio/quiz_creator/10-questions-overview.webp",
        alt: "Questions Overview",
        caption: "Overview of all questions in the quiz",
      },
      {
        src: "/images/portfolio/quiz_creator/14-add-select-truefalse.webp",
        alt: "Add True/False Question",
        caption: "Adding a true/false question to the quiz",
      },
      {
        src: "/images/portfolio/quiz_creator/17-config-truefalse.webp",
        alt: "Configure True/False Question",
        caption: "Configuring a true/false question",
      },
      {
        src: "/images/portfolio/quiz_creator/19-reflection.webp",
        alt: "Reflection Question",
        caption: "Adding a reflection question to the quiz",
      },
      {
        src: "/images/portfolio/quiz_creator/21a-overview-complete-quiz.webp",
        alt: "Complete Quiz Overview",
        caption: "Overview of a completed quiz with all question types",
      },
      {
        src: "/images/portfolio/quiz_creator/24-preview-quiz-1.webp",
        alt: "Quiz Preview 1",
        caption: "Preview of how the quiz appears to students",
      },
      {
        src: "/images/portfolio/quiz_creator/26-preview-quiz-3.webp",
        alt: "Quiz Preview 2",
        caption: "Another view of the quiz preview",
      },
      {
        src: "/images/portfolio/quiz_creator/32-canvas-embed-example.webp",
        alt: "Canvas LMS Integration",
        caption: "Example of the quiz embedded in Canvas LMS",
      },
    ],
  },
];

// Mobile images for the automated CFE bill project
export const automatedCfeBillMobileImages: ProjectImage[] = [
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/1-enter-rpu-form.webp",
    alt: "Mobile RPU Form Entry",
    caption: "Mobile interface for entering RPU (customer) information",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/2-featching-customer-info-loading.webp",
    alt: "Mobile Loading State",
    caption: "Mobile loading state while fetching customer information",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/3-fetching-customer-info-async-error.webp",
    alt: "Mobile Async Error",
    caption: "Mobile error handling for asynchronous operations",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/4-confirm-customer-info.webp",
    alt: "Mobile Customer Info Confirmation",
    caption: "Mobile confirmation screen for customer information",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/5-submission-successful.webp",
    alt: "Mobile Submission Success",
    caption: "Mobile successful submission confirmation screen",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/6-manual-cfe-upload.webp",
    alt: "Mobile Manual CFE Upload",
    caption: "Mobile interface for manual CFE bill upload",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/7-manual-cfe-upload-accordion.webp",
    alt: "Mobile Upload Accordion",
    caption: "Mobile accordion interface for bill upload options",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/8-manual-cfe-upload-progress.webp",
    alt: "Mobile Upload Progress",
    caption: "Mobile progress indicator for bill upload process",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/9-manual-cfe-upload-confirm.webp",
    alt: "Mobile Upload Confirmation",
    caption: "Mobile confirmation screen after bill upload",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/10-progress-menu.webp",
    alt: "Mobile Progress Menu",
    caption: "Mobile progress menu showing completion status",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/11-switch-modal-action-sheet.webp",
    alt: "Mobile Mode Switch Action Sheet",
    caption: "Mobile action sheet for switching operational modes",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/12-help-action-sheet.webp",
    alt: "Mobile Help Action Sheet",
    caption: "Mobile action sheet for accessing help options",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/13-help-contact-support-action-sheet.webp",
    alt: "Mobile Contact Support Action Sheet",
    caption: "Mobile action sheet for contacting support",
  },
  {
    src: "/images/portfolio/bright/automated_cfe_bill/mobile/14-help-glossary.webp",
    alt: "Mobile Help Glossary",
    caption: "Mobile glossary of terms to assist users",
  },
];

// Helper function to get a project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
