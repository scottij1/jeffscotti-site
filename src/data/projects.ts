export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  role: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    "id": "project-async-wizard",
    "title": "Async Wizard UX Flow",
    "subtitle": "User Experience Design for Multi-step Solar Installation Process",
    "description": [
      "A comprehensive UX flow design for an asynchronous wizard interface that guides users through the solar installation process. The wizard breaks down a complex process into manageable steps, allowing users to complete each stage at their own pace. The design includes various stages such as welcome screens, CFE bill upload, proposal review, identity verification, credit checks, property documentation, technical visits, project design, payment setup, customer approval, and tax situation verification."
    ],
    "technologies": ["Figma", "UX Design", "UI Design", "User Flow Mapping", "Wireframing", "Prototyping"],
    "role": "Lead UX Designer — Created an intuitive step-by-step wizard interface that simplifies the complex solar installation process. Designed a user-friendly flow that allows customers to complete steps asynchronously, improving conversion rates and reducing drop-offs. Focused on clear visual cues, progress indicators, and contextual help to guide users through each stage of the process. Collaborated with stakeholders to ensure the design met both user needs and business requirements.",
    images: [
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/1-wrapper-ui-min.jpg",
        alt: "Async Wizard UI Wrapper",
        caption: "Main wrapper UI design for the asynchronous wizard interface"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/2-welcome-welcome-back-flow-min.jpg",
        alt: "Welcome and Welcome Back Flow",
        caption: "User flow for new and returning users"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/3-cfe-bill-flow-min.jpg",
        alt: "CFE Bill Flow",
        caption: "Process for uploading and analyzing electricity bills"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/4-propsal-min.jpg",
        alt: "Proposal Review",
        caption: "Solar installation proposal review and customization"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/5-id-check-min.jpg",
        alt: "ID Verification",
        caption: "Identity verification process flow"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/6-credit-check-min.jpg",
        alt: "Credit Check",
        caption: "Credit verification and financing options"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/7-property-docs-min.jpg",
        alt: "Property Documentation",
        caption: "Property documentation upload and verification"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/8-technical-visit-min.jpg",
        alt: "Technical Visit",
        caption: "Technical site visit scheduling and preparation"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/9-project-design-min.jpg",
        alt: "Project Design",
        caption: "Solar installation project design and customization"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/10-domicillacion-min.jpg",
        alt: "Payment Setup",
        caption: "Payment method setup and recurring payment configuration"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/11-customer-approval-min.jpg",
        alt: "Customer Approval",
        caption: "Final customer review and approval process"
      },
      {
        src: "/images/portfolio/bright/async_wizard_ux_flow/12-tax-situation-min.jpg",
        alt: "Tax Situation",
        caption: "Tax information verification and documentation"
      }
    ]
  },
  {
    "id": "project-biocom-mbc",
    "title": "Biocom Member Benefits Center",
    "subtitle": "Interactive Dashboard for Member Benefits Tracking",
    "description": [
      "A comprehensive dashboard designed for Biocom members to track and visualize their membership benefits. The platform provides detailed insights into purchasing savings, event attendance, committee memberships, and additional benefits, allowing members to maximize the value of their membership."
    ],
    "technologies": ["React", "TypeScript", "Chart.js", "Material UI", "CSS3", "Responsive Design"],
    "role": "Lead Front-End Engineer & UI/UX Designer — Developed an intuitive, data-driven dashboard that transforms complex membership data into actionable insights. Created interactive visualizations for purchasing savings and event attendance metrics. Designed a responsive interface that works seamlessly across devices, with special attention to data export and printing functionality. Implemented user-friendly filtering and sorting options to help members quickly find relevant information.",
    images: [
      {
        src: "/images/portfolio/biocom/member_benefits_center/1-overview.png",
        alt: "Member Benefits Dashboard Overview",
        caption: "Main dashboard view showing key membership benefits metrics"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/4-purchasing-savings.png",
        alt: "Purchasing Savings Section",
        caption: "Detailed breakdown of purchasing savings with interactive chart"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/6-purchasing-savings-chart-options-dropdown.png",
        alt: "Chart Options Dropdown",
        caption: "Customizable chart options for different data visualizations"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/7-events-attended.png",
        alt: "Events Attended Section",
        caption: "Events attendance tracking with filterable list"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/8-purchasing-savings-export-chart-modal.png",
        alt: "Export Chart Modal",
        caption: "Modal for exporting chart data in various formats"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/9-events-attended-view-attendees-modal.png",
        alt: "View Attendees Modal",
        caption: "Detailed view of event attendees from your organization"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/10-committee-memberships.png",
        alt: "Committee Memberships Section",
        caption: "Overview of committee memberships and participation"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/11-additional-benefits.png",
        alt: "Additional Benefits Section",
        caption: "Summary of additional membership benefits and resources"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/2-export-data-modal.png",
        alt: "Export Data Modal",
        caption: "Modal for exporting membership data in various formats"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/3-print-data-modal.png",
        alt: "Print Data Modal",
        caption: "Print-friendly view of membership data"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/5-purchasing-savings-export-data-modal.png",
        alt: "Purchasing Savings Export Modal",
        caption: "Specialized export options for purchasing savings data"
      },
      {
        src: "/images/portfolio/biocom/member_benefits_center/12-collapsed-menu.png",
        alt: "Collapsed Menu View",
        caption: "Responsive design with collapsed navigation menu for mobile devices"
      }
    ]
  },
  {
      "id": "project-modalis",
      "title": "Modalis",
      "subtitle": "Media Asset Management and Distribution System",
      "description": [
        "Modalis is a powerful media asset management and distribution platform tailored for media companies to efficiently organize, tag, and deliver digital content. It offers robust metadata management, workflow automation, and seamless multi-platform distribution."
      ],
      "technologies": ["Angular", "Firebase", "Node.js", "TypeScript", "HTML5", "SCSS"],
      "role": "Lead Front-End Engineer & Lead UI/UX Designer — Spearheaded the development of a highly interactive and scalable UI in Angular, ensuring fluid navigation and efficient media handling. Crafted an intuitive user experience that streamlined metadata tagging, bulk asset operations, and workflow automation. Focused on performance optimizations, ensuring smooth handling of large media libraries. Led the UX strategy, refining interactions, accessibility, and visual consistency for an enhanced user experience.",
      images: [
      {
        src: "/images/portfolio/modalis/1-large-media-cards.png",
        alt: "Modalis Media Cards",
        caption: "Large media card view showing content thumbnails with metadata"
      },
      {
        src: "/images/portfolio/modalis/1-large-media-cards-hover1.png",
        alt: "Modalis Media Cards Hover State",
        caption: "Hover state showing quick actions for media items"
      },
      {
        src: "/images/portfolio/modalis/1-large-media-cards-hover2.png",
        alt: "Modalis Media Cards Hover State Alternative",
        caption: "Alternative hover state with expanded metadata"
      },
      {
        src: "/images/portfolio/modalis/1-large-media-cards-selected1.png",
        alt: "Modalis Media Cards Selected State",
        caption: "Selected state for media items showing batch actions"
      },
      {
        src: "/images/portfolio/modalis/1-large-media-cards-selected2.png",
        alt: "Modalis Media Cards Multiple Selection",
        caption: "Multiple selection state with batch action toolbar"
      },
      {
        src: "/images/portfolio/modalis/2-header-tooltip-admin.png",
        alt: "Modalis Header Admin Tooltip",
        caption: "Admin section tooltip in the header navigation"
      },
      {
        src: "/images/portfolio/modalis/2-header-tooltip-jobs.png",
        alt: "Modalis Header Jobs Tooltip",
        caption: "Jobs section tooltip showing processing status"
      },
      {
        src: "/images/portfolio/modalis/2-header-tooltip-closemeun.png",
        alt: "Modalis Header Close Menu",
        caption: "Close menu interaction in the header"
      },
      {
        src: "/images/portfolio/modalis/2-header-user-menu.png",
        alt: "Modalis User Menu",
        caption: "User menu dropdown with account options"
      },
      {
        src: "/images/portfolio/modalis/3-medium-media-cards.png",
        alt: "Modalis Medium Media Cards",
        caption: "Medium-sized media card view for compact browsing"
      },
      {
        src: "/images/portfolio/modalis/4-small-media-cards.png",
        alt: "Modalis Small Media Cards",
        caption: "Small media card view for high-density content browsing"
      },
      {
        src: "/images/portfolio/modalis/5-list-media.png",
        alt: "Modalis List Media View",
        caption: "List view showing detailed metadata in tabular format"
      },
      {
        src: "/images/portfolio/modalis/5-list-media-embed.png",
        alt: "Modalis List Media Embed",
        caption: "Embed dialog for sharing media content"
      },
      {
        src: "/images/portfolio/modalis/5-list-media-menu.png",
        alt: "Modalis List Media Menu",
        caption: "Context menu for list view items"
      },
      {
        src: "/images/portfolio/modalis/5-list-media-quick-edit.png",
        alt: "Modalis List Media Quick Edit",
        caption: "Quick edit panel for updating metadata"
      },
      {
        src: "/images/portfolio/modalis/5-list-media-selected.png",
        alt: "Modalis List Media Selected",
        caption: "Selected state in list view with action toolbar"
      },
      {
        src: "/images/portfolio/modalis/5-list-media-upload.png",
        alt: "Modalis List Media Upload",
        caption: "Upload button in list view"
      },
      {
        src: "/images/portfolio/modalis/5-list-media-upload-open.png",
        alt: "Modalis List Media Upload Open",
        caption: "Open upload dialog showing upload options"
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-embed.png",
        alt: "Modalis Sidebar Embed",
        caption: "Sidebar embed panel for content sharing"
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-jobs.png",
        alt: "Modalis Sidebar Jobs",
        caption: "Jobs sidebar showing processing tasks"
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-notifications.png",
        alt: "Modalis Sidebar Notifications",
        caption: "Notifications panel in sidebar"
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-notifications-menu.png",
        alt: "Modalis Sidebar Notifications Menu",
        caption: "Notifications menu with filtering options"
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-notifications-select1.png",
        alt: "Modalis Sidebar Notifications Selection",
        caption: "Selected notification with action options"
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-notifications-select2.png",
        alt: "Modalis Sidebar Notifications Multiple Selection",
        caption: "Multiple notification selection"
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-notifications-batch-edit.png",
        alt: "Modalis Sidebar Notifications Batch Edit",
        caption: "Batch editing notifications"
      },
      {
        src: "/images/portfolio/modalis/5-sidebar-quick-edit.png",
        alt: "Modalis Sidebar Quick Edit",
        caption: "Quick edit panel in sidebar"
      }
    ]
  },
  {
   "id": "project-transcript-editor",
      "title": "Closed Caption Transcript Editor",
      "subtitle": "AI-Powered Web-Based Tool for Editing Video Transcripts and Captions",
      "description": [
        "A sophisticated web-based platform that automates video transcription and caption editing. Videos are first processed through a proprietary cloud-based transcoding service, then transcribed using Azure Speech-to-Text. The transcriptions are stored in Firebase, where an AI-powered analysis tool detects potential errors, highlights them, and suggests corrections, allowing users to refine captions with a single click."
      ],
      "technologies": ["Angular", "Azure", "Firebase", "Node.js", "TypeScript", "HTML5 Video", "WebVTT", "SCSS"],
      "role": "Lead Front-End Engineer & Lead UI/UX Designer — Engineered a timeline-based transcript editor in Angular, enabling seamless AI-assisted transcription review and real-time editing. Integrated Azure transcription services with Firebase to provide users with an efficient, AI-enhanced workflow. Designed a clean, intuitive UI that prioritized accessibility and streamlined error correction. Led user research and iterative UX improvements, refining the interaction design to make transcript editing faster and more user-friendly.",
      images: [
      {
        src: "/images/portfolio/transcript_edit/1-transcript-edit-all.png",
        alt: "Transcript Editor Full Interface",
        caption: "Complete interface showing transcript editing capabilities"
      },
      {
        src: "/images/portfolio/transcript_edit/1a-transcript-edit-notes-closed.png",
        alt: "Transcript Editor with Notes Closed",
        caption: "Interface with notes panel closed for more editing space"
      },
      {
        src: "/images/portfolio/transcript_edit/1c-transcript-edit-colorpicker.png",
        alt: "Transcript Editor Color Picker",
        caption: "Color picker for customizing transcript highlights"
      },
      {
        src: "/images/portfolio/transcript_edit/1d-colorpicker-hover.png",
        alt: "Transcript Editor Color Picker Hover",
        caption: "Color picker hover state showing color selection"
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-2.png",
        alt: "Transcript Editor Hover State 1",
        caption: "Interactive hover state showing editing options"
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-3.png",
        alt: "Transcript Editor Hover State 2",
        caption: "Additional hover state interactions"
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-4.png",
        alt: "Transcript Editor Hover State 3",
        caption: "Hover state showing text selection options"
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-5.png",
        alt: "Transcript Editor Hover State 4",
        caption: "Hover state with contextual editing tools"
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-6.png",
        alt: "Transcript Editor Hover State 5",
        caption: "Advanced editing options on hover"
      },
      {
        src: "/images/portfolio/transcript_edit/2-hover-7.png",
        alt: "Transcript Editor Hover State 6",
        caption: "Final hover state interaction"
      }
    ]
  },
  {
    "id": "project-quiz-creator",
    "title": "Video Quiz Creator",
    "subtitle": "Interactive Tool for Creating Video-Based Quizzes and Assessments",
    "description": [
      "An innovative learning tool that allows educators to embed interactive quizzes directly into video content. Questions can be placed at precise timestamps, tracking student engagement and generating insightful performance analytics. The system is powered by Azure for backend processing and storage, ensuring scalability and reliability."
    ],
    "technologies": ["Angular", "Azure", "Node.js", "TypeScript", "Video.js", "SCSS"],
    "role": "Lead Front-End Engineer & Lead UI/UX Designer — Led the development of a dynamic, engaging quiz-building interface in Angular, making it effortless for instructors to create and embed interactive assessments. Built an instructor-focused analytics dashboard, providing rich insights into student performance. Focused on UX refinement, designing an intuitive workflow that simplified quiz configuration and improved student engagement. Ensured a smooth integration with Azure services, optimizing data flow and real-time response tracking.",
      images: [
      {
        src: "/images/portfolio/quiz_creator/1-standard-no-quizzes.png",
        alt: "Quiz Creator Empty State",
        caption: "Initial view with no quizzes created"
      },
      {
        src: "/images/portfolio/quiz_creator/2-create-quiz-modal.png",
        alt: "Create Quiz Modal",
        caption: "Modal for creating a new quiz"
      },
      {
        src: "/images/portfolio/quiz_creator/3-select-question-type.png",
        alt: "Select Question Type",
        caption: "Interface for selecting question type"
      },
      {
        src: "/images/portfolio/quiz_creator/3a-time-set-timeline.png",
        alt: "Timeline for Setting Question Time",
        caption: "Timeline interface for setting when questions appear"
      },
      {
        src: "/images/portfolio/quiz_creator/4-select-question-drop-options.png",
        alt: "Question Type Dropdown",
        caption: "Dropdown menu for selecting question types"
      },
      {
        src: "/images/portfolio/quiz_creator/5-multi-choice-selected.png",
        alt: "Multiple Choice Selected",
        caption: "Multiple choice question type selected"
      },
      {
        src: "/images/portfolio/quiz_creator/7-config-mulit-choice.png",
        alt: "Configure Multiple Choice Question",
        caption: "Interface for configuring multiple choice questions"
      },
      {
        src: "/images/portfolio/quiz_creator/9-config-multi-choice-response.png",
        alt: "Configure Response Options",
        caption: "Setting up response options for multiple choice questions"
      },
      {
        src: "/images/portfolio/quiz_creator/10-questions-overview.png",
        alt: "Questions Overview",
        caption: "Overview of all questions in the quiz"
      },
      {
        src: "/images/portfolio/quiz_creator/14-add-select-truefalse.png",
        alt: "Add True/False Question",
        caption: "Adding a true/false question to the quiz"
      },
      {
        src: "/images/portfolio/quiz_creator/17-config-truefalse.png",
        alt: "Configure True/False Question",
        caption: "Configuring a true/false question"
      },
      {
        src: "/images/portfolio/quiz_creator/19-reflection.png",
        alt: "Reflection Question",
        caption: "Adding a reflection question to the quiz"
      },
      {
        src: "/images/portfolio/quiz_creator/21a-overview-complete-quiz.png",
        alt: "Complete Quiz Overview",
        caption: "Overview of a completed quiz with all question types"
      },
      {
        src: "/images/portfolio/quiz_creator/24-preview-quiz-1.png",
        alt: "Quiz Preview 1",
        caption: "Preview of how the quiz appears to students"
      },
      {
        src: "/images/portfolio/quiz_creator/26-preview-quiz-3.png",
        alt: "Quiz Preview 2",
        caption: "Another view of the quiz preview"
      },
      {
        src: "/images/portfolio/quiz_creator/32-canvas-embed-example.png",
        alt: "Canvas LMS Integration",
        caption: "Example of the quiz embedded in Canvas LMS"
      }
    ]
  }
];

// Helper function to get a project by ID
export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
