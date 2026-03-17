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
      throw new Error('Invalid token or user not found');
    }

    // On injecte l'utilisateur dans la requête
    req.auth = { userId: user.id, email: user.email };
    next();
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized: ' + err.message });
  }
};

module.exports = authMiddleware;
