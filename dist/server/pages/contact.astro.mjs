import {
  e as createComponent,
  i as renderComponent,
  j as renderScript,
  r as renderTemplate,
  m as maybeRenderHead,
} from "../chunks/astro/server_DZNyxG5e.mjs";
import "kleur/colors";
import { $ as $$Layout } from "../chunks/Layout_B4B-HYHt.mjs";
/* empty css                                   */
export { renderers } from "../renderers.mjs";

const $$Contact = createComponent(
  async ($$result, $$props, $$slots) => {
    return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { title: "Contact | Jeff Scotti", "data-astro-cid-uw5kdbxl": true }, { default: ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="main" class="site-main" data-astro-cid-uw5kdbxl> <div id="main-content" class="single-page-content" data-astro-cid-uw5kdbxl> <div id="primary" class="content-area" data-astro-cid-uw5kdbxl> <div class="page-title" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Contact</h1> <div class="page-subtitle" data-astro-cid-uw5kdbxl> <h4 data-astro-cid-uw5kdbxl>Get in Touch</h4> </div> </div> <div id="content" class="page-content site-content single-post" role="main" data-astro-cid-uw5kdbxl> <div class="contact-section" data-astro-cid-uw5kdbxl> <!-- Contact Form --> <div class="contact-form-container" data-astro-cid-uw5kdbxl> <form id="contact_form" class="contact-form" onsubmit="handleSubmit(event)" data-astro-cid-uw5kdbxl> <div id="form-message" class="form-message" style="display: none;" data-astro-cid-uw5kdbxl></div> <div class="form-group form-group-with-icon" data-astro-cid-uw5kdbxl> <input id="form_name" type="text" name="name" class="form-control" placeholder="Full Name" required data-astro-cid-uw5kdbxl> </div> <div class="form-group form-group-with-icon" data-astro-cid-uw5kdbxl> <input id="form_email" type="email" name="email" class="form-control" placeholder="Email" required data-astro-cid-uw5kdbxl> </div> <div class="form-group form-group-with-icon" data-astro-cid-uw5kdbxl> <textarea id="form_message" name="message" class="form-control" placeholder="Message" rows="7" required data-astro-cid-uw5kdbxl></textarea> </div> <button type="submit" class="button btn-send" data-astro-cid-uw5kdbxl>Submit</button> </form> </div> <!-- Contact Info --> <div class="contact-info-container" data-astro-cid-uw5kdbxl> <div class="contact-info" data-astro-cid-uw5kdbxl> <div class="info-list" data-astro-cid-uw5kdbxl> <div class="info-block" data-astro-cid-uw5kdbxl> <div class="ci-icon" data-astro-cid-uw5kdbxl> <i class="fas fa-envelope" data-astro-cid-uw5kdbxl></i> </div> <div class="ci-text" data-astro-cid-uw5kdbxl> <h4 data-astro-cid-uw5kdbxl>Email</h4> <p data-astro-cid-uw5kdbxl>hello@jeffscotti.net</p> </div> </div> <div class="info-block" data-astro-cid-uw5kdbxl> <div class="ci-icon" data-astro-cid-uw5kdbxl> <i class="fas fa-map-marker-alt" data-astro-cid-uw5kdbxl></i> </div> <div class="ci-text" data-astro-cid-uw5kdbxl> <h4 data-astro-cid-uw5kdbxl>Location</h4> <p data-astro-cid-uw5kdbxl>San Diego, CA</p> </div> </div> <div class="info-block" data-astro-cid-uw5kdbxl> <div class="ci-icon" data-astro-cid-uw5kdbxl> <i class="fas fa-users" data-astro-cid-uw5kdbxl></i> </div> <div class="ci-text" data-astro-cid-uw5kdbxl> <h4 data-astro-cid-uw5kdbxl>Connect With Me</h4> <div class="social-links" data-astro-cid-uw5kdbxl> <a href="#" class="social-link" title="LinkedIn" data-astro-cid-uw5kdbxl><i class="fab fa-linkedin-in" data-astro-cid-uw5kdbxl></i></a> <a href="#" class="social-link" title="GitHub" data-astro-cid-uw5kdbxl><i class="fab fa-github" data-astro-cid-uw5kdbxl></i></a> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> ` })}  ${renderScript($$result, "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/contact.astro?astro&type=script&index=0&lang.ts")} `;
  },
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/contact.astro",
  void 0,
);

const $$file =
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Contact,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);

const page = () => _page;

export { page };
