import "kleur/colors";
import { n as decodeKey } from "./chunks/astro/server_DZNyxG5e.mjs";
import "clsx";
import "cookie";
import { N as NOOP_MIDDLEWARE_FN } from "./chunks/astro-designed-error-pages_DcjKl7WH.mjs";
import "es-module-lexer";

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [
          key,
          value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F"),
        ];
      }
      return [key, value];
    }),
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content
    .normalize()
    .replace(/\?/g, "%3F")
    .replace(/#/g, "%23")
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment
    .map((part) => getParameter(part, params))
    .join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path =
      segments.map((segment) => getSegment(segment, sanitizedParams)).join("") +
      trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(
      rawRouteData.segments,
      rawRouteData._meta.trailingSlash,
    ),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute
      ? deserializeRouteData(rawRouteData.redirectRoute)
      : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin,
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData),
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key,
  };
}

const manifest = deserializeManifest({
  hrefRoot: "file:///E:/Projects/jeffscotti.net/jeffscotti-site/",
  cacheDir:
    "file:///E:/Projects/jeffscotti.net/jeffscotti-site/node_modules/.astro/",
  outDir: "file:///E:/Projects/jeffscotti.net/jeffscotti-site/dist/",
  srcDir: "file:///E:/Projects/jeffscotti.net/jeffscotti-site/src/",
  publicDir: "file:///E:/Projects/jeffscotti.net/jeffscotti-site/public/",
  buildClientDir:
    "file:///E:/Projects/jeffscotti.net/jeffscotti-site/dist/client/",
  buildServerDir:
    "file:///E:/Projects/jeffscotti.net/jeffscotti-site/dist/server/",
  adapterName: "@astrojs/node",
  routes: [
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: "page",
        component: "_server-islands.astro",
        params: ["name"],
        segments: [
          [{ content: "_server-islands", dynamic: false, spread: false }],
          [{ content: "name", dynamic: true, spread: false }],
        ],
        pattern: "^\\/_server-islands\\/([^/]+?)\\/?$",
        prerender: false,
        isIndex: false,
        fallbackRoutes: [],
        route: "/_server-islands/[name]",
        origin: "internal",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        type: "endpoint",
        isIndex: false,
        route: "/_image",
        pattern: "^\\/_image\\/?$",
        segments: [[{ content: "_image", dynamic: false, spread: false }]],
        params: [],
        component: "node_modules/astro/dist/assets/endpoint/node.js",
        pathname: "/_image",
        prerender: false,
        fallbackRoutes: [],
        origin: "internal",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        {
          type: "inline",
          content:
            '#main[data-astro-cid-kh7btl4r]{position:relative;height:100%;width:100%;padding-top:70px}#main-content[data-astro-cid-kh7btl4r]{position:relative;max-width:1280px;min-height:80vh;margin:0 auto;padding:0 30px}.page-title[data-astro-cid-kh7btl4r]{padding:50px 0;text-align:center}.page-title[data-astro-cid-kh7btl4r] h1[data-astro-cid-kh7btl4r]{font-size:32px;font-weight:600;color:var(--heading-color);margin:0 0 10px}.page-subtitle[data-astro-cid-kh7btl4r] h4[data-astro-cid-kh7btl4r]{font-size:16px;font-weight:400;color:var(--text-color);margin:0}.page-content[data-astro-cid-kh7btl4r]{padding-bottom:50px}.block-title[data-astro-cid-kh7btl4r]{margin-bottom:30px}.block-title[data-astro-cid-kh7btl4r] h2[data-astro-cid-kh7btl4r]{font-size:24px;color:var(--heading-color);margin:0}.text-block[data-astro-cid-kh7btl4r]{margin-bottom:30px}.text-block[data-astro-cid-kh7btl4r] p[data-astro-cid-kh7btl4r]{margin-bottom:15px;color:var(--text-color);font-size:14px;line-height:1.75}.skills-info[data-astro-cid-kh7btl4r]{margin-bottom:30px}.skill-container[data-astro-cid-kh7btl4r]{position:relative;margin-bottom:20px}.skill-container[data-astro-cid-kh7btl4r] h4[data-astro-cid-kh7btl4r]{font-size:14px;color:var(--heading-color);margin:0 0 5px}.skill-percentage[data-astro-cid-kh7btl4r]{position:relative;height:10px;background-color:var(--primary-color);border-radius:5px}.timeline[data-astro-cid-kh7btl4r]{position:relative;margin:30px 0}.timeline-item[data-astro-cid-kh7btl4r]{position:relative;margin-bottom:30px;padding-left:60px}.timeline-item[data-astro-cid-kh7btl4r]:before{content:"";position:absolute;left:20px;top:0;width:1px;height:100%;background-color:var(--border-color)}.timeline-item[data-astro-cid-kh7btl4r]:after{content:"";position:absolute;left:15px;top:5px;width:10px;height:10px;background-color:var(--primary-color);border-radius:50%}.timeline-item[data-astro-cid-kh7btl4r]:last-child:before{height:15px}.item-period[data-astro-cid-kh7btl4r]{margin:0 0 5px;font-size:14px;color:var(--primary-color);font-weight:500}.item-company[data-astro-cid-kh7btl4r]{display:block;margin:0 0 5px;font-size:12px;color:var(--text-color)}.item-title[data-astro-cid-kh7btl4r]{font-size:16px;margin:0 0 10px;color:var(--heading-color)}.row[data-astro-cid-kh7btl4r]{display:flex;flex-wrap:wrap;margin:0 -15px 30px;justify-content:center}.col-xs-12[data-astro-cid-kh7btl4r]{width:100%;padding:0 15px}.col-sm-6[data-astro-cid-kh7btl4r]{width:50%;padding:0 15px}@media (max-width: 768px){.col-sm-6[data-astro-cid-kh7btl4r]{width:100%}#main-content[data-astro-cid-kh7btl4r]{padding:0 15px}.timeline-item[data-astro-cid-kh7btl4r]{padding-left:40px}.timeline-item[data-astro-cid-kh7btl4r]:before{left:10px}.timeline-item[data-astro-cid-kh7btl4r]:after{left:5px}}\n',
        },
        { type: "external", src: "/_astro/about.hEnt1fGP.css" },
      ],
      routeData: {
        route: "/about",
        isIndex: false,
        type: "page",
        pattern: "^\\/about\\/?$",
        segments: [[{ content: "about", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/about.astro",
        pathname: "/about",
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: "project",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [],
      routeData: {
        route: "/api/contact",
        isIndex: false,
        type: "endpoint",
        pattern: "^\\/api\\/contact\\/?$",
        segments: [
          [{ content: "api", dynamic: false, spread: false }],
          [{ content: "contact", dynamic: false, spread: false }],
        ],
        params: [],
        component: "src/pages/api/contact.ts",
        pathname: "/api/contact",
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: "project",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        {
          type: "inline",
          content:
            ".form-message[data-astro-cid-uw5kdbxl]{margin-bottom:20px;padding:10px 15px;border-radius:5px;font-size:14px}.form-message[data-astro-cid-uw5kdbxl].success{background-color:#28a74533;border:1px solid #28a745;color:#28a745}.form-message[data-astro-cid-uw5kdbxl].error{background-color:#dc354533;border:1px solid #dc3545;color:#dc3545}button[data-astro-cid-uw5kdbxl][type=submit]:disabled{opacity:.7;cursor:not-allowed}#main[data-astro-cid-uw5kdbxl]{position:relative;height:100%;width:100%;padding-top:70px}#main-content[data-astro-cid-uw5kdbxl]{position:relative;max-width:1280px;min-height:80vh;margin:0 auto;padding:0 30px}.page-title[data-astro-cid-uw5kdbxl]{padding:50px 0;text-align:center}.page-title[data-astro-cid-uw5kdbxl] h1[data-astro-cid-uw5kdbxl]{font-size:32px;font-weight:600;color:var(--heading-color);margin:0 0 10px}.page-subtitle[data-astro-cid-uw5kdbxl] h4[data-astro-cid-uw5kdbxl]{font-size:16px;font-weight:400;color:var(--text-color);margin:0}.page-content[data-astro-cid-uw5kdbxl]{padding-bottom:50px}.block-title[data-astro-cid-uw5kdbxl]{margin-bottom:30px}.block-title[data-astro-cid-uw5kdbxl] h2[data-astro-cid-uw5kdbxl]{font-size:24px;color:var(--heading-color);margin:0}.contact-section[data-astro-cid-uw5kdbxl]{display:flex;flex-wrap:wrap;gap:30px}.contact-form-container[data-astro-cid-uw5kdbxl]{flex:1 1 60%;min-width:300px;box-sizing:border-box}.contact-info-container[data-astro-cid-uw5kdbxl]{flex:1 1 30%;min-width:250px}.contact-info[data-astro-cid-uw5kdbxl]{background-color:#28282880;border-radius:8px;padding:25px}.info-list[data-astro-cid-uw5kdbxl]{margin-bottom:30px}.info-block[data-astro-cid-uw5kdbxl]{position:relative;margin-bottom:30px;padding-left:50px}.ci-icon[data-astro-cid-uw5kdbxl]{position:absolute;left:0;top:0;width:40px;height:40px;text-align:center;font-size:20px;color:#007ced}.ci-icon[data-astro-cid-uw5kdbxl] i[data-astro-cid-uw5kdbxl]{position:relative;top:5px}.ci-text[data-astro-cid-uw5kdbxl] h4[data-astro-cid-uw5kdbxl]{font-size:16px;color:var(--heading-color);margin:0 0 5px}.ci-text[data-astro-cid-uw5kdbxl] p[data-astro-cid-uw5kdbxl]{font-size:14px;color:var(--text-color);margin:0 0 5px}.social-links[data-astro-cid-uw5kdbxl]{margin-top:10px;text-align:left;display:flex;gap:10px}.social-link[data-astro-cid-uw5kdbxl]{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;background-color:#ffffff1a;color:var(--text-color);text-align:center;font-size:18px;border-radius:50%;transition:all .3s ease-in-out}.social-link[data-astro-cid-uw5kdbxl]:hover{background-color:var(--primary-color);color:#fff;transform:translateY(-3px)}.contact-form[data-astro-cid-uw5kdbxl]{margin-bottom:30px;width:100%;box-sizing:border-box}.form-group[data-astro-cid-uw5kdbxl]{position:relative;margin-bottom:20px;width:100%;box-sizing:border-box}.form-group-with-icon[data-astro-cid-uw5kdbxl]{position:relative}.form-control[data-astro-cid-uw5kdbxl]{display:block;width:100%;box-sizing:border-box;border:2px solid #555;border-radius:5px;padding:10px 25px 10px 12px;background:transparent;color:#eee;transition:border-color .3s ease-in-out;font-size:16px}.form-control[data-astro-cid-uw5kdbxl]:focus{outline:none;border-color:#007ced}textarea[data-astro-cid-uw5kdbxl].form-control{height:auto;min-height:150px}.button[data-astro-cid-uw5kdbxl].btn-send{display:inline-block;position:relative;padding:.8em 2.1em;margin-bottom:.75em;margin-right:.25em;font-size:1em;line-height:1.2;border:2px solid #007ced;color:#fff;background-color:#333;border-radius:30px;font-family:Poppins,Helvetica,sans-serif;transition:all .3s ease-in-out}.button[data-astro-cid-uw5kdbxl].btn-send:hover{background-color:#007ced;color:#fff}@media (max-width: 768px){.contact-section[data-astro-cid-uw5kdbxl]{flex-direction:column}.contact-form-container[data-astro-cid-uw5kdbxl],.contact-info-container[data-astro-cid-uw5kdbxl]{width:100%}#main-content[data-astro-cid-uw5kdbxl]{padding:0 15px}}\n",
        },
        { type: "external", src: "/_astro/about.hEnt1fGP.css" },
      ],
      routeData: {
        route: "/contact",
        isIndex: false,
        type: "page",
        pattern: "^\\/contact\\/?$",
        segments: [[{ content: "contact", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/contact.astro",
        pathname: "/contact",
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: "project",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        {
          type: "inline",
          content:
            '#main[data-astro-cid-aid3sr62]{position:relative;height:100%;width:100%;padding-top:70px}#main-content[data-astro-cid-aid3sr62]{position:relative;max-width:1280px;min-height:80vh;margin:0 auto;padding:0 30px}.page-title[data-astro-cid-aid3sr62]{padding:50px 0;text-align:center}.page-title[data-astro-cid-aid3sr62] h1[data-astro-cid-aid3sr62]{font-size:32px;font-weight:600;color:var(--heading-color);margin:0 0 10px}.page-subtitle[data-astro-cid-aid3sr62] h4[data-astro-cid-aid3sr62]{font-size:16px;font-weight:400;color:var(--text-color);margin:0}.portfolio-filters[data-astro-cid-aid3sr62]{list-style:none;padding:0;margin:0 0 30px;text-align:center}.portfolio-filters[data-astro-cid-aid3sr62] li[data-astro-cid-aid3sr62]{display:inline-block;margin:0 2px}.portfolio-filters[data-astro-cid-aid3sr62] li[data-astro-cid-aid3sr62] a[data-astro-cid-aid3sr62]{display:inline-block;color:var(--text-color);padding:5px 12px;font-size:12px;text-decoration:none;border-radius:30px;transition:all .3s ease-in-out}.portfolio-filters[data-astro-cid-aid3sr62] li[data-astro-cid-aid3sr62].active a[data-astro-cid-aid3sr62],.portfolio-filters[data-astro-cid-aid3sr62] li[data-astro-cid-aid3sr62] a[data-astro-cid-aid3sr62]:hover{color:#fff;background-color:var(--primary-color)}.portfolio-grid[data-astro-cid-aid3sr62]{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:30px;margin-bottom:50px}.item[data-astro-cid-aid3sr62]{position:relative;margin:0;padding:0;background-color:#1e1e1eb3;border-radius:8px;overflow:hidden;transition:transform .3s ease,box-shadow .3s ease}.item[data-astro-cid-aid3sr62]:hover{transform:translateY(-5px);box-shadow:0 10px 20px #0003}.portfolio-item-img[data-astro-cid-aid3sr62]{position:relative;height:200px;overflow:hidden}.portfolio-item-preview[data-astro-cid-aid3sr62]{width:100%;height:100%;background-color:#2a2a2a;display:flex;align-items:center;justify-content:center;color:#555;font-size:1.2rem}.portfolio-item-preview[data-astro-cid-aid3sr62]:after{content:"Project Image"}.project-link[data-astro-cid-aid3sr62]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.item[data-astro-cid-aid3sr62] i[data-astro-cid-aid3sr62]{display:none}.item[data-astro-cid-aid3sr62] h4[data-astro-cid-aid3sr62].name{padding:15px 15px 5px;font-size:16px;color:var(--heading-color);margin:0}.item[data-astro-cid-aid3sr62] span[data-astro-cid-aid3sr62].category{display:block;padding:0 15px 15px;font-size:12px;color:var(--text-color)}.project-tags[data-astro-cid-aid3sr62]{display:flex;flex-wrap:wrap;gap:5px;padding:0 15px 15px}.project-tags[data-astro-cid-aid3sr62] span[data-astro-cid-aid3sr62]{background-color:#ffffff1a;color:#aaa;padding:3px 8px;border-radius:4px;font-size:10px}.row[data-astro-cid-aid3sr62]{display:flex;flex-wrap:wrap;margin:0 -15px 30px}.col-xs-12[data-astro-cid-aid3sr62]{width:100%;padding:0 15px}@media (max-width: 768px){.portfolio-grid[data-astro-cid-aid3sr62]{grid-template-columns:1fr}#main-content[data-astro-cid-aid3sr62]{padding:0 15px}}\n',
        },
        { type: "external", src: "/_astro/about.hEnt1fGP.css" },
      ],
      routeData: {
        route: "/projects",
        isIndex: false,
        type: "page",
        pattern: "^\\/projects\\/?$",
        segments: [[{ content: "projects", dynamic: false, spread: false }]],
        params: [],
        component: "src/pages/projects.astro",
        pathname: "/projects",
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: "project",
        _meta: { trailingSlash: "ignore" },
      },
    },
    {
      file: "",
      links: [],
      scripts: [],
      styles: [
        { type: "external", src: "/_astro/about.hEnt1fGP.css" },
        { type: "external", src: "/_astro/index.BgSr1dwR.css" },
      ],
      routeData: {
        route: "/",
        isIndex: true,
        type: "page",
        pattern: "^\\/$",
        segments: [],
        params: [],
        component: "src/pages/index.astro",
        pathname: "/",
        prerender: false,
        fallbackRoutes: [],
        distURL: [],
        origin: "project",
        _meta: { trailingSlash: "ignore" },
      },
    },
  ],
  base: "/",
  trailingSlash: "ignore",
  compressHTML: true,
  componentMetadata: [
    [
      "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/about.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/contact.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/index.astro",
      { propagation: "none", containsHead: true },
    ],
    [
      "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/projects.astro",
      { propagation: "none", containsHead: true },
    ],
  ],
  renderers: [],
  clientDirectives: [
    [
      "idle",
      '(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value=="object"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};"requestIdleCallback"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event("astro:idle"));})();',
    ],
    [
      "load",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
    ],
    [
      "media",
      '(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener("change",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event("astro:media"));})();',
    ],
    [
      "only",
      '(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
    ],
    [
      "visible",
      '(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value=="object"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event("astro:visible"));})();',
    ],
  ],
  entryModules: {
    "\u0000noop-middleware": "_noop-middleware.mjs",
    "\u0000@astro-page:src/pages/about@_@astro": "pages/about.astro.mjs",
    "\u0000@astro-page:src/pages/api/contact@_@ts":
      "pages/api/contact.astro.mjs",
    "\u0000@astro-page:src/pages/contact@_@astro": "pages/contact.astro.mjs",
    "\u0000@astro-page:src/pages/projects@_@astro": "pages/projects.astro.mjs",
    "\u0000@astro-page:src/pages/index@_@astro": "pages/index.astro.mjs",
    "\u0000@astrojs-ssr-virtual-entry": "entry.mjs",
    "\u0000@astro-renderers": "renderers.mjs",
    "\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":
      "pages/_image.astro.mjs",
    "\u0000@astrojs-ssr-adapter": "_@astrojs-ssr-adapter.mjs",
    "\u0000@astrojs-manifest": "manifest_CbFMq0wo.mjs",
    "E:/Projects/jeffscotti.net/jeffscotti-site/node_modules/astro/dist/assets/services/sharp.js":
      "chunks/sharp_TL5SJ8l8.mjs",
    "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/contact.astro?astro&type=script&index=0&lang.ts":
      "_astro/contact.astro_astro_type_script_index_0_lang.l0sNRNKZ.js",
    "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/projects.astro?astro&type=script&index=0&lang.ts":
      "_astro/projects.astro_astro_type_script_index_0_lang.BWNFSU_x.js",
    "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts":
      "_astro/Testimonials.astro_astro_type_script_index_0_lang.8em4bSVA.js",
    "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Header.astro?astro&type=script&index=0&lang.ts":
      "_astro/Header.astro_astro_type_script_index_0_lang.DNN58Es8.js",
    "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts":
      "_astro/ThemeToggle.astro_astro_type_script_index_0_lang.C90WjyHE.js",
    "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Welcome.astro?astro&type=script&index=0&lang.ts":
      "_astro/Welcome.astro_astro_type_script_index_0_lang.Clswnmys.js",
    "astro:scripts/before-hydration.js": "",
  },
  inlinedScripts: [
    [
      "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/contact.astro?astro&type=script&index=0&lang.ts",
      "",
    ],
    [
      "E:/Projects/jeffscotti.net/jeffscotti-site/src/pages/projects.astro?astro&type=script&index=0&lang.ts",
      'document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelectorAll(".filter"),l=document.querySelectorAll(".item");a.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault(),a.forEach(e=>e.parentElement?.classList.remove("active")),t.parentElement?.classList.add("active");const s=t.getAttribute("data-group")||"all";l.forEach(e=>{const c=e.getAttribute("data-groups")||"[]",n=JSON.parse(c.replace(/\'/g,\'"\'));s==="all"||n.includes(s)?e.style.display="block":e.style.display="none"})})})});',
    ],
    [
      "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Testimonials.astro?astro&type=script&index=0&lang.ts",
      'window.addEventListener("load",()=>{typeof jQuery<"u"&&jQuery(document).ready(()=>{jQuery("#testimonials_1").owlCarousel({nav:!1,items:2,loop:!0,navText:!1,margin:25,responsive:{0:{items:1},480:{items:1},768:{items:2},1200:{items:2}}})})});',
    ],
    [
      "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/Header.astro?astro&type=script&index=0&lang.ts",
      'document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".site-nav"),e=document.querySelector(".menu-toggle");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("open"),e.classList.toggle("open")});let n;window.addEventListener("resize",()=>{!t||!e||(t.style.transition="none",e.style.transition="none",t.classList.remove("open"),e.classList.remove("open"),clearTimeout(n),n=setTimeout(()=>{t.style.transition="",e.style.transition=""},200))}),document.querySelectorAll(".menu-item-has-children > a").forEach(s=>{s.addEventListener("click",o=>{if(window.innerWidth<=991){o.preventDefault();const i=s.parentElement?.querySelector(".sub-menu");i&&i?.classList.toggle("open")}})})});',
    ],
    [
      "E:/Projects/jeffscotti.net/jeffscotti-site/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts",
      'document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("theme-toggle"),l=localStorage.getItem("theme");l?document.body.classList.add(l):(document.body.classList.add("theme-dark"),localStorage.setItem("theme","theme-dark")),n(document.body.classList.contains("theme-light")?"theme-light":"theme-dark"),o&&o.addEventListener("click",()=>{const e=document.body;e.classList.contains("theme-light")?(e.classList.remove("theme-light"),e.classList.add("theme-dark"),d("theme-dark")):(e.classList.remove("theme-dark"),e.classList.add("theme-light"),d("theme-light"))});function d(e){localStorage.setItem("theme",e),n(e)}function n(e){const t=document.querySelector(".light-icon"),s=document.querySelector(".dark-icon");!t||!s||(e==="theme-light"?(t.style.display="none",s.style.display="inline-block"):(t.style.display="inline-block",s.style.display="none"))}});',
    ],
  ],
  assets: [
    "/_astro/jeffscotti_resume.DQsmPWFT.docx",
    "/_astro/jeffscotti_resume.XZeEDCVX.pdf",
    "/_astro/js-headshot.B0khR90Y.png",
    "/_astro/raven-logo-sm.BJuvMeGo.png",
    "/_astro/about.hEnt1fGP.css",
    "/_astro/index.BgSr1dwR.css",
    "/favicon.svg",
    "/js/jquery-3.5.1.min.js",
    "/js/owl.carousel.min.js",
    "/styles/owl.carousel.css",
    "/_astro/Welcome.astro_astro_type_script_index_0_lang.Clswnmys.js",
    "/testimonials/headshot_adam_conde.jpg",
    "/testimonials/headshot_alex_walker.jpg",
    "/testimonials/headshot_bob_zat.jpg",
    "/testimonials/headshot_chelsea_coster.jpg",
    "/testimonials/headshot_glyn_beaumont.jpg",
    "/testimonials/headshot_greg_lamb.jpg",
    "/testimonials/headshot_joan_davis.jpg",
    "/testimonials/headshot_john_haslam.jpg",
    "/testimonials/headshot_matt_defauw.jpg",
    "/testimonials/headshot_phillippa_kassover.jpg",
    "/testimonials/headshot_scott_maxon.jpg",
    "/testimonials/headshot_stephan_reese.jpg",
    "/testimonials/headshot_tim_polack.jpg",
    "/testimonials/README.md",
  ],
  buildFormat: "directory",
  checkOrigin: true,
  serverIslandNameMap: [],
  key: "v1PypH+Bw6Yuj63OebEOfndRiOdUeNukg35skqzPmmY=",
});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
