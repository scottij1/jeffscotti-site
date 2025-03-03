import {
  e as createComponent,
  m as maybeRenderHead,
  h as addAttribute,
  r as renderTemplate,
  j as renderScript,
  f as createAstro,
  i as renderComponent,
  k as renderSlot,
  l as renderHead,
} from "./astro/server_DZNyxG5e.mjs";
import "kleur/colors";
import "clsx";
/* empty css                         */

const ravenLogo = new Proxy(
  {
    src: "/_astro/raven-logo-sm.BJuvMeGo.png",
    width: 75,
    height: 55,
    format: "png",
  },
  {
    get(target, name, receiver) {
      if (name === "clone") {
        return structuredClone(target);
      }
      if (name === "fsPath") {
        return "E:/Projects/jeffscotti.net/jeffscotti-site/src/assets/raven-logo-sm.png";
      }

      return target[name];
    },
  },
);

const $$Logo = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${maybeRenderHead()}<div class="logo-lockup" data-astro-cid-tvrurpns> <img${addAttribute(ravenLogo.src, "src")} alt="Raven Logo" class="raven-logo" data-astro-cid-tvrurpns> <span class="logo-text" data-astro-cid-tvrurpns><strong data-astro-cid-tvrurpns>Jeff</strong> Scotti</span> </div> `;
  },
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Logo.astro",
  void 0,
);

const $$ThemeToggle = createComponent(
  ($$result, $$props, $$slots) => {
    return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme" data-astro-cid-x3pjskd3> <span class="theme-toggle-icon" data-astro-cid-x3pjskd3> <i class="fas fa-sun light-icon" data-astro-cid-x3pjskd3></i> <i class="fas fa-moon dark-icon" data-astro-cid-x3pjskd3></i> </span> <span class="theme-toggle-text" data-astro-cid-x3pjskd3>Theme</span> </button> ${renderScript($$result, "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")} `;
  },
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/ThemeToggle.astro",
  void 0,
);

const $$Astro$1 = createAstro();
const $$Header = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
    Astro2.self = $$Header;
    const { pathname } = Astro2.url;
    const isPathActive = (path) => {
      if (path === "/" && pathname === "/") return true;
      if (path !== "/" && pathname.startsWith(path)) return true;
      return false;
    };
    return renderTemplate`${maybeRenderHead()}<header id="site_header" class="header" data-astro-cid-3ef6ksr2> <div class="header-content" data-astro-cid-3ef6ksr2> <!-- Logo --> <div class="site-logo" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-3ef6ksr2": true })} </a> </div> <!-- /Logo --> <!-- Navigation --> <div class="site-nav" data-astro-cid-3ef6ksr2> <ul class="site-main-menu" data-astro-cid-3ef6ksr2> <li${addAttribute(`menu-item ${isPathActive("/") ? "current-menu-item" : ""}`, "class")} data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>Home</a> </li> <li${addAttribute(`menu-item ${isPathActive("/about") ? "current-menu-item" : ""}`, "class")} data-astro-cid-3ef6ksr2> <a href="/about" data-astro-cid-3ef6ksr2>About</a> </li> <li${addAttribute(`menu-item ${isPathActive("/projects") ? "current-menu-item" : ""}`, "class")} data-astro-cid-3ef6ksr2> <a href="/projects" data-astro-cid-3ef6ksr2>Projects</a> </li> <li${addAttribute(`menu-item ${isPathActive("/contact") ? "current-menu-item" : ""}`, "class")} data-astro-cid-3ef6ksr2> <a href="/contact" data-astro-cid-3ef6ksr2>Contact</a> </li> </ul> </div> <!-- /Navigation --> <!-- Theme Toggle --> <div class="header-actions" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} <!-- Mobile Menu Toggle --> <a class="menu-toggle" data-astro-cid-3ef6ksr2> <span class="hamburger-line line-1" data-astro-cid-3ef6ksr2></span> <span class="hamburger-line line-2" data-astro-cid-3ef6ksr2></span> <span class="hamburger-line line-3" data-astro-cid-3ef6ksr2></span> </a> <!-- /Mobile Menu Toggle --> </div> </div> </header> ${renderScript($$result, "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
  },
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Header.astro",
  void 0,
);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) =>
  __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Layout;
    return renderTemplate(
      _a ||
        (_a = __template([
          '<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/ico" href="/favicon.ico"><link rel="icon" type="image/png" href="/favicon.png"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png"><link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png"><meta name="generator"',
          '><title>\n      Jeff Scotti - Senior Front End Engineer, Senior UI/UX Designer\n    </title><!-- Font Awesome for icons --><script src="https://kit.fontawesome.com/ad9e6c27c0.js" crossorigin="anonymous"><\/script>',
          '</head> <body> <div class="page-container"> ',
          " ",
          " </div> </body></html>",
        ])),
      addAttribute(Astro2.generator, "content"),
      renderHead(),
      renderComponent($$result, "Header", $$Header, {}),
      renderSlot($$result, $$slots["default"]),
    );
  },
  "E:/Projects/jeffscotti.net/jeffscotti-site/src/layouts/Layout.astro",
  void 0,
);

export { $$Layout as $ };
