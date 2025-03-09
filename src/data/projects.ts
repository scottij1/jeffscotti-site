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
    id: "project-modalis",
    title: "Modalis",
    subtitle: "Media Asset Management and Distribution System",
    description: [
      "Modalis is a comprehensive media asset management and distribution system designed for media companies to organize, manage, and distribute their digital assets efficiently.",
      "The system provides robust tools for metadata management, workflow automation, and content delivery across multiple platforms."
    ],
    technologies: ["React", "Node.js", "GraphQL", "AWS", "Elasticsearch"],
    role: "Lead front-end developer responsible for designing and implementing the user interface, ensuring a seamless user experience, and optimizing performance for handling large media libraries.",
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
    id: "project-transcript-editor",
    title: "Closed Caption Transcript Editor",
    subtitle: "Web-based tool for editing video transcripts and captions",
    description: [
      "The Closed Caption Transcript Editor is a specialized web application designed to streamline the process of creating, editing, and synchronizing closed captions for video content.",
      "It features a timeline-based interface that allows editors to precisely time captions with video content, supporting multiple caption formats and accessibility standards."
    ],
    technologies: ["Vue.js", "Web Audio API", "HTML5 Video", "WebVTT", "Express.js"],
    role: "Full-stack developer responsible for implementing the caption timing system, video playback controls, and ensuring cross-browser compatibility and accessibility compliance.",
    images: [
      {
        src: "/images/portfolio/project-transcript-edit.jpg",
        alt: "Transcript Editor",
        caption: "Main interface of the Closed Caption Transcript Editor"
      },
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
    id: "project-quiz-creator",
    title: "Video Quiz Creator",
    subtitle: "Interactive tool for creating video-based quizzes and assessments",
    description: [
      "The Video Quiz Creator is an educational technology tool that enables instructors to create interactive assessments integrated directly with video content.",
      "It allows for the insertion of various question types at specific timestamps in videos, tracking student responses and providing detailed analytics on performance."
    ],
    technologies: ["React", "Redux", "Firebase", "Video.js", "D3.js"],
    role: "Lead developer responsible for architecting the application, implementing the quiz creation interface, and developing the analytics dashboard for instructors.",
    images: [
      {
        src: "/images/portfolio/project-quiz-creator.jpg",
        alt: "Quiz Creator",
        caption: "Main interface of the Video Quiz Creator"
      },
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
