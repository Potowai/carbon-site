

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
  // Use local backend for development
  apiUrl: 'http://localhost:3000/api',
  configUrl: 'http://localhost:3000/api/config',
  // OpenRouter API Key - loaded from backend at runtime, never commit secrets
  openRouterApiKey: ''
};
