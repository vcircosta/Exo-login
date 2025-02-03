const { verifyToken } = require('../utils/jwtUtils');

function authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Accès refusé, token manquant" });

    const user = verifyToken(token);
    if (!user) return res.status(403).json({ message: "Token invalide" });

    req.user = user; // Attache l'utilisateur à la requête
    next();
}

module.exports = authenticateToken;
