describe('supabase config', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    jest.restoreAllMocks();
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_ANON_KEY;
  });

  it('creates a Supabase client from environment variables', () => {
    process.env.SUPABASE_URL = 'https://example.supabase.co';
    process.env.SUPABASE_ANON_KEY = 'anon-key';

    const createClient = jest.fn().mockReturnValue({ client: true });
    jest.doMock('@supabase/supabase-js', () => ({ createClient }));

    const supabase = require('./supabase');

    expect(createClient).toHaveBeenCalledWith('https://example.supabase.co', 'anon-key');
    expect(supabase).toEqual({ client: true });
  });

  it('warns when credentials are missing', () => {
    const createClient = jest.fn().mockReturnValue({ client: true });
    jest.doMock('@supabase/supabase-js', () => ({ createClient }));
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    require('./supabase');

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Supabase credentials missing in .env')
    );
    expect(createClient).toHaveBeenCalledWith(undefined, undefined);
  });
});
