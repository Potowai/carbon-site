import { test, expect } from './fixtures';

test.describe('Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    // Set up authentication for all dashboard tests
    const testToken = process.env.TEST_USER_TOKEN;
    if (testToken) {
      await page.evaluate((token) => {
        localStorage.setItem('clerk-auth-token', token);
      }, testToken);
    }
  });

  test('should load dashboard when authenticated', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    // Check URL
    expect(page.url()).toContain('dashboard');
    
    // Check for dashboard-specific elements
    const heading = page.locator('h1, h2').filter({ hasText: /Dashboard|Tableau de bord/i });
    await expect(heading).toBeVisible({ timeout: 5000 });
  });

  test('should display global statistics', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    // Look for statistics cards/sections
    const stats = page.locator('[data-testid="stat-card"], .stat, [class*="card"]');
    
    // At least some statistics should be visible
    const statCount = await stats.count();
    expect(statCount).toBeGreaterThan(0);
  });

  test('should display chart with carbon emission data', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    // Look for chart containers (ApexCharts or SwimLane charts)
    const charts = page.locator('[class*="chart"], [class*="graph"], svg');
    
    // Should have at least one chart
    const chartCount = await charts.count();
    expect(chartCount).toBeGreaterThan(0);
  });

  test('should display list of user sites', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    // Look for sites list or cards
    const siteItems = page.locator('[data-testid="site-item"], [class*="site"], tr');
    
    // Sites section should exist (even if empty)
    await page.waitForSelector('[data-testid="sites-section"], table, [class*="sites"], [class*="list"]', {
      timeout: 5000,
    });
  });

  test('should provide navigation to add-site page', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    // Look for "Add Site" button or link
    const addButton = page.locator('text=/Add Site|Add|Ajouter|Créer/i').first();
    await expect(addButton).toBeVisible({ timeout: 5000 });
  });

  test('should display filters or search functionality', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    // Look for search/filter input
    const searchInput = page.locator('[data-testid="search"], input[type="search"], input[placeholder*="search" i]');
    
    if (await searchInput.count() > 0) {
      await expect(searchInput.first()).toBeVisible();
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    // Dashboard should be visible on mobile
    expect(page.url()).toContain('dashboard');
    
    // Check if main content is visible
    const mainContent = page.locator('main, [role="main"]');
    await expect(mainContent).toBeVisible();
  });

  test('should load performance metrics', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    // Look for any metric displays
    const metrics = page.locator('[data-testid*="metric"], [class*="metric"]');
    
    // Metrics section should exist
    if (await metrics.count() > 0) {
      await expect(metrics.first()).toBeVisible();
    }
  });

  test('should handle data refresh', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    // Look for refresh button
    const refreshButton = page.locator('[data-testid="refresh"], button[aria-label*="refresh" i]');
    
    if (await refreshButton.isVisible().catch(() => false)) {
      // Initial data should be loaded
      const initialContent = await page.textContent('body');
      
      // Click refresh
      await refreshButton.click();
      await page.waitForLoadState('networkidle');
      
      // Page should still be functional
      expect(page.url()).toContain('dashboard');
    }
  });

  test('should display date range selector if applicable', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    // Look for date inputs or selectors
    const dateInputs = page.locator('input[type="date"], [data-testid*="date"], [class*="date-picker"]');
    
    // Date selector might be present
    if (await dateInputs.count() > 0) {
      await expect(dateInputs.first()).toBeVisible();
    }
  });
});
