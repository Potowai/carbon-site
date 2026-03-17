jest.mock('../controllers/site.controller', () => ({
  getAllSites: jest.fn(),
  createSite: jest.fn(),
  estimateCarbon: jest.fn(),
  getGlobalDashboard: jest.fn(),
}));


const router = require('./site.routes');
const siteController = require('../controllers/site.controller');

const findRoute = (path, method) =>
  router.stack.find(
    (layer) => layer.route && layer.route.path === path && layer.route.methods[method]
  );

describe('site routes', () => {
  it('registers GET / with getAllSites controller', () => {
    const route = findRoute('/', 'get');

    expect(route).toBeDefined();
    expect(route.route.stack[0].handle).toBe(siteController.getAllSites);
  });

  it('registers POST / with createSite controller', () => {
    const route = findRoute('/', 'post');

    expect(route).toBeDefined();
    expect(route.route.stack[0].handle).toBe(siteController.createSite);
  });

  it('registers POST /estimate with estimateCarbon controller', () => {
    const route = findRoute('/estimate', 'post');

    expect(route).toBeDefined();
    expect(route.route.stack[0].handle).toBe(siteController.estimateCarbon);
  });

  it('registers GET /global-dashboard with getGlobalDashboard controller', () => {
    const route = findRoute('/global-dashboard', 'get');

    expect(route).toBeDefined();
    expect(route.route.stack[0].handle).toBe(siteController.getGlobalDashboard);
  });
});
