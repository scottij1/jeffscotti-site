export interface TabItem {
  id: string;
  title: string;
  icon: string;
  content: string[];
  testimonial: {
    text: string;
    author: string;
    company: string;
  };
}

export const tabItems: TabItem[] = [
  {
    id: "front-end-engineering",
    title: "Frontend Engineering",
    icon: "icon-layers",
    content: [
      "I love to code. What really drives me is <strong>problem-solving</strong> and front-end development gives me plenty of puzzles to crack. For over a decade, I've been building <strong>scalable, performant UIs</strong> with a range of technologies including <strong>TypeScript, JavaScript, React, and Material UI</strong>, crafting seamless user experiences that are both <strong>intuitive and efficient</strong>.",
      "I specialize in <strong>component-driven development</strong>, ensuring modularity and reusability while optimizing render performance and state management. My work extends beyond UI development, I integrate <strong>GraphQL APIs</strong>, fine-tune <strong>progressive web app (PWA) functionality</strong>, and streamline workflows with <strong>modern build tools like Vite and Webpack</strong>.",
      "Whether it's <strong>architecting a structured wizard flow, refining a design system, or solving a tricky UI state issue</strong>, I thrive on making front-end experiences feel fast, polished, and rock solid.",
    ],
    testimonial: {
      text: "Jeff has an excellent grasp of modern design and user experience development. His CSS and JavaScript skills are very strong and he is always eager to learn new things.",
      author: "Alex Walker",
      company: "Software Engineer, Benaroya Research Institute",
    },
  },
  {
    id: "ux-design",
    title: "User Experience Design",
    icon: "icon-target",
    content: [
      "I approach UX design with a principle-driven mindset</strong>. I rely on a set of <strong>adaptable yet consistent guidelines</strong> that shape my decisions, keep my work objective, and create a <strong>shared vision</strong> for every project. These principles ensure that no matter the complexity, my process stays <strong>structured, user-focused, and goal-oriented</strong>.",
      "At the core of my philosophy is <strong>deep user empathy</strong>. To design effective solutions, I strive to <strong>understand users, their pain points, and how they think</strong>. Not just as data points, but as real people with real needs. By putting myself in their shoes, I can anticipate friction points, streamline interactions, and create experiences that feel natural from the first click.",
      "Great UX isn't just about how something looks. It's about removing barriers, reducing cognitive load, and making technology work effortlessly</strong> for the user. Whether I'm designing onboarding flows, structuring information, or refining interactive elements, every decision is backed by research, usability testing, and real-world feedback to create clear, effective, and engaging experiences.",
    ],
    testimonial: {
      text: "Our entire team agreed that Jeff was not only a very, very capable UX/UI designer, but his enthusiasm and unwavering dedication formed the cornerstone of our success.",
      author: "Glyn Beaumont",
      company: "Managing Director, Hemisphere Interactive",
    },
  },
  {
    id: "ui-design",
    title: "User Interface Design",
    icon: "icon-browser",
    content: [
      "For chefs, presentation is one of the most important aspects of any dish they serve. It's said that diners eat with their eyes before their mouths, so if a chef puts out a sloppy dish, the diner might refuse it before taking a single bite. When building an enterprise product, it should look and feel like an enterprise product, polished, professional, and intentional. Design isn't just about making something look good; it's about setting the right expectations and reinforcing trust through clarity, structure, and visual hierarchy.",
      "I err on the side of simplicity. I prefer clean, uncluttered, purposeful design, where every element serves a function and negative space isn't wasted space—it's an active part of the experience. A good UI should guide the user effortlessly, reducing friction without drawing attention to itself. Some say the best UI is one that goes unnoticed, and while that may be true, I've found that users notice a lot more than we think. Every small detail, spacing, typography, color contrast, motion—subtly influences their perception, even if they can't articulate why.",
    ],
    testimonial: {
      text: "His designs are well thought out based upon the needs and desires of the client, and works well in a collaborative environment to deliver a quality product that meets or exceeds the expectations of the client.",
      author: "Robert Zatt",
      company: "Owner/Editor, Robert Zatt Productions",
    },
  },
  {
    id: "project-management",
    title: "Collaboration & Leadership",
    icon: "icon-chat",
    content: [
      "I believe that great products come from efficient workflows, clear communication, and a culture of accountability. I'm always looking for ways to streamline development, cut down on bottlenecks, and remove unnecessary friction so teams can focus on building. That means implementing smarter processes, not more processes, whether it's refining sprint planning, optimizing code review pipelines, or introducing automation to reduce repetitive tasks. Every change should serve one goal: speeding up development without sacrificing quality.",
    ],
    testimonial: {
      text: "As a manager, Jeff is incredibly hands-on and personally invested. It is clear that he cares a great deal about the quality of work that goes into his projects, and is not afraid to jump in the trenches with the development team to get things done.",
      author: "Stephan Reese",
      company: "Senior Project Manager, Hemisphere Interactive",
    },
  },
];
