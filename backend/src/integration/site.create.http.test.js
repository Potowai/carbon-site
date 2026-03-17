jest.mock('../config/supabase', () => ({
  from: jest.fn(),
}));

jest.mock('../middlewares/auth', () =>
  jest.fn((req, _res, next) => {
    req.auth = { userId: 'user-test', email: 'test@example.com' };
    next();
  })
);

const request = require('supertest');
const express = require('express');
const router = require('../routes/site.routes');
const supabase = require('../config/supabase');

describe('POST /api/sites (HTTP)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('creates a site and returns 201', async () => {
    const createdSite = {
      id: 'site-1',
      nom: 'Chantier HTTP',
      surface_m2: 100,
      nb_employes: 12,
      parking_sous_sol: 2,
      parking_sous_dalle: 1,
      parking_aerien: 3,
      total_carbon_tons: 55,
      user_id: 'user-test',
    };

    const single = jest.fn().mockResolvedValue({ data: createdSite, error: null });
    const select = jest.fn().mockReturnValue({ single });
    const insert = jest.fn().mockReturnValue({ select });
    supabase.from.mockReturnValue({ insert });

    const app = express();
    app.use(express.json());
    app.use('/api/sites', router);

    const payload = {
      nom: 'Chantier HTTP',
      surface_m2: '100',
      nb_employes: '12',
      parking_sous_sol: '2',
      parking_sous_dalle: '1',
      parking_aerien: '3',
    };

    const res = await request(app)
      .post('/api/sites')
      .set('Authorization', 'Bearer test-token')
      .send(payload);

    expect(res.status).toBe(201);
    expect(res.body).toEqual({ success: true, data: createdSite });
    expect(supabase.from).toHaveBeenCalledWith('sites');
    expect(insert).toHaveBeenCalledWith([
      expect.objectContaining({
        nom: 'Chantier HTTP',
        surface_m2: 100,
        nb_employes: 12,
        parking_sous_sol: 2,
        parking_sous_dalle: 1,
        parking_aerien: 3,
        user_id: 'user-test',
      }),
    ]);
  });
});

