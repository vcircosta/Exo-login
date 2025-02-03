const { generateToken } = require('../utils/jwtUtils');

async function register(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    // Simuler un utilisateur enregistré (à remplacer par une base de données)
    const user = { id: 1, username };

    const token = generateToken(user);
    res.status(201).json({ message: "Utilisateur enregistré", token });
}

async function login(req, res) {
    const { username, password } = req.body;

    // Vérification simple (à remplacer par une base de données)
    if (username !== "elise" || password !== "password") {
        return res.status(401).json({ message: "Identifiants incorrects" });
    }

    const user = { id: 1, username };
    const token = generateToken(user);
    res.json({ message: "Connexion réussie", token });
}

module.exports = { register, login };
