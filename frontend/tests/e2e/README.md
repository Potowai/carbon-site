# E2E Tests with Playwright

This directory contains end-to-end (E2E) tests for the Carbonsite application using Playwright.

## Installation

Playwright is already installed as a dev dependency. If you need to install it manually:

```bash
npm install -D @playwright/test
```

## Project Structure

```
tests/e2e/
├── fixtures.ts                    # Shared test fixtures and helper functions
├── home.spec.ts                   # Home page tests
├── auth.spec.ts                   # Authentication tests
├── dashboard.spec.ts              # Dashboard page tests
├── site-management.spec.ts        # Site CRUD operations tests
├── api.spec.ts                    # API integration tests
└── performance-accessibility.spec.ts  # Performance and accessibility tests
```

## Running Tests

### Run all E2E tests
```bash
npm run e2e
```

### Run tests with UI mode (interactive)
```bash
npm run e2e:ui
```

### Run tests in debug mode
```bash
npm run e2e:debug
```

### Run tests in headed mode (browser visible)
```bash
npm run e2e:headed
```

### Run tests for specific browsers
```bash
# Chrome only
npm run e2e:chrome

# Firefox only
npm run e2e:firefox

# Safari only
npm run e2e:webkit
```

### Record new tests
```bash
npm run e2e:codegen
```

## Environment Variables

Configure the following environment variables for tests:

```bash
# .env.test or in your CI/CD pipeline
TEST_USER_TOKEN=<jwt-token-for-test-user>
TEST_USER_EMAIL=test@example.com
TEST_USER_PASSWORD=password123
```

## Test Coverage

### Home Page Tests (`home.spec.ts`)
- Page loads correctly
- Navigation menu visible
- Login button visible for unauthenticated users
- Logo navigation works
- Hero section with CTA visible
- Responsive design (mobile, tablet, desktop)
- Page loads within performance budget
- Accessibility features present

### Authentication Tests (`auth.spec.ts`)
- Unauthenticated users redirected from protected routes
- Login prompt displayed
- Authentication state persisted
- Logout functionality
- CSRF/security headers present
- XSS attack prevention
- Password requirements enforced
- Multiple login attempts handled

### Dashboard Tests (`dashboard.spec.ts`)
- Dashboard loads when authenticated
- Global statistics displayed
- Carbon emission charts visible
- User sites list displayed
- Navigation to add-site page available
- Filters/search functionality
- Responsive mobile design
- Performance metrics loaded
- Data refresh functionality
- Date range selectors (if applicable)

### Site Management Tests (`site-management.spec.ts`)
- Add-site page loads
- Site information form displayed
- Form validation works
- Valid form submission succeeds
- Sites list displays user sites
- View site details
- Edit site information
- Delete site with confirmation
- Network error handling
- Pagination support
- Site status indicators
- Bulk actions (if applicable)

### API Integration Tests (`api.spec.ts`)
- API calls from dashboard fetch sites
- API errors handled gracefully
- Site creation via API succeeds
- Proper Authorization headers sent
- API response data validation
- Rate limiting handled
- Failed requests retried
- Timeouts handled gracefully
- Response caching
- Special character encoding
- Different response formats

### Performance & Accessibility Tests (`performance-accessibility.spec.ts`)
- Page load time < 3 seconds
- Dashboard load time < 5 seconds
- Proper page title and meta description
- Correct heading hierarchy
- Sufficient color contrast
- Keyboard navigation support
- Alt text for images
- ARIA labels present
- Screen reader compatibility
- Skip navigation links
- Zoom support
- No JavaScript errors
- Efficient bundle sizes
- Proper font loading
- No memory leaks
- Print styles
- Viewport meta tag

## Test Fixtures

The `fixtures.ts` file provides:

### Custom Test Function
```typescript
import { test, expect } from './fixtures';

test('my test', async ({ page, authenticatedPage }) => {
  // Your test code
});
```

### Helper Functions
- `loginWithCredentials()` - Login with email/password
- `navigateTo()` - Navigate to specific path
- `waitForElement()` - Wait for element visibility
- `fillAndSubmitForm()` - Fill form and submit
- `isAuthenticated()` - Check if user is logged in
- `closeModal()` - Close modal dialogs

## Debugging

### View Test Report
```bash
npm run e2e
# Then open the HTML report (if generated)
```

### Debug Specific Test
```bash
npx playwright test path/to/test.spec.ts --debug
```

### Record Video
Tests are configured to record video on failures. Videos are saved in:
```
test-results/
```

### Take Screenshots
Tests are configured to take screenshots on failures:
```
test-results/
```

## CI/CD Integration

### GitHub Actions Example
```yaml
name: E2E Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run e2e
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## Best Practices

1. **Use data-testid attributes**: Add `data-testid` attributes to important elements for reliable selection
2. **Avoid hardcoding selectors**: Use semantic HTML and ARIA attributes
3. **Test user workflows**: Focus on complete user journeys rather than implementation details
4. **Use fixtures for setup**: Share common setup code using test fixtures
5. **Handle async operations**: Always wait for network requests and DOM updates
6. **Use meaningful assertions**: Make assertions clear about what you're testing
7. **Isolate tests**: Each test should be independent and not rely on other tests
8. **Clean environment**: Reset state between tests using beforeEach/afterEach

## Performance Targets

- Home page load: < 3 seconds
- Dashboard load: < 5 seconds
- Site add form: < 2 seconds
- API response time: < 1 second

## Accessibility Standards

Tests validate compliance with:
- WCAG 2.1 Level AA
- RGAA (French accessibility standard)
- Section 508 (US standard)

## Troubleshooting

### Tests timeout
- Check if the dev server is running with `npm start`
- Verify network connectivity
- Increase timeout in `playwright.config.ts`

### Selectors not found
- Run tests in UI mode to inspect elements: `npm run e2e:ui`
- Add `data-testid` attributes to components
- Use more stable selectors (avoid indexes)

### Authentication fails
- Verify `TEST_USER_TOKEN` is set in environment
- Check token expiration
- Verify auth service is working in dev environment

### Flaky tests
- Add sufficient waits with `waitForLoadState()`
- Check for race conditions in async code
- Use `waitForSelector()` with appropriate timeouts
- Avoid fixed delays; use proper wait conditions

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Debugging](https://playwright.dev/docs/debug)
- [CI/CD Integration](https://playwright.dev/docs/ci)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
