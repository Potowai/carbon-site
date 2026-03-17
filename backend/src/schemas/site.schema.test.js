const { siteCreateSchema, estimationSchema } = require('./site.schema');

describe('site schema', () => {
  it('accepts a valid site payload', () => {
    const result = siteCreateSchema.safeParse({
      name: 'Chantier Alpha',
      address: '12 Rue de la Paix',
      surface: 200,
      type: 'bureau',
    });

    expect(result.success).toBe(true);
  });

  it('rejects too short names', () => {
    const result = siteCreateSchema.safeParse({
      name: 'AB',
      address: '12 Rue de la Paix',
      surface: 200,
      type: 'bureau',
    });

    expect(result.success).toBe(false);
  });

  it('rejects invalid site types', () => {
    const result = siteCreateSchema.safeParse({
      name: 'Chantier Alpha',
      address: '12 Rue de la Paix',
      surface: 200,
      type: 'commerce',
    });

    expect(result.success).toBe(false);
  });
});

describe('estimation schema', () => {
  it('accepts valid estimation metrics', () => {
    const result = estimationSchema.safeParse({
      concreteVolume: 10,
      steelWeight: 2,
      woodVolume: 1,
      energyUsage: 100,
    });

    expect(result.success).toBe(true);
  });

  it('rejects negative values', () => {
    const result = estimationSchema.safeParse({
      concreteVolume: -1,
      steelWeight: 2,
      woodVolume: 1,
      energyUsage: 100,
    });

    expect(result.success).toBe(false);
  });
});
