const { Sitemap } = require('@gammastream/scully-plugin-sitemap');
const { registerPlugin } = require('@scullyio/scully');

const defaultPostRenderers = [Sitemap];

const sitemapOptions = {
  urlPrefix: 'https://devops.phodal.com/',
  sitemapFilename: 'sitemap.xml',
  changeFreq: 'hourly',
  priority: [
    '1.0',
    '0.9',
    '0.8',
    '0.7',
    '0.6',
    '0.5',
    '0.4',
    '0.3',
    '0.2',
    '0.1',
    '0.0',
  ],
  ignoredRoutes: ['/404'],
};

function casePlugin(route, config) {
  return Promise.resolve([{ route: '/case-study/sample' }]);
}

function checklistsPlugin(route, config) {
  return Promise.resolve([{ route: '/checklists/opensource-release' }]);
  return Promise.resolve([{ route: '/checklists/opensource-security' }]);
}

function practisePlugin(route, config) {
  return Promise.resolve([{ route: '/practise' }]);
}

function maturiyPlugin(route, config) {
  return Promise.resolve([{ route: '/maturity/sample' }]);
}

function skilltreePlugin(route, config) {
  return Promise.resolve([{ route: '/skilltree/sample' }]);
}

const validator = async (conf) => [];
registerPlugin('router', 'case', casePlugin, validator);
registerPlugin('router', 'checklists', checklistsPlugin, validator);
registerPlugin('router', 'practise', practisePlugin, validator);
registerPlugin('router', 'maturity', maturiyPlugin, validator);
registerPlugin('router', 'skilltree', skilltreePlugin, validator);

exports.config = {
  projectRoot: './src',
  projectName: 'ledge',
  outDir: './dist/static',
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: {
      width: 1440,
      height: 1080,
    },
  },
  sitemapOptions,
  defaultPostRenderers,
  routes: {
    '/case-study/:case': {
      type: 'case',
    },
    '/checklists/:name': {
      type: 'checklists',
    },
    '/practise/:practise': {
      type: 'practise',
    },
    '/maturity/:name': {
      type: 'maturity',
    },
    '/skilltree/:skilltree': {
      type: 'skilltree',
    },
  },
};
