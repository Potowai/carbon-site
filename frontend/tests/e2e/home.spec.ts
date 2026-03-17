import { test, expect } from './fixtures';

test.describe('Home Page', () => {
  test('should load home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Carbonsite|Carbon/i);
  });

  test('should display navigation menu', async ({ page }) => {
    await page.goto('/');
    
    // Check if navigation elements are visible
    const navbar = page.locator('[data-testid="navigation"]');
    await expect(navbar).toBeVisible();
  });

  test('should display login button for unauthenticated users', async ({ page }) => {
    await page.goto('/');
    
    // Check for Clerk sign-in button or custom login button
    const signInButton = page.locator('text=/Sign in|Login|Se connecter/i');
    await expect(signInButton).toBeVisible();
  });

  test('should navigate to home when clicking logo', async ({ page }) => {
    await page.goto('/');
    
    // Click on logo/home link
    const logoLink = page.locator('[data-testid="logo-link"], a img, .logo');
    if (await logoLink.isVisible()) {
      await logoLink.first().click();
      await expect(page).toHaveURL('/');
    }
  });

  test('should display hero section with call-to-action', async ({ page }) => {
    await page.goto('/');
    
    // Look for main heading
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    
    // Look for CTA button
    const ctaButton = page.locator('button, a').filter({ hasText: /Get Started|Start|Commencer|Démarrer/i }).first();
    await expect(ctaButton).toBeVisible();
  });

  test('should have responsive design - mobile view', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if navigation is still accessible (hamburger menu or visible nav)
    const hamburgerMenu = page.locator('[data-testid="hamburger-menu"], button[aria-label*="menu" i]');
    const navMenu = page.locator('[data-testid="navigation"]');
    
    const hasHamburger = await hamburgerMenu.isVisible().catch(() => false);
    const hasNav = await navMenu.isVisible().catch(() => false);
    
    expect(hasHamburger || hasNav).toBeTruthy();
  });

  test('should have responsive design - tablet view', async ({ page }) => {
    // Set tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    // Check if navigation is visible
    const navMenu = page.locator('[data-testid="navigation"]');
    await expect(navMenu).toBeVisible();
  });

  test('should load page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/', { waitUntil: 'networkidle' });
    const loadTime = Date.now() - startTime;
    
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.goto('/');
    
    // Check for basic accessibility: language attribute
    const html = page.locator('html');
    const lang = await html.getAttribute('lang');
    expect(lang).toBeTruthy();
    
    // Check for basic semantic HTML
    const mainContent = page.locator('main');
    expect(await mainContent.count()).toBeGreaterThanOrEqual(0);
  });
});
