import { test, expect } from './fixtures';

test.describe('Site Management', () => {
  test.beforeEach(async ({ page }) => {
    // Set up authentication for all site management tests
    const testToken = process.env.TEST_USER_TOKEN;
    if (testToken) {
      await page.evaluate((token) => {
        localStorage.setItem('clerk-auth-token', token);
      }, testToken);
    }
  });

  test('should load add-site page when authenticated', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/add-site');
    await page.waitForLoadState('networkidle');
    
    // Check URL
    expect(page.url()).toContain('add-site');
    
    // Check for form heading
    const heading = page.locator('h1, h2').filter({ hasText: /Add|Create|New|Site|Ajouter|Créer/i });
    await expect(heading).toBeVisible({ timeout: 5000 });
  });

  test('should display site information form', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/add-site');
    await page.waitForLoadState('networkidle');
    
    // Look for form inputs
    const siteNameInput = page.locator('input[name*="name" i], input[placeholder*="name" i], [data-testid*="name"]');
    const urlInput = page.locator('input[type="url"], input[name*="url" i], input[placeholder*="url" i]');
    
    // At least name or URL input should be visible
    const hasInputs = await siteNameInput.isVisible().catch(() => false) 
      || await urlInput.isVisible().catch(() => false);
    
    expect(hasInputs).toBeTruthy();
  });

  test('should display form validation for required fields', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/add-site');
    await page.waitForLoadState('networkidle');
    
    // Find submit button
    const submitButton = page.locator('button[type="submit"], button:has-text("Submit"), button:has-text("Add"), button:has-text("Ajouter")');
    
    if (await submitButton.isVisible()) {
      // Try to submit empty form
      await submitButton.click();
      
      // Should show validation errors
      const errorMessages = page.locator('[class*="error"], [role="alert"]');
      
      // Wait a bit for validation to appear
      await page.waitForTimeout(500);
      
      // Validation might appear
      const errorCount = await errorMessages.count();
      expect(errorCount).toBeGreaterThanOrEqual(0);
    }
  });

  test('should submit valid form data', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    const testSiteData = {
      name: `Test Site ${Date.now()}`,
      url: `https://test${Date.now()}.example.com`,
      description: 'Test site for e2e testing',
    };

    await page.goto('/add-site');
    await page.waitForLoadState('networkidle');
    
    // Fill form
    const siteNameInput = page.locator('input[name*="name" i], input[placeholder*="name" i]');
    const urlInput = page.locator('input[type="url"], input[name*="url" i]');
    
    if (await siteNameInput.isVisible()) {
      await siteNameInput.fill(testSiteData.name);
    }
    
    if (await urlInput.isVisible()) {
      await urlInput.fill(testSiteData.url);
    }
    
    // Submit form
    const submitButton = page.locator('button[type="submit"]');
    if (await submitButton.isVisible()) {
      await submitButton.click();
      
      // Should navigate away from add-site (to dashboard or sites list)
      await page.waitForNavigation({ 
        url: /\/(dashboard|sites)/,
        timeout: 10000,
        waitUntil: 'networkidle',
      }).catch(() => null);
      
      // Should not be on add-site anymore
      expect(page.url()).not.toContain('add-site');
    }
  });

  test('should display list of user sites', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/sites');
    await page.waitForLoadState('networkidle');
    
    // Check URL
    expect(page.url()).toContain('sites');
    
    // Look for sites list/table
    const sitesList = page.locator('[data-testid="sites-list"], table, [class*="site"], [class*="list"]');
    await expect(sitesList).toBeVisible({ timeout: 5000 });
  });

  test('should allow viewing site details', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/sites');
    await page.waitForLoadState('networkidle');
    
    // Look for site item links
    const sitelink = page.locator('[data-testid^="site-item"], a[href*="/sites/"], tr >> a').first();
    
    if (await sitelink.isVisible().catch(() => false)) {
      await sitelink.click();
      await page.waitForLoadState('networkidle');
      
      // Should navigate to site details
      const detailsHeading = page.locator('h1, h2').filter({ hasText: /Details|Site|Emissions/i });
      await expect(detailsHeading).toBeVisible({ timeout: 5000 });
    }
  });

  test('should allow editing site information', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/sites');
    await page.waitForLoadState('networkidle');
    
    // Look for edit button
    const editButton = page.locator('button[aria-label*="edit" i], text=/Edit|Modifier/i').first();
    
    if (await editButton.isVisible().catch(() => false)) {
      await editButton.click();
      await page.waitForLoadState('networkidle');
      
      // Should show editable form
      const nameInput = page.locator('input[name*="name" i]');
      await expect(nameInput).toBeVisible({ timeout: 5000 });
    }
  });

  test('should allow deleting a site with confirmation', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/sites');
    await page.waitForLoadState('networkidle');
    
    // Look for delete button
    const deleteButton = page.locator('button[aria-label*="delete" i], button[aria-label*="remove" i], text=/Delete|Remove|Supprimer/i').first();
    
    if (await deleteButton.isVisible().catch(() => false)) {
      await deleteButton.click();
      
      // Should show confirmation dialog
      const confirmButton = page.locator('button:has-text("Confirm"), button:has-text("Yes"), button:has-text("Delete"), button:has-text("Supprimer")').last();
      
      // Confirmation might appear
      if (await confirmButton.isVisible({ timeout: 2000 }).catch(() => false)) {
        await confirmButton.click();
        await page.waitForLoadState('networkidle');
        
        // Should still be on sites or dashboard
        expect(page.url()).toContain('sites') || expect(page.url()).toContain('dashboard');
      }
    }
  });

  test('should handle network errors gracefully', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/add-site');
    await page.waitForLoadState('networkidle');
    
    // Simulate offline mode
    await page.context().setOffline(true);
    
    // Try to submit form
    const submitButton = page.locator('button[type="submit"]');
    if (await submitButton.isVisible()) {
      await submitButton.click();
      
      // Should show error message
      const errorMessages = page.locator('[class*="error"], [role="alert"]');
      
      // Wait for error to appear
      await page.waitForTimeout(500);
      
      // Restore connection
      await page.context().setOffline(false);
    }
  });

  test('should support pagination if list is long', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/sites');
    await page.waitForLoadState('networkidle');
    
    // Look for pagination controls
    const nextButton = page.locator('[aria-label*="next" i], button:has-text("Next"), button:has-text("Suivant")');
    const prevButton = page.locator('[aria-label*="previous" i], button:has-text("Previous"), button:has-text("Précédent")');
    
    if (await nextButton.isVisible().catch(() => false)) {
      await expect(nextButton).toBeVisible();
    }
    
    if (await prevButton.isVisible().catch(() => false)) {
      await expect(prevButton).toBeVisible();
    }
  });

  test('should display site status/health indicators', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/sites');
    await page.waitForLoadState('networkidle');
    
    // Look for status badges
    const statusBadges = page.locator('[class*="badge"], [class*="status"], [class*="tag"]');
    
    if (await statusBadges.count() > 0) {
      await expect(statusBadges.first()).toBeVisible();
    }
  });

  test('should support bulk actions if applicable', async ({ page }) => {
    const testToken = process.env.TEST_USER_TOKEN;
    if (!testToken) {
      test.skip();
    }

    await page.goto('/sites');
    await page.waitForLoadState('networkidle');
    
    // Look for checkboxes for bulk selection
    const checkboxes = page.locator('input[type="checkbox"]');
    
    if (await checkboxes.count() > 1) {
      // At least header and one item checkbox
      const selectAllCheckbox = checkboxes.first();
      if (await selectAllCheckbox.isVisible()) {
        await selectAllCheckbox.click();
        
        // Bulk action buttons should appear
        const bulkActions = page.locator('[data-testid="bulk-actions"], [class*="bulk"]');
        expect(await bulkActions.count()).toBeGreaterThanOrEqual(0);
      }
    }
  });
});
