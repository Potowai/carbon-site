jest.mock('../config/supabase', () => ({
  auth: {
    getUser: jest.fn(),
  },
}));

const supabase = require('../config/supabase');
const authMiddleware = require('./auth');

const createRes = () => ({
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
});

describe('auth middleware', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns 401 when authorization header is missing', async () => {
    const req = { headers: {} };
    const res = createRes();
    const next = jest.fn();

    await authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Authorization header missing' });
    expect(next).not.toHaveBeenCalled();
  });

  it('returns 401 when token is invalid', async () => {
    supabase.auth.getUser.mockResolvedValue({
      data: { user: null },
      error: { message: 'invalid token' },
    });

    const req = { headers: { authorization: 'Bearer bad-token' } };
    const res = createRes();
    const next = jest.fn();

    await authMiddleware(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Unauthorized: Invalid token',
      error: 'invalid token',
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('adds user payload and calls next for valid token', async () => {
    supabase.auth.getUser.mockResolvedValue({
      data: { user: { id: 'user-123', email: 'dev@example.com' } },
      error: null,
    });

    const req = { headers: { authorization: 'Bearer good-token' } };
    const res = createRes();
    const next = jest.fn();

    await authMiddleware(req, res, next);

    expect(req.auth).toEqual({ userId: 'user-123', email: 'dev@example.com' });
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });
});
