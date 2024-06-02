//codigo de la configuracion del proxy obtenido de chatgpt. 

const express = require('express');
const axios = require('axios');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/phrase', async (req, res) => {
    try {
        const response = await axios.get('https://frasedeldia.azurewebsites.net/api/phrase');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener la frase');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
