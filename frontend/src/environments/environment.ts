

declare global {
  interface ImportMeta {
    env: Record<string, string>;
  }
}

export const environment = {
  production: false,
  // Credentials are loaded from backend at runtime
  supabaseUrl: '',
  supabaseKey: '',
  // Always use deployed backend
  apiUrl: 'https://carbon-site-back.onrender.com/api',
  configUrl: 'https://carbon-site-back.onrender.com/api/config',
  // OpenRouter API Key - loaded from backend at runtime, never commit secrets
  openRouterApiKey: ''
};
