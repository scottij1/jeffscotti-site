import {
  e as createComponent,
  i as renderComponent,
  r as renderTemplate,
  m as maybeRenderHead,
} from "../chunks/astro/server_DZNyxG5e.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../chunks/Layout_B4B-HYHt.mjs";
/* empty css                                 */
export { renderers } from "../renderers.mjs";

const $$About = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent(
      $$result,
      "Layout",
      $$Layout,
      { title: "About | Jeff Scotti", "data-astro-cid-kh7btl4r": true },
      {
        default: (
          $$result2,
        ) => renderTemplate` ${maybeRenderHead()}<div id="main" class="site-main" data-astro-cid-kh7btl4r> <div id="main-content" class="single-page-content" data-astro-cid-kh7btl4r> <div id="primary" class="content-area" data-astro-cid-kh7btl4r> <div class="page-title" data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>About Me</h1> <div class="page-subtitle" data-astro-cid-kh7btl4r> <h4 data-astro-cid-kh7btl4r>Senior Front-End Engineer & UI/UX Designer</h4> </div> </div> <div id="content" class="page-content site-content single-post" role="main" data-astro-cid-kh7btl4r> <div class="row" data-astro-cid-kh7btl4r> <!-- Who I Am Section --> <div class="col-xs-12 col-sm-6" data-astro-cid-kh7btl4r> <div class="block-title" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Who I Am</h2> </div> <div class="text-block" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
I’m Jeff Scotti – a seasoned Front-End Engineer and UI/UX
                  Designer with over 15 years of experience crafting scalable,
                  user-centric web applications. My passion lies in transforming
                  complex technical challenges into engaging, accessible, and
                  visually compelling digital experiences.
</p> <p data-astro-cid-kh7btl4r>
Throughout my career, I’ve led cross-functional teams and
                  collaborated with international organizations, startups, and
                  academic institutions to drive innovation, streamline
                  workflows, and deliver exceptional user experiences. Whether
                  as an individual contributor or a team leader, I bring a deep
                  understanding of both software engineering and design
                  principles to every project.
</p> <p data-astro-cid-kh7btl4r>
I thrive on the challenge of balancing technical rigor with
                  creative design, ensuring that every digital product is not
                  only robust and efficient but also intuitively designed and
                  aesthetically pleasing.
</p> </div> </div> <!-- My Skills & Experience Section --> <div class="col-xs-12 col-sm-6" data-astro-cid-kh7btl4r> <div class="block-title" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>My Journey & Skills</h2> </div> <div class="text-block" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
My technical journey spans roles such as Senior Software
                  Engineer at Biocom California, where I managed full-stack
                  projects and streamlined digital workflows, to driving modern
                  front-end solutions at MediaAmp, Inc. and pioneering
                  responsive designs at the University of Washington.
</p> <p data-astro-cid-kh7btl4r>
My core competencies include front-end development, responsive
                  design, and UI/UX innovation—skills honed by leading projects
                  that transitioned legacy code bases to modern frameworks (from
                  AngularJS to Angular) and developing custom solutions that
                  integrate third-party platforms like Salesforce and Stripe.
</p> <p data-astro-cid-kh7btl4r>
With expertise in JavaScript, TypeScript, React, Angular, and
                  a suite of design tools, I excel in creating digital products
                  that resonate with users and deliver measurable business
                  value.
</p> </div> <div class="block-title" data-astro-cid-kh7btl4r> <h2 data-astro-cid-kh7btl4r>Core Competencies</h2> </div> <div class="skills-info" data-astro-cid-kh7btl4r> <div class="skill-container" data-astro-cid-kh7btl4r> <h4 data-astro-cid-kh7btl4r>Software Engineering</h4> </div> <div class="skill-container" data-astro-cid-kh7btl4r> <h4 data-astro-cid-kh7btl4r>UI/UX Design</h4> </div> <div class="skill-container" data-astro-cid-kh7btl4r> <h4 data-astro-cid-kh7btl4r>Responsive Web Design</h4> </div> <div class="skill-container" data-astro-cid-kh7btl4r> <h4 data-astro-cid-kh7btl4r>JavaScript Frameworks</h4> </div> <div class="skill-container" data-astro-cid-kh7btl4r> <h4 data-astro-cid-kh7btl4r>Performance Optimization</h4> </div> </div> </div> </div> </div> </div> </div> </div> `,
      },
    )} `;
  },
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/about.astro",
  void 0,
);

const $$file =
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$About,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);

const page = () => _page;

export { page };
