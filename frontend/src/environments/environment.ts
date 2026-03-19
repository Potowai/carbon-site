

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
  // OpenRouter API Key - charger depuis .env.local avec: OPENROUTER_API_KEY=votre_token
  // Le token ne doit JAMAIS être commité !
  openRouterApiKey: process.env['OPENROUTER_API_KEY'] || ''
};
