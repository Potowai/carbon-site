const errorHandler = require('./error');

const createRes = () => ({
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
});

describe('error middleware', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
    delete process.env.NODE_ENV;
  });

  it('returns fallback status and message outside development', () => {
    process.env.NODE_ENV = 'production';

    const err = new Error();
    err.stack = 'stack-trace';

    const req = {};
    const res = createRes();
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      status: 500,
      message: 'Internal Server Error',
      stack: undefined,
    });
  });

  it('returns custom status and includes stack in development', () => {
    process.env.NODE_ENV = 'development';

    const err = new Error('Bad Request');
    err.statusCode = 400;
    err.stack = 'stack-trace';

    const req = {};
    const res = createRes();
    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      status: 400,
      message: 'Bad Request',
      stack: 'stack-trace',
    });
  });
});
