// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
import fetch from 'node-fetch';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

const proxyMap = {
  'search': process.env.TEAM_SEARCH || 'http://localhost:7000'
};
export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: false,
  watch: !hmr,

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  // appIndex: 'demo/index.html',

  /** Confgure bare import resolve plugin */
  // nodeResolve: {
  //   exportConditions: ['browser', 'development']
  // },

  plugins: [
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
  ],

  // See documentation for all available options
  port: 2000,
  middleware: [
    async function rewriteIndex(context, next) {
      async function _proxyFetch(url, context) {
        const response = await fetch(url);
        const text = await response.text();
        context.res.writeHead(response.status, { 'Content-Type': response.headers.get('content-type')});
        context.res.write(text);
        context.res.end();
      }
      const url = context.request.url;
      switch (true) {
        case /^\/search\//.test(url):
          await _proxyFetch(`${proxyMap['search']}/${url.split('/search/')[1]}`, context);
          break;
      }
      return next();
    },
  ],
});
