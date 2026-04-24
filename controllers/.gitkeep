const videojuegosService = require('../services/videojuegos.service');

const getVideojuegos = async (req, res) => {
    try {
        const data = await videojuegosService.getVideojuegos();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getVideojuegos
};