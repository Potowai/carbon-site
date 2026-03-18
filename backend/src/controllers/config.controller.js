/**
 * Get public configuration for frontend
 * This endpoint serves non-sensitive configuration that the frontend needs,
 * such as the Supabase URL and public anon key
 */
const getConfig = async (req, res, next) => {
  try {
    const config = {
      supabaseUrl: process.env.SUPABASE_URL || '',
      supabaseKey: process.env.SUPABASE_ANON_KEY || '',
      apiUrl: process.env.PUBLIC_API_URL || 'https://carbon-site-back.netlify.app/api',
    };

    // Validate that required config is present
    if (!config.supabaseUrl || !config.supabaseKey) {
      return res.status(500).json({
        success: false,
        message: 'Configuration incomplete: Missing Supabase credentials',
        data: null,
      });
    }

    res.json({
      success: true,
      data: config,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getConfig,
};
