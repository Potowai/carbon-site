jest.mock('../config/supabase', () => ({
  from: jest.fn(),
}));

const supabase = require('../config/supabase');
const {
  getAllSites,
  createSite,
  estimateCarbon,
  getGlobalDashboard,
} = require('./site.controller');

const createRes = () => ({
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
});

describe('site.controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('getAllSites', () => {
    it('returns all sites ordered by creation date', async () => {
      const sites = [{ id: 1, nom: 'Site A' }];
      const order = jest.fn().mockResolvedValue({ data: sites, error: null });
      const select = jest.fn().mockReturnValue({ order });
      supabase.from.mockReturnValue({ select });

      const req = {};
      const res = createRes();
      const next = jest.fn();

      await getAllSites(req, res, next);

      expect(supabase.from).toHaveBeenCalledWith('sites');
      expect(select).toHaveBeenCalledWith('*');
      expect(order).toHaveBeenCalledWith('created_at', { ascending: false });
      expect(res.json).toHaveBeenCalledWith({ success: true, data: sites });
      expect(next).not.toHaveBeenCalled();
    });

    it('forwards database errors to next', async () => {
      const dbError = new Error('db failed');
      const order = jest.fn().mockResolvedValue({ data: null, error: dbError });
      const select = jest.fn().mockReturnValue({ order });
      supabase.from.mockReturnValue({ select });

      const req = {};
      const res = createRes();
      const next = jest.fn();

      await getAllSites(req, res, next);

      expect(next).toHaveBeenCalledWith(dbError);
    });
  });

  describe('createSite', () => {
    it('creates a site with computed carbon estimate', async () => {
      const createdSite = { id: 42, nom: 'Nouveau Site' };
      const single = jest.fn().mockResolvedValue({ data: createdSite, error: null });
      const select = jest.fn().mockReturnValue({ single });
      const insert = jest.fn().mockReturnValue({ select });
      supabase.from.mockReturnValue({ insert });

      const req = {
        body: {
          nom: 'Nouveau Site',
          surface_m2: '100',
          nb_employes: '12',
          parking_sous_sol: '2',
          parking_sous_dalle: '1',
          parking_aerien: '3',
        },
        auth: {
          userId: 'user-1',
        },
      };
      const res = createRes();
      const next = jest.fn();

      await createSite(req, res, next);

      expect(supabase.from).toHaveBeenCalledWith('sites');
      expect(insert).toHaveBeenCalledWith([
        expect.objectContaining({
          nom: 'Nouveau Site',
          surface_m2: 100,
          nb_employes: 12,
          parking_sous_sol: 2,
          parking_sous_dalle: 1,
          parking_aerien: 3,
          total_carbon_tons: 55,
          user_id: 'user-1',
        }),
      ]);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: createdSite });
      expect(next).not.toHaveBeenCalled();
    });

    it('forwards creation errors to next', async () => {
      const dbError = new Error('insert failed');
      const single = jest.fn().mockResolvedValue({ data: null, error: dbError });
      const select = jest.fn().mockReturnValue({ single });
      const insert = jest.fn().mockReturnValue({ select });
      supabase.from.mockReturnValue({ insert });

      const req = {
        body: {
          nom: 'Bad Site',
          surface_m2: '10',
          nb_employes: '1',
          parking_sous_sol: '0',
          parking_sous_dalle: '0',
          parking_aerien: '0',
        },
        auth: {
          userId: 'user-2',
        },
      };
      const res = createRes();
      const next = jest.fn();

      await createSite(req, res, next);

      expect(next).toHaveBeenCalledWith(dbError);
    });
  });

  describe('estimateCarbon', () => {
    it('returns carbon estimation and breakdown', async () => {
      const req = {
        body: {
          concreteVolume: 10,
          steelWeight: 2,
          woodVolume: 1,
          energyUsage: 100,
        },
      };
      const res = createRes();
      const next = jest.fn();

      await estimateCarbon(req, res, next);

      expect(res.json).toHaveBeenCalledWith({
        success: true,
        estimation: {
          total_kg: 6305,
          total_tons: 6.305,
          breakdown: {
            concrete: 2000,
            steel: 5000,
            wood: -700,
            energy: 5,
          },
        },
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('forwards unexpected errors to next', async () => {
      const req = {};
      const res = createRes();
      const next = jest.fn();

      await estimateCarbon(req, res, next);

      expect(next).toHaveBeenCalled();
    });
  });

  describe('getGlobalDashboard', () => {
    it('returns computed stats even when there are no sites', async () => {
      const sitesSelect = jest.fn().mockResolvedValue({ data: [], error: null });
      const neq = jest.fn().mockResolvedValue({});
      const del = jest.fn().mockReturnValue({ neq });
      const insert = jest.fn().mockResolvedValue({});

      supabase.from.mockImplementation((table) => {
        if (table === 'sites') return { select: sitesSelect };
        if (table === 'dashboard_stats') return { delete: del, insert };
        return { select: jest.fn().mockResolvedValue({ data: [], error: null }) };
      });

      const req = {};
      const res = createRes();
      const next = jest.fn();

      await getGlobalDashboard(req, res, next);

      expect(supabase.from).toHaveBeenCalledWith('sites');
      expect(sitesSelect).toHaveBeenCalledWith('*');
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          success: true,
          data: expect.objectContaining({
            active_sites: 0,
            total_footprint: 0,
          }),
        })
      );
      expect(next).not.toHaveBeenCalled();
    });

    it('forwards sites query errors to next', async () => {
      const dbError = { code: 'DB_FAIL', message: 'query failed' };
      const sitesSelect = jest.fn().mockResolvedValue({ data: null, error: dbError });
      supabase.from.mockImplementation((table) => {
        if (table === 'sites') return { select: sitesSelect };
        return { select: jest.fn().mockResolvedValue({ data: [], error: null }) };
      });

      const req = {};
      const res = createRes();
      const next = jest.fn();

      await getGlobalDashboard(req, res, next);

      expect(next).toHaveBeenCalledWith(dbError);
    });
  });
});
