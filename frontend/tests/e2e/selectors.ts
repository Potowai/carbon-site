/**
 * Test Selectors Reference
 * 
 * This file documents the data-testid attributes used throughout the E2E tests.
 * Add these attributes to your components to make tests more reliable.
 */

export const testSelectors = {
  // Navigation
  navigation: '[data-testid="navigation"]',
  logoLink: '[data-testid="logo-link"]',
  hamburgerMenu: '[data-testid="hamburger-menu"]',

  // Authentication
  loginButton: '[data-testid="login-button"]',
  signInButton: '[data-testid="sign-in-button"]',
  logoutButton: '[data-testid="logout-button"]',
  emailInput: '[data-testid="email-input"]',
  passwordInput: '[data-testid="password-input"]',
  submitButton: '[data-testid="submit-button"]',

  // Dashboard
  dashboardHeader: '[data-testid="dashboard-header"]',
  statCard: '[data-testid="stat-card"]',
  sitesSection: '[data-testid="sites-section"]',
  siteItem: '[data-testid="site-item"]',
  refreshButton: '[data-testid="refresh"]',

  // Site Management
  addSiteButton: '[data-testid="add-site-button"]',
  siteNameInput: '[data-testid="site-name-input"]',
  siteUrlInput: '[data-testid="site-url-input"]',
  siteDescriptionInput: '[data-testid="site-description-input"]',
  sitesForm: '[data-testid="sites-form"]',
  sitesList: '[data-testid="sites-list"]',
  editButton: '[data-testid="edit-button"]',
  deleteButton: '[data-testid="delete-button"]',

  // Modals
  modalClose: '[data-testid="modal-close"]',
  modal: '[data-testid="modal"]',
  confirmButton: '[data-testid="confirm-button"]',
  cancelButton: '[data-testid="cancel-button"]',

  // Forms
  form: '[data-testid="form"]',
  formError: '[data-testid="form-error"]',
  formSuccess: '[data-testid="form-success"]',

  // Lists
  emptyState: '[data-testid="empty-state"]',
  loadingSpinner: '[data-testid="loading-spinner"]',
  pagination: '[data-testid="pagination"]',
  pageSize: '[data-testid="page-size"]',

  // Search & Filter
  searchInput: '[data-testid="search"]',
  filterButton: '[data-testid="filter-button"]',
  filterPanel: '[data-testid="filter-panel"]',

  // Charts & Metrics
  chart: '[data-testid="chart"]',
  metric: '[data-testid="metric"]',
  metricValue: '[data-testid="metric-value"]',
  metricLabel: '[data-testid="metric-label"]',

  // Alerts
  alert: '[data-testid="alert"]',
  errorAlert: '[data-testid="error-alert"]',
  successAlert: '[data-testid="success-alert"]',
  warningAlert: '[data-testid="warning-alert"]',

  // Bulk Actions
  selectAllCheckbox: '[data-testid="select-all-checkbox"]',
  bulkActions: '[data-testid="bulk-actions"]',
  bulkDeleteButton: '[data-testid="bulk-delete-button"]',
};

/**
 * Suggested Component Instrumentation
 * 
 * Add these data-testid attributes to your components:
 */

export const componentInstrumentation = {
  // In app.component.ts
  appRoot: 'data-testid="app-root"',
  mainContent: 'data-testid="main-content"',

  // In navigation component
  navComponent: 'data-testid="navigation"',
  navLink: 'data-testid="nav-link-{route}"',

  // In dashboard component
  dashboardContainer: 'data-testid="dashboard-container"',
  statCard: 'data-testid="stat-card-{metric}"',
  chartContainer: 'data-testid="chart-{chartName}"',

  // In site list component
  siteListSection: 'data-testid="sites-list"',
  siteRow: 'data-testid="site-item-{siteId}"',
  statusBadge: 'data-testid="status-{status}"',

  // In site add/edit form
  siteForm: 'data-testid="sites-form"',
  formFields: {
    name: 'data-testid="site-name-input"',
    url: 'data-testid="site-url-input"',
    description: 'data-testid="site-description-input"',
  },

  // In modals
  confirmModal: 'data-testid="confirm-modal"',
  modalContent: 'data-testid="modal-content"',

  // In data tables
  tableHeader: 'data-testid="table-header"',
  tableBody: 'data-testid="table-body"',
  tableRow: 'data-testid="table-row-{rowId}"',
  tableCell: 'data-testid="table-cell-{columnId}"',
};

/**
 * Example: How to add data-testid to Angular component
 * 
 * In your component template:
 * 
 * <div data-testid="component-name">
 *   <button data-testid="submit-button">Submit</button>
 *   <input data-testid="site-name-input" />
 * </div>
 * 
 * In your component tests:
 * 
 * const component = fixture.debugElement.query(By.css('[data-testid="component-name"]'));
 * expect(component).toBeDefined();
 */
