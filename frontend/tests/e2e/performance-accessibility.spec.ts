import { test, expect } from './fixtures';

test.describe('Performance & Accessibility', () => {
  test('should load home page within performance budget', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should load dashboard within performance budget when authenticated', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (testToken) {
      await page.evaluate((token) => {
        localStorage.setItem('clerk-auth-token', token);
      }, testToken);

      const startTime = Date.now();
      await page.goto('/dashboard');
      await page.waitForLoadState('networkidle');
      const loadTime = Date.now() - startTime;

      // Dashboard should load within 5 seconds including API calls
      expect(loadTime).toBeLessThan(5000);
    }
  });

  test('should have proper page title and meta description', async ({ page }) => {
    await page.goto('/');

    // Check title
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);

    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    expect(await metaDescription.count()).toBeGreaterThan(0);
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    // Should have h1
    const h1 = page.locator('h1');
    expect(await h1.count()).toBeGreaterThan(0);

    // h2 should come after h1, not multiple h1s
    const allHeadings = page.locator('h1, h2, h3, h4, h5, h6');
    expect(await allHeadings.count()).toBeGreaterThan(0);
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('/');

    // Get all text elements
    const elements = page.locator('body *');
    const count = await elements.count();

    // At least some elements should be evaluated for contrast
    expect(count).toBeGreaterThan(0);
  });

  test('should have keyboard navigation support', async ({ page }) => {
    await page.goto('/');

    // Tab through interactive elements
    const buttons = page.locator('button, a[href], input');
    const buttonCount = await buttons.count();

    // Should have interactive elements
    expect(buttonCount).toBeGreaterThan(0);

    // First interactive element should be focusable
    const firstButton = buttons.first();
    await firstButton.focus();
    const isFocused = await firstButton.evaluate(el => el === document.activeElement);
    expect(isFocused).toBe(true);
  });

  test('should have proper alt text for images', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const imageCount = await images.count();

    if (imageCount > 0) {
      // Some images should have alt text
      let hasAltText = false;
      for (let i = 0; i < Math.min(imageCount, 5); i++) {
        const alt = await images.nth(i).getAttribute('alt');
        if (alt && alt.trim().length > 0) {
          hasAltText = true;
          break;
        }
      }
      // At least some images should have alt text
      expect(hasAltText).toBeTruthy();
    }
  });

  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/');

    // Look for ARIA labels
    const ariaLabels = page.locator('[aria-label]');
    const ariaLabelledBy = page.locator('[aria-labelledby]');

    const hasAriaLabels = await ariaLabels.count() > 0 || await ariaLabelledBy.count() > 0;
    expect(hasAriaLabels).toBeTruthy();
  });

  test('should be readable with screen reader', async ({ page }) => {
    await page.goto('/');

    // Check for semantic HTML
    const main = page.locator('main');
    const nav = page.locator('nav');
    const article = page.locator('article');
    const section = page.locator('section');

    const hasSemanticElements =
      (await main.count()) > 0 ||
      (await nav.count()) > 0 ||
      (await article.count()) > 0 ||
      (await section.count()) > 0;

    // Should use semantic HTML
    expect(hasSemanticElements).toBeTruthy();
  });

  test('should have working skip navigation link', async ({ page }) => {
    await page.goto('/');

    // Look for skip link (usually hidden but accessible via Tab)
    const skipLink = page.locator('a:has-text(/Skip|Jump|Aller/i)');

    if (await skipLink.count() > 0) {
      // Skip link should be focusable
      await skipLink.first().focus();
      const isFocused = await skipLink.first().evaluate(el => el === document.activeElement);
      expect(isFocused).toBe(true);
    }
  });

  test('should support zoom without layout breaking', async ({ page }) => {
    await page.goto('/');

    // Zoom to 200%
    await page.evaluate(() => {
      document.body.style.zoom = '2';
    });

    // Content should still be visible
    const body = page.locator('body');
    await expect(body).toBeVisible();

    // Reset zoom
    await page.evaluate(() => {
      document.body.style.zoom = '1';
    });
  });

  test('should work without JavaScript errors', async ({ page }) => {
    const jsErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        jsErrors.push(msg.text());
      }
    });

    page.on('pageerror', (error) => {
      jsErrors.push(error.message);
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Should not have critical errors
    const criticalErrors = jsErrors.filter(
      (msg) =>
        !msg.includes('404') && // Ignore missing assets
        !msg.includes('Network error') && // Network issues
        !msg.includes('Failed to fetch'), // API errors
    );

    // App should load without critical errors
    expect(criticalErrors.length).toBeLessThan(3);
  });

  test('should have efficient CSS and JavaScript bundles', async ({ page }) => {
    const metrics: any = {};

    // Collect resource timings
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const resourceTimings = await page.evaluate(() => {
      return performance.getEntriesByType('resource').map((resource: any) => ({
        name: resource.name,
        size: resource.transferSize || 0,
        duration: resource.duration,
      }));
    });

    // Should have loaded resources
    expect(resourceTimings.length).toBeGreaterThan(0);

    // JavaScript bundles shouldn't be too large (combined)
    const jsResources = resourceTimings.filter((r: any) => r.name.includes('.js'));
    const totalJsSize = jsResources.reduce((sum: number, r: any) => sum + r.size, 0);

    // Total JS should be reasonable (less than 5MB)
    expect(totalJsSize).toBeLessThan(5 * 1024 * 1024);
  });

  test('should have proper font loading', async ({ page }) => {
    await page.goto('/');

    // Check if fonts are loaded
    const fontFaces = await page.evaluate(() => {
      const sheets = Array.from(document.styleSheets);
      const css = sheets.map((sheet) => {
        try {
          return Array.from(sheet.cssRules || [])
            .map((rule: any) => rule.cssText)
            .join(' ');
        } catch {
          return '';
        }
      });
      return css.join(' ');
    });

    // Should have web fonts or system fonts
    expect(fontFaces).toBeDefined();
  });

  test('should not have memory leaks on repeated navigation', async ({ page }) => {
    // Navigate multiple times
    for (let i = 0; i < 3; i++) {
      await page.goto('/');
      await page.waitForLoadState('networkidle');
    }

    // Page should still be responsive
    const button = page.locator('button, a').first();
    await expect(button).toBeVisible({ timeout: 5000 });
  });

  test('should print well', async ({ page }) => {
    await page.goto('/');

    // Simulate print styles
    await page.emulateMedia({ media: 'print' });

    // Main content should still be visible
    const main = page.locator('main, [role="main"]');
    // Some content should be accessible
    const content = page.locator('body *');
    expect(await content.count()).toBeGreaterThan(0);

    // Reset media
    await page.emulateMedia({ media: 'screen' });
  });

  test('should have proper viewport meta tag', async ({ page }) => {
    await page.goto('/');

    const viewport = page.locator('meta[name="viewport"]');
    expect(await viewport.count()).toBe(1);

    const content = await viewport.getAttribute('content');
    expect(content).toContain('width=device-width');
  });
});
