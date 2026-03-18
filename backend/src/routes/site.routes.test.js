jest.mock('../controllers/site.controller', () => ({
  getAllSites: jest.fn(),
  getMySites: jest.fn(),
  getSiteById: jest.fn(),
  createSite: jest.fn(),
  estimateCarbon: jest.fn(),
  getGlobalDashboard: jest.fn(),
}));

jest.mock('../middlewares/auth', () => (req, _res, next) => {
  req.auth = { userId: 'test-user' };
  next();
});


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

  it('registers GET /me with getMySites controller (auth protected)', () => {
    const route = findRoute('/me', 'get');

    expect(route).toBeDefined();
    expect(route.route.stack.length).toBeGreaterThanOrEqual(2);
    expect(route.route.stack[1].handle).toBe(siteController.getMySites);
  });

  it('registers GET /:id with getSiteById controller (auth protected)', () => {
    const route = findRoute('/:id', 'get');

    expect(route).toBeDefined();
    expect(route.route.stack.length).toBeGreaterThanOrEqual(2);
    expect(route.route.stack[1].handle).toBe(siteController.getSiteById);
  });
});
