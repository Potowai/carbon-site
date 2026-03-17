const supabase = require('../config/supabase');

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];
  
  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      console.error('Supabase Auth Error:', error?.message);
      return res.status(401).json({ 
        message: 'Unauthorized: Invalid token', 
        error: error?.message 
      });
    }

    // Pass user info to the next middleware
    req.auth = { userId: user.id, email: user.email };
    next();
  } catch (err) {
    console.error('Unexpected Auth Middleware Error:', err.message);
    res.status(500).json({ message: 'Internal Server Error during authentication' });
  }
};

module.exports = authMiddleware;
