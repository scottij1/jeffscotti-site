import {
  e as createComponent,
  m as maybeRenderHead,
  h as addAttribute,
  j as renderScript,
  r as renderTemplate,
  f as createAstro,
  i as renderComponent,
} from "../chunks/astro/server_DZNyxG5e.mjs";
import "kleur/colors";
import "clsx";
/* empty css                                 */
import { $ as $$Layout } from "../chunks/Layout_B4B-HYHt.mjs";
export { renderers } from "../renderers.mjs";

const jsHeadshot = new Proxy(
  {
    src: "/_astro/js-headshot.B0khR90Y.png",
    width: 320,
    height: 320,
    format: "png",
  },
  {
    get(target, name, receiver) {
      if (name === "clone") {
        return structuredClone(target);
      }
      if (name === "fsPath") {
        return "E:/Projects/jeffscotti.net/jeffscotti-site/src/assets/js-headshot.png";
      }

      return target[name];
    },
  },
);

const resumePdf = "/_astro/jeffscotti_resume.XZeEDCVX.pdf";

const resumeDocx = "/_astro/jeffscotti_resume.DQsmPWFT.docx";

const $$Welcome = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${maybeRenderHead()}<div class="welcome-container" data-astro-cid-mmc7otgs> <main class="main-content" data-astro-cid-mmc7otgs> <div class="home-content" data-astro-cid-mmc7otgs> <div class="two-column-layout" data-astro-cid-mmc7otgs> <div class="image-column" data-astro-cid-mmc7otgs> <div class="home-photo" data-astro-cid-mmc7otgs> <div class="hp-inner"${addAttribute(`background-image: url(${jsHeadshot.src});`, "style")} data-astro-cid-mmc7otgs></div> </div> </div> <div class="text-column" data-astro-cid-mmc7otgs> <h1 class="name" data-astro-cid-mmc7otgs>Jeff Scotti</h1> <h4 class="job-title" data-astro-cid-mmc7otgs> ${" Senior Front End Engineer & Senior UI/UX Designer".split("").map((char) => renderTemplate`<span class="char" data-astro-cid-mmc7otgs>${char}</span>`)} </h4> <p class="bio" data-astro-cid-mmc7otgs>
I build intuitive, high-performance web applications by combining
            clean, efficient code with thoughtful design. With 15+ years of
            experience, I specialize in crafting scalable user interfaces,
            leading technical projects, and enhancing digital experiences
            through modern web technologies, front-end frameworks, and UX best
            practices.
</p> <div class="home-buttons" data-astro-cid-mmc7otgs> <div class="dropdown" data-astro-cid-mmc7otgs> <button class="btn dropdown-toggle" data-astro-cid-mmc7otgs> <i class="fa-solid fa-file" data-astro-cid-mmc7otgs></i> <span data-astro-cid-mmc7otgs>Resume</span> <i class="fa-solid fa-chevron-down" data-astro-cid-mmc7otgs></i> </button> <div class="dropdown-menu" data-astro-cid-mmc7otgs> <a${addAttribute(resumePdf, "href")} class="dropdown-item" target="_blank" data-astro-cid-mmc7otgs> <i class="fa-solid fa-file-pdf" data-astro-cid-mmc7otgs></i> <span data-astro-cid-mmc7otgs>PDF Version</span> </a> <a${addAttribute(resumeDocx, "href")} class="dropdown-item" target="_blank" data-astro-cid-mmc7otgs> <i class="fa-solid fa-file-word" data-astro-cid-mmc7otgs></i> <span data-astro-cid-mmc7otgs>Word Version</span> </a> </div> </div> <a href="https://linkedin.com/in/jeffscotti" target="_blank" class="btn" data-astro-cid-mmc7otgs> <i class="fab fa-linkedin" data-astro-cid-mmc7otgs></i> LinkedIn
</a> <a href="https://github.com/scottij1" target="_blank" class="btn" data-astro-cid-mmc7otgs> <i class="fab fa-github" data-astro-cid-mmc7otgs></i> GitHub
</a> <a href="/contact" class="btn" data-astro-cid-mmc7otgs> <i class="fas fa-envelope" data-astro-cid-mmc7otgs></i> Contact
</a> </div> </div> </div> </div> </main> </div>  ${renderScript($$result, "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Welcome.astro?astro&type=script&index=0&lang.ts")}`;
  },
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Welcome.astro",
  void 0,
);

const $$Astro$1 = createAstro();
const $$TestimonialItem = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
    Astro2.self = $$TestimonialItem;
    const { testimonial } = Astro2.props;
    return renderTemplate`${maybeRenderHead()}<div class="testimonial-item"> <!-- Testimonial Content --> <div class="testimonial-content"> <!-- Picture --> <div class="testimonial-picture"> <img${addAttribute(testimonial.image, "src")}${addAttribute(testimonial.name, "alt")}> </div> <!-- /Picture --> <!-- Testimonial Text --> <div class="testimonial-text"> <p>${testimonial.text}</p> </div> <!-- /Testimonial Text --> <!-- Testimonial author information --> <div class="testimonial-author-info"> <h5 class="testimonial-author">${testimonial.name}</h5> <p class="testimonial-firm">${testimonial.company}</p> </div> <!-- /Testimonial author information --> <div class="testimonial-icon"> <i class="fa fa-quote-left"></i> </div> <div class="testimonial-icon-big"> <i class="fa fa-quote-right"></i> </div> </div> <!-- /Testimonial Content --> </div>`;
  },
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/TestimonialItem.astro",
  void 0,
);

const testimonials = [
  {
    id: 1,
    name: "Chelsea Coster",
    company: "Product Director at Twilio",
    image: "/testimonials/headshot_chelsea_coster.jpg",
    text: "Jeff is an engaged team player and is very solution oriented, considering the broader context and application when grooming/planning feature work or his implementation approach. He is a hard worker and conscientious. He is scrappy and resourceful when tackling new domain. I appreciated his integrity and positive attitude and would leap to have him on my team again.",
    visible: true,
  },
  {
    id: 2,
    name: "Adam Conde",
    company: "Sr. Director of Information Technology at Boundless Bio",
    image: "/testimonials/headshot_adam_conde.jpg",
    text: "I hired Jeff a little over a year ago with the hope of hiring a strong WordPress developer. What I got instead was an incredibley talented software engineer, a dedicated worker, a great person, and friend. He is a logical and methodical problem solver. He has the rare combination of a developer with legitimate design and UX skills. Which made a huge difference in the quality of our web projects. I am confident that he would bring these traits and skills to any employer and I hope that one day I can work with him again.",
    visible: true,
  },
  {
    id: 3,
    name: "Matthew DeFauw",
    company: "Senior Software Product Manager at Guardant Health",
    image: "/testimonials/headshot_matt_defauw.jpg",
    text: "I have the pleasure of working with Jeff for the past 2 years. He is an ideal developer to have as a colleague. Easy to work with, speaking up when things could work better, while also being honest if a question is outside his skillset. However, he will also quickly learn, adapt, and figure things out. Besides having extremely strong and modern technical developer skills, he is also able to meet with business users directly to understand their requirements, see through the confusion or lack of details, and then create an efficient, well-designed, and scalable end-to-end solution which captures the heart of the business need.",
    visible: true,
  },
  {
    id: 4,
    name: "Greg Lamb",
    company:
      "Principle, Architecture and Development at Launch Consulting Group",
    image: "/testimonials/headshot_greg_lamb.jpg",
    text: "I had the pleasure of working with Jeff while on contract at MediaAMP. As user interface ideas were discussed, I was impressed by Jeff's design experience and his ability to bring them to life quickly. With his strong JavaScript and CSS skills, Jeff would be a great asset to any team.",
    visible: true,
  },
  {
    id: 5,
    name: "Glyn Beaumont",
    company: "Managing Director at Hemisphere",
    image: "/testimonials/headshot_glyn_beaumont.jpg",
    text: "I've had the privilege of working with Jeff on an extremely ambitious project , with tight deadlines and many demanding stakeholders. Our entire team agreed that Jeff was not only a very, very capable UX/UI designer, but his enthusiasm and unwavering dedication formed the cornerstone of our success. I'd work with Jeff again in a heartbeat, and hope to have the opportunity to do so.",
    visible: true,
  },
  {
    id: 6,
    name: "Scott Maxon",
    company: "Senior Consultant at Seabourne",
    image: "/testimonials/headshot_scott_maxon.jpg",
    text: "Jeff has a rare combination of excellent coding skills and an eye for clean, user-friendly front end design. Jeff has built a strong sense of what works well in UX, and the products he develops show it. He's willing to learn, listens well, and picks up new paradigms quickly. This makes him a pleasure to work with.",
    visible: true,
  },
  {
    id: 7,
    name: "Alex Walker",
    company: "Software Engineer at Benaroya Research Institute",
    image: "/testimonials/headshot_alex_walker.jpg",
    text: "Jeff has an excellent grasp of modern design and user experience development. His CSS and JavaScript skills are very strong and he is always eager to learn new things. He and I worked together for over a year on several different projects and he always delivered great work on what were often very aggressive timelines. He was also extremely flexible as we dealt with ever-changing requirements. I hope to work with him again",
    visible: true,
  },
  {
    id: 8,
    name: "Joan Davis",
    company: "Senior Technology Analyst",
    image: "/testimonials/headshot_joan_davis.jpg",
    text: "Jeff is an extremely talented web designer and developer. I admire his dedication to his craft and passion for his work. Jeff and I worked on a web application that would be used by many individuals who were not particularly tech savvy. Jeff always kept the user experience at the forefront and designed simple, clean interfaces. Working with Jeff was a pleasure. He was willing to do any task needed to get the job done. I recommend Jeff without hesitation. ",
    visible: true,
  },
  {
    id: 9,
    name: "Stephan Reese",
    company: "",
    image: "/testimonials/headshot_stephan_reese.jpg",
    text: "I've had the pleasure of seeing Jeff in action as a Project Manager (as a client to my company) and as Developer (as a member of my own team). As a manager, Jeff is incredibly hands-on and personally invested. It is clear that we cares a great deal about the quality of work that goes into his projects, and is not afraid to jump in the trenches with the development team to get things done. As a developer, Jeff is highly-skilled and driven. In times that I was swamped with multiple projects, I knew that I could task Jeff with ANYTHING and know that it he would get it done in the required time-frame at a very high level of quality. Having excelled in both these roles makes Jeff a highly skilled developer WITH incredible soft skills. I would never say no to working with him in any capacity.",
    visible: false,
  },
  {
    id: 10,
    name: "John Haslam",
    company: "Founder, Executive Director at 50 | Northwest",
    image: "/testimonials/headshot_john_haslam.jpg",
    text: "In the two years I have worked with Jeff I have found him to be a dedicated, hard working and highly creative individual. Jeff's contributions to the success UWTV has had in the online space are too many to list. His most imprtant contribution, however, is developing a brand and look for uwtv.org that has provided a fantactic user experience and led to sustained growth in traffic and time on site. Jeff masterfully blends cutting edge design and UI/UX best practices with an ability to produce a large volume of work. Any organization wishing to improve their audience's web experience and increase traffic would be well served to consider adding Jeff as a member of their team.",
    visible: true,
  },
  {
    id: 11,
    name: "Phillippa Kassover",
    company: "",
    image: "/testimonials/headshot_phillippa_kassover.jpg",
    text: "Jeff is an extraordinarily talented designer, whose background gives him a real edge in the field. His knowledge of social psychology makes him a very effective web developer, who understands his audiences and caters to their needs with compelling, creative and tasteful design. Jeff was a great partner and collaborator in all our marketing efforts, who came through with ideas and design that exceeded expectations on every occasion. His love and knowledge of sports took UWTV to new levels of design and marketing professionalism and engagement as we rolled out our first sports-related programming. Jeff is always focused on the user as he designs sites, making them simple and accessible for all audiences. Jeff was also organized, thorough, accountable and responsive in his relationship with me and other leaders at UWTV. He has since taken on a greater level of responsibility and has fulfilled all expectations. I would be thrilled to work with Jeff again and wish him the very best in his future career.",
    visible: false,
  },
  {
    id: 12,
    name: "Bob Zat",
    company: "",
    image: "/testimonials/headshot_bob_zat.jpg",
    text: "I have had the pleasure of working with Jeff on numerous motion graphic design projects for UWTV. His designs are well though out based upon the needs and desires of the client, and works well in a collaborative environment to deliver a quality product that meets or exceeds the expectations of the client. He is intelligent, creative, a good listener, and thoughtful of others. It has been a pleasure working with Jeff and I hope we might work together again.",
    visible: false,
  },
  {
    id: 13,
    name: "Tim Polack",
    company: "",
    image: "/testimonials/headshot_tim_polack.jpg",
    text: "I  hired Jeff to be the graphic designer for me as I began a small Web group in the College of Agriculture. His work in graphic design and in coding out sites using HTML/CSS was critical to the success of this group as he joined with a small group in serving a growing number of clients both inside and outside the college. His energetic and self-starter qualities separated Jeff from other workers I hired in my five years as Web group lead. He creatively tackled issues and effectively learned other technologies, such as flash, that helped raise the professionalism and user-centered nature of our sites and applications. I recommend Jeff for work in both the Graphic Design and Webmaster fields.",
    visible: false,
  },
];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) =>
  __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Testimonials = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Testimonials;
    const { title = "Testimonials" } = Astro2.props;
    const testimonialsToShow = testimonials.filter(
      (testimonial) => testimonial.visible !== false,
    );
    return renderTemplate(
      _a ||
        (_a = __template([
          '<!-- Import Owl Carousel CSS --><link rel="stylesheet" href="/styles/owl.carousel.css" type="text/css">',
          '<div class="testimonials-container"> <div class="block-title"> <h2>',
          '</h2> </div> <div id="testimonials_1" class="testimonials owl-carousel" data-mobile-items="1" data-tablet-items="2" data-items="2"> ',
          ' </div> </div> <!-- Import jQuery and Owl Carousel JS from CDN --> <script src="/js/jquery-3.5.1.min.js"><\/script> <script src="/js/owl.carousel.min.js"><\/script> ',
          " ",
        ])),
      maybeRenderHead(),
      title,
      testimonialsToShow.map(
        (testimonial) =>
          renderTemplate`${renderComponent($$result, "TestimonialItem", $$TestimonialItem, { testimonial: testimonial })}`,
      ),
      renderScript(
        $$result,
        "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts",
      ),
    );
  },
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Testimonials.astro",
  void 0,
);

const $$Index = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { default: ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, { title: "What People Say" })} ` })}`;
  },
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/index.astro",
  void 0,
);

const $$file =
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);

const page = () => _page;

export { page };
