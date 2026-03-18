import { test, devices } from '@playwright/test';

test.describe('PWA Screenshots', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200');
    // Wait for app to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  test('Desktop dashboard screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Navigate to dashboard
    await page.goto('http://localhost:4200/dashboard');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    
    // Take screenshot
    await page.screenshot({
      path: 'src/assets/screenshots/desktop-1.png',
      fullPage: false
    });
  });

  test('Desktop projects screenshot', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Navigate to projects
    await page.goto('http://localhost:4200/projects');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    
    // Take screenshot
    await page.screenshot({
      path: 'src/assets/screenshots/desktop-2.png',
      fullPage: false
    });
  });

  test('Mobile dashboard screenshot', async ({ page }) => {
    // Use mobile device viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Navigate to dashboard
    await page.goto('http://localhost:4200/dashboard');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    
    // Take screenshot
    await page.screenshot({
      path: 'src/assets/screenshots/mobile-1.png',
      fullPage: false
    });
  });

  test('Mobile projects screenshot', async ({ page }) => {
    // Use mobile device viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Navigate to projects
    await page.goto('http://localhost:4200/projects');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    
    // Take screenshot
    await page.screenshot({
      path: 'src/assets/screenshots/mobile-2.png',
      fullPage: false
    });
  });
});
