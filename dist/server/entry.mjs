import { renderers } from "./renderers.mjs";
import {
  c as createExports,
  s as serverEntrypointModule,
} from "./chunks/_@astrojs-ssr-adapter_D3O5oWJf.mjs";
import { manifest } from "./manifest_CbFMq0wo.mjs";

const serverIslandMap = new Map();

const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/about.astro.mjs");
const _page2 = () => import("./pages/api/contact.astro.mjs");
const _page3 = () => import("./pages/contact.astro.mjs");
const _page4 = () => import("./pages/projects.astro.mjs");
const _page5 = () => import("./pages/index.astro.mjs");
const pageMap = new Map([
  ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
  ["src/pages/about.astro", _page1],
  ["src/pages/api/contact.ts", _page2],
  ["src/pages/contact.astro", _page3],
  ["src/pages/projects.astro", _page4],
  ["src/pages/index.astro", _page5],
]);

const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  middleware: () => import("./_noop-middleware.mjs"),
});
const _args = {
  mode: "standalone",
  client: "file:///E:/Projects/jeffscotti.net/jeffscotti-site/dist/client/",
  server: "file:///E:/Projects/jeffscotti.net/jeffscotti-site/dist/server/",
  host: false,
  port: 4321,
  assets: "_astro",
};
const _exports = createExports(_manifest, _args);
const handler = _exports["handler"];
const startServer = _exports["startServer"];
const options = _exports["options"];
const _start = "start";
if (_start in serverEntrypointModule) {
  serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
